import Head from 'next/head'

export default function Expenses() {
  return (
    <>
      <Head>
        <title>Expensas. Vecindapp</title>
      </Head>
      <header>Header</header>
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>Expensas.</h1>
      </main>
    </>
  )
}
