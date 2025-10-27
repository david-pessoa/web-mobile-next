import Link from 'next/link';
import style from '../styles/notFound.module.css';

export const metadata = {
  title: 'Consultório Odontológico | Erro 404',
};

export default function NotFound() {
  return (
    <div className={style.container}>
      <div className={`${style.box} dark-background`}>
        <h1 className="medium">Erro 404</h1>
        <h3>Página não encontrada</h3>
        <Link href="/">Voltar</Link>
      </div>
    </div>
  );
}
