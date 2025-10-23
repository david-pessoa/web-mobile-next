'use client';
import "../../styles/depoimentos.css"
import { useState, useEffect } from "react";

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
    <section id="depoimentos" className="blue-background">
      <h2>Depoimentos</h2>
      <article className="swiper">
        <ul id="listaDepoimentos" className="swiper-wrapper">
          {dados &&
            dados.map((depoimento, i) => (
              <li key={i} className="dark-background swiper-slide">
                <span className="quotes">“</span>
                <blockquote>{depoimento.texto}</blockquote>
                <span className="quotes below">”</span>
                <cite>{depoimento.pessoa}</cite>
                <span className="stars">
                  {Array.from({ length: depoimento.estrelas }).map((_, index) =>
                    index + 1 > depoimento.estrelas ? (
                      <i key={index} className="fa-solid fa-star"></i>
                    ) : (
                      <i class="fa-regular fa-star"></i>
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
