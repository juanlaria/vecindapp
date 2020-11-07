import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Error404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Error interno. Vecindapp</title>
      </Head>

      <main style={{ display: "flex", flexDirection: "column" }}>
        <h1>Error interno.</h1>
        <Link href="/">
          <a>Volver al inicio</a>
        </Link>
      </main>
    </div>
  )
}
