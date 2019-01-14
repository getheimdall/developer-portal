import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,800" rel="stylesheet" />
            <link href="https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css" rel="stylesheet" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/static/js/vendor/jquery-2.2.4.min.js"></script>
          <script src="/static/js/vendor/jquery.waypoints.js"></script>
          <script src="/static/js/vendor/jquery.mask.min.js"></script>
          <script src="/static/js/menu.js"></script>
          {/* <script src="/static/js/faq.js"></script> */}
          {/* <script src="/static/js/sidebar.js"></script> */}
          <script src="/static/js/mobile-menu.js"></script>
          <script src="/static/js/vendor/jquery-ui.min.js"></script>
          <script src="/static/js/pricing.js"></script>
          <script src="/static/js/vendor/slick.min.js"></script>
          <script src="/static/js/vendor/dragscrollable.min.js"></script>
          <script src="/static/js/vendor/device.js"></script>
          <script src="/static/js/carousel.js"></script>
          <script src="/static/js/validation.js"></script>
          {/* <script src="/static/js/form.js"></script> */}
          <script src="/static/js/style-switcher.js"></script>
        </body>
      </html>
    )
  }
}
