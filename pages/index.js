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
    
    handleClickHowDo() {
        Router.push('/how-do')
    }

    render() {
        return (
            <Page>
                <Header 
                    title="Developer Portal" 
                    description="Manager your apps easily, get credentials and connect to the Sandbox."
                    image="/static/img/img_bg_webapp.png">
                    <div className="header-home__btns header-home__btns-webapp">
                        <ButtonAccent value="How do" onClick={this.handleClickHowDo}/>
                        { !isLoggedIn() && <ButtonInvert value="Sign Up" onClick={this.handleClickRegister}/> }
                    </div>
                </Header>
                <br/><br/>
                <SectionPage title="See some features!" className="features">
                    <Row className="feature__card" align="center">
                        <Col g={4} m={6} t={6}>
                            <Card>
                                <img alt="" src="/static/img/img_feature_1.png" width="100" height="auto"/>
                                <h5>Manager apps</h5>
                            </Card>
                        </Col>
                        <Col g={4} m={6} t={6}>
                            <Card>
                                <img alt="" src="/static/img/img_feature_2.png" width="100" height="auto"/>
                                <h5>Speed</h5>
                            </Card>
                        </Col>
                        <Col g={4} m={6} t={6}>
                            <Card>
                                <img alt="" src="/static/img/img_feature_3.png" width="100" height="auto"/>
                                <h5>Security</h5>
                            </Card>
                        </Col>
                        <Col g={4} m={6} t={6}>
                            <Card>
                                <img alt="" src="/static/img/img_feature_4.png" width="100" height="auto"/>
                                <h5>Documentation</h5>
                            </Card>
                        </Col>
                        <Col g={4} m={6} t={6}>
                            <Card>
                                <img alt="" src="/static/img/img_feature_5.png" width="100" height="auto"/>
                                <h5>Charts</h5>
                            </Card>
                        </Col>
                        <Col g={4} m={6} t={6}>
                            <Card>
                                <img alt="" src="/static/img/img_feature_6.png" width="100" height="auto"/>
                                <h5>Traces Log</h5>
                            </Card>
                        </Col>
                    </Row>
                </SectionPage>
            </Page>
        )
    }
}

export default Index