import Link from 'next/link'
import Page from './../components/page'
import SectionPage from './../components/section/SectionPage'

const ApiBrowser = () => {
    return ( 
        <Page>
            <SectionPage className="section--last section--top-space" title="Api Browser">
                <Link href="/">
                    <a className="link link--gray">Open swagger</a>
                </Link>
            </SectionPage>
        </Page>
    )
}

export default ApiBrowser