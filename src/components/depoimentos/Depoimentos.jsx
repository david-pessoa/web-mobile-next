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
import data from '@/app/api/dados.json'

export default function Depoimentos() {
  const dados = data.depoimentos

  return (
    <section id="depoimentos" className={`${styles.depoimentos} blue-background`}>
      <h2>Depoimentos</h2>
      <article className="swiper">
        <Swiper
          className="swiper-wrapper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
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
