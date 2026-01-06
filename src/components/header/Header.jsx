'use client'

import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className={`${styles.header} dark-background`}>
        <Image
          src="/assets/images/logo.png"
          alt="Logo do site"
          height={1649}
          width={1631}
          className={styles.pcLogo}
        />
        <button className={styles.menuIcon} onClick={() => setMobileMenuOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav className={styles.pcNav}>
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
        <Image
          src="/assets/images/logo.png"
          alt="Logo do site"
          height={1649}
          width={1631}
          className={styles.mobileLogo}
        />
      </header>
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuTop}>
          <Image
            src="/assets/images/logo.png"
            alt="Logo do site"
            height={1649}
            width={1631}
            className={styles.mobileLogo}
          />
          <button
            className={`${styles.menuIcon} ${styles.xmark}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <nav className={styles.mobileNav}>
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
      </div>
    </>
  );
}
