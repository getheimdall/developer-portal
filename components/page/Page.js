import Menu from './../menu'
import MenuMobile from './../menu/MenuMobile'
import EndMenu from './../menu/EndMenu'
import Footer from './../footer'
import FooterMenu from './../menu/FooterMenu'

const Page = ({ children, footer }) => (
    <div className="page">
        <Menu />
        <MenuMobile />
        { children }
        {
            footer && 
            [
                <EndMenu />,
                <FooterMenu />,
                <Footer />
            ]
        }
    </div>
)

Page.defaultProps = {
    footer: true
}

export default Page