import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider scrollAxis='vertical'>
        <Component {...pageProps} />
    </ParallaxProvider>
  )
}