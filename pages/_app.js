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

import './styles/_app.scss'

class MyApp extends App {

  state = {
    intervalAuthId: 0
  }

  componentDidMount() {
    const intervalAuthId = setInterval(this.getNewAuth, process.env.REACT_TIME_AUTH_PORTAL)
    this.setState({ ...this.state, intervalAuthId: intervalAuthId })
    this.getNewAuth()
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalAuthId)
  }

  getNewAuth = () => {
    auth.getAuthentication()
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <NProgress 
          color="#29d"
          options={{ trickleSpeed: 20 }}
          showAfterMs={500}
          spinner/>
          <ToastContainer autoClose={2500}/>
        <Head>
          <link rel="shortcut icon" type="image/svg" href="/static/favicon.png"/>
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