import Head from 'next/head'
import Link from 'next/link'

export default function Error404() {
  return (
    <>
      <Head>
        <title>Error interno. Vecindapp</title>
      </Head>
      <header>Header</header>
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>Error interno.</h1>
        <Link href="/">
          <a>Volver al inicio</a>
        </Link>
      </main>
    </>
  )
}
