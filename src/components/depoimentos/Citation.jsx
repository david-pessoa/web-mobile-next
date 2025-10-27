import styles from '../../styles/depoimentos.module.css';
export default function Citation({texto, nome}) {
  return (
    <>
      <span className={styles.quotes}>“</span>
      <blockquote>{texto}</blockquote>
      <span className={`${styles.quotes} ${styles.quotesBelow}`}>”</span>
      <cite>{nome}</cite>
    </>
  );
}
