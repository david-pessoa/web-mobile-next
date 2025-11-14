# Projeto para desenvolvimento de website para clínica odontológica 🦷
## Integrantes do grupo
<table>
  <thead>
    <tr>
      <th>Davi Portes</th>
      <th>David Pessoa</th>
      <th>Pedro Henrique</th>
      <th>Lucas Lago</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/DaviPortes" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/179884428?v=4" style="width: 150px; height: 150px;"/>
        </a>
      </td>
      <td>
        <a href="https://github.com/david-pessoa" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/104323068?v=4" style="width: 150px; height: 150px;"/>
        </a>
      </td>
      <td>
        <a href="https://github.com/peki20062006-a11y" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/227485917?v=4" style="width: 150px; height: 150px;"/>
        </a>
      </td>
      <td>
        <a href="https://github.com/LucasTkoLago007" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/227432884?v=4" style="width: 150px; height: 150px;"/>
        </a>
      </td>
    </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>10417139</th>
        <th>10402647</th>
        <th>10737627</th>
        <th>10436247</th>
      </tr>
    </tfoot>
</table>

## A Ideia do projeto
Este projeto tem como objetivo elaborar um website para uma clínica de odontologia, que seja capaz de: apresentar a clínica, mostrar os serviços prestados, exibir as informções para contato e permitir que o paciente agende uma consulta ao mesmo tempo em que cumpre os requisitos pedidos pela disciplina.

## Elaboração do Protótipo
Na fase inicial de prototipação, elaboramos wireframes para telas de dispositivos smartphone e Desktop. Para cada formato de tela, desenvolvemos diferentes versões da aplicação, a fim de tornar o site responsivo. O website foi feito em uma única página, dividida em 5 seções: Início, Especialidades, Sobre, Depoimentos e Contato.

### A página do website
A seção de início tem o intuito de apresentar o consultório. A página web possui uma navbar que permite a navegação entre as seções da página e, ao fim, um formulário para envio de mensagens por email para agendamento de consultas, uma visão do consultório do Google Maps além de uma seção de rodapé com as informações de contato.  
Além disso, a página exibe:
 - imagens do consultório;
 - os serviços prestados (através de fotos e de uma breve explicação);
 - uma seção dedicada a descrever a história do consultório e a trajetória da profissional dentista
 - uma foto da dentista da clínica com seu nome e formação abaixo.
 - uma barra de status mostrando o número de pacientes atendidos, anos de experiência, número de certificações, número de procedimentos realizados, etc.;
 - um carrossel com os depoimentos dos pacientes atendidos;

## Vantagens de utilizar o Next
### 1) Componentização e Reutilização
No HTML com JavaScript puro, é comum reperir trechos de código para títulos, paragráfos, cards, sections, etc. No React/Next, cada parte da interface se torna um componente reutilizável, permitindo:
 - Reutilizar o mesmo código em várias vezes e até em páginas diferentes
 - Manter um padrão visual e de comportamento
 - Reduz erros e facilita manutenção

### 2) Renderização no Servidor e Geração Estática
O NextJS oferece Server Side Rendering e Static Site Generation, ou seja, o conteúdo é pré-renderizado no servidor, melhorando o SEO, tempo de carregamento do site e, portanto, a experiência do usuário.

### 3) Melhor Organização e Escabilidade
Utilizando o Next/React, é possível separar a lógica, layout (`/components`) e estilo (`/styles`) do site de forma modular, facilitando a manutenção e garantindo a escalabilidade da aplicação em projetos maiores.

### 4) Roteamento Automático
Num projeto com simplesmente HTML, CSS e JS, é preciso criar manualmente as rotas. Já no Next, para criar a rota `/sobre`, basta criar uma pasta chamada `sobre` dentro da pasta `/app` e criar o arquivo `page.js` dentro de `/sobre`.

## Preparando o ambiente
Para rodar o projeto na sua máquina é necessário possuir instalados:
- Node.js 
- npm (ou outro gerenciador de pacote)
- git

### 1) Clone o projeto no GitHub
```
git clone https://github.com/david-pessoa/web-mobile-next.git
```

### 2) Entre no diretório raiz do projeto (/web-mobile-next) e instale as dependências
```
npm install
```

### 3) Execute a aplicação
```
npm run dev
```

## Explicação do código desenvolvido

Nesta versão em Next da aplicação, a página inicial do site (acessada pela rota `/`) é representada pelo componente `<Home/>`, que foi divido em outros 7 componentes principais:
 - Header: Fica no topo da página e contém a navbar e o logo;
 - HomeImg: Apresenta uma imagem do consultório
 - Especialidades: Apresenta os serviços oferecidos pela profissional dentista
 - Sobre: Apresenta uma imagem da profissional ao lado de um texto exibindo sua trajetória profissional
 - StatusBar: Apresenta dados quantitativos sobre a profissional
 - Depoimentos: apresenta um carrossel de depoimentos de alguns pacientes sobre o atendimento oferecido
 - Footer: Apresenta um formulário para contato ao lado de um iframe exibindo a localização do consultório no Google Maps e informações de contato (endereço, telefone, WhatsApp, etc.).

O site também contará com páginas em que será possível acessar mais informações sobre uma especialidade oferecida por meio da rota `/especialidade/[id]` (Ainda em desenvolvimento)
Os componentes foram escritos em arquivos `.jsx` e guardados na pasta `/components`. Os estilos CSS aplicados nesses componentes estão definidos dentro da pasta `/styles`, com um arquivo CSS para cada componente, além do `global.css` que aplica estilos em escopo global.

### Header
```
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/header.module.css';

export default function Header() {
  return (
    <header className={`${styles.header} dark-background`}>
      <Image src="/assets/images/logo.png" alt="Logo do site" height={1649} width={1631} />
      <nav>
        <ul>
          <li>
            <Link href="/#inicio">
              <h5>Início</h5>
            </Link>
          </li>
          <li>
            <Link href="/#especialidades">
              <h5>Especialidades</h5>
            </Link>
          </li>
          <li>
            <Link href="/#sobre">
              <h5>Sobre</h5>
            </Link>
          </li>
          <li>
            <Link href="/#depoimentos">
              <h5>Depoimentos</h5>
            </Link>
          </li>
          <li>
            <Link href="/#contato">
              <h5>Contato</h5>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
```
A estrutura do Header é definida dentro da tag <header>, que possui a classe dark-background para aplicar uma cor de fundo azul escuro. Dentro dele, temos:
 - Um componente `<Image/>` que contém a imagem do logotipo da clínica.
 - Uma tag `<nav>` que agrupa os links de navegação.
 - Uma lista não ordenada (`<ul>`) onde cada item (`<li>`) contém um link (`<Link/>`). Esses links direcionam o usuário para as seções correspondentes na mesma página (ex: href="#especialidades").

O CSS é responsável por posicionar o logotipo e os links de navegação, geralmente usando display: flex no `<header>`. A classe `.dark-background` aplica um fundo escuro, e outras regras definem as cores e o estilo dos links, garantindo que o cabeçalho seja visualmente coeso e funcional.

### HomeImg

```
import styles from '../../styles/initialSection.module.css';

export default function HomeImg({ imagem }) {
  return (
    <section id="inicio" className={styles.inicio} style={{ backgroundImage: `url(${imagem})` }}></section>
  );
}
```

A estrutura é minimalista: `<section id="inicio">`. Embora esteja vazia no HTML, ela serve como um contêiner que será totalmente estilizado pelo CSS.
O seletor #inicio no CSS é usado para aplicar um estilo visual marcante. Geralmente, isso inclui:
 - `background-image`: Uma imagem de alta qualidade do consultório é definida como plano de fundo.
 - `height`: Uma altura significativa de 70vh para que o componente ocupe a maior parte da tela inicial.
 - `background-size`: cover: Garante que a imagem de fundo cubra toda a área do componente sem distorção.

### Especialidades

```
'use client';
import styles from '../../styles/especialidades.module.css';
import { useEffect, useState } from 'react';

import ImageCard from "./ImageCard"

export default function Especialidades() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function getEspecialidades() {
      const res = await fetch('/api/especialidades');
      const especialidades = await res.json();
      setDados(especialidades);
    }
    getEspecialidades();
  }, []);

  return (
    <section id="especialidades" className={`${styles.especialidades} white-background`}>
      <h2>Especialidades</h2>
      <ul id="listaEspecialidades">
        {dados?.map(especialidade => (
          <ImageCard key={especialidade.id} dados={especialidade}/>
        ))}
      </ul>
    </section>
  );
}
```

O componente especialidades exibe os serviços numa lista de boxes para cada serviço oferecido em que há uma imagem demonstrativa e um texto explicativo, que aparece quando o usuário passa o mouse por cima. As informações de nome, descrição da e caminho para a imagem ilustrativa de cada especialidade foram armazenadas no arquivo `dados.json` e são obtidas através da chamada de API dentro do `useEffect()`. A rota para acessar as informações de todas as especialidades é `/api/especialidades`. Os dados de todas as especialidades são guardados dentro da variável `dados` definida dentro do `useState()`. Dentro da tag `<ul>`, é inserido um código javascript que itera sobre a lista especialidades através de `dados.map()` para renderizar os boxes com as especialidades. Para cada especialidade, cria um elemento de lista (`<li>`) com o HTML correspondente (imagem, nome e descrição).

O CSS estiliza a aparência dos cards de especialidades. Regras para #especialidades ul usam display: flex e flex-wrap: wrap para organizar os itens em uma grade responsiva. Em cada item (`<li>`) da lista, é colocada uma tag `<figure>` contendo uma imagem ilustrativa (`<img>`) e um `<figcaption>` que possui o título e a descrição da especialidade ofertada. Os cards foram estilizados para que o usuário, ao passar o mouse por cima de uma figura, a descrição da respectiva espacialidade apareça.

### Sobre

```
'use client';
import styles from '../../styles/sobre.module.css';
import Image from 'next/image';

export default function Sobre() {
  return (
    <section id="sobre" className={`${styles.sobre} blue-background`}>
      <h2>Sobre</h2>
      <article className={styles.sobreContainer}>
        <aside className={styles.sobreColuna}>
          <h4>A dentista</h4>
          <figure className={styles.sobreFigura}>
            <Image src="/assets/images/dentista.jpg" alt="A dentista" width={2153} height={3390} />
            <figcaption>
              <h6 className="medium">Dra. Alzira Varão Lima</h6>
              <h6>Periodontista formada pela USP</h6>
            </figcaption>
          </figure>
        </aside>

        <p className={styles.sobreColuna}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra sem viverra,
          vulputate augue quis, interdum urna. Etiam pharetra ex non auctor tincidunt. Etiam ornare
          leo in rutrum elementum. Curabitur in urna dolor. Sed feugiat ullamcorper massa in
          egestas. Sed consequat, sapien quis ornare porta, diam orci interdum diam, eget vehicula
          ipsum nulla vel risus. Phasellus efficitur hendrerit nisl, nec ultrices augue mollis at.
          Nunc sagittis interdum urna vitae fringilla. Sed iaculis in urna efficitur mattis. Vivamus
          eget posuere nibh, id elementum eros. Mauris bibendum erat ut eros faucibus, nec elementum
          velit tincidunt. Morbi ut nunc mauris. Duis feugiat ultrices aliquet. Maecenas sed
          ullamcorper sapien. Etiam sit amet feugiat magna. In hac habitasse platea dictumst.
          Vivamus congue justo nec euismod scelerisque. Duis pretium iaculis erat.
        </p>
      </article>
    </section>
  );
}
```

O componente `<section id="sobre">` contém um `<article className="sobre-container">` que organiza o conteúdo em duas colunas:
 - Uma tag `<aside>` para exibir a foto e o nome da dentista.
 - Um parágrafo (`<p>`) com o texto descritivo sobre a profissional.

A classe `.sobre-container` usa `display: flex` para criar o layout de duas colunas. O CSS também estiliza a imagem (`.sobre-figura img`), a legenda (`figcaption`) e o texto, garantindo uma leitura agradável e uma apresentação profissional. A classe `.blue-background` define uma cor azul claro como cor de fundo do componente.

### Status Bar

```
import styles from '../../styles/statusBar.module.css';

export default function StatusBar() {
  return (
    <section className={styles.statusBar}>
      <ul>
        <li>
          <h2>33</h2>
          <span>Anos Atendendo</span>
        </li>
        <li>
          <h2>+500</h2>
          <span>Pacientes</span>
        </li>
        <li>
          <h2>+8k</h2>
          <span>Restaurações Feitas</span>
        </li>
        <li>
          <h2>+30k</h2>
          <span>Consultas Feitas</span>
        </li>
        <li>
          <h2>+15</h2>
          <span>Certificações</span>
        </li>
      </ul>
    </section>
  );
}
```

A status bar exibe numa lista não ordenada `<ul>` os dados quantitativos como: número de anos atendendo, quantidade de pacientes atendidos, quantidade de certificações e número de procedimentos realizados.
O seletor `#status-bar ul` usa `display: flex` para alinhar as estatísticas horizontalmente no Desktop e verticalmente em dispositivos mobile. O CSS define a cor de fundo, a tipografia dos números (`.numero`) e dos textos (`.texto`), criando um forte contraste visual que chama a atenção para os dados, com números em branco num fundo azul escuro. Os depoimentos são exibidos dentro de uma tag `<ul>` como boxes num carrossel (ainda não aplicado). A lista é renderizada dinamicamente pelo Javascript, já que as informações sobre cada um deles (texto, autor e avaliação) estão guardados no arquivo dados.json. Sendo assim, os dados são obtidos através da chamada de API dentro do `useEffect()`. A rota para acessar as informações de todos os depoimentos é `/api/depoimentos`. Os dados dos depoimentos são guardados dentro da variável `dados` definida dentro do `useState()`. Dentro da tag `<ul>`, é inserido um código javascript que itera sobre a lista especialidades através de `dados.map()` para renderizar os boxes com os depoimentos. Para cada depoimento, cria-se um elemento de lista (`<li>`) com o HTML correspondente (texto, autor e avaliação).

O CSS estiliza a aparência dos boxes (`#depoimentos ul li e .dark-background`), como tamanho, cor de fundo e preenchimento. Já as Media Queries ajustam o tamanho dos boxes.

### Footer

```
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
```

O formulário do rodapé é envolvido pela tag `<form>`, em que cada entrada é representada por um `<input>` (textos curtos), `<textarea>` (textos longos) `<select>` (lista de opções). Cada uma das entradas, assim como suas `<labels>` (explicação do input) é envolvida num `<fieldset>` e no fim do formulário há o botão de submit. Ao lado do formulário é possível encontrar o iframe que exibe a localização do consultório no Google Maps por meio da tag `<iframe>`. Do lado direito, há uma lista das informações de contato envolvidas pela tag `<address>`.

O seletor `.contato-container` usa `display: flex` para organizar o formulário, o mapa e as informações lado a lado em telas grandes. Em telas pequenas, uma Media Query altera `flex-direction` para `column`, empilhando os elementos verticalmente para melhor visualização em dispositivos móveis. O CSS também estiliza todos os elementos do formulário e as informações de contato.









## Imagens do Protótipo
### Versão mobile
A versão mobile do protótipo foi feita para a tela de um IPhone SE. A intenção é garantir que o conteúdo consiga caber até mesmo dentro de telas de smartphone com largura pequena (neste caso 320px)

<img src="./public/imagens_prototipo/iPhone SE - Página Inicial.png">

### Versão Desktop
A versão para Desktop busca se adaptar a dispositivos com telas maiores, segue abaixo imagem do esboço para a versão desktop:

<img src="./public/imagens_prototipo/desktop.png">
