import React from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import HttpSnnipet from 'httpsnippet'
import Prism from 'prismjs/components/prism-core'
import PanelTab from '../panelTab'
import FormGroup from './../form/FormGroup'
import Editor from './../editor'
import { decrementEndpoint, incrementEndpoint } from '../../connectors/actions/endpoints'
import ButtonAccent from './../button/ButtonAccent'

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
        snnipet: undefined,
        queryParamsEditor: undefined,
        pathParamsEditor: undefined,
        bodyEditor: undefined
    }

    componentDidMount() {
        const file = this.props.file

        this.loadEndpoint(file).then(endpoint => {
            this.setState({ ...this.state, endpoint })
            this.props.dispatch(incrementEndpoint())
        })
    }

    componentDidUpdate(nextProps, nextState) {
        if (this.state.endpoint !== nextState.endpoint) {
            this.createSnnipet()
        }
    }

    componentWillUnmount() {
        this.props.dispatch(decrementEndpoint())
    }

    createSnnipet = () => {
        const { endpoint } = this.state
        if (endpoint) {
            let request = endpoint.request
            const headers = request.headers

            const environment = "http://127.0.0.1:8080"            
            const clientId = "${clientId}"
            const accessToken = "${accessToken}"

            headers.push({ name: "client_id", value: clientId, comment: 'ClientId of the request'})
            headers.push({ name: "access_token", value: accessToken, comment: 'AccessToken of the request'})
            
            request.headers = headers
            request.url = `${environment}${this.props.basePath}${request.url}`
            request.headerSize = JSON.stringify(request.headers).length
            request.bodySize = JSON.stringify(request.postData).length

            const snnipet = new HttpSnnipet(request)
            this.setState({...this.state, snnipet })
        }
    }

    loadEndpoint = endpoint => {
        return fetch(`/static/content/resources/${endpoint}.json`).then(result => {
            return result.json()
        })
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
        
        return <PanelTab tabs={codes} tabsContent={codesView}/>
    }

    getPathParams = () => {
        let path = this.state.endpoint.path

        const params = []

        while(path.match(/\{(.*?)\}/)) {
            const param = path.match(/\{(.*?)\}/)
            params.push(param[1])

            path = path.replace(/\{(.*?)\}/, "")
        }

        let pathParams = {}

        if (params.length > 0) {
            params.forEach(param => pathParams[param] = '')
            return pathParams
        }

        return undefined
    }

    handleOnChangeQueryParams = result => {
        this.setState({ ...this.state, queryParamsEditor: result })
    }

    handleOnChangePathParams = result => {
        this.setState({ ...this.state, pathParamsEditor: result })
    }

    handleOnChangeBody = result => {
        this.setState({ ...this.state, bodyEditor: result })
    }

    pathReplaceParams = (path, params) => {
        let pathResult = path
        const keys = Object.keys(params)
        keys.forEach(key => {
            pathResult = pathResult.replace(`{${key}}`, params[key])
        })

        return pathResult
    }
    
    sendRequest = () => {
        const { endpoint, bodyEditor, queryParamsEditor, pathParamsEditor } = this.state
        let request = endpoint.request
        
        if (bodyEditor) {
            request.postData.text = bodyEditor
        }

        if (queryParamsEditor) {
            request.queryString = JSON.parse(queryParamsEditor)
        }

        if (pathParamsEditor) {
            let path = endpoint.path
            const pathResult = this.pathReplaceParams(path, JSON.parse(pathParamsEditor))
            request.url = pathResult
        } else {
            request.url = endpoint.path
        }

        this.props.sendRequest(request)
    }

    render() {

        const { endpoint } = this.state
        
        if (!endpoint || !endpoint.request) {
            return <h5>Loading endpoint...</h5>
        }
        
        const jsonObj  = endpoint.request.postData.jsonObj
        const queryParams = endpoint.request.queryString
        const pathParams = this.getPathParams()

        let srcImage = undefined

        if (this.props.settingsLocked) {
            srcImage = <img src="/static/img/locked.png" width="24" height="24"/>
        } else {
            srcImage = <img src="/static/img/unlocked.png" width="24" height="24"/>
        }

        return (
            <div className="endpoint-markdown" style={this.props.visible && { display: 'none'}}>
                <h1 className="endpoint-title">{`${endpoint.verb} - ${endpoint.path}`}</h1>
                <ReactMarkdown source={endpoint.bodyContent} escapeHtml={false}/>
                <div className="dev-console">
                    <div className="dev-console-access">
                        <a className="site-btn site-btn--accent" href={`#console-${this.props.id}`}>Go to console</a>
                        <ButtonAccent onClick={() => this.props.toggleModalSettings()} value={srcImage}/>
                    </div>
                    <div className="dev-console-content" id={`console-${this.props.id}`}>
                        <h2>Console Dev</h2>
                        <div className="request">
                            { 
                                pathParams &&
                                <div className="form">
                                    <FormGroup>
                                        <label className="form__label">Path Params</label>
                                        <Editor
                                            theme="tomorrow_night"
                                            mode="json"
                                            className="editor" 
                                            value={this.state.pathParamsEditor ? this.state.pathParamsEditor : JSON.stringify(pathParams, null, '\t')} 
                                            debounceChangePeriod={1000}
                                            editorProps={{$blockScrolling: 'Infinity'}}
                                            onChange={this.handleOnChangePathParams}
                                            width="100%">
                                            <button type="button" onClick={this.sendRequest}>Send</button>
                                        </Editor>
                                    </FormGroup>
                                </div>
                            }
                            { 
                                queryParams.length > 0 &&
                                <div className="form">
                                    <FormGroup>
                                        <label className="form__label">Query Params</label>
                                        <Editor
                                            theme="tomorrow_night"
                                            mode="json" 
                                            className="editor"
                                            value={this.state.queryParamsEditor ? this.state.queryParamsEditor : JSON.stringify(queryParams, null, '\t')}
                                            debounceChangePeriod={1000}
                                            editorProps={{$blockScrolling: 'Infinity'}}
                                            onChange={this.handleOnChangeQueryParams}
                                            width="100%">
                                             <button type="button" onClick={this.sendRequest}>Send</button>
                                        </Editor>
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
                                            className="editor"
                                            value={this.state.bodyEditor ? this.state.bodyEditor : JSON.stringify(jsonObj, null, '\t')}
                                            debounceChangePeriod={1000}
                                            editorProps={{$blockScrolling: 'Infinity'}}
                                            onChange={this.handleOnChangeBody}
                                            width="100%">
                                            <button type="button" onClick={this.sendRequest}>Send</button>
                                        </Editor>
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
                        {
                            !pathParams && !queryParams.length > 0 && !jsonObj &&
                            <ButtonAccent onClick={this.sendRequest} value="Send Request" />
                        }
                    </div>
                </div>
            </div>
        )
    }
} 

export default connect()(Endpoint)