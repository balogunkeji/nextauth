import RootLayout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  )
}
