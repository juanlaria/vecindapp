import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Quotes() {
  return (
    <div className={styles.container}>
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
