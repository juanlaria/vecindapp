import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Topics() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de temas. Vecindapp</title>
      </Head>
      <header>Header</header>
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>Lista de temas.</h1>
        <Link href="/presupuestos">
          <a>Lista de presupuestos</a>
        </Link>
        <Link href="/temas/agregar">
          <a>Agregar tema</a>
        </Link>
      </main>
    </div>
  )
}
