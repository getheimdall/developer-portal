const Row = ({ children, className, align }) => (
    <div className={`row ${className}`} style={{ textAlign: align }}>
        {children}
    </div>
)

Row.defaultProps = {
    className: '',
    align: 'left'
}

export default Row