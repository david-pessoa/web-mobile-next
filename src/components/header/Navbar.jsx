import Link from 'next/link';
import styles from '../../styles/header.module.css';

export default function Navbar({ type }) {
  return (
    <nav className={type === "mobile" ? styles.mobileNav : styles.pcNav}>
      <ul>
        <li>
          <Link href="/#inicio">
            <h5>Início</h5>
          </Link>
        </li>
        <li>
          <Link href="/#especialidades">
            <h5>Especialidades</h5>
          </Link>
        </li>
        <li>
          <Link href="/#sobre">
            <h5>Sobre</h5>
          </Link>
        </li>
        <li>
          <Link href="/#depoimentos">
            <h5>Depoimentos</h5>
          </Link>
        </li>
        <li>
          <Link href="/#contato">
            <h5>Contato</h5>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
