import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ingresar. Vecindapp</title>
      </Head>

      <main style={{ display: "flex", flexDirection: "column" }}>
        <h1>Registrate</h1>
        <p>E-mail</p>
        <p>Contraseña</p>
        <Link href="/">
          <a>Continuar</a>
        </Link>
      </main>
    </div>
  )
}
