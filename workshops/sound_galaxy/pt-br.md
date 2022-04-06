---
name: 'Galáxia de Som'
description: 'Deixe suas palavras colorirem a tela'
author: '@MatthewStanciu, @vitorvavolizza'
locales: 'pt-br'
---

A visualização de som é uma das coisas mais legais que as ferramentas modernas de desenvolvimento da web tornaram acessível. Há algo surreal e indescritivelmente satisfatório ao _visualizar_ os sons ao seu redor na tela e de alguma forma entender o que você está vendo.

![](https://github.com/hack-club-brasil/v1/raw/main/docs/workshops/galaxia-de-som/img/final-demo.GIF)

Neste workshop, você vai criar uma galáxia a partir de partículas cintilantes que se expandem e se movem com base na entrada do microfone, em menos de 50 linhas de código.

[Link para a demo](https://sound-galaxy--techbug2012.repl.co)

## Começando

Vamos usar a [p5.js](https://p5js.org), uma biblioteca JavaScript para programação criativa, para fazer este projeto. Ele vai requer duas bibliotecas p5.js separadas: `p5.js` e a `p5.sound.js`.

Comece a partir do projeto inicial [clicando aqui](https://repl.it/@VitorVavolizza/galaxia-inicial) e clique em 'Fork'. Assim que seu projeto iniciar, navegue até o arquivo `index.html`. Então, pouco antes do final de sua tag `<head>`, importe estas duas bibliotecas:

```html
<script src = "https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.min.js"> </script>
<script src = "https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/addons/p5.sound.js"> </script>
```

Ótimo! Agora que importamos o p5, estamos prontos para começar a escrever JavaScript.

## Sobre a Transformada de Fourier

No centro de tudo que estamos construindo neste workshop está algo chamado de Transformada de Fourier: uma operação matemática que pega uma frequência (por exemplo, a frequência do som captada pelo microfone do seu computador) e a decompõe nos comprimentos de onda individuais que a compõem. Você não precisa entender como a Transformada de Fourier funciona - ela é integrada ao p5 e super fácil de usar - mas se você estiver interessado, 3Blue1Brown fez [um ótimo vídeo](https://youtu.be/spUNpyF58BY) explicando isso .

## Configurando a p5

A p5.js é essencialmente composta por duas funções: `setup()` e `draw()`. A função `setup()` é executada apenas uma vez quando o projeto é iniciado pela primeira vez, e a função `draw()` é executada continuamente depois. Vamos começar criando essas duas funções em seu arquivo `script.js`:

```js
function setup() {}

function draw() {}
```

Tudo na p5.js acontece em uma tela p5. Vamos criar uma tela que preenche nossa janela na função `setup()`:

```js
function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
}
```

Por padrão, a p5 adiciona um contorno ao redor dos objetos em uma tela. `noStroke()` remove este contorno.

Agora, vamos dizer à p5 para ouvir a entrada do microfone.

```js
function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()

  let mic = new p5.AudioIn()
  mic.start()
}
```

Em seguida, vamos inicializar o algoritmo Fast Fourier Transform (Transformada Rápida de Fourier) da p5. Usaremos isso ao longo do projeto, então queremos declará-lo globalmente e inicializá-lo na função `setup()`:

```js
let fft

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()

  let mic = new p5.AudioIn()
  mic.start()

  fft = new p5.FFT()
  fft.setInput(mic)
}

function draw() {}
```

## Criando uma partícula

Estamos quase prontos para começar a desenhar, mas no momento, não temos nada para desenhar! Vamos criar um objeto 'Particula' e dar a ele algumas propriedades básicas. Acima da função `setup()`, adicione:

```js
let Particula = function (posicao) {}
```

É assim que [objetos](https://www.w3schools.com/js/js_objects.asp) são criados em JavaScript. Se quisermos criar uma nova partícula, usaríamos `let particula = new Particula()`.

Queremos dar ao objeto 'Particula' um conjunto padrão de propriedades que podem ser alteradas para cada instância de uma 'Particula'. Por enquanto, vamos começar com `posicao`, `velocidade` e `cor` - mas pense em algumas outras propriedades que suas partículas podem ter!

```js
let Particula = function (posicao) {
  this.posicao = posicao
  this.velocidade = createVector(0, 1)
  this.cor = [random(0, 255), random(0, 255), random(0, 255)]
}
```
Aqui, estamos definindo:

- `posicao` para uma posição dada à partícula quando ela é criada
- `velocidade` para uma velocidade de 0 no eixo x e 1 no eixo y
- `cor` para uma cor [RGB](https://www.w3schools.com/colors/colors_rgb.asp) aleatória.

Agora que criamos nosso objeto Particula, vamos criar um monte de partículas e distribuí-las aleatoriamente pela tela. O projeto inicial com o qual você começou vem com um prático `admGalaxia`, que oferece algumas funções para gerenciar facilmente sua galáxia. A função `posicionaParticulas()` cria uma matriz de 1024 partículas em locais aleatórios na tela. Vamos adicionar esta função ao final de `setup()`.

```js
function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()

  let mic = new p5.AudioIn()
  mic.start()

  fft = new p5.FFT()
  fft.setInput(mic)

  posicionaParticulas()
}
```

## Desenhando Partículas

Antes de desenharmos nossas partículas, precisamos pensar sobre o que “desenhar” uma partícula significa. A partir de agora, uma “partícula” é apenas uma ideia abstrata que inventamos. Demos a ele certas propriedades, mas não usamos essas propriedades em nenhum lugar.

Vamos voltar ao nosso objeto `Particula` e escrever um [método](https://www.w3schools.com/js/js_object_methods.asp) que fornece instruções para desenhar uma partícula.

```js
let Particula = function (posicao) {
  this.posicao = posicao
  this.velocidade = createVector(0, 1)
  this.cor = [random(0, 255), random(0, 255), random(0, 255)]

  this.desenha = function () {
    circle(this.posicao.x, this.posicao.y, this.diameter)
    fill(this.cor)
  }
}
```

O método `desenha` que acabamos de adicionar cria um círculo nas coordenadas `x` e `y` da partícula e o preenche com a cor atribuída a ela. Agora, em vez de ser uma ideia abstrata, uma partícula é um círculo colorido aleatoriamente.

Agora, se quisermos desenhar uma partícula chamada `particulaColorida` no canto superior esquerdo da tela, poderíamos fazer isso com `particulaColorida.desenha()`.

Agora que nossas partículas são objetos reais, podemos finalmente desenhá-las em nossa tela! Na função p5 `draw()`, adicione:

```js
function draw() {
  desenhaParticulas()
}
```

`desenhaParticulas()` é outra função oferecida pelo administrador de galáxias que chama o método `desenha` em cada partícula instanciada.

Se você executar seu projeto agora, deverá ver isto:

![](https://github.com/hack-club-brasil/v1/raw/main/docs/workshops/galaxia-de-som/img/draw.png)

Massa! Acabamos de dar vida às nossas partículas! Se quiser fazer com que sua tela se pareça mais com o espaço-sideral, você pode adicionar:

```js
background(0, 0, 0)
```
na sua função `draw()` para fazer o fundo preto.

```js
function draw() {
  background(0, 0, 0)
  desenhaParticulas()
}
```

## Atualizando partículas

Temos mais um problema: as partículas não se movem ou mudam de forma alguma! Atualmente, elas estão apenas sendo desenhadas de acordo com as propriedades que lhes demos anteriormente. Vamos colocar a Transformação Rápida de Fourier em uso e atualizar nossas partículas de acordo com a entrada do microfone.

Assim como para desenhar partículas, precisamos definir instruções sobre o que “atualizar” uma partícula significa por meio de um método. Depois do método `desenha` no objeto `Particula`, adicione:

```js
this.atualiza = function (energia) {}
```

Estamos transmitindo uma `energia`, que é a intensidade do som em cada parte do espectro FFT. No nosso caso, isso significa a intensidade de cada partícula.

Existem inúmeras maneiras de atualizar uma partícula com base na intensidade do som, mas aqui está o que eu pessoalmente inventei:

```js
this.atualiza = function (energia) {
    this.diameter = random(5, 7) + energia * 100
    this.posicao.y += this.velocidade.y * energia * 10
    if (this.posicao.y > height) {
        this.posicao.y = 0
    }
} 
```

Isso faz com que as partículas brilhem (como estrelas em uma galáxia), atualiza o diâmetro e a velocidade com base na intensidade do som e redefine cada partícula para o topo da tela, uma vez que alcancem a parte inferior da tela para fazer com que pareça um fluxo contínuo de partículas.

É aqui que você vai brilhar! Brinque com esses números, pense em outras maneiras de atualizar as partículas - não saia desta reunião com este bloco de código inalterado!

Agora que demos instruções para atualizar uma partícula, podemos finalmente colocar a Transformada Rápida de Fourier em uso e desenhar partículas atualizadas continuamente! Na função `draw()`, remova `desenhaParticulas()` e substitua por estas duas linhas:

```js
let espectro = fft.analyze()
atualizaParticulas(espectro)
```

Isso executa o algoritmo Fast Fourier Transform(Transformada Rápida de Fourier) de p5 e atualiza cada partícula de acordo com outra função útil do gerenciador de galáxias.

Parabéns! Você conseguiu! É assim que seu arquivo `script.js` deve ficar:

```js
let fft

let Particula = function (posicao) {
  this.posicao = posicao
  this.velocidade = createVector(0, 1)
  this.cor = [random(0, 255), random(0, 255), random(0, 255)]

  this.desenha = function () {
    circle(this.posicao.x, this.posicao.y, this.diameter)
    fill(this.cor) 
  }

  this.atualiza = function (energia) {
    this.diameter = random(5, 7) + energia * 100
    this.posicao.y += this.velocidade.y * energia * 10
    if (this.posicao.y > height) {
        this.posicao.y = 0
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()

  let mic = new p5.AudioIn()
  mic.start()

  fft = new p5.FFT()
  fft.setInput(mic)

  posicionaParticulas()
}

function draw() {
  background(0, 0, 0)
  let espectro = fft.analyze()
  atualizaParticulas(espectro)
}
```

Execute seu projeto agora e, em seguida, **abra-o em uma nova janela** clicando no botão da janela no canto superior direito. Certifique-se de que a página tenha acesso ao seu microfone e clique uma vez na tela. Você deve começar a ver uma galáxia cintilante que pode controlar com sua voz!

## Hackeando

Existem inúmeras maneiras de tornar este projeto completamente seu! Volte no seu código e procure por qualquer coisa com a qual possa brincar. Tente alterar os valores padrão de suas Partículas, brincando com os números no método `atualiza`, e pense em maneiras de adicionar recursos e torná-lo ainda melhor!

Aqui estão alguns exemplos de projetos que decorrem deste projeto, mas vão ainda mais longe:

- **Chovendo partículas**: [Demo](https://observant-wild-sunspot.glitch.me) - [Código](https://glitch.com/edit/#!/observant-wild-sunspot)
- **Chovendo partículas 2**: [Demo](https://icy-married-crabapple.glitch.me) - [Código](https://glitch.com/edit/#!/icy-married-crabapple)
- **Usando arquivos mp3 como entrada**: [Demo](https://sound-viz-song-2--techbug2012.repl.co) - [Código](https://repl.it/@TechBug2012/sound-viz-song-2)

Agora que você terminou de construir este maravilhoso projeto, compartilhe sua bela criação com outras pessoas! Lembre-se, é só mandar a URL do seu projeto!