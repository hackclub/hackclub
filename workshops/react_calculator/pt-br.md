---
name: 'Calculadora Simples'
description: 'Crie uma calculadora com React.js'
author: '@faisalsayed10, @vitorvavolizza'
img: 'https://cdn.hackclub.com/rescue?url=https://cloud-fmzgn1t1z.vercel.app/0screen_shot_2020-11-30_at_5.43.36_pm.png'
---

Hoje, construiremos uma calculadora com React simples, mas muito divertida.

![Calculadora Simples](img/calc-completa.PNG)

Esse é o [código final](https://codesandbox.io/s/calculadora-final-2potg).

## Parte 1: Pré-requisitos

Você deve conhecer alguns conceitos básicos do React e eu recomendo que você siga [este](https://workshops.hackclub.com/react_calendar/) workshop antes de prosseguir. Se você estiver tendo problemas, sinta-se à vontade para perguntar para o [Time do Hack Club Brasil](https://app.slack.com/client/T0266FRGM/browse-user-groups/user_groups/S01L1TL2RUY) ou a qualquer um no [Slack do Hack Club](https://hackclub.com/slack/)!

## Parte 2: Configuração

Para escrever nosso código, usaremos o [CodeSandbox](https://codesandbox.io), considerado o melhor editor de código online para React.

Para começar, vá para este [código inicial](https://codesandbox.io/s/calculadora-inicial-nu23b). Pressione **`ctrl+s`** (Windows/Linux) ou **`cmd+s`** (macOS) e ele irá automaticamente copiá-lo para você. Agora, temos tudo pronto, então vamos começar!

### 1) O Código Inicial

Vamos primeiro dar uma olhada no código inicial do nosso projeto.

Primeiro, há 2 diretórios principais e um arquivo `package.json`. Vamos ignorar o arquivo `package.json` por enquanto e vamos dar uma olhada nos 2 diretórios: `public/` e `src/`.

Normalmente, o diretório `public/` contém um arquivo HTML e todos os seus recursos. Não tocaremos no diretório `public/` durante todo o workshop, nem mesmo no arquivo HTML!

A seguir, temos o diretório `src/`, que contém todos os seus arquivos JavaScript e seus arquivos CSS. Nós temos um arquivo `index.js`, que basicamente torna nosso código React. O arquivo `styles.css` já está escrito para você.

A seguir está o arquivo `App.js`. Que se parece com isto:

```jsx
import React, { useState } from 'react';
import './styles.css';

const arrOperacoes = ['*', '/', '+', '.', '-'];

export default function App() {
  return (
    <div className="App">
      <h1>Calculadora com React</h1>
      <div className="calc-wrapper"></div>
    </div>
  );
}
```

Explicação: Aqui, `useState` já é importado para você, pois o utilizaremos na parte final do workshop. A seguir, há um conjunto contendo todos os operadores básicos. O componente `App` simplesmente renderiza um cabeçalho e um `div` com um `nome de classe` de `calc-wrapper` por enquanto.

Em seguida, se procurarmos no diretório `components/`, temos um componente `Botao` e um arquivo `components.css`.

### 2) Criação do componente 'Botao'.

Vamos começar a construir o componente `Botao`.

Primeiro vamos criar uma função `ehNum` dentro do componente que verifica se o valor é um número ou não.

```jsx
const Botao = () => {
  const ehNum = (val) => {
    if (!isNaN(val) || val === 'C' || val === '.') {
      return true;
    }
    return false;
  };
};
```

Explicação: Criamos uma função chamada `ehNum` que aceita um `val` como argumento. Em seguida, ela verifica se o `val` é um número, `C` (limpar) ou um decimal (`.`), se alguma das condições for verdadeira, ela retorna `verdadeiro`, ou então, simplesmente retorna `falso`.

Em seguida, criaremos uma função para verificar se um valor é ou não um sinal de igual.

```jsx
const Botao = () => {
  // ...

  const ehIgual = (val) => {
    if (val === '=') {
      return true;
    }
    return false;
  };
};
```

Explicação: Esta é uma função bastante simples que aceita um valor como argumento e verifica se o valor é ou não um sinal igual e retorna `verdadeiro`/`falso` de acordo.

Agora é hora de renderizar jsx neste componente. Isto vai ser um pouco complicado e faremos uso de `props`. Portanto, tente se concentrar e entender o que estamos escrevendo e você certamente não ficará confuso.

Haverá 3 props principais que estaremos utilizando neste componente.

1. `children` - Essa prop é o valor que será passado para as tags de abertura e fechamento do componente.

Exemplo:

```jsx
<Botao>7</Botao> // Aqui, 7 é a children do componente.
```

2. `onClick` - Essa prop irá simplesmente armazenar as funções que criaremos mais tarde para nossa calculadora. Esta função será passada para o valor `onClick` do botão.

3. `isInput` - Essa prop funcionará como um booleano para nós e nos ajudará a determinar se o componente renderizará ou não o valor do estado da `input` (entrada).

**NOTA:** Ainda não criamos o estado da `input`, mas o faremos em poucos minutos.

```jsx
const Botao = ({ children, onClick, isInput }) => { // <-- Props
  const ehNum = (val) => {...};
  const ehIgual = (val) => {...};

  return (
    <>
      {isInput ? (
        <div className="input">{children}</div>
      ) : (
        <div
          className={`botao-wrapper botao ${ehIgual(children) ? "btn-igual" : null} ${ehNum(children) ? null : "operacao"}`}
          onClick={() => onClick(children)}>
          {children}
        </div>
      )}
    </>
  );
};
```

Explicação: Primeiro aceitamos as 3 props neste componente. Depois, utilizamos `fragmentos` para serem o elemento pai do `jsx`. Os fragmentos permitem agrupar uma lista de elementos-filhos sem adicionar nodos extras ao DOM.

**NOTA:** `<></>` são conhecidos como fragmentos.

Em seguida, utilizamos [operadores ternários](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) para tornar diferente o `div` dependendo da situação. Se o `isInput` for verdadeiro, ele renderizará o `div` com o `nome de classe` `input`, caso contrário renderizará outro `div`.

Observe que no segundo `div`, utilizamos novamente `operadores ternários` para determinar o `nome da classe` do `div`. Chamamos a função `ehIgual` passando o valor de `children` e se for `verdadeira`, ela adicionará um `nome de classe` de `btn-igual` ao `div`. Também chamamos a função `ehNum` passando-lhe o mesmo valor de `children` e se ela retorna `verdadeiro`, ela adicionará um nome de classe de `operacao` ao `div`.

Em seguida, damos um atributo `onClick` ao `div` que simplesmente chamará a função `onClick` que também aceita o valor de `children` como um argumento.

**NOTA:** A função `onClick` será transmitida pelo componente pai a este componente.

E, por último, nós simplesmente renderizamos os `filhos` (children) do componente.

Espero não ter sido vago ao explicar o que o código está fazendo. Se você ainda estiver confuso, tente ler o código e compreender novamente. Ou então, sinta-se à vontade para falar com a gente!

Com isto, terminamos nosso componente `Botao` e agora é hora de renderizá-lo no componente principal (App) e também passar-lhe as `props` apropriadas.

Nosso código até agora:

```jsx
import React from "react";
import "./components.css";

const Botao = ({ children, onClick, isInput }) => {
  const ehNum = (val) => {
    if (!isNaN(val) || val === "C" || val === ".") {
      return true;
    }
    return false;
  };

  const ehIgual = (val) => {
    if (val === "=") {
      return true;
    }
    return false;
  };

  return (
    <>
      {isInput ? (
        <div className="input">{children}</div>
      ) : (
        <div
          className={`botao-wrapper botao ${
            ehIgual(children) ? "btn-igual" : null
          } ${ehNum(children) ? null : "operacao"}`}
          onClick={() => onClick(children)}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Botao;
```

Você está se saindo muito bem até agora! Recomendo que você relaxe e faça uma pausa de 5 minutos!

![Um sapo bonito relaxando como eu lhe disse](https://media.giphy.com/media/9u1J84ZtCSl9K/giphy.gif)

### 3) Criando o componente 'App'.

Vamos renderizar o componente `Botao` em nosso componente `App`. Vamos primeiro importá-lo no componente `App` e renderizar alguns componentes `Botao` dentro do nosso `div` `calc-wrapper`.

```jsx
import Botao from "./components/Botao";

export default function App() {
  return (
    <div className="App">
      <h1>Calculadora com React</h1>
      <div className="calc-wrapper">
        <Botao isInput></Botao>
        <div className="linha">
          <Botao>7</Botao>
          <Botao>8</Botao>
          <Botao>9</Botao>
          <Botao>/</Botao>
        </div>
      </div>
    </div>
  )
}
```

Explicação: No interior do `calc-wrapper`, primeiro adicionamos um `Botao` com um prop de `isInput`. Isto significa que `isInput` será `verdadeiro` para este componente e como não passamos o `isInput` para nenhum outro `Button`, ele será `falso` para estes componentes. Em seguida, criamos uma `linha` e adicionamos 4 `Botoes` a ela, e como a `linha` tem uma propriedade de `flex`, ela será mostrada no navegador como uma linha! Também passamos os números `7, 8, 9` e o operador `/` como crianças para esses botões, respectivamente.

Sua visualização deve estar parecida com isto:

![Preview output do código escrito até agora](img/primeiralinha.PNG)

Excelente! Perguntando-se como eles adquiriram cores diferentes, mesmo que fossem o mesmo componente? É por isso que criamos as funções `ehNum()` e `ehIgual()`. Eles verificam qual é o valor das crianças e dão o `nome da classe` de acordo! Não é legal?

Você percebeu que o primeiro componente `Botao` parece diferente dos outros? Isto porque o componente `isInput` é verdadeiro para aquele componente e a maneira como construímos nosso componente `Botao` é verificando se o componente `isInput` é verdadeiro e assim, exibiremos um `div` diferente!

Acabamos de criar os 4 botões de nossa calculadora! 

**Desafio:** Você consegue adicionar o resto dos botões de maneira semelhante?

**Dicas:**

1. Use linhas para cada grupo de botões.

2. Verifique como é o projeto final e tente implementar da mesma maneira!

-------------------

Essa é a solução:

```jsx
export default function App() {
  return (
    <div className="App">
      <h1>Calculadora com React</h1>
      <div className="calc-wrapper">
        <Botao isInput></Botao>
        <div className="linha">
          <Botao>7</Botao>
          <Botao>8</Botao>
          <Botao>9</Botao>
          <Botao>/</Botao>
        </div>
        <div className="linha">
          <Botao>4</Botao>
          <Botao>5</Botao>
          <Botao>6</Botao>
          <Botao>*</Botao>
        </div>
        <div className="linha">
          <Botao>1</Botao>
          <Botao>2</Botao>
          <Botao>3</Botao>
          <Botao>+</Botao>
        </div>
        <div className="linha">
          <Botao>.</Botao>
          <Botao>0</Botao>
          <Botao>C</Botao>
          <Botao>-</Botao>
        </div>
        <div className="linha">
          <Botao>=</Botao>
        </div>
      </div>
    </div>
  );
}
```

Agora, sua janela de preview deve estar assim:

![Preview!](img/calc-completa.PNG)

Agora acabamos a UI de nossa calculadora! Agora tudo o que resta é fazer as funções apropriadas para que nossa calculadora funcione, bem como passar as `props` apropriadas para os `Botoes`!

![Woohoo, você fez um ótimo trabalho!](https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif)

## 4) Criando as funções de nossa calculadora.

Primeiro criaremos um estado de `input` que armazenará todos os botões pressionados pelo usuário e também nos ajudará a exibir os cálculos.

```jsx
export default function App() {
  const [input, setInput] = useState(""); // Cria o estado

  // ...
}
```

A seguir, vamos criar uma função que armazenará os números clicados pelo usuário no estado da `input` (entrada).

**NOTA:** Vamos criar funções separadas para operadores e números, pois não queremos a capacidade de pressionar os operadores mais de uma vez simultaneamente, mas os números podem ser pressionados quantas vezes quisermos. Se você estiver confuso, não se preocupe! Você entenderá em um minuto.

```jsx
export default function App() {
  const [input, setInput] = useState("");

  function insereNum(val) {
    setInput(input + val);
  }

  // ...
}
```

Explicação: Criamos uma função `insereNum` que pegará `val` como argumento. Em seguida, simplesmente anexamos `val` ao valor atual armazenado na `input` (entrada).

Agora, faremos uma função similar, mas um pouco mais complicada para os operadores. Não se preocupe, será um pouco confuso se você olhar para ela na primeira vez.

```jsx
function insereNum(val) {...}

function insereOperacao(val) {
  if (input === "" || (arrOperacoes.includes(input[input.length - 1]) && arrOperacoes.includes(val))
  ) {
    return;
  } else {
    setInput(input + val);
  }
}

  // ...
```

Explicação: Primeiro, criamos uma função `insereOperacao` que também aceita um `val` como argumento. Depois, fazemos uso de declarações `if-else` para verificar determinadas condições.

Primeiro, é verificado se a `input` está vazia ou não. (Definitivamente, não queremos que o usuário clique no operador se não houver nenhum número presente na `input`). Se esta condição não for verdadeira, então ela passa para a condição seguinte.

`input[input.length - 1]` é o último valor da string `input`. Suponha que `input` seja `12%2*`, então o último valor aqui é `*`, portanto `input[input.length - 1]` aqui é igual a `*`. Além disso, `arrOperacoes.includes()` é uma função que verifica se um determinado valor está ou não em um array.

Portanto, basicamente verificamos se o `arrOperacoes` inclui o último valor da `input` ou não. Se esta condição for verdadeira, ela passa novamente para a condição seguinte que verifica se o argumento `val` está incluído no `arrOperacoes` ou não.

**O que tudo isso significa?** Simplesmente está sendo verificado se o valor previamente pressionado pelo usuário é um operador ou não, enquanto também é verificado se o valor recém pressionado (`val`) é novamente, um operador ou não. Isto significará que o usuário pressionou os operadores 2 vezes simultaneamente. Assim, será evitado.

Se a primeira condição for verdadeira sozinha, a função simplesmente não retornará nada. Também, se a segunda e a terceira condição forem ambas verdadeiras, ela fará o mesmo.

Se todas as condições se revelarem falsas, finalmente ela atualizará o estado da `input` com o `val`.

Caraca, essa foi complicadinha! Espero que você tenha entendido o que e por que escrevemos este código.

![WOAH!!!](https://media.giphy.com/media/3o6ZtmGkSCwGWQNTOg/giphy.gif)

Agora, faremos uso da biblioteca `mathjs` que, se você olhar nas dependências do projeto, ela já está instalada para você. Só precisamos importá-la em nosso projeto e as funções de dentro dela estarão prontas para uso.

![mathjs já instalada](https://cdn.hackclub.com/rescue?url=https://cloud-9gtba7h1z.vercel.app/0image.png)

A seguir, na linha 4 do `App.js`, vamos importá-la.

```jsx
import * as math from "mathjs";
```

Agora, cada função dentro da biblioteca é armazenada em `math`.

A seguir, vamos criar uma função para avaliar nossos cálculos.

```jsx
function insereOperacao(val) {...}

function calcular() {
  if (input === "" || arrOperacoes.includes(input[input.length - 1])) {
    return input;
  } else {
    setInput(math.evaluate(input));
  }
}
```

Explicação: Esta função verifica se a `input` está vazia ou se o último valor da input é um operador. Se estas condições forem verdadeiras, isto significa que a `input` não pode ser avaliada. Portanto, ela simplesmente retornará a `input`. Se tudo estiver perfeito e as condições se revelarem falsas, ela fará uso da função `evaluate()` da biblioteca `mathjs` e simplesmente avaliará a `input`!

E aqui nós completamos todas as funções necessárias para que a calculadora funcione!

A última coisa que resta é passar as `props` apropriados para os componentes do `Botao` que completarão nosso projeto!

## 5) Passando as 'props' apropriadas para os Componentes 'Botao'.

Para o primeiro componente `Botao`, passaremos a `input` para ele, nós também passaremos a `input` como a `children` para esse componente.

```jsx
return (
  <div className="App">
    <h1>Calculadora com React</h1>
    <div className="calc-wrapper">
      <Botao isInput>{input}</Botao>
      {/* ... */}
    </div>
  </div>
)
```

Em seguida, para cada `Botao` que tem um número como `children` (filhos), nós passaremos `onClick={insereNum}` a ele. E para cada `Botao` que tem um operador como `children` (incluindo o decimal `.`) passaremos `onClick={insereOperacao}` como prop para ele.

Para o botão que tem `=` como children, passaremos a prop `onClick={calcular}` para ele.

Finalmente, para o botão `C` (limpar) como children, vamos passar `onClick` e também criar uma função inline que simplesmente limpará o estado.

Depois de passar todas as props, nosso código ficará assim:

```jsx
return (
  <div className="App">
    <h1>Calculadora com React</h1>
    <div className="calc-wrapper">
      <Botao isInput>{input}</Botao>
      <div className="linha">
        <Botao onClick={insereNum}>7</Botao>
        <Botao onClick={insereNum}>8</Botao>
        <Botao onClick={insereNum}>9</Botao>
        <Botao onClick={insereOperacao}>/</Botao>
      </div>
      <div className="linha">
        <Botao onClick={insereNum}>4</Botao>
        <Botao onClick={insereNum}>5</Botao>
        <Botao onClick={insereNum}>6</Botao>
        <Botao onClick={insereOperacao}>*</Botao>
      </div>
      <div className="linha">
        <Botao onClick={insereNum}>1</Botao>
        <Botao onClick={insereNum}>2</Botao>
        <Botao onClick={insereNum}>3</Botao>
        <Botao onClick={insereOperacao}>+</Botao>
      </div>
      <div className="linha">
        <Botao onClick={insereOperacao}>.</Botao>
        <Botao onClick={insereNum}>0</Botao>
        <Botao onClick={() => setInput("")}>C</Botao>
        <Botao onClick={insereOperacao}>-</Botao>
      </div>
      <div className="linha">
        <Botao onClick={calcular}>=</Botao>
      </div>
    </div>
  </div>
);
```

Com isso, terminamos de construir nossa calculadora!! 🥳🥳

![calculadora funcional](img/final.gif)

## Parte 4: O Fim

Você deve estar muito orgulhoso de ter construído esta calculadora incrível!

![yay](https://media.giphy.com/media/xUPGcMzwkOY01nj6hi/giphy.gif)

Certifique-se de criar uma conta no CodeSandbox para salvar esta criação ou você vai perdê-la 😧.

Agora é com você! Faça coisas loucas com este projeto!

Aqui estão algumas ideias para você:

1. Adicionar mais botões à calculadora, tais como quadrado, raiz quadrada, etc.  
[Exemplo](https://codesandbox.io/s/calculadora-com-react-kxk9s).

2. Adicione o suporte ao teclado à sua calculadora!  
[Exemplo](https://another-simple-calculator.vercel.app/).

Confira também estes exemplos legais!

1. [Exemplo 1](https://codepen.io/giana/pen/GJMBEv)

2. [Exemplo 2](https://codepen.io/tbremer/pen/wKpaWe)

3. [Exemplo 3](https://codepen.io/anthonykoch/pen/xVQOwb)

Confira o que outros Hack Clubbers construíram!

1. [Khushraj](https://codesandbox.io/s/calculadora-khushraj-9xo1g)

2. [Jack](https://codesandbox.io/s/calculadora-jack-ep3qp)

Agora que você terminou de construir este maravilhoso projeto, compartilhe sua bela criação com outras pessoas! Lembre-se, é só mandar a URL do seu projeto!
