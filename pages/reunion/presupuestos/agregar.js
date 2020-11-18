import Head from 'next/head';
import Link from 'next/link';

import Header from '../../../components/Header';

export default function AddQuote() {
  return (
    <div>
      <Head>
        <title>Nuevo presupuesto. Vecindapp</title>
      </Head>
      <Header hasMenu={false} />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h1>Nuevo presupuesto.</h1>
        <p>Nombre de la empresa/Persona</p>
        <p>Descripción</p>
        <p>Monto</p>
        <Link href="#">
          <a>Agregar archivos</a>
        </Link>
        <Link href="/reunion/presupuestos">
          <a>Proponer presupuesto</a>
        </Link>
      </main>
    </div>
  );
}
