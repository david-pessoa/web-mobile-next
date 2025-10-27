import Link from 'next/link';
import Image from 'next/image';
import FigureCaption from './FigureCaption';

export default function Box({ dados }) {
  return (
    <li>
      <Link href={`/especialidade/${dados.id}`}>
        <figure>
          <Image
            src={`/assets/images/especialidades/${dados.imagem}`}
            alt={dados.nome}
            height={400}
            width={400}
          />
          <FigureCaption nome={dados.nome} legenda={dados.texto}/>
        </figure>
      </Link>
    </li>
  );
}
