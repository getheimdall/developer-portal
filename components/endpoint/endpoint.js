import React from 'react'
import ReactMarkdown from 'react-markdown'

import './endpoint.scss'

class Endpoint extends React.Component {

    state = {
        endpoint: undefined
    }

    componentDidMount() {
        const file = this.props.file
        console.log(file)

        this.loadEndpoint(file).then(endpoint => {
            console.log(endpoint)
            this.setState({ ...this.state, endpoint })
        })
    }

    loadEndpoint = async endpoint => {
        const res = await fetch(`/static/content/resources/${endpoint}.json`)
        return await res.json()
    }

    render() {

        const { endpoint } = this.state

        if (!endpoint) {
            return <h5>Loading endpoint...</h5>
        }

        return (
            <ReactMarkdown source={endpoint.bodyContent} />
        )
    }
} 

export default Endpoint