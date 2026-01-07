'use client'

import { useEffect } from 'react'
import $ from 'jquery'
// import 'parsleyjs'

export default function ContactForm() {
  useEffect(() => {
    // expõe o jQuery globalmente (obrigatório pro Parsley)
    window.$ = $
    window.jQuery = $

    // importa o parsley SOMENTE depois disso
    import('parsleyjs').then(() => {
      $('#form').parsley()
    })
  }, [])

  return (
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
  );
}
