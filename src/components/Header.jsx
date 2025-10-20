import Link from 'next/link';
import '../styles/header.css';

export default function Header() {
  const headerStyle = {
    padding: '0.8em 2em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const listStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    gap: '2vw',
  };

  return (
    <header className="dark-background" style={headerStyle}>
      <img src="/assets/images/logo.png" alt="Logo do site" />
      <nav>
        <ul style={listStyle}>
          <li>
            <Link href="#inicio">
              <h5>Início</h5>
            </Link>
          </li>
          <li>
            <Link href="#especialidades">
              <h5>Especialidades</h5>
            </Link>
          </li>
          <li>
            <Link href="#sobre">
              <h5>Sobre</h5>
            </Link>
          </li>
          <li>
            <Link href="#depoimentos">
              <h5>Depoimentos</h5>
            </Link>
          </li>
          <li>
            <Link href="#contato">
              <h5>Contato</h5>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
