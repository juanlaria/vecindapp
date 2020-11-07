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
        <h1>Home</h1>
        <Link href="/">
          <a>Notificación</a>
        </Link>
        <Link href="/">
          <a>Reuniones</a>
        </Link>
        <Link href="/">
          <a>Expensas</a>
        </Link>
        <Link href="/">
          <a>Calendario</a>
        </Link>
      </main>
    </div>
  )
}
