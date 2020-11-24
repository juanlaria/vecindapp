import Head from 'next/head'
import Link from 'next/link'

import Header from '../../../components/Header';

export default function Quotes() {
  return (
    <div>
      <Head>
        <title>Lista de presupuestos. Vecindapp</title>
      </Head>
      <Header hasMenu={false} />
      <main id="main" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>Lista de presupuestos.</h1>
        <Link href="#">
          <a>Ver archivos adjuntos</a>
        </Link>
        <Link href="/reunion/presupuestos/agregar">
          <a>Agregar presupuesto</a>
        </Link>
      </main>
    </div>
  )
}
