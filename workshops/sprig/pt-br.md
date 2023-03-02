---
title: ' Faça um workshop sobre Sprig!'
description: 'Use o editor de jogos Sprig no seu clube.'  
bg-image: "/workshops/faça-um-workshop-sobre-Sprig/img/sprig.png"
permalink: /workshops/faça-um-workshop-sobre-Sprig/
order: 33
---
---
title: 'Faça um workshop sobre Sprig!'
description: 'Use o editor de jogos Sprig no seu clube.'  
author: '@leomcelroy, @LucasHT22'
---

[](img/screenshot.jpg)

Sprig é uma ferramenta desenvolvida pelo Hack Club para ajudar as pessoas a começarem rapidamente a fazer jogos interessantes. É um pequeno mecanismo de jogo embutido em um editor baseado na web com ferramentas integradas de arte e música. Se você construir um jogo no Sprig e compartilhá-lo na galeria da comunidade, você pode obter um Sprig Console!

>Este workshop foi desenvolvido para ajudar os líderes de clube a usar o Sprig em seus clubes. Se você é um hacker solo, pode ir direto para o [editor Sprig](editor.sprig.hackclub.com). Você pode pegar algumas dicas úteis lendo isso.

[](img/penguin_slide.png)

Projetamos o Sprig para se encaixar em workshops com instrução simples e criação/exploração máximas. É assim que eu administraria o Sprig como um workshop.

## Demonstração (2 minutos)

Dê uma rápida demonstração de um jogo bastante completo com código acessível. Você pode ir para a galeria e classificar pela tag `beginner`.
[](img/galleryrl.png)

Aqui estão alguns jogos que atendem aos critérios:

- [Skoban](https://editor.sprig.hackclub.com/?file=https://raw.githubusercontent.com/hackclub/sprig/main/games/sokoban.js)
- [Penguin Slide](https://editor.sprig.hackclub.com/?file=https://raw.githubusercontent.com/hackclub/sprig/main/games/penguin_slide.js)
- [Nomis](https://editor.sprig.hackclub.com/?file=https://raw.githubusercontent.com/hackclub/sprig/main/games/nomis.js)

## Ferramentas (3 minutos)

Abra o kit de ferramentas e descreva rapidamente as diferentes coisas que você pode fazer. O ponto aqui não é explicar todas as funções. É apenas para dar às pessoas uma noção do que é possível e onde procurar ajuda. Gaste apenas alguns minutos fazendo isso! Confira o trecho abaixo para pesquisar todas as funções do Sprig.

Certifique-se de dizer às pessoas **como salvar arquivos**. 

Para salvar adicione um nome assim:

```
/*
@title: o_nome_do_jogo
@author: lucas_honda
*/
```

E então aperte `salvar`.

Arquivos recentes estão disponíveis no menu. Um asterisco ao lado do arquivo significa que suas alterações atuais não foram salvas. Os arquivos são salvos no armazenamento local do seu navegador. Eles só estarão acessíveis no computador que você está usando no momento e no navegador que você está usando. **A maneira mais confiável de salvar é baixar o arquivo `js`**.

## Diga às pessoas para codar! (resto do tempo de oficina disponível)

Diga às pessoas para começarem a trabalhar no [tutorial](https://editor.sprig.hackclub.com/?id=47c2809923efc54b4ae6b2c2d444274a).

Depois que as pessoas concluírem o tutorial, incentive a começar a pensar em seu próprio jogo. Muitas vezes, uma boa maneira de criar um jogo original é começar com um existente e adicionar uma nova mecânica a ele. Confira os jogos marcados como `hackable` para encontrar bases remixáveis.

## Compartilhar (10 minutos)

Reúna a atenção de todos e peça que compartilhem seus jogos com você. Pergunte se alguém gostaria de fazer uma demonstração do jogo para o grupo. Celebre o trabalho e use como uma chance para cada pessoa obter feedback, inspiração e motivação.

Se os jogos estiverem completos, [faça um PR](https://sprig.hackclub.com/share) para enviá-los à galeria e [ganhe um console Sprig](https://sprig.hackclub.com/).

[](img/file.png)

## Referência

O kit de ferramentas é essencialmente todas as funções que adicionamos ao Sprig, caso contrário, é apenas JavaScript. Para obter mais informações sobre essas funções, consulte a documentação em português [aqui](https://github.com/hack-club-brasil/sprig-docs-portuguese).

```
const jogador = "j";
const parede = "p";

setLegend(
    [ jogador, bitmap`.` ],
    [ parede, bitmap`.` ],
);

setBackground(parede);

const fase = map`.`
setMap(fase);

setSolids([ jogador, parede ]);
setPushables({
  [jogador]: [parede]
})

getFirst(spriteType);
getAll(spriteType);
getTile(x, y);
tilesWith(spriteType0, spriteType1, ...);
addSprite(x, y, spriteType);
clearTile(x, y);

addText("string", { x, y, color: [r, g, b] });

clearText();

onInput("w", () => {});
afterInput(() => {});

const melodia = tune`...`
playTune(melodia)
playTune(melodia, 5)
const playback = playTune(melodia, Infinity)
playback.end()

width();
height();
```
