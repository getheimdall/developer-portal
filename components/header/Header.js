import Container from './../container/Container'
import Row from '../row'

const Header = ({ title, description, children, image}) => {
    return (
        <header className="header-home header-home--color">
            <div className="background background--wave">
                <Container className="background background--right background--features background--header" style={{backgroundImage: `url('/static/img/img_bg_messenger_left.png')`}}>
                    <Row className="header-home__webapp-img-wrap">
                        {image && <img alt="" className="header-home__webapp-img" src={image} />}
                        <div className="col-12">
                            <h2 className="header-home__title">{title}</h2>
                            <p className="header-home__description header-home__description--webapp">{description}</p>
                            {children}
                        </div>
                    </Row>
                </Container>
            </div>
        </header>
    )
}

export default Header