import React from 'react'
import Page from '../components/page'
import SectionPage from '../components/section/SectionPage'

class Contact extends React.Component {

    state = {
        email: '',
        about: '',
        message: ''
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
    
    handleSubmitEmail = () => {
        const { email, about, message } = this.state

        window.open(`mailto:${email}?subject=${about}&amp;body=${message}`, '_blank')    
    }

    render() {

        const { email, about, message } = this.state
        const canSub =  email.includes('@') && email.includes('.com') && about.length > 0 && message.length > 0

        return (
            <Page>
                <SectionPage className="section--last section--top-space" title="Contact">
                    <div>
                        <h5><strong>Email: </strong> <a href="mailto:heimdall@Conductor.onmicrosoft.com" target="_blank">heimdall@Conductor.onmicrosoft.com</a></h5>
                        <h5><strong>Address São Paulo: </strong>Av. Tambore, 267, Alphaville, Barueri - 06460-000</h5>
                        <h5><strong>Address João Pessoa: </strong>Rua Antonio Regis de Brito, 15, Pedro Gondim - 58031-106</h5>
                        <h5><strong>Address Porto Alegre: </strong>Av. Ipiranga, 6681, Prédio 99A, SL 1001 Partenon - 90619-900</h5>
                    </div>
                </SectionPage>
            </Page>
        )
    }
}

export default Contact