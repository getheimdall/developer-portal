const Container = ({ children, className }) => (
    <div className={`container ${className}`}>
        {children}
    </div>
)

Container.defaultProps = {
    className: ''
}

export default Container