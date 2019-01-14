import React from 'react'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import Container from '../container'
import Row from '../row'
import infoSite from './../../constants/infoSite'
import ButtonAccent from './../button/ButtonAccent'
import ButtonInvert from './../button/ButtonInvert'
import MenuDropDown from './MenuDropdown'
import { handleLogout, isLoggedIn } from '../../utils/authentication'

class Menu extends React.Component {

    Logout = () => {
        handleLogout(function () {
            Router.push('/')
        })
    }

    render() {

        const { info, linksMenu }  = infoSite

        return (
            <div className="menu">
                <Container className="menu__wrapper">
                    <Row>
                        <div className="menu__logo menu__item">
                            <Link href="/">
                                <a href="">
                                    <img className="menu__logo-img" width="auto" height="48" src="/static/img/heimdall.png"/>
                                    <p className="menu__logo-title">{info.titleSite}</p>
                                </a>
                            </Link>
                        </div>
                        <div className="menu__item d-t-none">
                            <nav className="menu__center-nav">
                            <ul>
                                { linksMenu && linksMenu.map((link, index) => {

                                    let canRender = !link.authentication || (link.authentication && isLoggedIn())

                                    if (canRender) {
                                        return (
                                            <li key={index}>
                                                { link.subLinks && <MenuDropDown nameParent={ link.name } childrenElements={link.subLinks} pathname={this.props.router.pathname}/>}
                                                { link.link && <Link href={link.link}><a className={`link link--gray ${this.props.router.pathname === link.link ? 'link--gray-active':''}`}>{link.name}</a></Link>}
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                            </nav>
                        </div>
                            <div className="menu__item">
                                <nav className="menu__right-nav d-l-none">
                                <ul>
                                    { !isLoggedIn() && [
                                            <li key={0}><ButtonAccent value="Sign In" onClick={() => Router.push('/login')}/></li>,
                                            <li key={1}><ButtonInvert value="Sing Up" onClick={() => Router.push('/register')}/></li>
                                    ]}
                                    
                                    {
                                        isLoggedIn() && <li><ButtonInvert value="Logout" onClick={this.Logout}/></li>
                                    }
                                </ul>
                                </nav>
                                <div className="d-none d-t-block">
                                <button type="button" className="menu__mobile-button">
                                    <span><i className="mdi mdi-menu" aria-hidden="true"></i></span>
                                </button>
                                </div>
                            </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(Menu)