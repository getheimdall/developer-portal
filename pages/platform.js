import Page from './../components/page'
import SectionPage from './../components/section/SectionPage'
import Row from './../components/row'
import Col from './../components/col'
import Header from './../components/header/Header'
import infoSite from './../constants/infoSite'

const Plataform = () => (
   <Page>
       <Header title="About Platform" description={`The ${infoSite.info.titleSite} is a open source project developed by Conductor Tecnologia SA and aims 
            facilite the integration of the API's, Apps and Access Tokens from Heimdall. Built to give developers agility to start their applications quickly 
            and be able to perform the tests using the access tokens.`} image={'/static/img/notebook.png'}>
        </Header>
        <SectionPage className="section--last">
            <Row align="center">
                <Col g={4}>
                    <img src={'/static/img/img_feature_7.png'} alt="" width="100" heigh="auto"/>
                    <h4>API's</h4>
                    <p>
                        The API show the SwaggerUI from application with all resources exported by Heimdall.
                    </p>
                </Col>
                <Col g={4}>
                    <img src={'/static/img/img_feature_1.png'} alt="" width="100" heigh="auto"/>
                    <h4>Apps</h4>
                    <p>
                        The developer is able to own multiple Apps inside ${infoSite.info.titleSite}, an App represents an external application that developer
                        wants to register in Heimdall. The App can consume API listed in ${infoSite.info.titleSite}. Every App is created has it's own ClientID
                        and AccessToken. Its most cases is used to identify the App in request.
                    </p>
                </Col>
                <Col g={4}>
                    <img src={'/static/img/img_feature_8.png'} alt="" width="100" heigh="auto"/>
                    <h4>AccessToken</h4>
                    <p>
                        Access Tokens are tokens used to provide basic access througth Heimdall. Its are linked to an App.
                    </p>
                </Col>
            </Row>
        </SectionPage>
   </Page>
)

export default Plataform