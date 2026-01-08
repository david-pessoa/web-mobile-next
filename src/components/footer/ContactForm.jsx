'use client';

import styles from '../../styles/footer.module.css';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import $ from 'jquery';
// import 'parsleyjs'

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [service, setService] = useState('');
  const [modality, setModality] = useState('');
  const [message, setMessage] = useState('');

  const [showSendEmailMessage, setShowSendEmailMessage] = useState(false)

  function handleFormSubmit(e) {
    e.preventDefault();

    // Call some API...

    setShowSendEmailMessage(true)
  }

  useEffect(() => {
    // expõe o jQuery globalmente (obrigatório pro Parsley)
    window.$ = $;
    window.jQuery = $;

    // importa o parsley SOMENTE depois disso
    import('parsleyjs').then(() => {
      $('#form').parsley();
    });
  }, []);

  return (
    <>
      <div className={`${showSendEmailMessage ? styles.open : ''} ${styles.sendEmailMessageBox}`}>
        <h5>Email enviado com sucesso!</h5>
        <button
          onClick={() => setMobileMenuOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <form id="form" data-parsley-validate>
        <h4>Formulário de Contato</h4>

        <fieldset>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={name}
            onChange={e => setName(e.target.value)}
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
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={subject}
            onChange={e => setSubject(e.target.value)}
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
            value={service}
            onChange={e => setService(e.target.value)}
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
            value={modality}
            onChange={e => setModality(e.target.value)}
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
            value={message}
            onChange={e => setMessage(e.target.value)}
            data-parsley-required-message="Por favor, selecione uma mensagem"
          ></textarea>
        </fieldset>

        <button type="submit" className="medium" onSubmit={handleFormSubmit}>
          Enviar
        </button>
      </form>
    </>
  );
}
