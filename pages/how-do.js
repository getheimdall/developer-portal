import Page from '../components/page'
import SectionPage from './../components/section/SectionPage'
import Row from '../components/row'
import Col from '../components/col'
import infoSite from '../constants/infoSite'

// import './styles/como-funciona.scss'

const HowDo = () => (
    <Page>
        <SectionPage title="How do" className="section--last section--top-space">
            <Row>
                <Col className="description">
                    <Row>
                        <Col g={2} m={2} t={2} l={2}>
                            <img src="/static/img/img_feature_9.png" alt="" width="100" height="auto"/>
                        </Col>
                        <Col g={10} m={10} t={10} l={10}>
                            <p> 
                                The {infoSite.info.titleSite} communicate with Heimdall using Rest. To create app is necessary authentication by Login 
                                (email and password of the developer). By signing up for {infoSite.info.titleSite} and registering your application, you 
                                automatically receive a ClientID and an AccessToken to begin making use of the methods available through the APIs.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </SectionPage>
    </Page>
)

export default HowDo