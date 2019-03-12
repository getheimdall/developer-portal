const FormGroup = ({ children, className }) => (
    <div className={`form__form-group ${className ? className : ''}`}>
        {children}
    </div>
)

export default FormGroup