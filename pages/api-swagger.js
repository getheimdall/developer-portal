import React from 'react'
import { connect } from 'react-redux'
import SwaggerUI from 'swagger-ui'
import Page from '../components/page'
import SectionPage from '../components/section/SectionPage'
import Row from '../components/row'

import 'swagger-ui/dist/swagger-ui.css'
import './styles/api-swagger.scss'
import { getApi } from './../connectors/actions/api';

class ApiSwagger extends React.Component {

    static async getInitialProps({}) {
        const res = await fetch(process.env.REACT_PORTAL_API_SWAGGER)
        const json = await res.json()
        return { swagger: json }
    }

    state = {
        loading: true
    }

    componentDidMount() {
        this.props.dispatch(getApi())
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.api !== this.props.api) {
            this.updateSwaggerByApi(nextProps.api)
        }
    }

    updateSwaggerByApi = api => {
        let swagger = this.props.swagger

        const basePath = api.basePath
        const environment = api.environments[0].inboundURL

        swagger.basePath = basePath
        swagger.host = environment

        swagger.securityDefinitions = {
            client_id: {type: "apiKey", name: "client_id", in: "header"},
            access_token: {type: "apiKey", name: "access_token", in: "header"}
        }

        SwaggerUI({
            dom_id: '#swaggerUI',
            spec: swagger
        })
        
        this.setState({ ...this.state, loading: false })
    }

    render() {

        return ( 
            <Page>
                <SectionPage className="section--last section--top-space" title={this.state.loading ? 'Loading swagger...' : ''}>
                    <Row>
                        <div id="swaggerUI" style={{width: '100%'}}/>
                    </Row>
                </SectionPage>
            </Page>
        )
    }
}

const mapStateToProps = state => {
    return {
        api: state.api.api
    }
}

export default connect(mapStateToProps)(ApiSwagger)