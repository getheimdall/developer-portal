import Page from './../components/page/Page'
import SectionPage from '../components/section/SectionPage'
import AuthorizationRoute from './../components/hoc/AuthorizationRoute'

const Dashboard = () => (
    <Page>
        <SectionPage className="section--last section--top-space" title="Dashboard Dev" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    </Page>
)

export default AuthorizationRoute()(Dashboard)