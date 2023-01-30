import '../styles/globals.css'
import '../styles/globals.scss'
import React , {useEffect , useContext} from 'react';
import type { AppProps } from 'next/app'
import Layout from './../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Layout>
  <Component {...pageProps} />
    </Layout>
  ) 
  

}

export default MyApp
