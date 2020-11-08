import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function AddTopic() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nuevo tema. Vecindapp</title>
      </Head>
      <header>Header</header>
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1>Nuevo tema.</h1>
        <p>Título</p>
        <p>Descripción</p>
        <Link href="#">
          <a>Agregar una foto que describa tu tema</a>
        </Link>
        <Link href="/presupuestos/agregar">
          <a>Agregar presupuesto</a>
        </Link>
        <Link href="/temas">
          <a>Proponer tema</a>
        </Link>
      </main>
    </div>
  )
}
