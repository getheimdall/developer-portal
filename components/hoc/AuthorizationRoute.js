import React from 'react'
import Link from 'next/link'

import { isLoggedIn } from '../../utils/authentication'
import Index from './../../pages/index'
import Login from './../../pages/login'

const AuthorizationRoute = reverseCondition => WrappedComponent => {
  class Authentication extends React.Component {

    static async getInitialProps(ctx) {

      const pageProps = WrappedComponent.getInitialProps && await WrappedComponent.getInitialProps(ctx)

      return { ...pageProps }

    }

    render () {

      if (reverseCondition && !isLoggedIn()) {
        return <WrappedComponent {...this.props} />
      }

      if (!reverseCondition && isLoggedIn()) {
        return <WrappedComponent {...this.props} />
      }

      if (isLoggedIn()) {
        return (
          <Index />
        )
      } else {
        return <Login />
      }
    }
  }

  return Authentication
}

AuthorizationRoute.defaultProps = {
  reverseCondition: false,
}

export default AuthorizationRoute
