import './button.scss'

const ButtonLight = ({ id, className, onClick, value, disable }) => (
    <button id={id} type="button" className={`site-btn site-btn--light ${disable ? 'disable': ''} ${className}`} onClick={onClick} disabled={disable}>{value}</button>
)

ButtonLight.defaultProps = {
    disable: false,
    className: ''
}

export default ButtonLight