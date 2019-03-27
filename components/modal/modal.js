import React from 'react'
import Card from './../card'

import './modal.scss'

const Modal = ({title, visible, children, closeModal}) => (
    <React.Fragment>
        { visible &&
            <React.Fragment> 
                <div className="modal">
                    <Card className="modal-popup" title={title}>
                        <div className="close"><a onClick={() => closeModal()}>X</a></div>
                        {children}
                    </Card>
                </div>
                <div className="backdrop"/>
            </React.Fragment>
        }
    </React.Fragment>
)

export default Modal 