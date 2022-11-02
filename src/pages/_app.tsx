import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'
import { CookieNotice } from '../features/cookie-consent/CookieNotice'
import styles from '../styles/Home.module.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <DefaultSeo {...SEO} />
      <footer className={styles.footer} data-testid='footer'>
        <a
          href='https://www.benjaminlutz.at'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by Benjamin Lutz
        </a>
      </footer>
      <CookieNotice />
    </>
  )
}
