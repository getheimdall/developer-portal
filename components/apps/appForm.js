import React from 'react'
import Form from '../form'
import FormGroup from '../form/FormGroup'
import ButtonAccent from '../button/ButtonAccent'
import ButtonLight from '../button/ButtonLight'
import AppSecurity from './appSecurity'

class AppForm extends React.Component {

    state = {
        name: '',
        description: ''
    }

    componentDidMount() {
        
        let { app } = this.props

        if (!app) {
            app = {
                name: '',
                description: ''
            }
        } else {
            this.setState({ ...this.state, name: app.name, description: app.description })
        }
    }

    handleOnChangeName = event => {
        this.setState({ ...this.state, name: event.target.value })
    }

    handleOnChangeDescription = event => {
        this.setState({ ...this.state, description: event.target.value })
    }

    submitApp = () => {

        const { app } = this.props

        app.name = this.state.name
        app.description = this.state.description

        this.props.submitApp(app)
        
    }

    deleteApp = () => {
        
        const { app } = this.props
        if (app.id) {
            this.props.deleteApp(app.id)
        }
    }

    render() {
        const { canDelete } = this.props
        const { name, description } = this.state
        const canSub =  name && name.length > 0

        return (
            <Form title="App">
                <FormGroup>
                    <label className="form__label">Name</label>
                    <input className="form__input js-field__name" type="text" placeholder="App Name" value={name} onChange={this.handleOnChangeName} autoFocus/>
                    <span className="form-validation" />
                </FormGroup>
                <FormGroup>
                    <label className="form__label">Description</label>
                    <input className="form__input js-field__description" type="text" placeholder="App description" value={description} onChange={this.handleOnChangeDescription} />
                    <span className="form-validation" />
                </FormGroup>
                <AppSecurity clientId={this.props.app.clientId} listAccessToken={this.props.app.accessTokens} />
                <div style={{width: '100%', textAlign: 'center', marginTop: 40}}>
                    <ButtonAccent value="Save" className="form__submit" disable={!canSub} onClick={this.submitApp}/>
                    <ButtonLight value="Delete" disable={!canDelete} onClick={this.deleteApp}/>
                </div>
            </Form>
        )
    }
}

AppForm.defaultProps = {
    canDelete: false
}

export default AppForm