import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'
import Page from './../components/page'
import SectionPage from './../components/section/SectionPage'

const UpdatesApi = ({ releases }) => (
    <Page>
        <SectionPage className="section--last section--top-space" title="Updates history">
            <div>
                {
                    releases && 
                    releases.map((release, index) => {
                        return <div key={index}>
                            <h5><strong>Version: </strong>{release.tag_name}</h5>
                            <h5><strong>Published at: </strong><Moment format="YYYY/MM/DD">{release.created_at}</Moment></h5>
                            <h5><strong>Features: </strong></h5>
                            <ReactMarkdown source={release.body} />
                            <hr/>
                        </div>
                    })
                }
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

UpdatesApi.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/repos/getheimdall/heimdall/releases')
    const json = await res.json()
    return { releases: json }
}

export default UpdatesApi