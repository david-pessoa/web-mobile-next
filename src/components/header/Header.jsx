'use client';

import Navbar from './Navbar';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className={`${styles.header} dark-background`}>
        <Link href="/#inicio">
          <Image
            src="/assets/images/logo.png"
            alt="Logo do site"
            height={1649}
            width={1631}
            className={styles.pcLogo}
          />
        </Link>
        <button className={styles.menuIcon} onClick={() => setMobileMenuOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Navbar type="computer" />
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
        <Navbar type="mobile" />
      </div>
    </>
  );
}
