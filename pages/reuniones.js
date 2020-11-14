import Head from 'next/head'
import Link from 'next/link'

export default function Meetings() {
  return (
    <>
      <Head>
        <title>Reuniones. Vecindapp</title>
      </Head>
      <header>Header</header>
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>Reuniones.</h1>
        <Link href="/temas">
          <a>Ir a la lista de temas</a>
        </Link>
        <Link href="/calendario">
          <a>Ir al calendario</a>
        </Link>
      </main>
    </>
  )
}
