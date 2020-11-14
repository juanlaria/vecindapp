import Head from 'next/head'
import Link from 'next/link'

export default function Quotes() {
  return (
    <div>
      <Head>
        <title>Lista de presupuestos. Vecindapp</title>
      </Head>
      <header>Header</header>
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>Lista de presupuestos.</h1>
        <Link href="#">
          <a>Ver archivos adjuntos</a>
        </Link>
        <Link href="/presupuestos/agregar">
          <a>Agregar presupuesto</a>
        </Link>
      </main>
    </div>
  )
}
