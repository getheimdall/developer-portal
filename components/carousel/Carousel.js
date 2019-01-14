import Row from '../row'
import Col from '../col'
import Section from '../section'
import Container from '../container'

const Carousel = ({ children }) => (
    <Section>
        <Container>
            <Row>
                <Col>
                    <h3 className="section__title">What users think about Sigma</h3>
                </Col>
            </Row>
            <Row className="carousel">
                <Col>
                    <div className="slider carousel__slider--think">
                    <div className="carousel__slide-wrap">
                        <div className="carousel__slide">
                        <div className="carousel__slide-avatar">
                            <img alt="" className="carousel__slide-avatar-img" src="/static/img/img_believe_avatar.png" />
                            <p className="carousel__slide-avatar-name">Li Chang</p>
                            <p className="carousel__slide-avatar-work">Director Product Development, Company Ltd.</p>
                        </div>
                        <div className="carousel__slide-quote">
                            <h4 className="carousel__slide-quote-title">Elegant and efficient</h4>
                            <p className="carousel__slide-quote-description">“ An elegant, yet efficient, magic tool! I love the
                            overall design and the simple way that you can update or change a process. Awesome product. The
                            guys have put huge effort into this app and focused on simplicity and ease of use. “</p>
                        </div>
                        </div>
                    </div>
                    <div className="carousel__slide-wrap">
                        <div className="carousel__slide">
                        <div className="carousel__slide-avatar">
                            <img alt="" className="carousel__slide-avatar-img" src="/static/img/img_believe_avatar.png" />
                            <p className="carousel__slide-avatar-name">Li Chang</p>
                            <p className="carousel__slide-avatar-work">Director Product Development, Company Ltd.</p>
                        </div>
                        <div className="carousel__slide-quote">
                            <h4 className="carousel__slide-quote-title">Elegant and efficient</h4>
                            <p className="carousel__slide-quote-description">“ An elegant, yet efficient, magic tool! I love the
                            overall design and the simple way that you can update or change a process. Awesome product. The
                            guys have put huge effort into this app and focused on simplicity and ease of use. “</p>
                        </div>
                        </div>
                    </div>
                    <div className="carousel__slide-wrap">
                        <div className="carousel__slide">
                        <div className="carousel__slide-avatar">
                            <img alt="" className="carousel__slide-avatar-img" src="/static/img/img_believe_avatar.png" />
                            <p className="carousel__slide-avatar-name">Li Chang</p>
                            <p className="carousel__slide-avatar-work">Director Product Development, Company Ltd.</p>
                        </div>
                        <div className="carousel__slide-quote">
                            <h4 className="carousel__slide-quote-title">Elegant and efficient</h4>
                            <p className="carousel__slide-quote-description">“ An elegant, yet efficient, magic tool! I love the
                            overall design and the simple way that you can update or change a process. Awesome product. The
                            guys have put huge effort into this app and focused on simplicity and ease of use. “</p>
                        </div>
                        </div>
                    </div>
                    <div className="carousel__slide-wrap">
                        <div className="carousel__slide">
                        <div className="carousel__slide-avatar">
                            <img alt="" className="carousel__slide-avatar-img" src="/static/img/img_believe_avatar.png" />
                            <p className="carousel__slide-avatar-name">Li Chang</p>
                            <p className="carousel__slide-avatar-work">Director Product Development, Company Ltd.</p>
                        </div>
                        <div className="carousel__slide-quote">
                            <h4 className="carousel__slide-quote-title">Elegant and efficient</h4>
                            <p className="carousel__slide-quote-description">“ An elegant, yet efficient, magic tool! I love the
                            overall design and the simple way that you can update or change a process. Awesome product. The
                            guys have put huge effort into this app and focused on simplicity and ease of use. “</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Section>
)

export default Carousel