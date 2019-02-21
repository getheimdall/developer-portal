import React from 'react'

class Api extends React.Component {

    componentDidMount() {
        
    }

    componentWillReceiveProps(nextProps) {
        
    }
    

    render() {

        const { file } = this.props

        if (!file) {
            return <div><h1>Aguarde...</h1></div>
        }
    }
}

export default Api