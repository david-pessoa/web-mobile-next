import styles from '../../styles/depoimentos.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

import Citation from './Citation';

export default function Slide({ dados }) {
  return (
    <div className={`${styles.swiperSlider} dark-background`}>
      <Citation texto={dados.texto} nome={dados.pessoa}/>
      <span className={styles.stars}>
        {Array.from({ length: 5 }).map((_, index) =>
          index + 1 > dados.estrelas ? (
            <FontAwesomeIcon key={index} icon={faRegularStar} />
          ) : (
            <FontAwesomeIcon key={index} icon={faSolidStar} />
          )
        )}
      </span>
    </div>
  );
}
