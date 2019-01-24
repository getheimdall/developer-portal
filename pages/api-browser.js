import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import Page from './../components/page'
import SectionPage from './../components/section/SectionPage'
import { clearApi, getApi } from '../connectors/actions/api'
import Row from '../components/row'
import Col from '../components/col'
import Card from '../components/card/Card'
import ButtonAccent from '../components/button/ButtonAccent'

class ApiBrowser extends React.Component {

    static async getInitialProps({}) {
        try {
            const res = await fetch(process.env.REACT_PORTAL_API_SWAGGER)
            const json = await res.json()
            return { swaggerNotValid: json.swagger ? false : true }
        } catch {
            return { swaggerNotValid: true }
        }
        
    }

    componentDidMount() {
        this.props.dispatch(getApi())
    }

    componentWillUnmount() {
        this.props.dispatch(clearApi())
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
                <SectionPage className="section--last section--top-space" title="Api Browser">
                    <Row align="center">
                        { api && 
                            <Col g={8} m={8} className="col-offset-2">
                                <Card title={api.name} >
                                    <div>
                                        <br/>
                                        <Row>
                                            <Col g={6} m={6}>
                                                <h5><strong>Description:</strong> {api.description}</h5>
                                                <h5><strong>Base path:</strong> {api.basePath}</h5>
                                            </Col>
                                            <Col g={6} m={6}>
                                                <h5><strong>Version:</strong> {api.version}</h5>
                                                <h5><strong>Status:</strong> {api.status}</h5>    
                                            </Col>
                                        </Row>
                                        <br/>
                                        <ButtonAccent value="See swagger" onClick={() => Router.push({ pathname: '/api-swagger'})} disable={this.props.swaggerNotValid}/>
                                    </div>
                                </Card>
                            </Col>
                        }
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

export default connect(mapStateToProps)(ApiBrowser)