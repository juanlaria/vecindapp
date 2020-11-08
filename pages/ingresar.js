import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function SignIn() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ingresar. Vecindapp</title>
      </Head>
      <header>Header</header>
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>Ingresar.</h1>
        <p>E-mail</p>
        <p>Contraseña</p>
        <Link href="/">
          <a>Continuar</a>
        </Link>
      </main>
    </div>
  )
}
