import Page from './../components/page'
import SectionPage from './../components/section/SectionPage'
import Row from '../components/row'
import Col from '../components/col'
import Card from '../components/card'
import infoSite from './../constants/infoSite'

import './styles/modelagem.scss'

const ModelingApi = () => (
    <Page>
        <SectionPage className="section--last section--top-space" title="Modeling API">
            <Row>
                <Col className="card-modelagem">
                    <Card faq title="Pattern and Tecnologies">
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </Card>
                </Col>
                <Col className="card-modelagem">
                    <Card faq title="Endpoints">
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet:
                            </p>
                            <p>URL of the Sandbox: https://sandbox.portaldev.com.br</p>
                            <p>URL of the Production: https://api.portaldev.com.br</p>
                        </div>
                    </Card>
                </Col>
                <Col className="card-modelagem">
                    <Card faq title="Result codes">
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            </p>
                            <Row>
                                <Col>
                                    <Row>
                                        <Col g={1} m={1} t={1} l={1} className="colum-center">200</Col>
                                        <Col g={11} m={11} t={11} l={11}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col g={1} m={1} t={1} l={1} className="colum-center">201</Col>
                                        <Col g={11} m={11} t={11} l={11}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col g={1} m={1} t={1} l={1} className="colum-center">400</Col>
                                        <Col g={11} m={11} t={11} l={11}>
                                            <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore.</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col g={1} m={1} t={1} l={1} className="colum-center">401</Col>
                                        <Col g={11} m={11} t={11} l={11}>
                                            <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore.</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col g={1} m={1} t={1} l={1} className="colum-center">403</Col>
                                        <Col g={11} m={11} t={11} l={11}>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col g={1} m={1} t={1} l={1} className="colum-center">404</Col>
                                        <Col g={11} m={11} t={11} l={11}>
                                            <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore.</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col g={1} m={1} t={1} l={1} className="colum-center">5xx</Col>
                                        <Col g={11} m={11} t={11} l={11}>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
        </SectionPage>
    </Page>
)

export default ModelingApi
