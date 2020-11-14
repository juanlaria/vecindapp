import Head from 'next/head'

export default function Calendar() {
  return (
    <>
      <Head>
        <title>Calendario. Vecindapp</title>
      </Head>
      <header>Header</header>
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>Calendario.</h1>
      </main>
    </>
  )
}
