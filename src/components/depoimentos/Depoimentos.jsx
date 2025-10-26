'use client';
import styles from '../../styles/depoimentos.module.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
        <Swiper
          className="swiper-wrapper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {dados?.map((depoimento, i) => (
            <SwiperSlide key={i} className="dark-background swiper-slidey">
              <span className={styles.quotes}>“</span>
              <blockquote>{depoimento.texto}</blockquote>
              <span className={`${styles.quotes} ${styles.quotesBelow}`}>”</span>
              <cite>{depoimento.pessoa}</cite>
              <span className={styles.stars}>
                {Array.from({ length: 5 }).map((_, index) =>
                  index + 1 > depoimento.estrelas ? (
                    <FontAwesomeIcon key={index} icon={faRegularStar} />
                  ) : (
                    <FontAwesomeIcon key={index} icon={faSolidStar} />
                  )
                )}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  );
}
