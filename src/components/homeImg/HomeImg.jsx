import styles from '../../styles/initialSection.module.css';

export default function HomeImg({ imagem }) {
  return (
    <section id="inicio" className={styles.inicio} style={{ backgroundImage: `url(${imagem})` }}></section>
  );
}
