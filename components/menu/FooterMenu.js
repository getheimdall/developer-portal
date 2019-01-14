import Link from 'next/link'
import { withRouter } from 'next/router'
import Container from './../container'
import Row from '../row'
import Col from '../col'

const FooterMenu = ({ router }) => (
    <Container className="footer-menu">
        <Row>
            <Col>
                <nav className="footer-menu__nav">
                    <ul>
                        <li><Link href="/contact"><a className={`link link--gray ${router.pathname === '/contact' ? 'link--gray-active':''}`}>Contact</a></Link></li>
                        <li><Link href="/updates-api"><a className={`link link--gray ${router.pathname === '/updates-api' ? 'link--gray-active':''}`}>Updates history</a></Link></li>
                        <li><Link href="/platform"><a className={`link link--gray ${router.pathname === '/platform' ? 'link--gray-active':''}`}>Plataform</a></Link></li>
                    </ul>
                </nav>
                <p className="footer-menu__social">
                    <a className="link link--gray" href="">
                        <i className="mdi mdi-twitter" aria-hidden="true"></i>
                    </a>
                    <a className="link link--gray" href="">
                        <i className="mdi mdi-facebook" aria-hidden="true"></i>
                    </a>
                    <a className="link link--gray" href="">
                        <i className="mdi mdi-linkedin" aria-hidden="true"></i>
                    </a>
                    <a className="link link--gray" href="">
                        <i className="mdi mdi-instagram" aria-hidden="true"></i>
                    </a>
                </p>
            </Col>
        </Row>
    </Container>   
)

export default withRouter(FooterMenu)