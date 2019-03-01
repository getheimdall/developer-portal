import React from 'react'
import ReactMarkdown from 'react-markdown'
import HTTPSnippet from 'httpsnippet'
import Row from './../row'
import Col from './../col'
import Card from './../card';
import FormGroup from './../form/FormGroup'
import { getFileByResource } from '../../utils/contentFile'

class Resource extends React.Component {

    state = {
        endpoint: undefined,
        snippet: undefined,
        consoleFixed: false,
        consoleAbsolute: false,
        response: undefined
    }

    componentDidMount() {
        this.loadEndpoint()
        window.onscroll = () => this.handleScroll()
    }

    handleScroll = () => {
        const markdownElement = document.getElementById('markdown')
        const consoleElement = document.getElementById('console')
        const sizeHeader = 140

        if (markdownElement && consoleElement) {
        
            const topMarkdown = markdownElement.getBoundingClientRect().top + sizeHeader
            const bottomMarkdown = markdownElement.getBoundingClientRect().bottom - sizeHeader
            const windowScroll = document.documentElement.scrollTop

            if (!this.state.consoleFixed && windowScroll > topMarkdown) {
                this.setState({ ...this.state, consoleFixed: true, consoleAbsolute: false })
            } 
    
            if (!this.state.consoleAbsolute && this.state.consoleFixed && bottomMarkdown <= consoleElement.scrollHeight) {
                this.setState({ ...this.state, consoleFixed: false, consoleAbsolute: true })
            }

            if (this.state.consoleFixed && windowScroll <= topMarkdown) {
                this.setState({ ...this.state, consoleFixed: false, consoleAbsolute: false })
            }
        } else {
            this.setState({ ...this.state, consoleFixed: false, consoleAbsolute: false })
        }
    }

    loadEndpoint = async () => {
        const { environment, file } = this.props

        getFileByResource(environment, file).then(result => {
            const endpoint = result.default
            console.log(endpoint)
            const snippet = new HTTPSnippet({
                method: endpoint.verb,
                url: `http://localhost:8080/api${endpoint.path}`
            })
            this.setState({ ...this.state, endpoint, snippet })
        })
    }



    render() {

        const { endpoint } = this.state

        if (!endpoint) {
            return (
                <Row>

                </Row>
            )
        }

        return (
            <Row className="endpoint">
                <Col g={8} m={8} id="markdown">
                    <Row>
                        <Col>
                            <Card>
                                <ReactMarkdown source={endpoint.bodyContent} escapeHtml={false}/>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col g={4} m={4} className={`console ${this.state.consoleFixed ? 'fixed' : ''} ${this.state.consoleAbsolute ? 'absolute' : ''}`} id="console">
                    <Row>
                        <Col>
                            <Card title="Console" className="form" >
                                <FormGroup className="form__form-group">
                                    <label className="form__label">Environments</label>
                                    <select className="form__input" autoFocus>
                                        <option>http://localhost:8080</option>
                                    </select>
                                    <span className="form-validation" />
                                </FormGroup>
                                <FormGroup className="form__form-group">
                                    <label className="form__label">Language</label>
                                    <select className="form__input" autoFocus>
                                        <option>cURL</option>
                                        <option>GO</option>
                                        <option>Java</option>
                                    </select>
                                    <span className="form-validation" />
                                </FormGroup>
                                <pre>
                                    { 
                                        this.state.snippet && 
                                        <code>{this.state.snippet.convert('shell', { indent: false })}</code>
                                    }
                                </pre>
                            </Card>
                        </Col>
                        { 
                            this.state.response && 
                            <Col>
                                <Card title="Response">
                                    <p>Response from status</p>
                                </Card>
                            </Col>
                        }
                    </Row>
                </Col>
            </Row>
        )
    }
}

Resource.defaultProps = {
    environment: 'Environments',
    file: 'GET-LIST.json'
}

export default Resource