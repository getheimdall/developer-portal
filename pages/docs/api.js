import React from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import Prism from 'prismjs/components/prism-core'
import { toast } from 'react-toastify'

import Page from './../../components/page'
import SectionPage from './../../components/section/SectionPage'
import Row from './../../components/row'
import Col from './../../components/col'
import PanelTab from '../../components/panelTab'
import { getApi, clearApi } from '../../connectors/actions/api'
import Endpoint from './../../components/endpoint'
import Card from './../../components/card'
import LoadingEndpoints from '../../components/endpoint/loadingEndpoints'
import Modal from '../../components/modal'
import FormGroup from '../../components/form/FormGroup'
import { sendRequestCustom } from '../../utils/http'

import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-javascript'

class Api extends React.Component {

    static getInitialProps = async ({ query }) => {
        return { resource: query.api }
    }

    state = {
        resource: undefined,
        topics: undefined,
        sectionLeftAbsolute: false,
        setIntervalId: undefined,
        showEndpoints: false,
        modalSetttings: false,
        modalResponse: false,
        responseStatus: 0,
        responseRequest: '',
        environment: '',
        clientId: '',
        accessToken: ''
    }

    componentDidMount() {
        this.props.dispatch(getApi())
        this.loadResource().then(resource => {
            this.setState({ ...this.state, resource })
        })
    }

    componentWillUnmount() {
        this.props.dispatch(clearApi())
        clearInterval(this.state.setIntervalId)
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.resource !== this.state.resource) {
            this.loadTopics(nextState.resource).then(topics => {
                this.setState({ ...this.state, topics })
            })
        }
    }

    loadResource = async () => {
        const res = await fetch(`/static/content/resources/${this.props.resource}/_index.json`)
        return await res.json()
    }

    loadTopics = async resource => {
        const { topics } = resource
        const topicsResult = []

        topics.forEach(topic => {
            fetch(`/${resource.dir}/${topic.file}.json`).then(topicJson => {
                topicJson.json().then(result => {
                    topicsResult.push(result)
                    this.forceUpdate()
                })
            })
        })

        return topicsResult
    }

    sortByOrder = (a, b) => {
        return a.order - b.order
    }

    createTabsContentByVerb = verb => {
        const links = this.state.resource.endpoints.filter(endpoint => endpoint.verb === verb).map(endpoint => {
            return (
                <li key={endpoint.id}><a href={`#${endpoint.id}`}>{`${endpoint.verb} - ${endpoint.path}`}</a></li>
            )
        })

        return (
            <ul>
                {links}
            </ul>
        )
    }

    enableEndpoints = () => {
        Prism.highlightAll()
        setTimeout(() => {
            this.setState({ ...this.state, showEndpoints: true })
        }, 1000)
    }

    toggleModalSettings = () => {
        this.setState({ ...this.state, modalSetttings: !this.state.modalSetttings})
    }

    toggleModalResponse = () => {
        this.setState({ ...this.state, modalResponse: !this.state.modalResponse})
    }

    setHeadersParams = event => {
        event.preventDefault()
        const dataForm = new FormData(event.target)
        const data = []

        for (let [key, value] of dataForm.entries()) { 
            if (value && value !== ''){
                data[key] = value.trim()
            }
        }

        toast.info('Updated params!')
        this.setState({ 
            ...this.state, 
            environment: data['environment'],
            clientId: data['clientId'],
            accessToken: data['accessToken'],
            modalSetttings: false
        })
    }

    verifySettings = () => { 
        const { environment, accessToken, clientId } = this.state

        return environment && environment.length !== 0 && accessToken && accessToken.length !== 0 && clientId && clientId.length !== 0
    }

    convertArrayHarFormatToObject = array => {
        let objectResult = {}

        array.forEach(element => {
            objectResult[element.name] = element.value
        })

        return objectResult
    }

    sendRequest = request => {
        if (this.verifySettings()) {
            let headers = request.headers.filter(header => header.name !== 'client_id' && header.name !== 'access_token')
            headers.push({ name: "client_id", value: this.state.clientId, comment: 'ClientId of the request'})
            headers.push({ name: "access_token", value: this.state.accessToken, comment: 'AccessToken of the request'})

            headers = this.convertArrayHarFormatToObject(headers)
            const params = this.convertArrayHarFormatToObject(request.queryString)

            let axiosConfig = {
                url: request.url,
                method: request.method,
                baseURL: this.state.environment + this.props.api.basePath,
                headers: headers,
                params: params
            }

            if (request.postData.text) {
                axiosConfig['data'] = request.postData.text
            }
            const toastInfo = toast.info("Sending request", { autoClose: false })
            sendRequestCustom(axiosConfig).then(result => {
                this.setState({
                    ...this.state,
                    modalResponse: true,
                    responseRequest: JSON.stringify(result.data, null, '\t'),
                    responseStatus: result.status
                })
            }).catch(error => {
                this.setState({
                    ...this.state,
                    modalResponse: true,
                    responseRequest: JSON.stringify(error.response.data, null, '\t'),
                    responseStatus: error.response.status
                })
            }).finally(() => {
                Prism.highlightAll()
                toast.dismiss(toastInfo)
            })
        } else {
            toast.warn("Please, set the settings from headers!")
        }
        
    }

    render() {
        const { api } = this.props
        const { resource, topics } = this.state

        if (!api || !resource) {
            return (
                <Page>
                    <SectionPage className="section--last section--top-space" title="Loading api..."/>
                </Page>
            )
        }

        if (!topics) {
            return (
                <Page>
                    <SectionPage className="section--last section--top-space" title="Loading topics..."/>
                </Page>
            )
        }

        if (topics.lenght !== resource.topics.lenght) {
            return (
                <Page>
                    <SectionPage className="section--last section--top-space" title="Loading some topics..."/>
                </Page>
            )
        }

        const verbs = new Set([])

        resource.endpoints.forEach(endpoint => {
            verbs.add(endpoint.verb)
        })

        const contentsByVerb = []

        verbs.forEach(verb => {
            contentsByVerb.push(this.createTabsContentByVerb(verb))
        })


        return (
            <Page footer={false}>
                <SectionPage className="section-api-top-space">
                    <Modal title="Settings from header request" visible={this.state.modalSetttings} closeModal={this.toggleModalSettings}>
                        <form className="form" onSubmit={this.setHeadersParams}>
                            <FormGroup>
                                <label className="form__label">Environment</label>
                                <select className="form__input" type="text" placeholder="environment" name="environment" defaultValue={this.state.environment}>
                                    {
                                        api && api.environments.map((environment, index) => {
                                            return <option key={index}>{environment.inboundURL}</option>
                                        })
                                    }
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <label className="form__label">Client_ID</label>
                                <input className="form__input" type="text" placeholder="client_id" name="clientId" defaultValue={this.state.clientId}/>
                            </FormGroup>
                            <FormGroup>
                                <label className="form__label">Access_Token</label>
                                <input className="form__input" type="text" placeholder="access_token" name="accessToken"defaultValue={this.state.accessToken}/>
                            </FormGroup>
                            <div style={{width: '100%', textAlign: 'center', marginTop: 40}}>
                                <button className="site-btn site-btn--accent">Save</button>
                            </div>
                        </form>
                    </Modal>
                    <Modal title={`Response Status - ${this.state.responseStatus}`} visible={this.state.modalResponse} closeModal={this.toggleModalResponse}>
                        <pre className="language-json">
                            <code>
                                { this.state.responseRequest }
                            </code>
                        </pre>
                    </Modal>
                    <Row className="apis-section">
                        <Col g={3} m={3} className="menu-api">
                            <Card>
                                <h1>Menu</h1>
                                <div className={`content-menu ${this.state.sectionLeftAbsolute ? 'absolute' : 'fixed'}`} id="section-left">
                                    <h5>Topics</h5>
                                    <ol className="topics-menu">
                                        {
                                            resource.topics.sort(this.sortByOrder).map(topic => {
                                                return <li key={topic.id}><a href={`#${topic.id}`}>{topic.name}</a></li>
                                            })
                                        }
                                    </ol>
                                    <h5>Endpoints</h5>
                                    <div className="endpoints-menu">
                                        <PanelTab tabs={Array.from(verbs)} tabsContent={contentsByVerb} />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col g={9} m={9} className="apis-description card">
                            {
                                !this.state.showEndpoints &&
                                <div className="loading-endpoints">
                                    <div className="loading">
                                        <LoadingEndpoints totalEndpoints={resource.endpoints.length} enableEndpoints={this.enableEndpoints}/>
                                    </div>
                                </div>
                            }
                        
                            <div className="apis-description-content" style={{ display: this.state.showEndpoints ? 'block' : 'none'}}>
                                <ReactMarkdown source={this.state.resource.bodyContent} />
                                <div id="content-topics">
                                    {
                                        resource.topics.sort(this.sortByOrder).map(topicResource => {
                                            const topic = topics.find(t => t.id === topicResource.id)
                                            if (topic) {
                                                return (
                                                    <div id={topic.id} className="topics" key={topic.id}>
                                                        <ReactMarkdown source={topic.bodyContent} />
                                                    </div>
                                                )
                                            }
                                        }) 
                                    }
                                </div>
                                <div id="endpoints">
                                    { Array.from(verbs).map(verb => {
                                        return resource.endpoints.filter(endpoint => endpoint.verb === verb).map(endpoint => {
                                            return (
                                                <div id={endpoint.id} key={endpoint.id}>
                                                    <hr/>
                                                    <Endpoint id={endpoint.id}
                                                        file={`${this.props.resource}/endpoints/${endpoint.id}`}
                                                        toggleModalSettings={this.toggleModalSettings}
                                                        settingsLocked={this.verifySettings()}
                                                        sendRequest={this.sendRequest}
                                                        basePath={api.basePath} />
                                                </div>
                                            )
                                        })
                                    }) }
                                </div>
                            </div>                                            
                        </Col>
                    </Row>
                </SectionPage>
            </Page>
        )
    }
}

const mapStateToProps = state => {
    return  {
        api: state.api.api
    }
}

export default connect(mapStateToProps)(Api)