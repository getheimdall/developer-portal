import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import Page from '../components/page'
import Form from './../components/form'
import FormGroup from './../components/form/FormGroup'
import ButtonAccent from '../components/button/ButtonAccent'
import SectionPage from './../components/section/SectionPage'
import { setUserInStorage } from '../utils/authentication'
import { login } from '../connectors/actions/auth'

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleOnChangeEmail = event => {
        this.setState({ ...this.state, email: event.target.value })
    }

    handleOnChangePassword = event => {
        this.setState({ ...this.state, password: event.target.value })
    }

    submitForm = () => {
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.dispatch(login(user))
    }

    render() {

        const { email, password } = this.state
        const canSub =  email.includes('@') && email.includes('.com') && password.length >= 6

        return (
            <Page>
                <SectionPage className="section--last section--top-space" title="Input your credentials!">
                    <Form title="Sign In">
                        <FormGroup>
                            <label className="form__label">Email</label>
                            <input className="form__input js-field__email" type="email" placeholder="example@mail.com" value={email} onChange={this.handleOnChangeEmail} autoFocus/>
                            <span className="form-validation" />
                        </FormGroup>
                        <FormGroup>
                            <label className="form__label">Password</label>
                            <input className="form__input js-field__password" type="password" placeholder="******" value={password} onChange={this.handleOnChangePassword} min={6}/>
                            <span className="form-validation" />
                        </FormGroup>
                        <div style={{width: '100%', textAlign: 'center', marginTop: 40}}>
                            <ButtonAccent value="Login" className="form__submit" disable={!canSub} onClick={this.submitForm}/>
                        </div>
                    </Form>
                </SectionPage>
            </Page>
        )
    }
}

export default connect()(Login)