---
name: 'Gerador de Citações'
description: 'Build a random quotes generator with ReactJS'
author: '@faisalsayed10, @vitorvavolizza'
img: 'https://cdn.hackclub.com/rescue?url=https://cloud-kuvixvb93.vercel.app/0quotes-generator.png'
locales: 'pt-br'
---

# Gerador de Citações

Neste workshop, vamos construir um gerador de citações aleatórias usando uma API no React. Ao final, você terá aprendido a lidar com APIs no React, bem como alguns conceitos interessantes como React Hooks!

[![Gerador de Citações](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/gerador-de-citacoes/img/final.PNG)](https://pxm8s.csb.app/)

Esse é o [código final](https://codesandbox.io/s/gerador-de-citacoes-final-pxm8s).

## Parte 1: Pré-requisitos

Você deve saber alguns fundamentos do React e eu recomendo que você siga [este](https://workshops.hackclub.com/nextjs_starter/) workshop antes de prosseguir. Se você estiver tendo problemas, sinta-se à vontade para perguntar a [mim](https://app.slack.com/client/T0266FRGM/user_profile/U014ND5P1N2) ou qualquer pessoa do [Slack do Hack Club](https://hackclub.com/slack/)!

## Parte 2: Configuração

Para escrever nosso código, usaremos o [CodeSandbox](https://codesandbox.io), que é o melhor editor de código online para React.

Para começar, acesse este [código inicial](https://codesandbox.io/s/gerador-de-citacoes-inicial-3cfdu). Pressione **`ctrl + s`** / **`cmd + s`** e ele irá copiar automaticamente para você. Agora, temos tudo configurado, então vamos começar!

## Parte 3: Construindo o projeto

### 1) Inspecionando o código inicial

Vamos primeiro dar uma olhada no código inicial do nosso projeto.

![imagem dos diretórios em nosso projeto](https://cdn.hackclub.com/rescue?url=https://cloud-9ne6wtuvp.vercel.app/0image.png)

Primeiro, existem 2 diretórios principais e um arquivo `package.json`. Iremos ignorar o arquivo `package.json` por enquanto e vamos dar uma olhada nos 2 diretórios, `public/` e `src/`.

Normalmente, o diretório `public/` contém um arquivo HTML e todos os seus ativos. Não tocaremos no diretório `public/` durante todo o workshop, nem mesmo no arquivo HTML!

Em seguida está o diretório `src/` que contém todos os seus arquivos JavaScript e seus arquivos CSS. Temos um arquivo `index.js`, que basicamente renderiza nosso código React. O arquivo `styles.css` já está escrito para você.

Em seguida está o arquivo `App.js`. Normalmente, quando construímos grandes projetos, não começamos diretamente com o arquivo `App.js`. Criamos pequenos componentes e depois os adicionamos no componente `App`. Mas hoje, estaremos construindo um gerador de citações, que é bem pequeno e fácil. Então, vamos começar a escrever nosso código diretamente no componente `App` para evitar a criação de componentes desnecessários.

É assim que nosso arquivo `App.js` está agora.

```jsx
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <p>Olá Mundo</p>
    </div>
  );
}
```

Este código simplesmente renderiza `Olá Mundo` em seu navegador.

Agora que sabemos em que lugar estamos com nosso código, é hora de começar!

### 2) A UI

Primeiro, vamos construir a UI básica de como nosso site deve ser. Escreva o seguinte código no `return()` do componente `App`.

```jsx
export default function App() {
  return (
    <div className="App">
      <h1 className="titulo">Gerador de Citações</h1>
      <p className="citacoes">Isso é uma citação</p>
      <p className="autor">- nome do autor</p>
      <button className="botao">Nova Citação</button>
    </div>
  );
}
```

Construímos uma UI bem básica para nosso projeto e tudo é autoexplicativo aqui. O `botão` não funciona no momento e também não fizemos nenhuma `chamada API`. Portanto, vamos começar a adicionar a funcionalidade principal.

Esta é a aparência de sua janela de preview:

![Janela de preview](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/gerador-de-citacoes/img/preview.PNG)

### 3) Chamada da API

Basicamente, estaremos fazendo uma chamada de API para uma url que nos retornará um json de citações e seus autores. Em seguida, armazenaremos esses dados em um estado usando o hook `useState` para que possamos renderizar novamente nosso componente sempre que ele mudar.

![imagem épica de useState](https://cdn.hackclub.com/rescue?url=https://cloud-90fxjk0al.vercel.app/0image.png)

O url onde faremos a solicitação é `https://type.fit/api/quotes`. Se você abrir este link no navegador, verá um arquivo json cheio de citações!

![O que você vê no navegador](https://cdn.hackclub.com/rescue?url=https://cloud-h7wzq13xb.vercel.app/0image.png)

Vamos começar a trabalhar com isso.

Dentro do `App.js`, primeiro criaremos uma nova variável para armazenar este url, a seguir criaremos um estado vazio para armazenar os dados.

```jsx
import React, { useState } from "react"; //<-- Importa useState
import "./styles.css";

const url = "https://type.fit/api/quotes"; // O URL da API

export default function App() {
  const [citacoes, setCitacoes] = useState({}); // Criando um estado

  // Retornaremos todo o jsx que já escrevemos abaixo dessa linha.
  return (...)
}
```

Explicação: Criamos uma variável `url` usando `const` para que seu valor nunca mude novamente e atribuímos a ela o URL da API. Em seguida, importaremos `useState` de `react` e usando o código padrão básico, criamos um estado `citacoes`. Ele está atualmente atribuído a um objeto vazio, mas será substituído em breve!

Agora vamos escrever uma função que fará a solicitação à API e buscará os dados desse URL. Usaremos `funções async` porque nos retornará uma promessa. Também usaremos `await` dentro da `função async`.

![Imagem de async que parece legal](https://cdn.hackclub.com/rescue?url=https://cloud-b58j7jpbu.vercel.app/0image.png)

O operador `await` é usado para esperar por uma `Promise` para resolver ou rejeitá-la. E só pode ser usado dentro de uma `função async`.

As `funções async` podem conter zero ou mais expressões `await`. As expressões `await` suspendem o progresso de uma `função async`, esperando e, subsequentemente, retomando o progresso apenas quando uma operação async baseada em uma promessa esperada é cumprida ou rejeitada. O valor resolvido da promessa é tratado como o valor de retorno da expressão await. O uso de `async`/`await` permite o uso de blocos `try`/`catch` comuns em torno do código async.

Saiba mais sobre [`Async await`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await).

Dentro de nosso componente `App`, vamos criar uma função `async` `getCitacoes()` e agora vamos começar a buscar os dados.

```jsx
async function getCitacoes() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    setCitacoes(data);
  } catch (err) {
    console.log(err);
  }
}
```

Explicação: Dentro de nossa função `async`, adicionamos um bloco `try`/`catch`, que nos ajudará a obter os dados ou lançar erros se não for bem-sucedida. Criamos uma variável chamada `res` (forma abreviada de `resposta`) que irá armazenar a resposta que obtemos depois de buscar os dados da URL. Agora, esta resposta ainda não está pronta para uso e precisamos convertê-la para o formato `json()` antes de usá-la. Então, armazenamos esses dados formatados em json na variável `data`. E por último, armazenamos todos os dados dentro do nosso estado `citacoes` usando` setCitacoes`.

O bloco `catch` irá simplesmente capturar um erro (se houver) e então registrá-lo no console.

![Exemplo de try catch](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/gerador-de-citacoes/img/trycatch.PNG)

Nossa função `async` está completa e agora podemos usar os dados que obtivemos da solicitação da API.

Agora, se dermos uma olhada no valor armazenado dentro de nosso estado, notaremos que é um grande array inteiro consistindo de centenas de objetos contendo aspas!

![Imagem do estado contendo milhares de citações](https://cdn.hackclub.com/rescue?url=https://cloud-7drh3ecj9.vercel.app/0image.png)

**NOTA:** Você pode verificar isso no `React DevTools` do codeSandbox (próximo ao console).

Precisamos exibir apenas 1 citação aleatória de cada vez. Então, para isso, só precisamos armazenar um único objeto aleatório desse array dentro de nosso estado.

Usando a fórmula para obter um número aleatório, vamos criar uma função fora do nosso componente que nos retornará um número aleatório.

```jsx
// ...

const numAleatorio = () => Math.floor(Math.random() * data.length) + 1;

export default function App() {
  // código que já fizemos
}
```

Agora, esta função sempre retornará um número aleatório entre 1 e `data.length` (o comprimento do array `data`).

O navegador deve estar gritando com você, já que `data` é indefinido. É porque só definimos `data` posteriormente dentro de nosso componente. Então, uma solução rápida para isso será criar uma variável `data` usando `let` acima de nossa função `numAleatorio()` e remover a palavra-chave `const` de `data` dentro da função async.

O que basicamente fizemos é que já definimos `data`, mas passaremos o valor mais tarde dentro da `função async`.

Agora temos um número aleatório gerado toda vez que a função `numAleatorio()` é chamada. E se o passarmos para um array, ele nos retornará o valor daquele índice. Portanto, dentro da função async, quando definirmos o estado, adicionaremos colchetes a `data` e chamaremos `numAleatorio()` nele.

```jsx
setCitacoes(data[numAleatorio()]);
```

Isso nos retornará o objeto que está no índice de `numAleatorio()`.

Agora, apenas um objeto aleatório contendo a citação e o autor será armazenado dentro do estado `aspas`.

![Apenas 1 citação sendo armazenada no estado](https://cdn.hackclub.com/rescue?url=https://cloud-7drh3ecj9.vercel.app/1image.png)

Seu código até agora:

```jsx
import React, { useState } from "react";
import "./styles.css";

const url = "https://type.fit/api/quotes";
let data;
const numAleatorio = () => Math.floor(Math.random() * data.length) + 1;


export default function App() {
  const [citacoes, setCitacoes] = useState({});

  async function getCitacoes() {
    try {
      const res = await fetch(url);
      data = await res.json();
      setCitacoes(data[numAleatorio()]);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="App">
      <h1 className="titulo">Gerador de Citações</h1>
      <p className="citacoes">Isso é uma citação</p>
      <p className="autor">- nome do autor</p>
      <button className="botao">Nova Citação</button>
    </div>
  );
}
```

A próxima coisa que desejamos implementar é obter uma citação aleatória sempre que nosso site for carregado. Isso pode ser feito facilmente criando um hook `useEffect` dentro de nosso componente, chamando nossa função `getCitacoes()` e passando um array de dependência vazio para ele.

![foto de useEffect](https://cdn.hackclub.com/rescue?url=https://cloud-q749otmin.vercel.app/0image.png)

**Nota:** Certifique-se de importar `useEffect` de `react`.

```jsx
import React, { useState, useEffect } from "react";
```

```jsx
export default function App() {
  const [citacoes, setCitacoes] = useState({});

  useEffect(() => {
    getCitacoes();
  }, []);
  // Resto do código
```

Saiba mais sobre o hook [`useEffect`](https://medium.com/javascript-in-plain-english/react-hooks-how-to-use-useeffect-ecea3e90d84f).


Agora podemos editar nosso código jsx para exibir a citação e o nome do autor.

```jsx
return (
  <div className="App">
      <h1 className="titulo">Gerador de Citações</h1>
      <p className="citacoes">{citacoes.text}</p>
      <p className="autor">- {citacoes.author ? citacoes.author : "Desconhecido"}</p>
      <button className="botao">Nova Citação</button>
    </div>
);
```

Explicação: A citação (que está no objeto como `text`) agora é renderizada na página. Observe como usei um [`operador ternário`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) para renderizar o nome do autor. É que, existem algumas citações que não possuem autor, então verificamos se existe um autor dentro do nosso objeto. Se estiver lá, renderizamos o nome do autor. Se não estiver lá, renderizamos `Desconhecido` na tela do navegador.

Agora, se você olhar a janela de visualização, verá que praticamente terminamos! A última coisa que resta é adicionar um `onClick` ao nosso botão.

```jsx
<button className="botao" onClick={getCitacoes}>Nova Citação</button>
```

Sempre que o botão for clicado, a função `getCitacoes()` será chamada, retornando uma nova citação aleatória, resultando em uma mudança de estado que fará com que nosso componente seja renderizado novamente!

Uau! Você acabou de escrever um código incrível!

![Fantástico!](Https://media.giphy.com/media/OK27wINdQS5YQ/giphy.gif)

Código Final:

```jsx
import React, { useState, useEffect } from "react";
import "./styles.css";

const url = "https://type.fit/api/quotes";
let data;
const numAleatorio = () => Math.floor(Math.random() * data.length) + 1;


export default function App() {
  const [citacoes, setCitacoes] = useState({});

  useEffect(() => {
    getCitacoes();
  }, []);

  async function getCitacoes() {
    try {
      const res = await fetch(url);
      data = await res.json();
      setCitacoes(data[numAleatorio()]);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="App">
        <h1 className="titulo">Gerador de Citações</h1>
        <p className="citacoes">{citacoes.text}</p>
        <p className="autor">- {citacoes.author ? citacoes.author : "Desconhecido"}</p>
        <button className="botao" onClick={getCitacoes}>Nova Citação</button>
      </div>
  );
}
```

Este é o nosso projeto final:
![Visualização final](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/gerador-de-citacoes/img/gifinal.gif)

Yay! Acabamos! Aprendemos como lidar com APIs no React e construímos um gerador de citações aleatórias simples, mas muito massa!!

![Yaaaay](https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif)

## Parte 4: O Fim

Certifique-se de criar uma conta no codesandbox.io para salvar esta maravilhosa criação ou você a perderá 😧.

Aqui estão algumas tarefas para você:

1. Tente exibir uma lista de citações em seu site.
[Exemplo](https://codesandbox.io/s/gerador-de-citacoes-lista-4ftud)

2. Tente adicionar a funcionalidade de ir e vir em seu aplicativo de citações!
[Exemplo](https://codesandbox.io/s/gerador-de-citacoes-proximo-64umr)

3. Será que você consegue deixar as citações em português?

Agora que você sabe como lidar com APIs no React, aqui estão algumas APIs para você brincar!

1. [API de Clima](https://openweathermap.org/api) -
[Exemplo](https://weatherer.fayd.me/) e [Código-fonte](https://github.com/faisalsayed10/weatherer).

2. [API de Filmes](https://www.themoviedb.org/documentation/api) -
[Exemplo](https://binger.fayd.me/) e [Código-fonte](https://github.com/faisalsayed10/Movie-Search-App).

3. [API do Hack Club](https://scrapbook.hackclub.com/api/users/)

4. [API do Fortnite](https://fortnite-api.com/)

Confira o que outros Hack Clubbers construíram!

1. [Khushraj Rathod](https://codesandbox.io/s/quotesgeneratorstartercode-forked-z0wzm)

2. [Aaryan Porwal](https://codesandbox.io/s/quotesgenerator-sdqkm)

Agora que você terminou de construir este maravilhoso projeto, compartilhe sua bela criação com outras pessoas! Lembre-se, é só mandar a URL do seu projeto!