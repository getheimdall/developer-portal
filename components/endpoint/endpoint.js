import React from 'react'
import ReactMarkdown from 'react-markdown'
import HttpSnnipet from 'httpsnippet'

import './endpoint.scss'
import PanelTab from '../panelTab';

class Endpoint extends React.Component {

    state = {
        endpoint: undefined,
        snnipet: undefined,
        codes: [
            'Shell',
            'Java',
            'Go',
            'Javascript',
            'Node',
            'PHP',
            'Python'
        ]
    }

    componentDidMount() {
        const file = this.props.file

        this.loadEndpoint(file).then(endpoint => {
            this.setState({ ...this.state, endpoint })
        })
    }

    componentDidUpdate(nextProps, nextState) {
        if (this.state.endpoint !== nextState.endpoint) {
            this.createSnnipet()
        }
    }

    createSnnipet = () => {
        const { endpoint } = this.state

        if (endpoint) {
            const snnipet = new HttpSnnipet({
                url: `http://localhost:8080/api${endpoint.path}`,
                method: endpoint.verb
            })
    
            this.setState({...this.state, snnipet })
        }
    }

    loadEndpoint = async endpoint => {
        const res = await fetch(`/static/content/resources/${endpoint}.json`)
        return await res.json()
    }

    createSnnipetsInPanelTab = () => {
        const { snnipet, codes} = this.state

        const codesView = codes.map(code => {
            return (
                <pre>
                    <code>{snnipet.convert(code.toLowerCase(), { indent: false})}</code>
                </pre>
            )
        })

        return <PanelTab tabs={codes} tabsContent={codesView}/>
    }

    render() {

        const { endpoint } = this.state

        if (!endpoint) {
            return <h5>Loading endpoint...</h5>
        }

        return (
            <div className="endpoint-markdown">
                <h3>{`${endpoint.verb} - ${endpoint.path}`}</h3>
                <ReactMarkdown source={endpoint.bodyContent} escapeHtml={false}/>
                <div className="dev-console">
                    <a href={`#console-${this.props.id}`} className="access">Go to console</a>
                    <div className="content" id={`console-${this.props.id}`}>
                        <h2>Console Dev</h2>
                        <div className="form">
                            { !this.state.snnipet && <p>Parsing request...</p>}
                            { 
                                this.state.snnipet &&
                                this.createSnnipetsInPanelTab() 
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Endpoint