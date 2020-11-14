import Head from 'next/head';
import Link from 'next/link';

export default function AddQuote() {
  return (
    <div>
      <Head>
        <title>Nuevo presupuesto. Vecindapp</title>
      </Head>
      <header>Header</header>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
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
  );
}
