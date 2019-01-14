import Page from './../components/page'
import SectionPage from './../components/section/SectionPage'
import Row from '../components/row'
import Col from '../components/col'
import Header from './../components/header/Header'

const Plataform = () => (
   <Page>
       <Header title="About Platform" description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur.`} image={'/static/img/notebook.png'}>
        </Header>
        <SectionPage className="section--last">
            <Row align="center">
                <Col g={4}>
                    <img src={'/static/img/img_feature_1.png'} alt="" width="100" heigh="auto"/>
                    <h4>Lorem ipsum dolor</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur.
                    </p>
                </Col>
                <Col g={4}>
                    <img src={'/static/img/img_feature_2.png'} alt="" width="100" heigh="auto"/>
                    <h4>Lorem ipsum</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur.
                    </p>
                </Col>
                <Col g={4}>
                    <img src={'/static/img/img_feature_3.png'} alt="" width="100" heigh="auto"/>
                    <h4>Lorem ipsum sit</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur.
                    </p>
                </Col>
            </Row>
        </SectionPage>
   </Page>
)

export default Plataform