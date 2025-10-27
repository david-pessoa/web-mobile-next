'use client';
import styles from '../../styles/especialidades.module.css';
import { useEffect, useState } from 'react';

import ImageCard from "./ImageCard"

export default function Especialidades() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function getEspecialidades() {
      const res = await fetch('/api/especialidades');
      const especialidades = await res.json();
      setDados(especialidades);
    }
    getEspecialidades();
  }, []);

  return (
    <section id="especialidades" className={`${styles.especialidades} white-background`}>
      <h2>Especialidades</h2>
      <ul id="listaEspecialidades">
        {dados?.map(especialidade => (
          <ImageCard key={especialidade.id} dados={especialidade}/>
        ))}
      </ul>
    </section>
  );
}
