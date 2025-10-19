import Link from 'next/link';

export default function Header() {
  const headerStyle = {
    padding: '0.8em 2em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    height: '5rem',
    width: 'auto',
  };

  const listStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    gap: '2vw',
  };

  return (
    <div className="dark-background" style={headerStyle}>
      <img style={logoStyle} src="/assets/images/logo.png" alt="Logo do site" />
      <nav>
        <ul style={listStyle}>
          <li>
            <a href="#inicio">
              <h5>Início</h5>
            </a>
          </li>
          <li>
            <a href="#especialidades">
              <h5>Especialidades</h5>
            </a>
          </li>
          <li>
            <a href="#sobre">
              <h5>Sobre</h5>
            </a>
          </li>
          <li>
            <a href="#depoimentos">
              <h5>Depoimentos</h5>
            </a>
          </li>
          <li>
            <a href="#contato">
              <h5>Contato</h5>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
