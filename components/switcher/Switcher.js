const Switcher = () => (
    <div className="style-switcher">
        <span className="style-switcher__control"></span>
        <div className="style-switcher__list">
            <a className="style-switcher__link style-switcher__link--red active" href="/static/css/red.css"></a>
            <a className="style-switcher__link style-switcher__link--blue" href="/static/css/blue.css"></a>
            <a className="style-switcher__link style-switcher__link--violet" href="/static/css/violet.css"></a>
            <a className="style-switcher__link style-switcher__link--green" href="/static/css/green.css"></a> <br/>
            <a className="style-switcher__link style-switcher__link--red-gradient" href="/static/css/red-gradient.css"></a>
            <a className="style-switcher__link style-switcher__link--blue-gradient" href="/static/css/blue-gradient.css"></a>
            <a className="style-switcher__link style-switcher__link--violet-gradient" href="/static/css/violet-gradient.css"></a>
            <a className="style-switcher__link style-switcher__link--green-gradient" href="/static/css/green-gradient.css"></a>
        </div>
    </div>  
)

export default Switcher