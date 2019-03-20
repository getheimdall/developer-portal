import React from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import Prism from 'prismjs/components/prism-core'

import Page from './../../components/page'
import SectionPage from './../../components/section/SectionPage'
import Row from './../../components/row'
import Col from './../../components/col'
import PanelTab from '../../components/panelTab'
import { getApi, clearApi } from '../../connectors/actions/api'
import Endpoint from './../../components/endpoint'
import Card from './../../components/card'
import LoadingEndpoints from '../../components/endpoint/loadingEndpoints'

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
        showEndpoints: false
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
                        
                            <div style={{ display: this.state.showEndpoints ? 'block' : 'none'}}>
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
                                                        file={`${this.props.resource}/endpoints/${endpoint.id}`}/>
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