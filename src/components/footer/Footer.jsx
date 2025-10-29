import styles from '../../styles/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <footer id="contato" className={styles.contato}>
      <section>
        <form id="form" data-parsley-validate>
          <h4>Formulário de Contato</h4>

          <fieldset>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              data-parsley-required-message="Por favor, preencha seu nome"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              data-parsley-required-message="Por favor, preencha seu email"
              data-parsley-type-message="Por favor, insira um email válido"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="assunto">Assunto</label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              required
              data-parsley-required-message="Por favor, preencha o assunto"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="especialidade">Selecione uma especialidade</label>
            <select
              id="especialidade"
              name="especialidade"
              required
              data-parsley-required-message="Por favor, selecione uma especialidade"
            >
              <option value="">Selecione</option>
              <option>Estética</option>
              <option>Dentística</option>
              <option>Periodontia</option>
              <option>Endodontia</option>
              <option>Ortodontia</option>
              <option>Implantodontia</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="modalidade">Modalidade</label>
            <select
              id="modalidade"
              name="modalidade"
              required
              data-parsley-required-message="Por favor, selecione uma modalidade"
            >
              <option value="">Selecione</option>
              <option>Presencial</option>
              <option>Teleconsulta</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              data-parsley-required-message="Por favor, selecione uma mensagem"
            ></textarea>
          </fieldset>

          <button type="submit" className="medium">
            Enviar
          </button>
        </form>

        <iframe
          className="mapa"
          src="https://maps.google.com/maps?q=Rua%20Chemin%20Del%20Pra,%20172,%20São%20Paulo&t=m&z=15&output=embed&iwloc=near"
          title="Mapa da clínica"
        ></iframe>

        <address>
          <h4>Fale Conosco</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <h6>(11) 98839-8134</h6>
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
              <h6>(11) 98839-8134</h6>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <h6>consultoria.alzira@gmail.com</h6>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              <h6>Rua Chemin Del Pra, nº 172, São Paulo, Santana</h6>
            </li>
          </ul>
        </address>
      </section>
    </footer>
  );
}
