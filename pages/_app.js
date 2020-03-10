import Page from '../components/Page'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {

return(
        <Page>
             <Head>
              {/* Import CSS for nprogress */}
              <link rel="stylesheet" type="text/css" href="/nprogress.css" />
            </Head>
            <Component {...pageProps} />
        </Page>    
    ) 
  }

export default MyApp;