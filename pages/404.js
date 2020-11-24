import Head from 'next/head'
import Link from 'next/link'

export default function Error404() {
  return (
    <>
      <Head>
        <title>Página no encontrada. Vecindapp</title>
      </Head>
      <header>Header</header>
      <main id="main" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>Página no encontrada.</h1>
        <Link href="/">
          <a>Volver al inicio</a>
        </Link>
      </main>
    </>
  )
}
