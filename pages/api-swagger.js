import React from 'react'
import { connect } from 'react-redux'
import SwaggerUI from 'swagger-ui'
import Page from '../components/page'
import SectionPage from '../components/section/SectionPage'
import Row from '../components/row'
import { getApi } from './../connectors/actions/api'
import Form from './../components/form/Form'
import FormGroup from './../components/form/FormGroup'
import Card from './../components/card/Card'
import Col from './../components/col/Col'

// import 'swagger-ui/dist/swagger-ui.css'
// import './styles/api-swagger.scss'

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

    handleSelectHost = event => {
        const hostSelected = event.target.value
        console.log(hostSelected)
        this.updateSwaggerByApi(this.props.api, hostSelected)
    }

    updateSwaggerByApi = (api, host) => {
        let swagger = this.props.swagger

        if (api) {
            const basePath = api.basePath
            const environment = host ? host : api.environments[0].inboundURL

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
        
    }

    render() {

        return ( 
            <Page>
                <SectionPage className="section--last section--top-space" title={this.state.loading ? 'Loading swagger...' : ''}>
                    {
                        !this.state.loading && this.props.api && 
                        <Form title="Select the host">
                            <FormGroup>
                                <label className="form__label">Host</label>
                                    <select className="form__input js-field__host" placeholder="Select host" onChange={(e) => this.handleSelectHost(e)}>
                                        { this.props.api.environments.map((environment, index) => {
                                            return <option value={environment.inboundURL} key={index} >{environment.inboundURL}</option>
                                        })}
                                    </select>
                                <span className="form-validation" />
                            </FormGroup>
                        </Form>
                    }
                    <Row align="center">
                        <Col>
                            <Card className={this.state.loading ? 'invisible' : ''}>
                                <div id="swaggerUI" style={{width: '100%'}} align="left"/>
                            </Card>
                        </Col>
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