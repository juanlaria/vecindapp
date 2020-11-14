import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vecindapp</title>
      </Head>
      <header>Header</header>
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>Home.</h1>
        <Link href="/">
          <a>Notificación</a>
        </Link>
        <Link href="/reuniones">
          <a>Reuniones</a>
        </Link>
        <Link href="/expensas">
          <a>Expensas</a>
        </Link>
        <Link href="/calendario">
          <a>Calendario</a>
        </Link>
      </main>
    </>
  )
}
