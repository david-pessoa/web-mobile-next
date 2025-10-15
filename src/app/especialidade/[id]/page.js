'use client';
import Image from 'next/image';
import styles from '../../page.module.css';
import { useParams } from 'next/navigation'; // Ou `react-router` para `pages` router
import { useEffect, useState } from 'react';

export default function Home() {
  const params = useParams();
  const { id } = params;
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/especialidades');
      const especialidades = await res.json();
      setDados(especialidades);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.page}>
      <h1>Especialidade com ID: {id}</h1>
      <main className={styles.main}>
        <p>{dados[0]?.nome}</p>
        <ol>
          <li>
            Get started by editing <code>this fucking page</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
