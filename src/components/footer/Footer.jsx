import '../../styles/footer.module.css';

export default function Footer() {
  return (
    <footer id="contato">
      <section class="contato-container">
        <form id="form" class="formulario" data-parsley-validate>
          <h4>Formulário de Contato</h4>

          <fieldset class="input-field">
            <label for="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              data-parsley-required-message="Por favor, preencha seu nome"
            />
          </fieldset>

          <fieldset class="input-field">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              data-parsley-required-message="Por favor, preencha seu email"
              data-parsley-type-message="Por favor, insira um email válido"
            />
          </fieldset>

          <fieldset class="input-field">
            <label for="assunto">Assunto</label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              required
              data-parsley-required-message="Por favor, preencha o assunto"
            />
          </fieldset>

          <fieldset class="input-field">
            <label for="especialidade">Selecione uma especialidade</label>
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

          <fieldset class="input-field">
            <label for="modalidade">Modalidade</label>
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

          <fieldset class="input-field">
            <label for="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              data-parsley-required-message="Por favor, selecione uma mensagem"
            ></textarea>
          </fieldset>

          <button type="submit" class="medium">
            Enviar
          </button>
        </form>

        <iframe
          class="mapa"
          src="https://maps.google.com/maps?q=Rua%20Chemin%20Del%20Pra,%20172,%20São%20Paulo&t=m&z=15&output=embed&iwloc=near"
          title="Mapa da clínica"
        ></iframe>

        <address class="info">
          <h4>Fale Conosco</h4>
          <ul>
            <li>
              <i class="fa-2x fa fa-phone"></i>
              <h6>(11) 98839-8134</h6>
            </li>
            <li>
              <i class="fa-2x fab fa-whatsapp"></i>
              <h6>(11) 98839-8134</h6>
            </li>
            <li>
              <i class="fa-2x fa fa-envelope"></i>
              <h6>consultoria.alzira@gmail.com</h6>
            </li>
            <li>
              <i class="fa-2x fa fa-location-dot"></i>
              <h6>Rua Chemin Del Pra, nº 172, São Paulo, Santana</h6>
            </li>
          </ul>
        </address>
      </section>
    </footer>
  );
}
