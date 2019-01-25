import Row from '../row'
import Col from '../col'

const Form = ({ children, title, description, backgroundImage }) => (
    <Row className="form">
        <Col g={12} m={12}>
            <div className={`form__card card ${backgroundImage ? 'form__card--background' : ''}`} 
                style={ backgroundImage ? {backgroundImage: `url('${backgroundImage}')`} : { paddingRight: 30 } } >
            <div className={ backgroundImage ? 'form__wrap' : 'container'}>
                <h4>{title}</h4>
                <p>{description}</p>
                <form className="form__form js-form">
                    { children }
                </form>
            </div>
            </div>
        </Col>
    </Row>
)

export default Form