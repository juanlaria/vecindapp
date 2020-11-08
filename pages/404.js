import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Error404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Página no encontrada. Vecindapp</title>
      </Head>
      <header>Header</header>
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>Página no encontrada.</h1>
        <Link href="/">
          <a>Volver al inicio</a>
        </Link>
      </main>
    </div>
  )
}
