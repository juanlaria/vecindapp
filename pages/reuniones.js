import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Meetings() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reuniones. Vecindapp</title>
      </Head>

      <main style={{ display: "flex", flexDirection: "column" }}>
        <h1>Reuniones.</h1>
        <Link href="/temas">
          <a>Ir a la lista de temas</a>
        </Link>
        <Link href="/calendario">
          <a>Ir al calendario</a>
        </Link>
      </main>
    </div>
  )
}
