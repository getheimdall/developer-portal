import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import Page from '../components/page'
import SectionPage from './../components/section/SectionPage'
import Row from './../components/row/Row'
import Col from '../components/col'
import Card from './../components/card/Card'
import ButtonAccent from '../components/button/ButtonAccent'
import ButtonInvert from './../components/button/ButtonInvert'
import AuthorizationRoute from './../components/hoc/AuthorizationRoute'
import { getAllApps, deleteApp } from '../connectors/actions/app'

// import './styles/apps.scss'

class Apps extends React.Component {

    componentDidMount() {
        this.props.dispatch(getAllApps())
    }

    deleteApp = appId => {
        this.props.dispatch(deleteApp(appId))
        this.forceUpdate()
    }

    render() {

        const { apps } = this.props

        if ( !apps ) {
            return <Page>
                <SectionPage className="section--last section--top-space" title="Loading apps..." />
            </Page>
        }

        return (
            <Page>
                <SectionPage className="section--last section--top-space" title="Your apps">
                    <Row align="center"> 
                        { apps && apps.content.length > 0 && apps.content.map((app, index) => {
                            return (
                                <Col g={4} m={4} key={index}>
                                    <Card title={app.name} >
                                        <div>
                                            <div align="left">
                                                <p><strong>Description:</strong> {app.description}</p>
                                                <p><strong>ClientID:</strong> {app.clientId}</p>
                                                <br/>
                                            </div>  
                                            <ButtonAccent value="Details" onClick={() => Router.push({ pathname: '/singleApp', query: { id: app.id }})}/>
                                            <ButtonInvert value="Delete" onClick={() => this.deleteApp(app.id)}/>
                                        </div>
                                    </Card>
                                </Col>
                            )
                        })}
                        { apps && apps.content.length === 0  && <h4>You dont have apps! <ButtonAccent onClick={() => Router.push('/newApp')} value="Create App"/></h4>}
                    </Row>
                    <br/><br/>
                </SectionPage>
            </Page>
        )
    }
}

const mapStateToProps = state => {
    return {
        apps: state.app.apps
    }
} 

export default connect(mapStateToProps)(AuthorizationRoute()(Apps))