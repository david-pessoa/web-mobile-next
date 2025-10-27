import Link from 'next/link';
import style from '../styles/notFound.module.css';

export const metadata = {
  title: 'Erro 404',
};

export default function NotFound() {
  return (
    <div className={style.container}>
      <div className={`${style.box} dark-background`}>
        <h1 className="title medium">Erro 404</h1>
        <h3 className="not_found_message">Página não encontrada</h3>
        <Link className="not_found" href="/">
          Voltar
        </Link>
      </div>
    </div>
  );
}
