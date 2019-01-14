import React from 'react'
import { connect } from 'react-redux'
import Form from './../components/form'
import FormGroup from './../components/form/FormGroup'
import ButtonAccent from '../components/button/ButtonAccent'
import SectionPage from './../components/section/SectionPage'
import Page from '../components/page/'
import { saveDeveloper } from '../connectors/actions/developer'
import AuthorizationRoute from './../components/hoc/AuthorizationRoute'

class Register extends React.Component {

    state = {
        name: '',
        lastName: '',
        email: '',
        password: '',
        terms: false
    }

    handleOnChangeName = event => {
        this.setState({ ...this.state, name: event.target.value })
    }

    handleOnChangeLastName = event => {
        this.setState({ ...this.state, lastName: event.target.value })
    }

    handleOnChangeEmail = event => {
        this.setState({ ...this.state, email: event.target.value })
    }

    handleOnChangePassword = event => {
        this.setState({ ...this.state, password: event.target.value })
    }

    toggleTerms = () => {
        this.setState({ ...this.state, terms: !this.state.terms })
    }

    submitRegister = () => {
        const { name, lastName, email, password, terms } = this.state

        const developer = {
            name: `${name} ${lastName}`,
            email,
            password
        }

        this.props.dispatch(saveDeveloper(developer))
    }

    render() {

        const { name, lastName, email, password, terms } = this.state
        const canSub =  name.length > 0 && lastName.length > 0 && email.includes('@') && email.includes('.com') && password.length >= 6 && terms

        return (
            <Page>
                <SectionPage className="section--last section--top-space" title="Create your register!">
                    <Form title="Sign Up">
                        <FormGroup className="form__form-group--small">
                            <label className="form__label">Name</label>
                            <input className="form__input js-field__first-name" type="text" placeholder="John" value={name} onChange={this.handleOnChangeName} autoFocus />
                            <span className="form-validation" />
                        </FormGroup>
                        <FormGroup className="form__form-group--small form__form-group--right">
                            <label className="form__label">LastName</label>
                            <input className="form__input js-field__last-name" type="text" placeholder="Doe" value={lastName} onChange={this.handleOnChangeLastName}/>
                            <span className="form-validation" />
                        </FormGroup>
                        <FormGroup>
                            <label className="form__label">Email</label>
                            <input className="form__input js-field__email" type="email" placeholder="example@mail.com" value={email} onChange={this.handleOnChangeEmail}/>
                            <span className="form-validation" />
                        </FormGroup>
                        <FormGroup>
                            <label className="form__label">Password</label>
                            <input className="form__input js-field__password" type="password" placeholder="******" value={password} onChange={this.handleOnChangePassword} min={6}/>
                            <span className="form-validation" />
                        </FormGroup>
                        <FormGroup>
                            <label className="checkbox-btn">
                                <input className=" checkbox-btn__checkbox" type="checkbox" name="terms" required onClick={this.toggleTerms} value={terms}/>
                                <span className="checkbox-btn__checkbox-custom"><i className="mdi mdi-check"/></span>
                                <span className="checkbox-btn__label">I read and agree with
                                    <a target="_blank" className="link link--accent link--accent-bold"> {`Terms & Conditions`}</a>
                                </span>
                            </label>
                        </FormGroup>
                        <br/><br/><br/>
                        <ButtonAccent value="Create account" className="form__submit" disable={!canSub} onClick={this.submitRegister}/>
                    </Form>
                </SectionPage>
            </Page>
        )
    }
}

export default connect()(AuthorizationRoute(true)(Register))