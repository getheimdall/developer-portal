import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'

import Page from '../components/page'
import SectionPage from '../components/section/SectionPage'
import AuthorizationRoute from '../components/hoc/AuthorizationRoute'
import AppForm from '../components/apps/appForm'
import { getApp, updateApp, deleteApp, clearApp } from '../connectors/actions/app'

class SingleApp extends React.Component {

    componentDidMount() {
        const idApp = this.props.router.query.id
        this.props.dispatch(getApp(idApp))
    }

    componentWillUnmount() {
        this.props.dispatch(clearApp())
    }

    onSubmitApp = app => {
        this.props.dispatch(updateApp(app))
    }

    deleteApp = id => {
        this.props.dispatch(deleteApp(id))
    }

    render() {
        
        let { app } = this.props 

        if ( !app ) {
            return <Page>
                <SectionPage className="section--last section--top-space" title="Loading app..." />
            </Page>
        }

        return (
            <Page>
                <SectionPage className="section--last section--top-space" title="Edit app">
                    <AppForm canDelete={true} app={app} submitApp={this.onSubmitApp} deleteApp={this.deleteApp}/>
                </SectionPage>
            </Page>
        )
    }
}

const mapStateToProps = state => {
    return {
        app: state.app.app
    }
}

export default connect(mapStateToProps)(withRouter(AuthorizationRoute()(SingleApp)))