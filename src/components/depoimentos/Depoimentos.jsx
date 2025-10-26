'use client';
import styles from "../../styles/depoimentos.module.css"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

export default function Depoimentos() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function getDepoimentos() {
      const res = await fetch('/api/depoimentos');
      const depoimentos = await res.json();
      setDados(depoimentos);
    }
    getDepoimentos();
  }, []);

  return (
    <section className={`${styles.depoimentos} blue-background`}>
      <h2>Depoimentos</h2>
      <article className="swiper">
        <ul id="listaDepoimentos" className="swiper-wrapper">
          {dados?.map((depoimento, i) => (
              <li key={i} className="dark-background swiper-slide">
                <span className="quotes">“</span>
                <blockquote>{depoimento.texto}</blockquote>
                <span className="quotes below">”</span>
                <cite>{depoimento.pessoa}</cite>
                <span className="stars">
                  {Array.from({ length: depoimento.estrelas }).map((_, index) =>
                    index + 1 > depoimento.estrelas ? (
                      <FontAwesomeIcon key={index} icon={faSolidStar} />
                    ) : (
                      <FontAwesomeIcon key={index} icon={faRegularStar} />
                    )
                  )}
                </span>
              </li>
            ))}
        </ul>

        <span className="swiper-pagination"></span>
      </article>

      <button className="swiper-button-prev"></button>
      <button className="swiper-button-next"></button>
    </section>
  );
}
