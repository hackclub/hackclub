---
title: 'Faça seu primeiro jogo Sprig!'
description: 'Comece e construa um jogo Sprig'  
author: '@leomcelroy, @LucasHT22'
---

Vamos fazer nosso primeiro jogo no Sprig!

[Sprig](https://sprig.hackclub.com/) é uma ferramenta desenvolvida pelo Hack Club para ajudar as pessoas a começar fazer jogos. É um pequeno mecanismo de jogo embutido em um editor baseado na Web com ferramentas integradas de arte e música. Se você criar um jogo no Sprig e compartilhá-lo na galeria da comunidade, poderá obter um [console do Sprig](https://sprig.hackclub.com)!

Vamos construir o [jogo Sokoban](https://www.mathsisfun.com/games/sokoban.html). Para começar a usar o Sprig, basta abrir [o editor do Sprig](https://editor.sprig.hackclub.com).

[![Editor Sprig](https://cloud-mju5h5o89-hack-club-bot.vercel.app/0screenshot_2022-11-02_at_16-01-13_sprig.png)](https://sprig.hackclub.com)

À esquerda, temos um editor e, à direita, temos o jogo real. Vamos usar o editor para escrever o código do nosso jogo.

## Criando nossos jogadores

Vamos criar 4 variáveis; um **j**ogador, uma **c**aixa que você vai empurrar, o **g**ol do nível e uma **p**arede que servirá de obstáculo.

Vamos criar 4 variáveis; um **p**layer, um **b**ox que você vai empurrar, o **g**oal do nível e um **w**all que servirá de obstáculo.

Em seguida, usamos `setLegend` para criar a arte (sprite) para cada um deles. Posteriormente, você usará essas variáveis ​​para construir mapas.

Vamos ver o código!

```js
const jogador = "j";
```

Podemos então definir a arte que queremos usar para o nosso jogador, assim:

```js
const jogador = "j";
setLegend([jogador, bitmap`...`]);
```

`setLegend` nos permite configurar um sprite para nosso personagem. Podemos clicar em `bitmap` para abrir o editor de pixel e desenhar uma arte para nosso sprite.

![Editor de Bitmap](https://user-images.githubusercontent.com/27078897/197604643-2a59cc85-5a07-446d-95b3-d9be844b62c0.gif)

O bitmap é armazenado como uma string. Para dar uma olhada, clique na pequena seta ao lado do número da linha. Você pode minimizá-lo clicando na área novamente.

Incrível! Agora vamos adicionar alguns obstáculos, caixas e objetivos ao nosso jogo:

```js
const jogador = "j";
const caixa = "c";
const gol = "g";
const parede = "p";
setLegend(
    [
        jogador,
        bitmap`
................
................
................
.......0........
.....00.000.....
....0.....00....
....0.0.0..0....
....0......0....
....0......0....
....00....0.....
......00000.....
......0...0.....
....000...000...
................
................
................`
    ],
    [
        caixa,
        bitmap`
................
................
................
...888888888....
...8...8...8....
...8...8...8....
...8...8...8....
...8...8...8....
...888888888....
...8...8...8....
...8...8...8....
...888888888....
................
................
................
................`
    ],
    [
        gol,
        bitmap`
................
................
................
....444444......
...44....44.....
...4......4.....
...4.......4....
...4.......4....
...4.......4....
...44......4....
....4......4....
....44....44....
.....444444.....
................
................
................`
    ],
    [
        parede,
        bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`
    ]
);
```

Agora vamos criar um nível para movimentar o jogo!

## Criando um nível

Agora, queremos vários níveis, então vamos armazenar nosso nível atual em uma variável e manter todos os nossos níveis em uma lista.

```js
let nivel = 0;
const niveis = [map`.`];
```
No momento, temos apenas um nível, então vamos fazer algo com ele! Clique em `map` para abrir o editor de mapas. **Certifique-se de clicar em executar** para carregar a legenda antes de editar o mapa.

![Editor de Mapa](https://user-images.githubusercontent.com/27078897/197605676-4c1e7a9b-3acc-41f5-a958-8e15dc55ba91.gif)

Para definir o mapa para que o jogador possa vê-lo, use `setMap`, outra função fornecida pelo Sprig.

```js
let nivel = 0;
const niveis = [
    map`
      j.p.
      .cpg
      ....
      ....
    `
];
const nivelAtual = niveis[nivel];
setMap(nivelAtual);
```

Observe como o mapa também é representado como uma string - `j` é uma referência ao nosso jogador, que é representado por `j`, e o mesmo vale para os outros caracteres que vemos. `.` representa um espaço em nossa grade onde não há um sprite.

## Adicionando controles

Agora vamos adicionar alguns controles ao nosso player para que possamos começar a jogar.

Sprig tem oito entradas:

1. `para cima`, `para baixo`, `esquerda` e `direita`, que são, respectivamente, `w`, `a`, `s` e `d` no teclado. 
2. `i`, `j`, `k` e `l`.

Você pode fazer algo pressionando um botão assim:

```js
onInput("w", () => {
    getFirst(jogador).y -= 1;
});
```

Estamos usando `getFirst`, outra função fornecida pelo Sprig, para recuperar nosso sprite do jogador.

Repetindo esse padrão, podemos adicionar movimentos para cima/baixo/esquerda/direita ao nosso player.

```js
onInput("w", () => {
    getFirst(jogador).y -= 1;
});
onInput("s", () => {
    getFirst(jogador).y += 1;
});
onInput("a", () => {
    getFirst(jogador).x -= 1;
});
onInput("d", () => {
    getFirst(jogador).x += 1;
});
```

![onInput demo](https://user-images.githubusercontent.com/27078897/197607562-15d0146f-329c-4b90-ac91-584d1290528e.gif)

Agora, ao clicar em "Run", você poderá mover o jogador com `w`, `a`, `s` e `d`! No momento, o jogador pode atravessar pela parede e pela caixa. Vamos consertar isso.

## Adicionando comportamentos

Queremos que nosso jogador empurre caixas e não consiga se mover pelas paredes.

Vamos tornar o jogador, as caixas e as paredes sólidas para que não possam passar umas pelas outras. Para fazer isso, vamos usar `setSolids` do Sprig:

```js
setSolids([jogador, caixa, parede]);
```

Agora esses sprites não vão se sobrepor.

![setSolids demo](https://user-images.githubusercontent.com/27078897/197606834-9c3c3e48-84bd-49a3-938e-43eea8ea05ce.gif)

Queremos que o jogador empurre caixas, então vamos usar `setPushables` do Sprig:

```js
setPushables({
    [jogador]: [caixa]
});
```

O argumento passado para `setPushables` significa que todo sprite do tipo `jogador`, ou neste caso, `j`, pode enviar sprites do tipo `caixa`, ou neste caso, `c`.

Vamos experimentar agora!

![setPushables demo](https://user-images.githubusercontent.com/27078897/197606970-76f14b26-b3b2-44dd-ac96-a3459613a7b9.gif)

## Condição de vitória

Temos alguns sistemas - super legais! - mas não temos realmente um jogo a menos que haja um objetivo. Vamos adicionar uma condição de vitória. O objetivo será empurrar as caixas para os gols verdes.

Podemos verificar se todos os objetivos verdes são cobertos após cada entrada e, se forem, vamos para o próximo nível. Usaremos a função `tilesWith` do Sprig para ajudar com isso. Podemos passar os tipos de sprite e ele retornará todos os blocos que contêm todos os tipos de sprite que passamos.

```js
afterInput(() => {
    const numeroAtual = tilesWith(gol, caixa).length;
    const objetivo = tilesWith(goal).length;

    if (numeroAtual === objetivo) {
        // aumenta o número do nível atual
        nivel = nivel + 1;

        const nivelAtual = niveis[nivel];

        // certifique-se de que o nível existe e, se for o caso, defina o mapa
        if (nivelAtual !== undefined) setMap(nivelAtual);
    }
});
```
Observe como usamos `afterInput` - essa é outra função do Sprig. Toda função é executada após o usuário pressionar uma tecla determinada.

Vamos adicionar outro nível ao nosso jogo para ver isso em ação.

```js
const niveis = [
    map`
j.p.
.cpg
....
....`,
    map`
j.p.
.cpg
....
..cg`
];
```

![Win condition demo](https://user-images.githubusercontent.com/27078897/197607684-45683107-fb28-4900-95ff-cd0b1b69c1f5.gif)

Legal!

## Polimento

Vamos adicionar um pouco de polimento ao nosso jogo. Vai ser chato ter que reiniciar o jogo inteiro quando ficarmos presos em um nível, então vamos corrigir isso adicionando a capacidade de reiniciar os níveis:

```js
onInput("j", () => {
    const nivelAtual = niveis[nivel];
    if (nivelAtual !== undefined) setMap(nivelAtual);
});
```
Quando nosso jogo terminar, vamos deixar o jogador saber que ele ganhou usando `addText` do Sprig. Vamos editar a função que escrevemos antes para alterar o nível:

```js
afterInput(() => {
    const numeroAtual = tilesWith(gol, caixa).length;
    const objetivo = tilesWith(goal).length;

    if (numeroAtual === objetivo) {
        // aumenta o número do nível atual
        nivel = nivel + 1;

        const nivelAtual = niveis[nivel];

        // certifique-se de que o nível existe e, se for o caso, defina o mapa
        if (nivelAtual !== undefined) setMap(nivelAtual);
        } else {
            addText("voce ganhou!", { y: 4, color: color`3` });
        }
    }
});
```

## Hackeando

Faça o seu próprio jogo! Você pode tentar:

- Desenhar sua própria arte de personagem
- Adicionando mais níveis ao jogo 
- Mudando a mecânica do jogo
     - E se você pudesse empurrar paredes?
     - E se você pudesse mover dois blocos para a esquerda e para a direita em vez de um?
     - E se houvesse raios laser que destruíssem o jogador?
     - etc

Para se inspirar, confira alguns dos jogos legais que outros Hack Clubbers fizeram!

-   [Sokoban](https://editor.sprig.hackclub.com/?file=https://raw.githubusercontent.com/hackclub/sprig/main/games/sokoban.js)
-   [Penguin Slide](https://editor.sprig.hackclub.com/?file=https://raw.githubusercontent.com/hackclub/sprig/main/games/penguin_slide.js)
-   [Nomis](https://editor.sprig.hackclub.com/?file=https://raw.githubusercontent.com/hackclub/sprig/main/games/nomis.js)

## Fazendo upload para a galeria

Então você escreveu um jogo e deseja compartilhá-lo ou enviar seu jogo para ganhar um dispositivo Sprig! Na verdade, é muito fácil. Primeiro, adicione o seguinte comentário ao topo do seu jogo dentro do editor:

```js
/*
@title: seu_jogo
@author: seu_nome
*/
```

`seu_jogo` deve ser substituído pelo nome do seu jogo, e `seu_nome` deve ser substituído pelo seu nome, é claro.

O próximo passo é baixar o arquivo do jogo. Para fazer isso, selecione "file > download" no menu. O arquivo do jogo deve ser baixado para o seu computador.

Depois de baixar o arquivo, você precisa carregá-lo na galeria do Sprig para que todos possam ver. Para fazer isso, você precisa fazer um [fork](https://github.com/hackclub/sprig/fork) do repositório Sprig, que contém todo o código para o editor e galeria do Sprig.

Comece inscrevendo-se em uma [conta] do GitHub (https://github.com/signup). Depois de criar uma conta, vá para o [repositório Sprig](https://github.com/hackclub/sprig) e clique em "Fork" no canto superior direito. Você será redirecionado para uma página semelhante a esta:

![Fork Sprig](https://sprig.hackclub.com/screenshots/fork.png)

Depois de fazer fork do repo, abra a pasta `games` dentro do seu fork e clique no botão "Add file" que você verá no canto superior direito e, em seguida, em "Upload file":

![Add file to fork](https://sprig.hackclub.com/screenshots/upload.png)

Você pode adicionar o arquivo do jogo e, em seguida, rolar para baixo e clicar em "Commit file".

Se você quiser adicionar uma thumbnail ao seu jogo na galeria, você pode! Por padrão, será o primeiro mapa do seu jogo. Se você quiser mudar isso, você pode. Basta tirar uma captura de tela do seu jogo no formato PNG, ir para a pasta `img` dentro da pasta `games` e, em seguida, fazer o upload da imagem lá. Verifique de nomear seu arquivo de imagem com o nome de arquivo do seu jogo!

![Add thumbnail to fork](https://sprig.hackclub.com/screenshots/thumbnail.png)

A última coisa a fazer é abrir um pull request, que irá atualizar a galeria oficial com o seu jogo. Na página principal do seu fork, clique em "Contribute", depois em "Open Pull Request" e "Create Pull Request". Nomeie sua pull request com o nome do seu jogo e, na caixa de descrição, escreva uma descrição do seu jogo e sua experiência de codificação.

![Open pull request in fork](https://sprig.hackclub.com/screenshots/contribute.png)

Quando terminar, clique em "Create Pull Request"! Vamos dar uma olhada no seu jogo e, assim que for aprovado, seu jogo aparecerá na galeria!

## Tudo Junto

Vamos ver o código final:

```js
const jogador = "j";
const caixa = "c";
const gol = "g";
const parede = "p";
setLegend(
    [
        jogador,
        bitmap`
................
................
................
.......0........
.....00.000.....
....0.....00....
....0.0.0..0....
....0......0....
....0......0....
....00....0.....
......00000.....
......0...0.....
....000...000...
................
................
................`
    ],
    [
        caixa,
        bitmap`
................
................
................
...888888888....
...8...8...8....
...8...8...8....
...8...8...8....
...8...8...8....
...888888888....
...8...8...8....
...8...8...8....
...888888888....
................
................
................
................`
    ],
    [
        gol,
        bitmap`
................
................
................
....444444......
...44....44.....
...4......4.....
...4.......4....
...4.......4....
...4.......4....
...44......4....
....4......4....
....44....44....
.....444444.....
................
................
................`
    ],
    [
        parede,
        bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`
    ]
);

let nivel = 0;
const niveis = [
    map`
j.p.
.cpg
....
....`,
    map`
j.p.
.cpg
....
..cg`
];

const nivelAtual = niveis[nivel];
setMap(nivelAtual);

onInput("w", () => {
    getFirst(jogador).y -= 1;
});
onInput("s", () => {
    getFirst(jogador).y += 1;
});
onInput("a", () => {
    getFirst(jogador).x -= 1;
});
onInput("d", () => {
    getFirst(jogador).x += 1;
});
onInput("j", () => {
    const nivelAtual = niveis[nivel];
    if (nivelAtual !== undefined) setMap(nivelAtual);
});

setSolids([jogador, caixa, parede]);

setPushables({
    [jogador]: [caixa]
});

afterInput(() => {
    const numeroAtual = tilesWith(gol, caixa).length;
    const objetivo = tilesWith(goal).length;

    if (numeroAtual === objetivo) {
        // aumenta o número do nível atual
        nivel = nivel + 1;

        const nivelAtual = niveis[nivel];

        // certifique-se de que o nível existe e, se for o caso, defina o mapa
        if (nivelAtual !== undefined) setMap(nivelAtual);
        } else {
            addText("voce ganhou!", { y: 4, color: color`3` });
        }
    }
});

```
