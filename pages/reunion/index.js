import Head from 'next/head';
import Link from 'next/link';

import Topic from '../../components/Topic';
import Header from '../../components/Header';

const topicsData = [
  {
    title: "Humedad en el hall de entrada",
    description: "Debemos revisar con un plomero y arreglar la humedad en el hall",
    author: "Matías M.",
    votes: 4,
  },
  {
    title: "Hechos de inseguridad",
    description: "Propongo que instalemos una cámara de seguridad.",
    author: "Laura T.",
    votes: 2,
  },
]

export default function Topics() {
  return (
    <div>
      <Head>
        <title>Lista de temas. Vecindapp</title>
      </Head>
      <Header hasMenu={false} />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h1>Lista de temas.</h1>
        <ul>
          {topicsData.map(topic => <li><Topic {...topic} /></li>)}
        </ul>
        <Link href="/reunion/agregar-tema">
          <a>Agregar tema</a>
        </Link>
      </main>
    </div>
  );
}
