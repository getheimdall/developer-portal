import Menu from './../menu'
import MenuMobile from './../menu/MenuMobile'
import EndMenu from './../menu/EndMenu'
import Footer from './../footer'
import FooterMenu from './../menu/FooterMenu'

const Page = ({ children }) => (
    <div className="page">
        <Menu />
        <MenuMobile />
        { children }
        <EndMenu />
        <FooterMenu />
        <Footer />
    </div>
)

export default Page