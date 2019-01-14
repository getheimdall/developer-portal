import './button.scss'

const ButtonInvert = ({ id, className, onClick, value, disable }) => (
    <button id={id} type="button" className={`site-btn site-btn--invert ${disable ? 'disable': ''} ${className}`} onClick={onClick} disabled={disable}>{value}</button>
)

ButtonInvert.defaultProps = {
    disable: false,
    className: ''
}

export default ButtonInvert