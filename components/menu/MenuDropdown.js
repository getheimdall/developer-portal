import Link from 'next/link'

const MenuDropDown = ({ nameParent, childrenElements, pathname, imgParent }) => (
    <div className="menu__dropdown">
        { 
            imgParent && 
            <a className="link link--gray menu__dropdown-btn">
                <img alt={nameParent} src={imgParent} style={{verticalAlign: 'middle'}}/>
            </a>
        }
        {
            !imgParent &&
            <a className="link link--gray menu__dropdown-btn">{nameParent}
                <span><i className="mdi mdi-chevron-down"/></span>
            </a>
        }
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
    nameParent: 'About',
    childrenElements: [
        { name: 'Platform', link: '/platform' },
        { name: 'How do', link: '/how-do' },
        { name: 'Updates history', link: '/updates-api' }
    ],
    pathname: 'http://localhost:3000/platform'
}

export default MenuDropDown