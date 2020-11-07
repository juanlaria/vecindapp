import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vecindapp</title>
      </Head>

      <main style={{ display: "flex", flexDirection: "column" }}>
        <h1>Home.</h1>
        <Link href="/">
          <a>Notificación</a>
        </Link>
        <Link href="/reuniones">
          <a>Reuniones</a>
        </Link>
        <Link href="/expensas">
          <a>Expensas</a>
        </Link>
        <Link href="/calendario">
          <a>Calendario</a>
        </Link>
      </main>
    </div>
  )
}
