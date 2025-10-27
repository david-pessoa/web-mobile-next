'use client';
import styles from '../../styles/depoimentos.module.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Slide from './Slide';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {dados?.map((depoimento, i) => (
            <SwiperSlide key={i}>
              <Slide dados={depoimento}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  );
}
