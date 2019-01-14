import React from 'react'
import { connect } from 'react-redux'
import Page from '../components/page'
import SectionPage from './../components/section/SectionPage'
import AuthorizationRoute from './../components/hoc/AuthorizationRoute'
import AppForm from './../components/apps/appForm'
import { saveApp } from '../connectors/actions/app'

class NewApp extends React.Component {
    
    submitNewApp = app => {
        this.props.dispatch(saveApp(app))
    }

    render() {

        const app = {
            name: '',
            description: ''
        }

        return (
            <Page>
                <SectionPage className="section--last section--top-space" title="Create the new app!">
                    <AppForm submitApp={this.submitNewApp}  app={app}/>
                </SectionPage>
            </Page>
        )
    }
}

export default connect()(AuthorizationRoute()(NewApp))