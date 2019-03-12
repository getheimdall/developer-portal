const Editor = props => {
    if (typeof window !== 'undefined') {
        const Ace = require('react-ace').default
        require('brace/mode/json')
        require('brace/theme/tomorrow_night')
    
        return <Ace {...props}/>
    }
    
    return null
}

export default Editor