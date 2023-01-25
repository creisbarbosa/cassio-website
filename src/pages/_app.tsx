import Footer from '@/components/Footer'
import '@/styles/globals.css'
import localFont from '@next/font/local'
import type { AppProps } from 'next/app'

const polySans = localFont({
  variable: '--font-poly',
  src: [
    {
      path: '../assets/fonts/PolySans/PolySans-Neutral.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PolySans/PolySans-Slim.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PolySans/PolySans-Median.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PolySans/PolySans-Bulky.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={polySans.className}>
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
