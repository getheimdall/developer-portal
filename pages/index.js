import React from 'react'
import Router from 'next/router'
import Page from './../components/page'
import Header from '../components/header'
import ButtonAccent from '../components/button/ButtonAccent'
import ButtonInvert from '../components/button/ButtonInvert'
import SectionPage from '../components/section/SectionPage'
import Row from './../components/row/Row'
import Col from '../components/col'
import Card from './../components/card/Card'
import { isLoggedIn } from '../utils/authentication'

import './styles/index.scss'

class Index extends React.Component {

    handleClickRegister() {
        Router.push('/register')
    }

    render() {
        return (
            <Page>
                <Header 
                    title="Lorem ipsum dolor sit amet!" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    image="/static/img/img_bg_webapp.png">
                    <div className="header-home__btns header-home__btns-webapp">
                        <ButtonAccent value="Lorem ipsum dolor"/>
                        { !isLoggedIn() && <ButtonInvert value="How use?" onClick={this.handleClickRegister}/> }
                    </div>
                </Header>
                <br/><br/>
                <SectionPage title="Lorem ipsum dolor sit amet!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                className="features">
                    <Row className="feature__card" align="center">
                        <Col g={4} m={6} t={6}>
                            <Card>
                                <img alt="" src="/static/img/img_feature_1.png" width="100" height="auto"/>
                                <h5>Lorem Ipsum</h5>
                            </Card>
                        </Col>
                        <Col g={4} m={6} t={6}>
                            <Card>
                                <img alt="" src="/static/img/img_feature_2.png" width="100" height="auto"/>
                                <h5>Lorem ipsum dolor sit amet</h5>
                            </Card>
                        </Col>
                        <Col g={4} m={6} t={6}>
                            <Card>
                                <img alt="" src="/static/img/img_feature_3.png" width="100" height="auto"/>
                                <h5>Lorem ipsum dolor</h5>
                            </Card>
                        </Col>
                        <Col g={4} m={6} t={6}>
                            <Card>
                                <img alt="" src="/static/img/img_feature_4.png" width="100" height="auto"/>
                                <h5>Lorem ipsum dolor sit amet</h5>
                            </Card>
                        </Col>
                        <Col g={4} m={6} t={6}>
                            <Card>
                                <img alt="" src="/static/img/img_feature_5.png" width="100" height="auto"/>
                                <h5>Lorem ipsum dolor sit amet consectetur</h5>
                            </Card>
                        </Col>
                        <Col g={4} m={6} t={6}>
                            <Card>
                                <img alt="" src="/static/img/img_feature_6.png" width="100" height="auto"/>
                                <h5>Lorem ipsum dolor</h5>
                            </Card>
                        </Col>
                    </Row>
                </SectionPage>
                <SectionPage className="section--dark" title="Sandbox" description="Create, edit and remove apps in production time.">
                    <Row align="center">
                        <Col>
                            { !isLoggedIn() && <ButtonAccent value="Sign Up" onClick={this.handleClickRegister}/> }
                            { isLoggedIn() && <ButtonAccent value="View apps" onClick={() => Router.push('/apps')} /> }
                        </Col>
                    </Row>
                </SectionPage>
                <SectionPage title="Libraries of SDKs" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit!">
                    <Row align="center">
                        <Col g={3} m={3}>
                            <a><img src="/static/img/img_logo_gray_1.png" alt="" /></a>
                        </Col>
                        <Col g={3} m={3}>
                            <a><img src="/static/img/img_logo_gray_1.png" alt="" /></a>
                        </Col>
                        <Col g={3} m={3}>
                            <a><img src="/static/img/img_logo_gray_1.png" alt="" /></a>
                        </Col>
                        <Col g={3} m={3}>
                            <a><img src="/static/img/img_logo_gray_1.png" alt="" /></a>
                        </Col>
                    </Row>
                </SectionPage>
            </Page>
        )
    }
}

export default Index