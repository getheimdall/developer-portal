import React from 'react'
import Page from '../components/page'
import Form from '../components/form'
import FormGroup from '../components/form/FormGroup'
import ButtonAccent from '../components/button/ButtonAccent'
import SectionPage from '../components/section/SectionPage'

class Contact extends React.Component {

    state = {
        name: '',
        email: '',
        about: '',
        message: ''
    }

    handleOnChangeName = event => {
        this.setState({ ...this.state, name: event.target.value })
    }

    handleOnChangeEmail = event => {
        this.setState({ ...this.state, email: event.target.value })
    }

    handleOnChangeAbout = event => {
        this.setState({ ...this.state, about: event.target.value })
    }

    handleOnChangeMessage = event => {
        this.setState({ ...this.state, message: event.target.value })
    }

    render() {

        const { name, email, about, message } = this.state
        const canSub =  email.includes('@') && email.includes('.com') && name.length > 0 && about.length > 0 && message.length > 0

        return (
            <Page>
                <SectionPage className="section--last section--top-space" title="Contact us!">
                    <Form title="Send Email">
                        <FormGroup>
                            <label className="form__label">Name</label>
                            <input className="form__input js-field__name" type="text" placeholder="John" value={name} onChange={this.handleOnChangeName} autoFocus/>
                            <span className="form-validation" />
                        </FormGroup>
                        <FormGroup>
                            <label className="form__label">Email</label>
                            <input className="form__input js-field__email" type="email" placeholder="example@mail.com" value={email} onChange={this.handleOnChangeEmail} />
                            <span className="form-validation" />
                        </FormGroup>
                        <FormGroup>
                            <label className="form__label">About</label>
                            <input className="form__input js-field__about" type="text" placeholder="About" value={about} onChange={this.handleOnChangeAbout} />
                            <span className="form-validation" />
                        </FormGroup>
                        <FormGroup>
                            <label className="form__label">Message</label>
                            <textarea className="form__input js-field__message" placeholder="Message" value={message} onChange={this.handleOnChangeMessage} rows={5}/>
                            <span className="form-validation" />
                        </FormGroup>
                        <div style={{width: '100%', textAlign: 'center', marginTop: 40}}>
                            <ButtonAccent value="Send message" className="form__submit" disable={!canSub} />
                        </div>
                    </Form>
                </SectionPage>
            </Page>
        )
    }
}

export default Contact