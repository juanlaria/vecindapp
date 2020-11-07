import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Welcome() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bienvenida. Vecindapp</title>
      </Head>

      <main style={{display: "flex", flexDirection: "column"}}> 
       <h1>Bienvenida.</h1>
        <Link href="/ingresar">
        <a>Ingresar</a>
        </Link>
        <Link href="/">
        <a>Ingresá con Google</a>
        </Link>
        <Link href="/">
        <a>Ingresá con Facebook</a>
        </Link>
        <Link href="/registrate">
        <a>Registrate</a>
        </Link>
      </main>
    </div>
  )
}
