---
title: ' jogo dos desvios no Sprig'
description: 'Desvie dos objetos que estão caindo. Aprenda a fazer com Sprig!'  
bg-image: "https://cloud-ijhz85il3-hack-club-bot.vercel.app/0image.png"
permalink: /workshops/jogo-dos-desvios-no-sprig/
order: 34
---
---
title: 'Jogo dos desvios no Sprig'
description: 'Desvie dos objetos que estão caindo. Aprenda a fazer com Sprig!'  
author: '@SamDev-7, @LucasHT22'
---

Neste workshop, construiremos um jogo de desvio usando [Sprig](https://sprig.hackclub.com). O jogador terá que desviar dos obstáculos que caem para marcar pontos. Sprig é um mecanismo de jogo JavaScript que facilita a criação de jogos para iniciantes e experts, tudo no seu navegador.

Conhecimento básico de JavaScript é recomendado para este workshop.
Se você não estiver familiarizado com Sprig, você pode tentar fazer [seu primeiro jogo Sprig](https://brasil.hackclub.com/workshops/) (EM BREVE) para aprender o básico.

Veja como seu jogo ficará:

![Um GIF do jogo](https://cloud-2mv7g5tu2-hack-club-bot.vercel.app/0sprig.gif)

[Curioso? Confira o código do jogo final e jogue!](https://editor.sprig.hackclub.com/?id=85cfd61b0be21099942c4df571b11432)

## 1. Introdução

Abra o [Editor Sprig](https://editor.sprig.hackclub.com). Crie um novo jogo (`file` > `new game`). É aqui que estaremos codificando nosso jogo.

Não usaremos o jogo Sprig padrão, então vamos excluir tudo, exceto os comentários laranja na parte superior. Estaremos começando do zero.

Seu arquivo deve ficar mais ou menos assim:

```js
/*
@title: crashing_rhyhorn
@author: your_name
*/
```

Vamos torná-lo nosso. Defina o `@title` para o nome do seu jogo e defina o `@author` para o seu nome.

O meu está mais ou menos assim:

``` js
/*
@title: desvie_das_bolas_de_fogo
@autor: sam liu
*/
```

Vamos começar a programar!

## 2. Fazendo os sprites

Temos que dizer ao Sprig quais são nossos personagens, jogadores e objetos. Isso é possível com sprites.

### a) Definindo os sprites

Em nosso jogo, usaremos dois sprites: o jogador e os obstáculos.
Cada sprite tem uma chave, este é um único caractere que diz ao Sprig qual sprite é qual.

``` js
const jogador = "j";
const obstaculo = "o";
```

> `j` e `o` são atribuídos aos nossos sprites, `jogador` e `obstaculo`, respectivamente.

> Obstáculo está sem acento porque não são permitidos carácteres acentuados devido ao padrão americano
### b) Fazendo arte para os sprites

Adicione o seguinte ao seu código.

``` js
setLegend(
  [obstaculo, bitmap`...`],
  [jogador, bitmap`...`]
   
);
```

> `setLegend()` dirá ao Sprig qual imagem mostrar para cada sprite.
> Colocamos o obstáculo no topo como queremos que ele apareça acima do jogador.
Clique no texto verde `bitmap` para abrir o editor de pixels. Selecione cores e ferramentas à direita para desenhar seus sprites na área 16x16. Seja criativo com seu projeto.

> O bitmap é armazenado como uma string. Você pode clicar na seta ao lado do número da linha para expandi-la ou ocultá-la.
> Cada caractere representa um pixel e sua cor.
<details>
<summary>Aqui está o que eu criei.</summary>

``` js
setLegend(
    [jogador, bitmap`
................
................
................
.....00000......
.....0.....0.....
....0.0.0.0.....
.....0.....0.....
....0.000.0.....
.....0.....0.....
.....00000......
.........0........
.....00000......
.........0........
.........0........
......0.0......
.....0...0......`],
    [obstáculo, bitmap`
.........66.......
........6.......
.....66.6.6.....
....66.66.66....
....666666.6....
...6699999966...
...69999999966..
..669999999996..
..669933339996..
..699333333996..
..699333333996..
...69333333996..
...69333333996..
...6993333996...
....66999996....
.....666666.....`]
);
```

> Experimente! Não copie meu projeto literalmente.
</details>

Aperte o botão `Run` para carregar o código. Nada aparecerá ainda, mas isso nos permitirá fazer nosso mapa na próxima etapa.

## 3. Fazendo o nível

Os níveis são a maneira mais fácil de dizer ao Sprig o que exibir na tela. Teremos apenas um nível.

O código a seguir pode ser usado para fazer e definir o mapa de nível.

``` js
setMap(mapa`.`);
```

Semelhante aos sprites, clique no texto verde `map` para abrir o editor de mapas. Use os sinais `+` e `-` nas bordas para expandir ou reduzir o mapa. Queremos criar um mapa 8x8.

Nosso mapa conterá apenas o jogador. Vamos escrever código mais tarde para gerar nos obstáculos.

O código após a expansão deve ser parecido com este.

``` js
setMapa(mapa`
........
........
........
........
........
........
........
...p...');
```

> Parecido aos sprites, cada personagem representa um sprite.
> O `.` representa um bloco vazio.
## 4. Adicionando controles

Um jogo não é divertido se você não pode interagir com ele. Estaremos adicionando controles ao nosso jogo, para que o jogador possa se mover. Sprig permite o uso de teclas `wasd` e `ijkl`. Estaremos usando `a` e `d` para mover o jogador para a esquerda e para a direita.

``` js
onInput("a", () => {
  getFirst(jogador).x -= 1;
});
```

> `onInput()` executará o código da função quando a tecla for pressionada.
> `getFirst()` obterá o primeiro sprite desse tipo.
> Diminuimos sua posição x para movê-la para a esquerda.
O código para mover para a direita é semelhante.

``` js
onInput("d", () => {
  getPrimeiro(jogador).x += 1;
});
```

> Acrescentamos sua posição x para movê-la para a direita.
No Sprig, o canto superior esquerdo é `(0, 0)`.

Execute o seu jogo! Agora podemos controlar o jogador com as teclas `a` e `d`.

## 5. Surgimento dos obstáculos

Um jogo não é divertido se não requer esforço para jogar. Nós estaremos adicionando obstáculos ao nosso jogo, então o jogador tem que evitá-los.

### a) Fazendo os obstáculos aparecerem aleatoriamente

Vamos fazer uma função que irá gerar aleatoriamente um novo obstáculo.

``` js
function spawnObstacle() {
  let x = Math.floor(Math.random() * 8);
  let y = 0;
  addSprite(x, y, obstaculo);
}
```

> `Math.floor(Math.random() * 8)` irá gerar um inteiro aleatório entre 0 e 7.
> y é sempre 0, pois queremos que o obstáculo apareça no topo.
### b) Fazendo chover obstáculos

Nada acontece com o obstáculo, porque ainda não programamos essa parte. Vamos fazer isso!

Vamos percorrer todos os obstáculos e movê-los para baixo um por um.

```js
function moveObstacles() {
  let obstacles = getAll(obstaculo);
 
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 1;
  }
}
```

> `getAll()` obterá todos os sprites desse tipo.
> Aumentamos o valor y de cada obstáculo para fazê-lo descer.
---

Vamos testar o que temos até agora.

Adicione o seguinte ao seu código.

```js
spawnObstacle();
```

Uhul! Temos nosso primeiro obstáculo!

Vamos testar a parte móvel.
Anexe o seguinte ao seu código.

```js
moveObstacles();
moveObstacles();
```

Legal! O obstáculo desceu duas vezes enquanto chamamos a função duas vezes.

Podemos remover o código de teste agora.

### c) Fazendo os obstáculos desaparecerem

Com o código atual, os obstáculos nunca são removidos.

Precisamos fazê-lo desaparecer quando chegar ao fundo. Podemos detectar isso quando y = 7.

```js
function despawnObstacles() {
  let obstacles = getAll(obstacle);
 
  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].y == 7) {
      obstacles[i].remove();
    }
  }
}
```

> `.remove()` irá remover aquele sprite do jogo.
Estaremos chamando esta função quando fizermos o loop do jogo.

## 6. Detectando se o jogador é atingido

Voltaremos a escrever uma função para que possamos usá-la no loop do jogo.

```js
function checkHit() {
  let obstacles = getAll(obstacle);
  let p = getFirst(player);
 
  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].x == p.x && obstacles[i].y == p.y) {
      return true;
    }
  }
 
  return false;
}
```

> Esta função executará todos os obstáculos e verificará se o jogador está no mesmo bloco que o obstáculo. Se for, retornará true.
## 7. Loop principal do jogo

Agora usaremos todas as funções que criamos e as colocaremos juntas em um loop principal.

```js
var gameLoop = setInterval(() => {
  despawnObstacles();
  moveObstacles();
  spawnObstacle();
 
  if (checkHit()) {
    clearInterval(gameLoop);
  }
 
}, 1000);
```

> `setInterval()` nos permite repetir uma função a cada x milissegundos.
> Nós a configuramos para a variável `gameLoop` para que possamos pará-la mais tarde quando o jogo terminar.
Colocamos as funções nesta ordem, para que os obstáculos não se movam no instante em que aparecem e não desapareçam no instante em que se movem para o fundo. Isso garante que os obstáculos possam aparecer na parte superior e inferior.

---

Execute o jogo e veja o que acontece!

Podemos nos movimentar, os obstáculos aparecem e descem. Quando perdemos, todos os obstáculos param de se mover, mas o jogador ainda pode se mover.

Podemos corrigir isso criando uma variável que armazena se o jogo está rodando ou não.

## 8. Fim do jogo

Vamos criar uma variável logo abaixo de `setMap()`.

``` js
var gameRunning = true;
```

Também modificaremos nosso loop de jogo para alterar a variável quando o jogador perder. Também adicionaremos uma mensagem para informar ao jogador que ele perdeu.

```js
  if (checkHit()) {
    clearInterval(gameLoop);
    gameRunning = false;
    addText("Fim de jogo!", {
      x: 5,
      y: 6,
      color: color`3`
    });
  }
```

> `addText()` adicionará texto ao jogo.
> Definimos a cor para `color`3` que é vermelho.
Também modificaremos nossos controles para funcionar apenas quando o jogo estiver em execução.

``` js
onInput("a", () => {
  if (gameRunning) {
    getFirst(jogador).x -= 1;
  }
});
```

``` js
onInput("d", () => {
  if (gameRunning) {
    getFirst(jogador).x += 1;
  }
});
```

## Qual é o próximo?

O jogo funciona! No entanto, atualmente não há muito.

Você pode adicionar mais recursos ao jogo. Aqui estão algumas ideias.

- Adicione um contador de pontuação.
- Adicione um fundo.
- Adicione power-ups que caem do céu.
- Faça os obstáculos aparecerem mais rápido ao longo do tempo.

Quando achar que está pronto, envie seu jogo modificado para a [Galeria Sprig](https://sprig.hackclub.com/gallery)! Os adolescentes que adicionarem seu jogo também receberão um kit de console Sprig (enquanto durarem os estoques).

Consulte [este guia](https://github.com/hack-club-brasil/sprig-docs-portuguese/blob/main/adicionando-jogos-na-galeria.md) para obter mais detalhes.

Sinta-se à vontade para também compartilhar seu trabalho nos canais `#scrapbook` e `#sprig` no [Hack Club Slack](https://hackclub.com/slack). Eu adoraria ver suas criações, me mencione (`@samliu`)!

Muito obrigado por ler meu primeiro workshop. Foi muito divertido de fazer, e espero que tenham gostado também.

**Feliz Hacking!**

<details>
<summary>Código final</summary>

```js
/*
@title: desvie_das_bolas_de_fogo
@autor: sam liu
*/
 
const jogador = "p";
const obstaculo = "o";
 
setLegend(
  [obstaculo, bitmap`
.......66.......
........6.......
.....66.6.6.....
....66.66.66....
....666666.6....
...6699999966...
...69999999966..
..669999999996..
..669933339996..
..699333333996..
..699333333996..
...69333333996..
...69333333996..
...6993333996...
....66999996....
.....666666.....`],
  [jogador, bitmap`
................
................
................
.....00000......
....0.....0.....
....0.0.0.0.....
....0.....0.....
....0.000.0.....
....0.....0.....
.....00000......
.......0........
.....00000......
.......0........
.......0........
......0.0.......
.....0...0......`]
)
 
setMap(map`
........
........
........
........
........
........
........
...p....`)
 
var gameRunning = true;
 
onInput("a", () => {
  if (gameRunning) {
    getFirst(jogador).x -= 1;
  }
});
 
onInput("d", () => {
  if (gameRunning) {
    getFirst(jogador).x += 1;
  }
});
 
function spawnObstacle() {
  let x = Math.floor(Math.random() * 8);
  let y = 0;
  addSprite(x, y, obstaculo);
}
 
function moveObstacles() {
  let obstacles = getAll(obstaculo);
 
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 1;
  }
}
 
function despawnObstacles() {
  let obstacles = getAll(obstaculo);
 
  for (let i = 0; i < obstacles.length; i++) {
   if (obstacles[i].y == 7) {
     obstacles[i].remove();
   }
  }
}
 
function checkHit() {
  let obstacles = getAll(obstaculo);
  let p = getFirst(jogador);
 
  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].x == p.x && obstacles[i].y == p.y) {
      return true;
    }
  }
 
  return false;
}
var gameLoop = setInterval(() => {
  despawnObstacles();
  moveObstacles();
  spawnObstacle();
 
  if (checkHit()) {
    clearInterval(gameLoop);
    gameRunning = false;
    addText("Fim de jogo!", {
      x: 5,
      y: 6,
      color: color`3`
    });
  }
 
}, 1000);
```

</details>
