import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 