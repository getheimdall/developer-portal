import './button.scss'

const ButtonDark = ({ id, className, onClick, value, disable }) => (
    <button id={id} type="button" className={`site-btn site-btn--dark ${disable ? 'disable': ''} ${className}`} onClick={onClick} disabled={disable}>{value}</button>
)

ButtonDark.defaultProps = {
    disable: false,
    className: ''
}

export default ButtonDark