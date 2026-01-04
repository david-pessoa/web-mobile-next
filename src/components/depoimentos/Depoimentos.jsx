'use client';
import styles from '../../styles/depoimentos.module.css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Slide from './Slide';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/swiper.css';

//Importa dados
import data from '@/app/api/dados.json';

export default function Depoimentos() {
  const dados = data.depoimentos;

  return (
    <section id="depoimentos" className={`${styles.depoimentos} blue-background`}>
      <h2>Depoimentos</h2>
      <article className="swiper">
        <Swiper
          className="swiper-wrapper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 30},
            600: { slidesPerView: 2, spaceBetween: 20 },
            800: { slidesPerView: 2, spaceBetween: 5, },
            1300: { slidesPerView: 3, spaceBetween: 15, },
            1600: { slidesPerView: 4, spaceBetween: 20, },
          }}
          // centeredSlides={true}
          navigation
          loop={true}
          pagination={{ clickable: true }}
        >
          {dados?.map((depoimento, i) => (
            <SwiperSlide key={i}>
              <Slide dados={depoimento} />
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  );
}
