import Head from 'next/head';
import Link from 'next/link';

import Topic from '../../components/Topic';
import styles from '../../styles/Home.module.css';

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
    <div className={styles.container}>
      <Head>
        <title>Lista de temas. Vecindapp</title>
      </Head>
      <header>Header</header>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h1>Lista de temas.</h1>
        <ul>
          {topicsData.map(topic => <li><Topic {...topic} /></li>)}
        </ul>
        <Link href="/temas/agregar">
          <a>Agregar tema</a>
        </Link>
      </main>
    </div>
  );
}
