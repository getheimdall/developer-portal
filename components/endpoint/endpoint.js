import React from 'react'
import ReactMarkdown from 'react-markdown'
import HttpSnnipet from 'httpsnippet'
import Prism from 'prismjs/components/prism-core'

import PanelTab from '../panelTab'
import FormGroup from './../form/FormGroup'
import Editor from './../editor'

import './endpoint.scss'

const codes = [
    'Shell',
    'Java',
    'Go',
    'Javascript',
    'Node',
    'Python'
]

class Endpoint extends React.Component {

    state = {
        endpoint: undefined,
        snnipet: undefined
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
        let request = endpoint.request
        
        request.url = `http://localhost:8080${request.url}`
        request.headerSize = JSON.stringify(request.headers).length
        request.bodySize = JSON.stringify(request.postData).length

        if (endpoint) {
            const snnipet = new HttpSnnipet(request)
            this.setState({...this.state, snnipet })
        }
    }

    loadEndpoint = async endpoint => {
        const res = await fetch(`/static/content/resources/${endpoint}.json`)
        return await res.json()
    }

    createSnnipetsInPanelTab = () => {
        const { snnipet } = this.state
        const codesView = codes.map(code => {
            const codeLowerCase = code.toLowerCase()
            const className = `language-${codeLowerCase === 'node' ? 'javascript' : codeLowerCase}`
            return (
                <pre>
                    <code className={className}>{snnipet.convert(codeLowerCase, { indent: false})}</code>
                </pre>
            )
        })

        setTimeout(() => {
            Prism.highlightAll()
        }, 1000)
        return <PanelTab tabs={codes} tabsContent={codesView}/>
    }

    render() {

        const { endpoint } = this.state
        
        if (!endpoint) {
            return <h5>Loading endpoint...</h5>
        }
        
        const jsonObj  = endpoint.request.postData.jsonObj
        const queryParams = endpoint.request.queryString

        return (
            <div className="endpoint-markdown">
                <h1 className="endpoint-title">{`${endpoint.verb} - ${endpoint.path}`}</h1>
                <ReactMarkdown source={endpoint.bodyContent} escapeHtml={false}/>
                <div className="dev-console">
                    <a href={`#console-${this.props.id}`} className="dev-console-access">Go to console</a>
                    <div className="dev-console-content" id={`console-${this.props.id}`}>
                        <h2>Console Dev</h2>
                        <div className="request">
                            { 
                                queryParams.length > 0 &&
                                <div className="form">
                                    <FormGroup>
                                        <label className="form__label">Query Params</label>
                                        <Editor
                                            theme="tomorrow_night"
                                            mode="json" 
                                            enableBasicAutocompletion
                                            defaultValue={JSON.stringify(queryParams, null, '\t')} 
                                            debounceChangePeriod={2500}
                                            editorProps={{$blockScrolling: 'Infinity'}}
                                            width="100%"/>
                                    </FormGroup>
                                </div>
                            }
                            {
                                jsonObj &&
                                <div className="form">
                                    <FormGroup>
                                        <label className="form__label">Post Data</label>
                                        <Editor 
                                            theme="tomorrow_night" 
                                            mode="json" 
                                            enableBasicAutocompletion
                                            defaultValue={JSON.stringify(jsonObj, null, '\t')} 
                                            debounceChangePeriod={2500}
                                            editorProps={{$blockScrolling: 'Infinity'}}
                                            width="100%"/>
                                    </FormGroup>
                                </div>
                            }
                        </div>
                        <div className="http-snnipets">
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