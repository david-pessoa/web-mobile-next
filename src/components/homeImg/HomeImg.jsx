import styles from '../../styles/initialSection.module.css';

export default function HomeImg({ imagem }) {
  return (
    <section className={styles.inicio} style={{ backgroundImage: `url(${imagem})` }}></section>
  );
}
