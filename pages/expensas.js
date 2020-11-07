import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Expenses() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Expensas. Vecindapp</title>
      </Head>

      <main style={{ display: "flex", flexDirection: "column" }}>
        <h1>Expensas.</h1>
      </main>
    </div>
  )
}
