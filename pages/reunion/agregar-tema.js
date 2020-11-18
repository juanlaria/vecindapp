import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/Header';

export default function AddTopic() {
  return (
    <div>
      <Head>
        <title>Nuevo tema. Vecindapp</title>
      </Head>
      <Header hasMenu={false} />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>Nuevo tema.</h1>
        <p>Título</p>
        <p>Descripción</p>
        <Link href="#">
          <a>Agregar una foto que describa tu tema</a>
        </Link>
        <Link href="/reunion/presupuestos/agregar">
          <a>Agregar presupuesto</a>
        </Link>
        <Link href="/reunion">
          <a>Proponer tema</a>
        </Link>
      </main>
    </div>
  )
}
