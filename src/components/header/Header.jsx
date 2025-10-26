import Link from 'next/link';
import Image from 'next/image';
import '../../styles/header.module.css';

export default function Header() {

  return (
    <header className="dark-background">
      <Image src="/assets/images/logo.png" alt="Logo do site" height={1649} width={1631} />
      <nav>
        <ul>
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
