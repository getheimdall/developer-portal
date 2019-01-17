import React from 'react'
import Router, { withRouter } from 'next/router'
import Link from 'next/link'
import infoSite from './../../constants/infoSite'
import MenuCollapse from './MenuCollapse'
import ButtonAccent from './../button/ButtonAccent'
import ButtonInvert from './../button/ButtonInvert'
import { handleLogout, isLoggedIn } from '../../utils/authentication'

class MenuMobile extends React.Component {

    Logout = () => {
        handleLogout(function () {
            Router.push('/')
        })
    }
    
    render() {

        const { linksMenu, functionsDev} = infoSite

        return (
            <div className="mobile-menu d-none d-t-block">
                <div className="container">
                    <div className="mobile-menu__logo">
                        <img className="menu__logo-img" width="auto" height="48" src="/static/img/heimdall.png"/>
                    </div>
                    <button type="button" className="mobile-menu__close">
                    <span><i className="mdi mdi-close" aria-hidden="true"/></span>
                    </button>
                    <nav className="mobile-menu__wrapper">
                    <ul className="mobile-menu__ul">
                        { linksMenu && linksMenu.map((link, index) => {
                            let canRender = !link.authentication || (link.authentication && isLoggedIn())
                            if (canRender) {
                                return [
                                    <li key={index} className={`mobile-menu__li ${link.subLinks ? 'mobile-menu__li-collapse' : ''}`}>
                                        { 
                                            link.link  && 
                                            <Link href={link.link}>
                                                <a className={`link link--gray ${this.props.router.pathname === link.link && 'link--gray-active'}`}>{link.name}</a>
                                            </Link>
                                        }
                                        { 
                                            link.subLinks &&
                                            <a className="link link--dark-gray">{link.name}<span><i className="mdi mdi-chevron-down"/></span></a>
                                        }
                                    </li>,
                                    link.subLinks && <MenuCollapse key={`collapse-${index}`} childrenElements={link.subLinks} pathname={this.props.router.pathname}/>
                                ]
                            }
                        })}
                        { !isLoggedIn() && [
                                <li key={0} className="mobile-menu__li"><ButtonAccent value="Sign In" onClick={() => Router.push('/login')}/></li>,
                                <li key={1} className="mobile-menu__li"><ButtonInvert value="Sign Up" onClick={() => Router.push('/register')}/></li>
                        ]}
                        {
                            isLoggedIn() && <MenuCollapse childrenElements={functionsDev} pathname={this.props.router.pathname} />
                        }
                        {
                            isLoggedIn() && <li className="mobile-menu__li"><ButtonInvert value="Logout" onClick={this.Logout}/></li>
                        }
                        
                    </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default withRouter(MenuMobile)