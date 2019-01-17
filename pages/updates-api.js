import Page from './../components/page'
import SectionPage from './../components/section/SectionPage'

const UpdatesApi = () => (
    <Page>
        <SectionPage className="section--last section--top-space" title="Updates history">
            <div>
                <h5><strong>Version: </strong>1.0.0</h5>
                <h5><strong>Features: </strong></h5>
                <ul>
                    <li>Sign Up/Sign In Developer</li>
                    <li>Create, edit and remove App</li>
                    <li>View ClientID and AccessToken of the App</li>
                </ul>
            </div>
        </SectionPage>
    </Page>
)

export default UpdatesApi