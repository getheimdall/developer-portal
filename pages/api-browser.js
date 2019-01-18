import React from 'react'
import { connect } from 'react-redux'

import Page from './../components/page'
import SectionPage from './../components/section/SectionPage'
import { clearApis, getAllApis } from '../connectors/actions/api'
import Row from '../components/row'
import Col from '../components/col'
import Card from '../components/card/Card'
import ButtonAccent from '../components/button/ButtonAccent'

class ApiBrowser extends React.Component {

    componentDidMount() {
        this.props.dispatch(getAllApis())
    }

    componentWillUnmount() {
        this.props.dispatch(clearApis())
    }

    render() {

        const { apis } = this.props
        
        if (!apis) {
            return (
                <Page>
                    <SectionPage className="section--last section--top-space" title="Loading apis..."/>
                </Page>
            )
        }

        if (apis && apis.length === 0) {
            return (
                <Page>
                    <SectionPage className="section--last section--top-space" title="No registered APIs!"/>
                </Page>
            )
        }

        return ( 
            <Page>
                <SectionPage className="section--last section--top-space" title="Api Browser">
                    <Row align="center">
                        { apis && apis.length > 0 && apis.map((api, index) => {
                            return (
                                <Col g={4} m={4} key={index}>
                                    <Card title={api.name} >
                                        <div>
                                            <div align="left">
                                                <h5><strong>Description:</strong> {api.description}</h5>
                                                <h5><strong>Version:</strong> {api.version}</h5>
                                                <h5><strong>Status:</strong> {api.status}</h5>
                                                <br/>
                                            </div>  
                                            <ButtonAccent value="See swagger" onClick={() => Router.push({ pathname: '/singleApi', query: { id: api.id }})}/>
                                        </div>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </SectionPage>
            </Page>
        )
    }
}

const mapStateToProps = state => {
    return  {
        apis: state.api.apis
    }
}

export default connect(mapStateToProps)(ApiBrowser)