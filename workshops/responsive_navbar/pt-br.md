---
name: 'Barra de navegação responsiva'
description: 'Construa uma barra de navegação que responde ao tamanho do navegador'
author: '@faisalsayed10, @Ifritosss'
img: 'https://cdn.hackclub.com/rescue?url=https://cloud-9x2jsehxu.vercel.app/0image.png'
locales: 'pt-br'
---

Você provavelmente deve ter construído barras de navegação para os seus websites. É uma tarefa desafiante para muitos de nós fazer uma barra de navegação boa e responsiva. Bem, hoje estaremos construindo uma barra de navegação com alta capacidade de resposta! Não só é fácil de construir, como também é muito divertido e bonito!

Mas antes, vamos dar uma olhada em várias barras de navegação na Internet:

Barra de navegação responsiva:

![Barra de navegação](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/barra-responsiva/img/Imagem1.gif)

Barra simples:

![Barra de navegação simples](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/barra-responsiva/img/Imagem2.gif)

Ou talvez essa?

![Barra de navegação não responsiva](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/barra-responsiva/img/Imagem3.gif)

E é essa que construíremos hoje!

Vamos dar uma olhada abaixo?

![Barra de navegação responsiva](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/barra-responsiva/img/Imagem4.gif)


## Parte 1: **Pré-requisitos**

Você deve ter um conhecimento iniciante em:

**HTML**

**CSS**

**JavaScript**

## Parte 2: **Configuração**

### **Configurando seu ambiente de código no Repl.it**

O Repl.it é um editor de código onlinha. Você não precisa usar o Repl.it, mas sugiro que você o utilize, já que ele configura tudo pra você e não precisa de instalação.

Para começar, acesse [https://repl.it/languages/html](https://repl.it/languages/html). Seu ambiente de programação irá girar em apenas alguns segundos!

Você deve ver algo como o seguinte:

![Barra de navegação responsiva](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/barra-responsiva/img/Imagem5.png)

## Parte 3: **Construindo o projeto**

### 1) HTML

Vamos começar a escrever o código HTML exigido no arquivo `index.html`. Escreveremos todo nosso código dentro das tags ```<body></body>```.

NOTA: Certifique-se de que a tag ``<script>``, que está em seu “body”, esteja logo acima do fechamento da tag ``</body>`` e qualquer código que você escreva no ``<body>`` deve estar acima daquele ``<script>``, caso contrário, o código dará erro.

Primeiro, vamos construir uma estrutura simples da barra de navegação:

```html
<body>
  <nav class="navbar">
    <ul class="elementos">
      <li class="nav-el">PRINCIPAL</li>
      <li class="nav-el">SOBRE</li>
      <li class="nav-el">CONTATO</li>
      <li class="nav-el">PROJETOS</li>
    </ul>
  </nav>
  <script src="script.js"></script>
</body>
```

Explicação: No elemento ``<nav>``, criamos uma lista não-ordenada (``<ul>``) com os itens da lista (``<li>``) como links de navegação

Além disso, o elemento ``<nav>`` tem uma classe de barra de navegação ( ``<navbar>`` ), o ``<ul>`` tem uma classe de elementos, o ``<li>`` tem uma classe de nav-el e como sempre, a tag ``<script>`` está abaixo de todas estas linhas.

Agora, vamos também criar um botão que só será visível para telas menores e fará com que a barra de navegação apareça de lado. Ele virá abaixo da lista não ordenada dentro do elemento ``<nav>``.

```html
<div class="botao">
  <div class="linhas">
    <div class="span"></div>
    <div class="span"></div>
    <div class="span"></div>
  </div>
</div>
```

Explicação: As linhas de botão serão aninhadas dentro de duas tags ``<div>``. Da mesma forma, a primeira tag ``<div>`` tem uma classe de botão, a segunda tag ``<div>`` tem uma classe de fileiras e cada uma das linhas do botão tem uma classe de `span`.

Se você executar o código agora, você verá uma lista não ordenada na visualização semelhante a esta:

![Barra de navegação responsiva](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/barra-responsiva/img/Imagem6.png)

Umm... Por que nosso botão não renderizou? Isso porque sua largura e altura padrão são de 0 pixels. Precisaremos especificar seu tamanho no CSS.

O código HTML até agora:

![Barra de navegação responsiva](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/barra-responsiva/img/Imagem7.png)

Sem mais delongas, vamos passar para o CSS!

### 2) CSS

Navegue até o arquivo style.css e vamos começar removendo a `margin` (margem) padrão e o `padding` (preenchimento) padrão de todos os elementos. Para fazer isso, vamos simplesmente escrever:

```css
* {
  margin: 0;
  padding: 0;
}
```

Em seguida, estilizaremos o ``<ul>`` para que se pareça mais com uma barra de navegação e não com uma lista.

A tag ``<ul>`` recebeu uma classe de elementos. Portanto, daremos estilo à classe de elementos.

```css
.elementos {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding-top: 10px;
  padding-bottom: 10px;
  color: whitesmoke;
  font-weight: 500;
  font-size: 20px;
  font-family: 'Verdana';
  background-color: #89a0ce;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
```

Opa. Muito CSS de uma só vez, certo? Não se preocupe, eu lhe explicarei tudo linha por linha.

**Explicação:** Exibimos os elementos com a propriedade `display` definida para `flex` de modo que possamos alinhá-los horizontalmente. Em seguida, damos uma propriedade de `justify-content` definida para `space-evenly` para que o conteúdo dentro dos elementos seja espaçado adequadamente.

Uma explicação elaborada do justify-content e suas diversas propriedades:

![Barra de navegação responsiva](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/barra-responsiva/img/Imagem8.png)

Créditos da imagem: [css-tricks](https://www.css-tricks.com)

A seguir, temos o `list-style: none;`, que removerá os pontos marcados por padrão para listas não-ordenadas. Em seguida, damos ao elemento um espaço extra em cima e em baixo usando `padding-top: 10px;` e `padding-bottom: 10px;`

Em seguida, são definidas as propriedades de cor, peso da fonte, tamanho e família da fonte que afetarão o texto dentro do elemento. `background-color: #89a0ce;` é praticamente auto-explicativa. Em seguida, damos-lhe algumas propriedades de transição de 0,5 segundos como duração da transição e o efeito de transição como `cubic-bezier`.

Aprenda mais sobre a [cubic-bezier (em inglês)](https://www.geeksforgeeks.org/css-cubic-bezier-function/).

Em seguida, adicionaremos algumas propriedades CSS ao `botão`, `linhas` e `span` respectivamente.

```css
.linhas {
  cursor: pointer;
}

.span {
  width: 30px;
  height: 4px;
  background-color: black;
  margin-bottom: 5px;
  border-radius: 2px;
  transition: 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}
```

**Explicação:** O elemento `linhas` tem uma propriedade de cursor definida como `pointer` (ponteiro), assim, sempre que você passar o mouse sobre esse elemento, seu cursor mudará para ponteiro. A seguir, as linhas do botão `(span)` têm uma largura de 30px e uma altura de 4px. Ele também tem uma cor de fundo preta, depois tem uma margem de fundo de 5px e um `border-radius` (raio da borda) de 2px para obter aquele acabamento suave. Também, como acima, temos uma propriedade de transição de 0,5 segundos de duração e cubic-bezier como o tipo de efeito aplicado a ele.

Vamos clicar em 'RUN' para testar!

![Barra de navegação responsiva](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/barra-responsiva/img/preview.png)

Aqui, você pode ver a lista na forma de barra de navegação e também pode ver o botão. Note que quando você passar sobre ele, seu cursor mudará para ponteiro.

Além disso, não queremos que o botão seja exibido agora, portanto, vamos fazer com que ele seja display: none;

```css
.botao {
  display: none;
}
```

O código CSS está assim até agora:

```css
* {
  margin: 0;
  padding: 0;
}

.elementos {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding-top: 10px;
  padding-bottom: 10px;
  color: whitesmoke;
  font-weight: 500;
  font-size: 20px;
  font-family: 'Verdana';
  background-color: #89a0ce;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.linhas {
  cursor: pointer;
}

.span {
  width: 30px;
  height: 4px;
  background-color: black;
  margin-bottom: 5px;
  border-radius: 2px;
  transition: 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.botao {
  display: none;
}
```
A seguir, acrescentaremos `Media Queries`. Mas, o que são `Media Queries`? As `Media Queries` são úteis quando você deseja modificar seu site ou aplicativo, dependendo das características e parâmetros específicos de um dispositivo (como a resolução da tela ou a largura da janela de visualização do navegador). A largura normal de um dispositivo móvel é em torno de 450px.

Portanto, podemos escrever a Media Query de tal forma:

```css
@media (max-width: 450px) {

}
```

Aprenda mais sobre [media-queries aqui](https://developer.mozilla.org/pt-BR/docs/Web/Guide/CSS/CSS_Media_queries).

Agora, todos os estilos que são estão dentro desta `media query` só serão aplicados quando a condição de `max-width:450px` for verdadeira.

Aqui, faremos nossa barra de navegação vertical em vez de horizontal e a empurraremos para fora da tela.

```css
@media (max-width: 450px) {
  .elementos {
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin: 0;
    padding: 20px;
    width: 35%;
    height: 100%;
    transform: translateX(-100%);
  }
}
```

**Explicação:** Quando a resolução da tela se torna inferior a 450px, estes estilos serão aplicados. Assim, definimos a ``flex-direction`` da barra de navegação para `column` (coluna), alinhamos os itens ao centro e definimos a posição para ``absolute`` (absolute) para que possa flutuar na tela do navegador sem perturbar outros elementos da página.

Todas as margens são removidas e um ``padding`` (padding) de 20px é aplicado. A largura é ajustada para 35%, de modo que a largura da tela será de 35%. A altura é de 100%, de modo que a barra de navegação é espalhada verticalmente por toda a página.

É aplicada uma propriedade de `transform` (transformação) que especifica a posição x do elemento na tela. O elemento está -100% na direção x (que é fora da tela).

Agora, se você clicar em 'RUN' e a largura da janela de visualização for superior a 450px, você verá tudo normal. Já se você tentar encolher a janela de visualização, você verá a barra de navegação sair da tela na vertical.

![Barra de navegação responsiva](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/barra-responsiva/img/Imagem10.gif)

A seguir, também tornaremos o botão visível pois ele está configurado com ``display:none;``

```css
@media (max-width: 450px) {
  ... // rest of the code above

  .botao {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    padding-top: 20px;
  }
}
```

Explicação: Quando a resolução da tela fica menor que 450px, ajustamos o display do botão para ``flex``, definimos a `flex-direction` dele para `column` (coluna) e também alinhamos ele para ``flex-start`` para que fique no canto superior esquerdo da página.

Isso é tudo que vamos utilizar das `Media Queries`, agora vamos testar. Veremos que o botão aparece no canto e a barra de navegação é deslocada para fora da tela.

![Barra de navegação responsiva](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/barra-responsiva/img/Imagem11.gif)

Fora das media queries, vamos adicionar alguns estilos às classes que nem sequer existem.

Espera... o quê? por quê?
--> Para desperdiçar seu precioso tempo *MUAHAHAHA*.

Ok... Ok... Estava brincando... Essas classes não existentes têm importância sim. OK? Não estou desperdiçando seu precioso tempo, pode relaxar...

Vamos começar acrescentando estilos a uma classe chamada ``barra-lateral``.

```css
.barra-lateral {
  transform: translateX(0px);
}
```

E mais estilos.

```css
.linha-0 {
  transform: rotate(45deg) translate(4.5px, 12px);
}

.linha-1 {
  transform: scale(0);
}

.linha-2 {
  transform: rotate(-45deg) translateY(-7.5px);
}
```

E ainda mais estilos!

**Brincadeira**, é só isso 👀

**Explicação:** Lembra que colocamos nossa barra de navegação fora da tela? Sim, então para trazê-la de volta à tela, definimos a classe `barra-lateral` que transformará sua posição x de -100% para 0. Posteriormente, alternaremos esta classe para nossa barra de navegação usando JavaScript.

Além disso, as próximas três classes são definidas com o objetivo de trazer uma animação ao botão quando ele for clicado. Giraremos a primeira e a terceira linha do botão para que ele pareça um botão de fechamento (X). A linha do meio ficará escondida à medida que a reduzimos para 0. Isto também será alternado usando o JavaScript.

Consulte [aqui](https://repl.it/@VitorVavolizza/barra-de-navegacao#style.css) o código CSS até o momento.

E com dezenas de linhas de código CSS, vamos passar para o JavaScript.

Honestamente, existem apenas cerca de 10 linhas de código. Portanto, aguente firme e não se assuste!

Primeiro vamos ligar a barra de navegação, o botão e cada linha do botão a algumas variáveis. Confuso? Você vai entender daqui a pouco.

```js
const nav = document.querySelector(".elementos");
const botao = document.querySelector(".linhas");
const linhas = document.querySelectorAll(".span");
```

**Explicação:** A primeira variável nav contém a barra de navegação completa. A segunda variável contém o botão completo.

Note que usamos ``querySelector()`` para as duas primeiras variáveis, mas ``querySelectorAll()`` para a última.

Agora antes de tudo, o que é mesmo uma ``querySelector()``?
A ``querySelector()`` retorna o primeiro elemento dentro do documento que corresponde ao(s) seletor(es) especificado(s).

Assim, a ``querySelectorAll()`` retorna todos os elementos que combinam com o seletor especificado. Da mesma forma, na 3ª linha, todos os elementos com a classe de span são selecionados e são armazenados em uma ``NodeList``.

Agora as ``NodeLists`` são um pouco semelhantes a ``Arrays`` e ``Objetos``, mas eles não são ``Arrays`` ou ``Objetos``. Não precisamos aprofundar, mas se você quiser saber mais sobre isso, dê uma olhada [nisso](https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList).

Então isso significa que todas as 3 linhas de botão estão agora armazenadas na variável ``linhas``.

Em seguida, criaremos uma função ``alternar()`` para alternarmos os estilos e animações (que são armazenados nas classes extras que fizemos).

```js
function alternar() {
  nav.classList.toggle("barra-lateral");
  linhas[0].classList.toggle("linha-0");
  linhas[1].classList.toggle("linha-1");
  linhas[2].classList.toggle("linha-2");
}
```

**Explicação:** A barra de navegação terá uma classe de barra lateral quando a função for chamada pela primeira vez e essa classe será removida quando a função for chamada na próxima vez.

Além disso, como a variável de linhas é uma ``NodeList``, podemos acessar cada elemento da mesma usando seu índice. Assim, a primeira linha de botão é alternada com a classe de ``linha-0`` e, da mesma forma, as duas linhas seguintes são alternadas com suas respectivas classes.

Agora, precisamos chamar esta função toda vez que o botão é clicado, então adicionaremos um ``event listener`` no botão fora da função.

```js
botao.addEventListener("click", alternar);
```

**Explicação:** Agora, sempre que o botão for clicado, a função ``alternar()`` será chamada.

E com isto, terminamos nosso **projeto!** Confira o que você acabou de construir!

![Barra de navegação responsiva](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/barra-responsiva/img/Imagem12.gif)

## Parte 4: O Fim

Agora eu entrego este projeto a vocês! É totalmente seu agora!

Se você ainda não criou uma conta no [repl.it](https://www.repl.it/), certifique-se de criar para salvar esta maravilhosa criação!

Se você ainda enfrentar dificuldades para se inscrever, assista [esse](https://www.youtube.com/watch?v=Mtqp4CUepk0) video.

Aqui estão algumas coisas que você pode fazer:

  1. Tente atualizar todas as barras de navegação que você já construiu referentes a esta oficina!
  2. Tente implementá-la de tal forma que seja sempre uma barra lateral e não no topo!
  3. Tente fazer a barra de navegação saltar de cima ou de baixo, ao invés de vir da esquerda.
  4. Tente pensar em ideias mais originais sobre como você pode melhorar este projeto.

**Alguns outros exemplos pra você!**

  * [Exemplo de barra lateral](https://repl.it/@FaisalSayed1/Responsive-barra-Example-1).
  * [Barra pulando de cima exemplo 1](https://repl.it/@FaisalSayed1/Responsive-barra-Example-2).
  * [Barra pulando de cima exemplo 2](https://repl.it/@FaisalSayed1/Responsive-barra-Example-3).

Agora que você terminou de construir este maravilhoso projeto, compartilhe sua bela criação com outras pessoas! Lembre-se, é só mandar a URL do seu projeto!
