import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function AddQuote() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nuevo presupuesto. Vecindapp</title>
      </Head>

      <main style={{ display: "flex", flexDirection: "column" }}>
        <h1>Nuevo presupuesto.</h1>
        <p>Nombre de la empresa/Persona</p>
        <p>Descripción</p>
        <p>Monto</p>
        <Link href="#">
          <a>Agregar archivos</a>
        </Link>
        <Link href="/presupuestos">
          <a>Proponer presupuesto</a>
        </Link>
      </main>
    </div>
  )
}
