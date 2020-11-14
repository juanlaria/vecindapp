import Head from 'next/head'
import Link from 'next/link'

export default function SignIn() {
  return (
    <>
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
    </>
  )
}
