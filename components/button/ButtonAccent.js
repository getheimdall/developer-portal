import './button.scss'

const ButtonAccent = ({ id, className, onClick, value, disable }) => (
    <button id={id} type="button" className={`site-btn site-btn--accent ${disable ? 'disable': ''} ${className}`} onClick={onClick} disabled={disable}>{value}</button>
)

ButtonAccent.defaultProps = {
    disable: false,
    className: ''
}

export default ButtonAccent