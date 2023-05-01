import '@styles/globals.css'
import { Router } from 'react-router-dom'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />

}

export default Application
