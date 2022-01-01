---
name: 'Drum Pad'
description: 'Crie um Drum Pad com HTML, CSS e JS'
author: '@emmanuel39hanks, @vitorvavolizza'
img: 'https://cloud-edj42rbl8.vercel.app/0screencapture-drum-emmanuel39hanks-repl-co-2020-11-07-23_43_18.png'
locales: 'pt-br'
---


Você já se perguntou como se reproduz sons com código? Neste workshop, criaremos um drum pad que reproduzirá sons reais.

![Am ready GIF](https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif)

# Visão geral

_Preview do Drum Pad que iremos criar_

![Visualização do Drum Pad](https://cloud-edj42rbl8.vercel.app/0screencapture-drum-emmanuel39hanks-repl-co-2020-11-07-23_43_18.png)

Além de construir o drum pad, você também aprenderá sobre diferentes tipos de eventos, funções, estilos e muito mais com Vanilla JavaScript, HTML e CSS.

[Código final](https://repl.it/@hcbjcentro/drum-pad)
<br/>
[Demo](https://drum-pad.hcbjcentro.repl.co/)

## Começando

Para este workshop, vamos usar o [repl.it](https://repl.it/), um editor de código online gratuito. Para começar, vá para [repl.it/languages/html](https://repl.it/languages/html). Seu ambiente de programação será gerado instantaneamente!

Você verá que já existem três arquivos: `index.html`, `style.css` e `script.js`. Navegue até seu arquivo `index.html`, e trabalharemos na estrutura de nosso drum pad lá.

## HTML

Vamos escrever a maior parte do nosso código HTML dentro da tag `body`. Vamos começar criando um cabeçalho que exibe o texto `DRUM PAD` usando a tag `h1`:

```html
<h1> DRUM PAD </h1>
```

Logo abaixo da tag `h1`, teremos três linhas e quatro colunas de botões. Cada botão será criado com uma tag `div`. Você pode pensar em uma tag `div` como uma caixa ou contêiner, e a estamos usando porque cada um de nossos botões terá uma aparência quadrada.

```html
<!-- div pai -->
<div>
  <!-- divs filhos -->
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <div>F</div>
  <div>G</div>
  <div>H</div>
  <div>I</div>
  <div>J</div>
  <div>K</div>
  <div>L</div>
</div>
```

Aqui, temos uma tag pai `div` que aninha nosso botões `divs`, e então rotulamos nossos botões com letras para identificá-los facilmente.

É assim que seu arquivo index.html deve estar até agora:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <h1>DRUM PAD</h1>
    <div>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
        <div>F</div>
        <div>G</div>
        <div>H</div>
        <div>I</div>
        <div>J</div>
        <div>K</div>
        <div>L</div>
    </div>
  <script src="script.js"></script>
</body>
</html>
```

Quando executarmos nosso código, ele se parecerá com isto:

![Visualização de HTML sem CSS](https://cloud-hqtl5tea3.vercel.app/0screencapture-drumpad-emmanuel39hanks-repl-co-2020-11-03-08_36_46.png)

# CSS

Agora vamos escrever um pouco de estilo CSS para nosso drum pad para torná-lo visualmente atraente!

Navegue até o arquivo `style.css` e adicione o seguinte código:

```css
body {
  background-color: red;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: sans-serif;
}
```

Quando executamos nosso código, você verá que nosso conteúdo foi alinhado ao centro, isso porque mudamos as propriedades de nossa tag `body`, e a tag basicamente renderiza o conteúdo em uma página da web.

![Visualização de HTML com CSS aplicada, para alterar o layout](https://cloud-bp7m8g6di.vercel.app/0screencapture-drumpad-emmanuel39hanks-repl-co-2020-11-03-08_35_57.png)

## Classes

Usaremos classes para adicionar estilo às nossas tags `div`. Um nome de classe é um atributo HTML que aponta para uma tag ou um grupo de tags que têm o mesmo nome de classe. As classes são usadas por CSS e JavaScript para selecionar e acessar tags específicas. O atributo class pode ser usado em qualquer tag HTML adicionando a palavra-chave `class=" "` a ele.

Vamos navegar de volta para o nosso `index.html`, vamos dar a nossa tag pai `div` o nome da classe `pad`, e todas as nossas tags `div` filhas o nome da classe `botao` que irá aplicar o estilo que nossa classe possui.

```html
<div class="pad">
  <div class="botao">A</div>
  <div class="botao">B</div>
  <div class="botao">C</div>
  <div class="botao">D</div>
  <div class="botao">E</div>
  <div class="botao">F</div>
  <div class="botao">G</div>
  <div class="botao">H</div>
  <div class="botao">I</div>
  <div class="botao">J</div>
  <div class="botao">K</div>
  <div class="botao">L</div>
</div>
```

Agora navegue até seu `style.css` e altere o tamanho da fonte, a cor e o espaçamento entre letras do cabeçalho usando o seguinte código:

```css
h1 {
  color: #000;
  font-size: 5vw;
  letter-spacing: 6px; 
}
```

Em seguida, criamos três linhas e quatro colunas para alinhar corretamente nosso cabeçalho e os botões.

```css
.pad {
  width: 500px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
```

Vamos escrever um estilo para nossa classe `.botao`, para especificar o estilo exclusivo de nossos botões.

```css
.botao {
  width: 100px;
  height: 100px;
  margin: 10px 0;
  user-select: none;
  box-shadow: 0 8px 6px -6px black;
  background-color: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.4);
  border: 4px solid;
}
```

E quando executamos nosso código novamente, ele deve se parecer com isto:

![Visualização de HTML com layout CSS aplicado, os pads estão em uma grade e todas as bordas cinzas](https://cloud-edj42rbl8.vercel.app/0screencapture-drum-emmanuel39hanks-repl-co-2020-11-07-23_43_18.png)

Em seguida, adicionaremos um estilo que adicionará efeitos para quando passarmos os mouse sobre os botões, estados inativos ou ativos:

```css
.botao:hover {
  background-color: rgb(80, 80, 80);
  cursor: pointer;
}

.botao:active {
  background-color: #444;
  transform: scale(1.1);
  transition: all 0.2s;
}
```

Agora que terminamos nosso estilo, vamos trabalhar nas funções do drum pad.

## JavaScript

No momento, quando você clica nos botões, nenhum som é reproduzido. Vamos adicionar um pouco de JavaScript para reproduzir sons.

Navegue até o arquivo `script.js` e adicione o seguinte código:

```javascript
function tocar(link) {
  let audio = new Audio(link);
  audio.load();
  audio.play();
}
```

- Primeiro, criamos uma função chamada `tocar()`. Ele recebe um parâmetro `link`, que é o link para o som.
- Dentro da função, criamos um [objeto de áudio JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio) e passamos o link para o objeto.
- Em seguida, carregamos o áudio com o método `load()` (parte do objeto de áudio).
- E, finalmente, tocamos nosso som usando o método `play()` do objeto Audio.

Todos os blocos de construção estão no lugar. Agora, tudo o que precisamos fazer é reproduzir o som quando um botão é clicado.

Acontece que executar uma função quando você clica em um elemento HTML é muito fácil! HTML tem um [evento onclick](https://www.w3schools.com/jsref/event_onclick.asp) integrado. Então, tudo o que precisamos fazer para tocar um som quando você clica em uma das caixas é executar a função `tocar()` que acabamos de escrever quando o usuário clica em uma caixa.

Navegue de volta para o arquivo `index.html` e modifique seus divs para incluir estes eventos `onclick`:

```html
<div class="pad">
  <div class="botao" onclick="tocar('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0025.mp3')">A</div>
  <div class="botao" onclick="tocar('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0010.mp3')">B</div>
  <div class="botao" onclick="tocar('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0000.mp3')">C</div>
  <div class="botao" onclick="tocar('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/RS.mp3')">D</div>
  <div class="botao" onclick="tocar('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/OH25.mp3')">E</div>
  <div class="botao" onclick="tocar('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/MA.mp3')">F</div>
  <div class="botao" onclick="tocar('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CY0010.mp3')">G</div>
  <div class="botao" onclick="tocar('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CH.mp3')">H</div>
  <div class="botao" onclick="tocar('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CB.mp3')">I</div>
  <div class="botao" onclick="tocar('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0010.mp3')">J</div>
  <div class="botao" onclick="tocar('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0000.mp3')">K</div>
  <div class="botao" onclick="tocar('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CP.mp3')">L</div>
</div>
```

Se você executar seu código agora, verá seu drum pad funcionando!

![Conseguimos GIF](https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif)

## Hackeando

Agora que você concluiu a construção, pode compartilhar sua bela criação com outras pessoas, copiando e colando o link do seu projeto. Compartilhe comigo no Slack! Sou o @emmanuel39.

Mas você ainda não terminou. Este projeto pode ser expandido de muitas maneiras. Aqui estão alguns exemplos:

- **Toque uma música automatizada:** [demo e código](https://repl.it/@hcbjcentro/drumpadcombatida)
- **Toque o drum pad com seu teclado:** [demo e código](https://repl.it/@hcbjcentro/drumpadcomteclado)
- **Faça um drum pad com um estilo diferenciado:** [demo e código](https://repl.it/@hcbjcentro/drumpadbonito)

<summary>Recursos:</summary>

- [Objeto JavaScript Audio](https://www.w3schools.com/JSREF/dom_obj_audio.asp)
- [Evento onclick JavaScript](https://www.w3schools.com/jsref/event_onclick.asp)
- [CSS flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
- [CSS flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
- [CSS justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
- [CSS Flex box](https://www.w3schools.com/css/css3_flexbox.asp)
- [CSS overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
- [CSS font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
- [CSS letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
- [CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [CSS transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [CSS :hover pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)
- [CSS :hover pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)
- [CSS cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
- [CSS lighten & darken function](https://css-tricks.com/snippets/javascript/lighten-darken-color/)
- [CSS border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
- [CSS rgba function](https://www.w3schools.com/cssref/func_rgba.asp)
- [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- [CSS align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
- [CSS font-family](https://www.w3schools.com/css/css_font.asp)

Agora é com você! Faça qualquer coisa com este projeto, vá em frente e implemente algo maluco.

Agora que você terminou de construir este maravilhoso projeto, compartilhe sua bela criação com outras pessoas! Lembre-se, é só mandar a URL do seu projeto!