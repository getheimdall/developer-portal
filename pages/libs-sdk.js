import Page from './../components/page'
import SectionPage from './../components/section/SectionPage'
import Row from './../components/row'
import Col from './../components/col'

const LibrariesSDK = () => (
    <Page>
         <SectionPage className="section--last section--top-space" title="Libraries of SDKs">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <br/><br/>
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

export default LibrariesSDK