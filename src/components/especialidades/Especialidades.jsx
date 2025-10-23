'use client'
import '../../styles/especialidades.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <section id="especialidades" className="white-background">
      <h2>Especialidades</h2>
      <ul id="listaEspecialidades">
        {dados && dados.map(especialidade => (
            <li key={especialidade.nome}>
            <Link href={`/especialidade/${especialidade.id}`}>
              <figure>
				    <Image src={`/assets/images/especialidades/${especialidade.imagem}`} alt={especialidade.nome} height={400} width={400}/>
				    <figcaption>
					    <h5>{especialidade.nome}</h5>
					    <p>{especialidade.texto}</p>
				    </figcaption>
			    </figure>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
