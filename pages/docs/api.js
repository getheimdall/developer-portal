import React from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import Page from './../../components/page'
import SectionPage from './../../components/section/SectionPage'
import Row from './../../components/row'
import Col from './../../components/col'
import Card from './../../components/card'
import FormGroup from './../../components/form/FormGroup'
import { getApi } from '../../connectors/actions/api'
import Resource from '../../components/resource/Resource'

class Api extends React.Component {

    static getInitialProps = async ({ query }) => {
        return { resource: query.api }
    }

    state = {
        resource: undefined,
        topics: undefined,
        sectionLeftAbsolute: false
    }

    componentDidMount() {
        this.props.dispatch(getApi())
        this.loadResource().then(resource => {
            this.setState({ ...this.state, resource })
        })

        window.onscroll = () => this.handleScroll()
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
        const topicsIndexes = Object.keys(topics)
        const topicsResult = {}

        topicsIndexes.forEach(topicIndex => {
            fetch(`/${resource.dir}/${topics[topicIndex].file}.json`).then(topicJson => {
                topicJson.json().then(result => {
                    topicsResult[topicIndex] = result
                    this.forceUpdate()
                })
            })
        })

        return topicsResult
    }

    handleScroll = () => {
        const contentTopics = document.getElementById('content-topics')

        if (contentTopics) {
            const windowScroll = document.documentElement.scrollTop

            if (windowScroll > contentTopics.scrollHeight) {
                this.setState({ ...this.state, sectionLeftAbsolute: true })
            } else {
                this.setState({ ...this.state, sectionLeftAbsolute: false })
            }
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
        
        const topicsIndexes = Object.keys(resource.topics)
        const find = topicsIndexes.find(topicIndex => topics[topicIndex] === undefined )
        
        if (find) {
            return (
                <Page>
                    <SectionPage className="section--last section--top-space" title="Loading some topics..."/>
                </Page>
            )
        }

        return (
            <Page>
                <SectionPage className="section--last section--top-space">
                    <Row className="apis-section">
                        <Col g={3} m={3}>
                            <div className={`section-left ${this.state.sectionLeftAbsolute ? 'absolute' : 'fixed'}`} id="section-left">
                                <h5>Menu Navigation</h5>
                                <br/>
                                <o className="section-left-topics">
                                    { 
                                        topicsIndexes.map(topicIndex => {
                                            return (
                                                <li key={topicIndex}><a href={`#${topicIndex}`}>{this.state.topics[topicIndex].title}</a></li>
                                            )
                                        }) 
                                    }
                                </o>
                            </div>
                        </Col>
                        <Col g={9} m={9}>
                            <ReactMarkdown source={this.state.resource.bodyContent} />
                            <div id="content-topics">
                                {
                                    topicsIndexes.map(topicIndex => {
                                        return (
                                            <div id={topicIndex} className="topics" key={topicIndex}>
                                                <ReactMarkdown source={topics[topicIndex].bodyContent} />
                                            </div>
                                        )
                                    }) 
                                }
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