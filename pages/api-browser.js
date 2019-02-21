import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import Page from './../components/page'
import SectionPage from './../components/section/SectionPage'
import { clearApi, getApi, getDescriptionResources } from '../connectors/actions/api'
import Row from '../components/row'
import Col from '../components/col'
import Card from '../components/card/Card'

class ApiBrowser extends React.Component {

    state = {
        summary: undefined
    }

    componentDidMount() {
        this.props.dispatch(getApi())
        this.props.dispatch(getDescriptionResources())
        this.loadSummary().then(summary => {
            this.setState({ ...this.state, summary })
        })
    }

    componentWillUnmount() {
        this.props.dispatch(clearApi())
    }

    loadSummary = async () => {
        const res = await fetch('/static/content/summary.json')
        return await res.json()
    }

    listResources = () => {
        const { descriptions } = this.props
        const { summary } = this.state
        const tags = new Set()
        const result = []

        if (summary) {
            const keysFileMap = Object.keys(summary.fileMap)
            
            keysFileMap.forEach(key => {
                if (summary.fileMap[key].tag)
                    tags.add(summary.fileMap[key].tag)
            })

            tags.forEach(tag => {
                result.push(
                    <Col key={tag} g={3} m={4}>
                        <Card title={tag}>
                            <div>
                                { descriptions && <p>{descriptions[tag.toLowerCase()]}</p>}
                                <h5>See endpoints:</h5>
                                <ul>
                                    {this.getEndpointsByTag(tag)}
                                </ul>
                            </div>
                        </Card>
                    </Col>
                )  
            })
        }

        return result
    }

    getEndpointsByTag = tag => {

        const { summary } = this.state
        const result = []
        
        if (summary) {
            const keysFileMap = Object.keys(summary.fileMap)

            keysFileMap.forEach(key => {
                if (summary.fileMap[key].tag === tag) {
                    result.push(
                        <li key={key}>
                            <Link href={`/docs/api?environment=${tag}&file=${summary.fileMap[key].base}`}>
                                <a>{`${summary.fileMap[key].verb} - ${summary.fileMap[key].path}`}</a>
                            </Link>
                        </li>    
                    )
                }
            })            
        }

        return result
    }

    render() {

        const { api } = this.props

        if (!api) {
            return (
                <Page>
                    <SectionPage className="section--last section--top-space" title="Loading api..."/>
                </Page>
            )
        }

        if (api && api.length === 0) {
            return (
                <Page>
                    <SectionPage className="section--last section--top-space" title="Api not exist!"/>
                </Page>
            )
        }

        return ( 
            <Page>
                <SectionPage className="section--last section--top-space" title={api ? api.name : 'Api Browser'}>
                    <Row>
                        { api && 
                            <Col>
                                <Card>
                                    <br/>
                                    <Row align="center">
                                        <Col g={3} m={3}>
                                            <h5><strong>Description:</strong> {api.description}</h5>
                                        </Col>
                                        <Col g={3} m={3}>
                                            <h5><strong>Base path:</strong> {api.basePath}</h5>
                                        </Col>
                                        <Col g={3} m={3}>
                                            <h5><strong>Version:</strong> {api.version}</h5>                                        
                                        </Col>
                                        <Col g={3} m={3}>
                                            <h5><strong>Status:</strong> {api.status}</h5>    
                                        </Col>
                                    </Row>
                                    <br/>
                                </Card>
                            </Col>
                        }
                        <Col><h3>Resources</h3><br/></Col>
                        { this.state.summary && this.listResources() }
                    </Row>
                </SectionPage>
            </Page>
        )
    }
}

const mapStateToProps = state => {
    return  {
        api: state.api.api,
        descriptions: state.api.descriptions
    }
}

export default connect(mapStateToProps)(ApiBrowser)