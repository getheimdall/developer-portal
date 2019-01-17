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
        { name: 'Platform', link: '/platform' },
        { name: 'How do', link: '/how-do' },
        { name: 'Updates history', link: '/updates-api' }
    ],
    pathname: 'http://localhost:3000/platform'
}

export default MenuCollapse