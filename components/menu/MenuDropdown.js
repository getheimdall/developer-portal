import Link from 'next/link'

const MenuDropDown = ({ nameParent, childrenElements, pathname }) => (
    <div className="menu__dropdown">
        <a className="link link--gray menu__dropdown-btn">{nameParent}
            <span><i className="mdi mdi-chevron-down"/></span>
        </a>
        <div className="menu__dropdown-content menu__dropdown-content--home">
            {childrenElements.map((element, index) => {
                return <Link key={index} href={element.link}>
                    <a className={`link link--gray ${pathname === element.link ? 'link--gray-active': ''}`}>{element.name}</a>
                </Link>
            })}
        </div>
    </div>
)

MenuDropDown.defaultProps = {
    nameParent: 'Sobre',
    childrenElements: [
        { name: 'Plataforma', link: '/plataforma' },
        { name: 'Como funciona', link: '/como-funciona' },
        { name: 'Histórico de atualizações', link: '/historico-api' }
    ],
    pathname: '/como-funciona'
}

export default MenuDropDown