import styles from '../../styles/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ContactForm from './ContactForm';
export default function Footer() {
  return (
    <footer id="contato" className={styles.contato}>
      <section>
        <ContactForm />

        <iframe
          className="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.6944693482483!2d-46.64296992461479!3d-23.57941427878742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce598547e66605%3A0x683fb579db666e7!2sORAL%20HEALTH%20CL%C3%8DNICA%20ODONTOL%C3%93GICA%20LTDA.!5e0!3m2!1spt-BR!2sbr!4v1766188767017!5m2!1spt-BR!2sbr"
          title="Mapa da clínica"
        ></iframe>

        <address>
          <h4>Fale Conosco</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <h6>(11) 4748-6257</h6>
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
              <h6>(11) 947848416</h6>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <h6>consultorio.odonto@email.com</h6>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              <h6>Rua Domingos de Morais, 261 - Vila Mariana, São Paulo - SP</h6>
            </li>
          </ul>
        </address>
      </section>
    </footer>
  );
}
