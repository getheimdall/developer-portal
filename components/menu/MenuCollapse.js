import Link from 'next/link'

const MenuCollapse = ({ childrenElements, pathname }) => (
    <li className="mobile-menu__ul--collapsed">
        <ul className="mobile-menu__ul">
            {childrenElements.map((element, index) => {
                return  <li key={index} className="mobile-menu__li">
                            <Link href={element.link}>
                                <a className={`link link--gray ${pathname === element.link ? 'link--gray-active' : ''}`}>{element.name}</a>
                            </Link>
                        </li>
            })}
        </ul>
    </li>
)

MenuCollapse.defaultProps = {
    childrenElements: [
        { name: 'Plataforma', link: '/plataforma' },
        { name: 'Como funciona', link: '/como-funciona' },
        { name: 'Histórico de atualizações', link: '/historico-api' }
    ],
    pathname: 'http://localhost:3000/como-funciona'
}

export default MenuCollapse