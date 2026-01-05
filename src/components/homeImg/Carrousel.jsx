'use client';
import styles from '../../styles/carousel.module.css';

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/swiper.css';

export default function Carousel() {
  const imagesList = [
    '/assets/images/carrossel_consultorio/sala.jpg',
    '/assets/images/carrossel_consultorio/espera1.jpg',
    '/assets/images/carrossel_consultorio/espera2.jpg',
    '/assets/images/carrossel_consultorio/espera3.jpg',
    '/assets/images/carrossel_consultorio/espera4.jpg',
    '/assets/images/carrossel_consultorio/escada.jpg',
  ];
  return (
    <section id="inicio" className={styles.inicio}>
      <Swiper
        className="swiper-wrapper"
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        navigation
        loop={true}
        pagination={{ clickable: true }}
      >
        {imagesList?.map((path, i) => (
          <SwiperSlide key={i} className={styles.slide}>
            <Image
              className={styles.image}
              src={path}
              alt={`Imagem do consultório ${i + 1}`}
              sizes="100vw"
              priority={i === 0}
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
