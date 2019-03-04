import React from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import Page from './../../components/page'
import SectionPage from './../../components/section/SectionPage'
import Row from './../../components/row'
import Col from './../../components/col'
import PanelTab from '../../components/panelTab'
import { getApi } from '../../connectors/actions/api'
import Endpoint from './../../components/endpoint'

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
            <ol>
                {links}
            </ol>
        )
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
            <Page>
                <SectionPage className="section--last section--top-space">
                    <Row className="apis-section">
                        <Col g={3} m={3}>
                            <div className={`section-left ${this.state.sectionLeftAbsolute ? 'absolute' : 'fixed'}`} id="section-left">
                                <h5>Menu Navigation</h5>
                                <br/>
                                <ol className="section-left-topics">
                                    {
                                        resource.topics.sort(this.sortByOrder).map(topic => {
                                            return <li key={topic.id}><a href={`#${topic.id}`}>{topic.name}</a></li>
                                        })
                                    }
                                </ol>
                            </div>
                        </Col>
                        <Col g={9} m={9}>
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
                        </Col>
                        <Col g={3} m={3}>
                            <div className="console">
                                <PanelTab tabs={Array.from(verbs)} tabsContent={contentsByVerb} />
                            </div>
                        </Col>
                        <Col g={9} m={9}>
                            <div id="endpoints">
                                { Array.from(verbs).map(verb => {
                                    return resource.endpoints.filter(endpoint => endpoint.verb === verb).map(endpoint => {
                                        return (
                                            <div id={endpoint.id} key={endpoint.id}>
                                                <hr/>
                                                <Endpoint file={`${this.props.resource}/endpoints/${endpoint.id}`} />
                                            </div>
                                        )
                                    })
                                }) }
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