import React from 'react'

import './Card.scss'

class Card extends React.Component {

    state = {
        active: false
    }

    toggleCardFaq = () => {
        this.setState({...this.state, active: !this.state.active })
    }

    render() {

        const { faq, className, id, title, children } = this.props
        const { active } = this.state
        
        return (
            <div className={`${faq ? 'faq__card' : ''} card ${className}`} id={id}>
                <h4 onClick={this.toggleCardFaq} className="faq__card-title"> {title} {faq && <span className="faq__card-icon"><i className="mdi mdi-chevron-down"/></span>}</h4>
                <div className={`${faq ? 'faq__card-description' : ''} ${ !faq || active ? 'active': '' }`}>
                    {children}                
                </div>
            </div>
        )
    }
}

Card.defaultProps = {
    faq: false,
    className: ''
}

export default Card