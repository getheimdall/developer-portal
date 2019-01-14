import Container from './../container'
import Row from './../row'
import Col from './../col'
import infoSite from './../../constants/infoSite'

const Footer = () => (
    <div className="footer">
        <Container>
            <Row align="center">
                <Col>
                    <p>© 2018 {infoSite.info.titleDescription} | Made by
                        <a href={infoSite.info.linkOwner} target="_blank" className="link link--gray">{` ${infoSite.info.owner}`}</a>
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Footer