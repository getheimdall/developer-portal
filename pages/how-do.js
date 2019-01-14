import Page from '../components/page'
import SectionPage from './../components/section/SectionPage'
import Row from '../components/row'
import Col from '../components/col'

import './styles/como-funciona.scss'

const HowDo = () => (
    <Page>
        <SectionPage title="How do" className="section--last section--top-space">
            <Row>
                <Col className="description">
                    <Row>
                        <Col g={2} m={2} t={2} l={2}>
                            <img src="/static/img/img_feature_1.png" alt="" />
                        </Col>
                        <Col g={10} m={10} t={10} l={10}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col className="description">
                    <Row>
                        <Col g={2} m={2} t={2} l={2}>
                            <img src="/static/img/img_feature_2.png" alt="" />
                        </Col>
                        <Col g={10} m={10} t={10} l={10}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col className="description">
                    <Row>
                        <Col g={2} m={2} t={2} l={2}>
                            <img src="/static/img/img_feature_3.png" alt="" />
                        </Col>
                        <Col g={10} m={10} t={10} l={10}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </SectionPage>
    </Page>
)

export default HowDo