import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Calendar() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calendario. Vecindapp</title>
      </Head>

      <main style={{ display: "flex", flexDirection: "column" }}>
        <h1>Calendario.</h1>
      </main>
    </div>
  )
}
