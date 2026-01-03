import styles from '../../styles/especialidades.module.css';

import ImageCard from "./ImageCard"

//Importa dados
import data from '@/app/api/dados.json'

export default function Especialidades() {
 const dados = data.especialidades

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
