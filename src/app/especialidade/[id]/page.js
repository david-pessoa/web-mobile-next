'use client';
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
      <p>{dados[0]?.nome}</p>
    </div>
  );
}
