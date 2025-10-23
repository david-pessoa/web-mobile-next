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
https://github.com/david-pessoa/web-mobile-next.git
```

### 2) Entre no diretório raiz do projeto (/web-mobile-next) e instale as dependências
```
npm install
```

### 3) Execute a aplicação
```
npm run dev
```

## Imagens do Protótipo
### Versão mobile
A versão mobile do protótipo foi feita para a tela de um IPhone SE. A intenção é garantir que o conteúdo consiga caber até mesmo dentro de telas de smartphone com largura pequena (neste caso 320px)

<img src="./public/imagens_prototipo/iPhone SE - Página Inicial.png">

### Versão Desktop
A versão para Desktop busca se adaptar a dispositivos com telas maiores, segue abaixo imagem do esboço para a versão desktop:

<img src="./public/imagens_prototipo/desktop.png">
