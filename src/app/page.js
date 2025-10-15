import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <main className={styles.main}>
        <ol>
          <li>
            Get started by editing <code>this fucking page</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
