---
title: 'Respingos de Tinta'
description: 'Pintura colorida e vibrante em seu navegador com Paper.js'  
author: '@MatthewStanciu, @vitorvavolizza'
---

**Aviso: o workshop involve cores vibrantes e não é recomendado para quem tem um histórico de epilepsia**

Um dos mitos mais comuns sobre programação entre as pessoas que estão aprendendo a programar pela primeira vez é que a programação consiste principalmente em sentar-se em uma sala escura o dia todo escrevendo ~~Algoritmos~~ em uma janela de terminal preta com texto verde, resolvendo complexas equações matemáticas, e geralmente sendo um gênio. Você vai esmagar este mito nesta oficina fazendo uma pintura louca e colorida em seu navegador, em apenas 20 minutos.

![](img/final-demo.png)

## Para começar

Comece criando um novo projeto HTML no repl.it, indo para [repl.it/languages/html](https://repl.it/languages/html).

Vamos utilizar uma biblioteca chamada [Paper.js](http://paperjs.org), que facilita a criação de imagens diferentes em um [canvas HTML](https://www.w3schools.com/html/html5_canvas.asp).

Para importar uma biblioteca JavaScript em HTML, utilizamos a tag `<script>` e incluímos um link para a biblioteca que queremos importar. Para a Paper.js, isto se parece com:

```html
<script src="https://unpkg.com/paper@0.11.5/dist/paper-full.min.js"></script>
```

Adicione uma tag de script que importe a Paper.js em algum lugar no `<head>`. Em seguida, diretamente abaixo dela, adicione o seguinte:

```html
<script
  type="text/paperscript"
  canvas="respingos"
  src="/script.js"
></script>
```
Vamos rever o que cada atributo desta tag faz:

1. `type="text/paperscript"` diz à Paper.js que o código no script é código de Paper.js.
2. `canvas="respingos"` refere-se à identificação do canvas HTML na qual a Paper.js irá operar (ainda não criamos esse canvas, mas o faremos em um segundo).
3. `src="/script.js "` significa que o conteúdo deste script está localizado em seu arquivo `script.js`.

Lembra-se de quando nos referimos a um canvas chamado `respingos`, que ainda não foi criado? Vamos criar esse canvas. No `<body>`, remova a linha que importa o `script.js` e substitua-a por

```html
<canvas id="respingos"></canvas>
```
Sensacional, agora temos um canvas!

## Desenhando alguns círculos

Agora que importamos com sucesso a Paper.js e criamos um canvas para trabalhar, é hora de escrever o código JavaScript que criará nossos respingos de tinta.

Vamos escrever uma função que desenha um círculo na posição do cursor sempre que o mouse for movido.

Navegue até seu arquivo `script.js` e crie uma função chamada `onMouseMove`:

```js
function onMouseMove(event) {}
```

Embora normalmente você possa chamar funções como quiser, é importante que esta função seja chamada de `onMouseMove` e passe dentro dela um `event`. A Paper.js já sabe o que é `onMouseMove` quando ela vê esta função, ela saberá executar o código que você escreveu dentro dela toda vez que seu mouse se mover, e que o `event` que você passa é um [Evento de Mouse da Paper.js](https://paperjs.org/reference/mouseevent/). Legal, certo?

Está na hora de desenhar nosso círculo! Dentro da função que você acabou de criar, adicione este trecho de código, que criará um círculo no cursor do mouse com um raio de 10px:

```js
var caminho = new Path.Circle({
  center: event.middlePoint,
  radius: 10
})
```
Se você rodar seu projeto agora e mover seu mouse, você verá... nada. Você está, de fato, desenhando círculos, mas os círculos são atualmente transparentes. Portanto, vamos dar-lhes um pouco de cor. Após o trecho de código anterior, ainda na função "mouseMove", acrescente:

```js
caminho.fillColor = {
  hue: 0,
  saturation: 1,
  brightness: 1
}
```

Neste momento, seu arquivo `script.js` deve ser parecido com este:
```js
function onMouseMove(event) {
  var caminho = new Path.Circle({
    center: event.middlePoint,
    radius: 10
  })
  caminho.fillColor = {
    hue: 0,
    saturation: 1,
    brightness: 1
  }
}
```
Em vez de usar os sistemas de cor hexadecimais ou RGB mais comuns, a Paper.js usa o sistema de cor HSB, que usa ângulos em uma roda de cor para descrever a cor. No sistema de cores HSB, 0 = 0° = vermelho, e `360*n`° também é vermelho.

![](img/hsb-color-wheel.png)

(Se você estiver interessado em saber mais sobre o sistema de cores HSB, confira [esta fantástica explicação](https://learnui.design/blog/the-hsb-color-system-practicioners-primer.html))

Com isto em mente, tente executar seu projeto agora. Porque você definiu a `hue` para 0, agora você está desenhando círculos vermelhos! Mas seus círculos só aparecem no canto superior esquerdo da tela. Isso porque a largura e a altura de sua tela estão atualmente definidas para os padrões Paper.js (300px por 150px).

Vamos fazer com que seu canvas preencha toda a tela. Em seu arquivo `style.css`, adicione o seguinte:

```css
canvas {
  width: 100%;
  height: 100%;
}
```
Execute seu projeto novamente. 

Quase lá. O CSS que você acabou de escrever ajustou a largura e a altura da tela para 100% do elemento pai. Em seu arquivo `index.html`, `<body` é o elemento pai do `<canvas>` porque você criou essa tela entre as tags `<body>`.

O `<body>` é atualmente tão grande quanto seu próprio elemento pai, `<html>`, que não preenche totalmente a tela. Com isto em mente, adicione o seguinte ao seu arquivo CSS:

```css
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
```
Isto ajusta a largura e a altura do body para a largura e altura de sua tela, e remove qualquer espaço extra entre a borda de sua tela e do body.

Apenas para recapitular: o seu arquivo CSS deve agora parecer com isso:

```css
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
canvas {
  width: 100%;
  height: 100%;
}
```
Se você executar seu projeto novamente, você notará que seus círculos vermelhos estão agora preenchendo toda a tela. Woohoo!

![](img/red-circles.jpg)

## Fazendo respingos

Estamos chegando a algum lugar, mas isso ainda não está parecendo respingos.

![](img/real-splatter-paint.jpg)

Parte do que torna a pintura tão divertida de criar e olhar é a aleatoriedade caótica de tudo na tela. Portanto, se você quiser que seu site seja o mais próximo possível de tinta respingada, a melhor maneira de fazer isso é introduzir alguma aleatoriedade.

Mude o radius (raio) dos seus círculos de `10` para `Math.round(Math.random() * 25) + 5`. Isto torna o raio um número aleatório entre 5 e 30. Em seguida, execute o projeto novamente.

![](img/random-radius.jpg)

Nada mal, mas é como se estivessem amassados juntos, não é mesmo? Talvez possamos tornar cada círculo único, deixando cada círculo com uma cor diferente do último. Tente mudar a tonalidade de `0` para `event.count * 3`. Execute o projeto e veja o que acontece.

![](img/rainbow-colors.jpg)

O `event.count * 3` cria um efeito arco-íris ao definir a hue (tonalidade) em cada círculo para o número total de vezes que um círculo foi desenhado multiplicado por 3, o que salta ao redor da roda colorida HSB. E fica muito bonito!

Parabéns - agora você pode espalhar círculos coloridos por toda a sua tela! Se você ainda não o fez, abra seu projeto em uma nova aba, entregue-se a uma tela maior e divirta-se.

## Hackeando

Sua viagem está longe de ter terminado. Há infinitas direções nas quais você pode levar este projeto. Aqui estão algumas sugestões.

1. Se você quiser aumentar a distância entre cada círculo, você pode adicionar `tool.fixedDistance = ALGUM_NUMERO` ao topo de seu arquivo `script.js`. Isto irá disparar o evento depois que seu cursor mover a cada `ALGUM_NUMERO`px ao invés de cada vez que seu mouse se mover. Você pode configurá-lo para um número fixo, ou pode torná-lo aleatório!
2. Se você achar o arco-íris muito previsível, você pode definir a tonalidade para um número aleatório entre 0 e 360 (lembre-se, isto cobre todas as cores do sistema HSB).
3. Quem disse que sua tela tem que ser branca? Tente definir a cor de fundo de seu website para algo personalizado - sua cor favorita, uma imagem, ou mesmo um [gradiente](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) e/ou mude-o toda vez que um novo círculo for criado.
4. Quem disse que você tem que desenhar círculos? Tente desenhar uma mistura aleatória de círculos, ovais de comprimentos e larguras aleatórias, e outras formas.
5. Aleatoriedade é diversão, mas aleatoriedade controlada é ainda mais divertida. Dê uma olhada nos [documentos de eventos de mouse da Paper.js](https://paperjs.org/reference/mouseevent/). Como você pode utilizar as propriedades do MouseEvent para brincar com o raio? (eis o que eu descobri: tente definir o raio para `event.delta.length` e veja o que acontece)
6. Se você quiser ferir seus olhos e ouvidos, tente usar a biblioteca [Tone.js](https://tonejs.github.io) para reproduzir um som de sintetizador de uma freqüência aleatória sempre que um novo círculo for criado.

Aqui estão alguns exemplos de projetos que surgiram a partir deste projeto:

- [https://welllitvelvetyoperation.techbug2012.repl.co](https://welllitvelvetyoperation.techbug2012.repl.co)
- [https://splatter-paint-crazy.techbug2012.repl.co](https://splatter-paint-crazy.techbug2012.repl.co) (**AVISO: CORES VIBRANTES**)
- [https://wlhc-paperjs-demo-custom1.glitch.me](https://wlhc-paperjs-demo-custom1.glitch.me)

Agora que você terminou de construir este maravilhoso projeto, compartilhe sua bela criação com outras pessoas! Lembre-se, é só mandar a URL do seu projeto!
