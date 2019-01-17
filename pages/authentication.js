import Page from './../components/page'
import SectionPage from './../components/section/SectionPage'
import Row from '../components/row'
import Col from '../components/col'

const Authentication = () => (
    <Page>
        <SectionPage className="section--last section--top-space" title="Roles of Authentication">
            <Row>
                <Col g={2} m={2} t={2} l={2}>
                    <img src="/static/img/img_feature_3.png" alt="" width="100" height="auto"/>
                </Col>
                <Col g={10} m={10} t={10} l={10}>
                    <p>
                        The authentication process of requests for the Heimdall of APIs is performed from the Access Token sending along with the ClientID 
                        in the header of the requests. The generation of this information occurs when the developer creates the application in the 
                        'Developer -> Create App' menu and they automatically generated this credentials. To view the created token just refer to the 
                        "Developer -> My Applications" section.
                    </p>
                </Col>
                <Col><hr/><br/></Col>
                <Col g={2} m={2} t={2} l={2}>
                    <img src="/static/img/img_feature_11.png" alt="" width="100" height="auto"/>
                </Col>
                <Col g={10} m={10} t={10} l={10}>
                    <h5>Transport Protocol</h5>
                    <p>
                        All information passed through our APIs is performed through the HTTPS protocol, which guarantees a secure channel and exempts the encryption
                        of the tokens or the contents of the request.
                    </p>
                </Col>
            </Row>
        </SectionPage>
    </Page>
)

export default Authentication