const Editor = props => {
    if (typeof window !== 'undefined') {
        const Ace = require('react-ace').default
        require('brace/mode/json')
        require('brace/theme/tomorrow_night')
    
        return (
            <div className={props.className}>
                <Ace {...props}/>
                {props.children}
            </div>
        )
    }
    
    return null
}

export default Editor