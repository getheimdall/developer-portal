import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import NProgress from 'next-nprogress/component'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import infoSite from './../constants/infoSite'
import withReduxStore from '../lib/redux-store'
import { auth } from '../utils/http'
import 'react-toastify/dist/ReactToastify.css'

import variables from '../static/scss/settings/variables.scss'
import './styles/_app.scss'

class MyApp extends App {

  state = {
    intervalAuthId: 0,
    environmentConfigured: false,
    environmentVerified: false 
  }

  componentDidMount() {
    const intervalAuthId = setInterval(this.getNewAuth, process.env.REACT_PORTAL_TIME_AUTH)
    this.setState({ ...this.state, intervalAuthId: intervalAuthId })
    this.getNewAuth()
  }

  componentDidUpdate() {
    if (!this.state.environmentVerified) {
      this.verifyApiAndPlanDefault()
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalAuthId)
  }

  verifyApiAndPlanDefault = () => {
    auth.existApiAndPlanDefault()
      .then(() => {
        this.setState({ ...this.state, environmentConfigured: true, environmentVerified: true })
      })
      .catch(() => {
        this.setState({ ...this.state, environmentConfigured: false, environmentVerified: true })
      })
  }

  getNewAuth = () => {
    auth.getAuthentication()
  }

  render () {
    if (!this.state.environmentVerified) {
      return (
        <div style={{ textAlign: 'center', marginTop: '200px'}}>
          <Head>
            <link rel="shortcut icon" type="image/png" href="/static/favicon.png" sizes="32x32"/>
            <title>{infoSite.info.titleSite}</title>
          </Head>
          <img src="/static/img/heimdall.png" width="auto" height="100"/>
          <h1>Waiting...</h1>
        </div>
      )
    }

    if (!this.state.environmentConfigured) {
      return (
        <div style={{ textAlign: 'center', marginTop: '200px'}}>
          <Head>
            <link rel="shortcut icon" type="image/png" href="/static/favicon.png" sizes="32x32"/>
            <title>{infoSite.info.titleSite}</title>
          </Head>
          <img src="/static/img/heimdall.png" width="auto" height="100"/>
          <h1>Environment not configured!</h1>
          <a className="link link--gray" style={{ fontWeight: 'bold' }} href="https://github.com/getheimdall/heimdall/wiki" target="_blank">See Heimdall Wiki</a>
        </div>
      )
    }

    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <NProgress
          color={variables.colorAccent} 
          options={{ trickleSpeed: 20 }}
          showAfterMs={500}
          spinner/>
          <ToastContainer autoClose={2500} toastClassName="notification-container"/>
        <Head>
          <link rel="shortcut icon" type="image/png" href="/static/favicon.png" sizes="32x32"/>
          <title>{infoSite.info.titleSite}</title>
        </Head>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)