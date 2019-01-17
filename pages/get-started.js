import Link from 'next/link'
import Page from './../components/page'
import SectionPage from './../components/section/SectionPage'
import infoSite from './../constants/infoSite'
import Row from '../components/row'
import Col from '../components/col'

const GetStarted = () => (
    <Page>
        <SectionPage className="section--last section--top-space" title="Get started">
            <Row>
                <Col className="description">
                    <Row>
                        <Col g={2} m={2} t={2} l={2} id="register">
                            <img src="/static/img/img_feature_10.png" alt="" width="100" height="auto"/>
                        </Col>
                        <Col g={10} m={10} t={10} l={10}>
                            <p> 
                                The first step of the get started, you must create one account in {infoSite.info.titleSite} <Link href="/register">
                                <a className="link link-gray">here.</a></Link> Insert the informations, read and accept the terms and click in Create 
                                account. See example below:
                            </p>
                        </Col>
                        <Col>
                            <img src="/static/img/register-example.png" alt="" width="100%" height="auto"/>
                        </Col>
                        <Col><hr/><br/></Col>
                        <Col g={2} m={2} t={2} l={2} id="login">
                            <img src="/static/img/img_feature_10.png" alt="" width="100" height="auto"/>
                        </Col>
                        <Col g={10} m={10} t={10} l={10}>
                            <p> 
                                Now, you can sign in {infoSite.info.titleSite}. Just insert the informations that you used before.
                            </p>
                        </Col>
                        <Col>
                            <img src="/static/img/login-example.png" alt="" width="100%" height="auto"/>
                        </Col>
                        <Col><hr/><br/></Col>
                        <Col g={2} m={2} t={2} l={2} id="first-app">
                            <img src="/static/img/img_feature_10.png" alt="" width="100" height="auto"/>
                        </Col>
                        <Col g={10} m={10} t={10} l={10}>
                            <p> 
                                For now, you dont have apps! To create, just click in Create App, insert the informations and submit.
                            </p>
                        </Col>
                        <Col>
                            <img src="/static/img/no-apps.png" alt="" width="100%" height="auto"/>
                        </Col>
                        <Col>
                            <img src="/static/img/first-app.png" alt="" width="100%" height="auto"/>
                        </Col>
                        <Col><hr/><br/></Col>
                        <Col g={2} m={2} t={2} l={2} id="finish">
                            <img src="/static/img/img_feature_10.png" alt="" width="100" height="auto"/>
                        </Col>
                        <Col g={10} m={10} t={10} l={10}>
                            <p> 
                                Awesome!! Now just create your solutions using your app with credentials created. To see this credentials, click in 'Details'.
                            </p>
                            <p>If you want to delete the App, click Delete or click Details and then Delete.</p>
                        </Col>
                        <Col>
                            <img src="/static/img/first-app-created.png" alt="" width="100%" height="auto"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </SectionPage>
    </Page>
)

export default GetStarted