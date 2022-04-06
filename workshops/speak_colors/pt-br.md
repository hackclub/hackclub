---
name: Fale Cores
description: Deixe sua tela colorida com reconhecimento ativo de fala
author: '@lachlanjc, @vitorvavolizza'
---

# Fale Cores

_Observação: este workshop requer o Google Chrome ou outro navegador [compatível com a API Web Speech](https://caniuse.com/#feat=speech-recognition)._

Usaremos a [p5.js](https://p5js.org) e a biblioteca p5.speech para tornar o reconhecimento de voz na web algo divertido! Você falará o nome de uma cor em voz alta e a tela será preenchida com essa cor.

[**Demo ao vivo**](https://speak-colors.glitch.me)

## Configuração

Primeiro, vamos fazer um novo projeto HTML no [repl.it](https://repl.it): [comece um projeto aqui](https://repl.it/languages/html).

Em seguida, precisamos importar as bibliotecas p5 e p5.speech. Como são URLs longos, basta substituir o arquivo `index.html`por este:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Fale Cores</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.min.js"></script>
    <script src="https://rawcdn.githack.com/IDMNYU/p5.js-speech/e7ae007d61f048fc2379971b0de7d5db8abb7eee/lib/p5.speech.js"></script>
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

Mas nunca copie e cole o código sem lê-lo 🙂

- Estamos inicializando uma página HTML
- Estamos dando a ele um `<title>`, que aparece no nome da guia em seu navegador
- Estamos vinculando as duas bibliotecas externas de que precisamos
- No final, colocamos um link para o arquivo `script.js` em que vamos escrever nosso próprio código JavaScript.

O restante dos exemplos de código neste workshop serão todos no arquivo `script.js`, onde escreveremos o código p5.

## Exibindo instruções

Primeiro, precisamos configurar um canvas com p5.

- Queremos que o canvas preencha a tela, então `windowWidth` & `windowHeight` da p5 serão úteis.
- Vamos prosseguir e preencher o fundo com branco e tornar a cor do texto cinza escuro.

```js
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)
  fill(25)
}
```

A página ainda parece vazia, opa! Vamos adicionar algumas instruções iniciais, mesmo que elas não façam nada ainda.

(Você só precisa da linha `text()`. Você pode omitir o `textSize`, `textAlign` etc. - mas essas outras linhas de código tornam o texto mais divertido. Sinta-se à vontade para alterar o tamanho ou a fonte!)

```js
function setup() {
  createCanvas(windowWidth, windowWidth)
  background(255)
  fill(25)

  textSize(48)
  textAlign(CENTER)
  textStyle(BOLDITALIC)
  textFont('"Avenir Next", system-ui, sans-serif')
  text('FALE UMA COR', width / 2, height / 2)
}
```

Fantástico! Agoramos ajustaremos o reconhecimento de fala.

## Executando reconhecimento de fala

A biblioteca p5.speech tem [um exemplo](https://github.com/IDMNYU/p5.js-speech/blob/master/examples/05continuousrecognition.html) de reconhecimento de voz "contínuo", ou seja, o microfone permanece ativo depois que você disse sua primeira frase, em vez de ser uma única vez.

Vamos configurar o reconhecimento de fala contínuo e exibir um alerta quando uma nova fala for transcrita:

```js
const fala = new p5.SpeechRec('en-US', mostraResultado)
fala.continuous = true
fala.interimResults = false

function setup() {
  // …
  text('FALE UMA COR', width / 2, height / 2)
  fala.start()
}

function draw() {
  // Não vamos precisar desenhar nada...
}

function mostraResultado() {
  if (fala.resultValue) {
    alert(fala.resultString)
  }
}
```

Estamos quase lá...

## Mudando a cor

Como o HTML e o CSS oferecem suporte a uma grande variedade de [cores nomeadas](https://html-color-codes.info/color-names/), vamos usá-las para este projeto. (Você pode ler mais sobre [de onde vêm os nomes das cores](https://www.chenhuijing.com/blog/where-did-css-named-colours-come-from/) ou se quiser estender esse projeto, descubra como usar [objetos JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) para suportar suas próprias cores!)

Para nosso projeto, ofereceremos suporte a cores de uma única palavra, porque é mais simples.

- Estamos começando com `fala.resultString`, que usamos antes.
- Para obter a última palavra:
  - Usaremos [`.split ('')`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), que converte o texto em um [array JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) de palavras. Ex.: `'olá amigo'.split(' ')` se transforma em `['olá', 'amigo']`
  - `.pop()` então obtém o último item do array, que é a última palavra como uma string
- Finalmente, porque queremos que todo o texto do site esteja em maiúsculas, adicionaremos `.toUpperCase()`
- Essas chamadas de função podem ser encadeadas uma ao lado da outra!

```js
// …
function mostraResultado() {
  if (fala.resultValue) {
    alert(fala.resultString.split(' ').pop().toUpperCase())
  }
}
```

Espetacular! Agora vamos definir a cor de fundo para a cor e escrever na tela.

```js
// …
function mostraResultado() {
  if (fala.resultValue) {
    const cor = fala.resultString.split(' ').pop().toUpperCase()
    background(cor)
    text(cor, width / 2, height / 2)
    console.log(cor)
  }
}
```

- Como precisamos usar o nome da cor em vários lugares, estamos definindo-o como uma variável, para que não tenhamos que fazer o split/pop/upperCase várias vezes.
- Definir o fundo é tão simples quanto `background(cor)`. Obrigado, p5!
- Adicionar texto na tela funciona exatamente como as instruções. Porque queremos centralizá-lo horizontalmente e verticalmente, definimos a coordenada x para `width / 2` (portanto, o ponto médio da largura da tela) e y para `height / 2` (o mesmo para a altura da tela).
- A linha `console.log` é totalmente opcional, mas permite que você veja o que está sendo transcrito em seu [console JavaScript](https://developers.google.com/web/tools/chrome-devtools/console/log).

##  Concluindo 

É isso aí! Esse é todo o arquivo `script.js`:

```js
const fala = new p5.SpeechRec('en-US', mostraResultado)
fala.continuous = true
fala.interimResults = false

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)
  fill(25)

  textSize(48)
  textAlign(CENTER)
  textStyle(BOLDITALIC)
  textFont('"Avenir Next", system-ui, sans-serif')
  text('FALE UMA COR', width / 2, height / 2)
  fala.start()
}

function draw() {
  // Não vamos precisar desenhar nada...
}

function mostraResultado() {
  if (fala.resultValue) {
    const cor = fala.resultString.split(' ').pop().toUpperCase()
    background(cor)
    text(cor, width / 2, height / 2)
    console.log(cor)
  }
}
```

Parabéns! Agora você consegue colorir o site que você acabou de criar com a sua voz!

Ah! Não se esqueça que os nomes das cores são em inglês, tente 'Blue' ou 'Pink' por exemplo. :)

## Hackeando

Algumas ideias para levar isso adiante:

- Suportar nomes de cores com várias palavras. Dica: em vez de dizer a última palavra, talvez descubra como remover os espaços?
- Como mencionado anteriormente, use suas próprias cores. 👀
- Tente acompanhar todas as cores, talvez mostrando elas simultaneamente?

Agora que você terminou de construir este maravilhoso projeto, compartilhe sua bela criação com outras pessoas! Lembre-se, é só mandar a URL do seu projeto!
