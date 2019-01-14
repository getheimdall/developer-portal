const Section = ({ children, className, id }) => (
    <div id={id} className={`section ${className}`}>
        {children}
    </div>
)

export default Section