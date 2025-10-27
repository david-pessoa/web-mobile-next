'use client';
import styles from '../../styles/sobre.module.css';
import Image from 'next/image';

export default function Sobre() {
  return (
    <section id="sobre" className={`${styles.sobre} blue-background`}>
      <h2>Sobre</h2>
      <article className={styles.sobreContainer}>
        <aside className={styles.sobreColuna}>
          <h4>A dentista</h4>
          <figure className={styles.sobreFigura}>
            <Image src="/assets/images/dentista.jpg" alt="A dentista" width={2153} height={3390} />
            <figcaption>
              <h6 className="medium">Dra. Alzira Varão Lima</h6>
              <h6>Periodontista formada pela USP</h6>
            </figcaption>
          </figure>
        </aside>

        <p className={styles.sobreColuna}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra sem viverra,
          vulputate augue quis, interdum urna. Etiam pharetra ex non auctor tincidunt. Etiam ornare
          leo in rutrum elementum. Curabitur in urna dolor. Sed feugiat ullamcorper massa in
          egestas. Sed consequat, sapien quis ornare porta, diam orci interdum diam, eget vehicula
          ipsum nulla vel risus. Phasellus efficitur hendrerit nisl, nec ultrices augue mollis at.
          Nunc sagittis interdum urna vitae fringilla. Sed iaculis in urna efficitur mattis. Vivamus
          eget posuere nibh, id elementum eros. Mauris bibendum erat ut eros faucibus, nec elementum
          velit tincidunt. Morbi ut nunc mauris. Duis feugiat ultrices aliquet. Maecenas sed
          ullamcorper sapien. Etiam sit amet feugiat magna. In hac habitasse platea dictumst.
          Vivamus congue justo nec euismod scelerisque. Duis pretium iaculis erat.
        </p>
      </article>
    </section>
  );
}
