const Col = ({ g, m, t, l, children, className, id }) => (
    <div id={id} className={`col-${g} col-m-${m} col-t-${t} col-l-${l} ${className}`}>
        {children}
    </div>
)

Col.defaultProps = {
    g: 12,
    m: 12,
    t: 12,
    l: 12,
    className: ''
}

export default Col