import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

export default function Error404() {
  return (
    <>
      <Head>
        <title>Error interno. Vecindapp</title>
      </Head>
      <Header hasMenu={true}/>
      <main id="main" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>Error interno.</h1>
        <Link href="/">
          <a>Volver al inicio</a>
        </Link>
      </main>
    </>
  )
}
