import React from 'react'
import { connect } from 'react-redux'

class LoadingEndpoints extends React.Component {

    componentDidUpdate() {
        if (this.props.endpointsCounter === this.props.totalEndpoints) {
            this.props.enableEndpoints()
        }
    }

    render() {

        return (
            <div align="center">
                <img src="/static/img/loading.gif" alt="loading" align="bottom"/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        endpointsCounter: state.endpoints
    }
}

export default connect(mapStateToProps)(LoadingEndpoints)