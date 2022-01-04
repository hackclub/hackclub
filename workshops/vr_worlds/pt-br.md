---
name: 'Mundos VR'
description: 'Crie seu próprio mundo VR'
author: '@wollygfx, @vitorvavolizza'
img: 'https://cloud-p6nx5mns7.vercel.app/0image.png'
locales: 'pt-br'
---

Neste workshop, você aprenderá como criar seu próprio Mundo VR usando a [A-Frame](https://aframe.io/), uma estrutura web para construir experiências 3D/AR/VR.

Aqui está a [demo ao vivo](https://mundo-vr.hcbjcentro.repl.co) e o [código fonte](https://repl.it/@hcbjcentro/Mundo-VR) de que estamos fazendo:
![VR World](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/mundos-vr/img/DEMO.png)

## Instalação

Este workshop requer um conhecimento muito básico de HTML. Não se preocupe se você ficar preso em algum ponto do workshop, tudo é explicado da melhor maneira para que você entenda!

Para este workshop usaremos o Repl.it, um editor de código online gratuito. Clique [aqui](https://repl.it/languages/html) para começar um novo projeto HTML no repl.it.

![Configuração](https://cloud-qbmylslty.vercel.app/0image.png)

## Configurando a A-frame

Para começar, precisaremos vincular o A-frame no nosso documento HTML, há várias maneiras de fazer isso que você pode encontrar [aqui](https://aframe.io/docs/1.0.0/introduction/installation.html), só precisamos colocar uma tag `<script>` apontando para a build do CDN dentro das tags `head`:

```html
<script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
```
Agora, podemos começar a criar nosso mundo virtual.

![Excited GIF](https://cloud-22dzjiq1j.vercel.app/0tenor.gif)

### A-Scene

Para começar a criar nosso mundo virtual, nós **devemos** criar uma cena. A cena é a tag principal, tudo o que queremos colocar dentro de nosso mundo irá dentro desta tag, que inclui os [primitivos](https://aframe.io/docs/1.0.0/introduction/html-and-primitives.html#primitives), a câmera, e muito mais que conheceremos através deste workshop.

Portanto, vá em frente e crie uma cena dentro da tag `<body>`:

```html
<body>
    <a-scene>
        <!--Coloque aqui seus componentes-->
    </a-scene>
</body>
```

Agora, podemos começar a colocar o que quisermos, mas vamos começar com o básico. Dentro da tag `<a-scene>` crie o componente `<a-sky>`.
```html
<a-scene>
    <a-sky color="#62B1FF"></a-sky>
</a-scene>
```

![Renderização do Céu](https://cloud-e47vodig4.vercel.app/0image.png)

Isto renderizará uma esfera enorme com uma cor ou uma textura mapeada para o interior. Há um monte de [atributos](https://aframe.io/docs/1.0.0/primitives/a-sky.html#attributes) que podemos usar para modificar nosso céu, sinta-se à vontade para brincar com eles:

- color (cor)
- radius (raio)
- roughness (dureza)
- src (fonte)
- etc 

Mas, você pode estar se perguntando como colocar uma textura dentro daquela esfera ao invés de uma cor, bem é muito simples... A A-Frame tem um sistema de gerenciamento de ativos que nos permite colocar nossos ativos em um só lugar e pré-carregar e armazenar ativos para um melhor desempenho.

```html
<a-scene>
    <a-assets>
        <img id="ceu" src="ceu.jpg">
    </a-assets>
    <a-sky src="#ceu"></a-sky>
</a-scene>
```

Vamos explicar isso em partes:
- Primeiro criamos nosso sistema de gerenciamento de ativos utilizando a tag `<assets>` e depois dentro dessa tag, criamos um componente `<img>` com os atributos `id` e `src`.
- Depois substituímos o atributo `color` por `src` e o apontamos para o id do componente `img`.

**Agora, busque uma imagem para ser seu céu no Google e salve ela no seu projeto!**


![Textura do céu](https://cloud-dytwphipl.vercel.app/0screen_recording_2020-11-16_at_6.19.29_pm.gif)

O upload de imagens para o Repl.it é muito simples, basta ir até a barra de navegação e clicar em **Upload file**:

![Carregando arquivos para o Repl.it](https://cloud-3vcjp49bp.vercel.app/0image.png)

Agora que temos um céu, vamos precisar de um chão também. Podemos fazer isso simplesmente utilizando o componente `<a-plane>`.

```html
<a-plane src="#chao" height="10" width="10" rotation="-90 0 0"></a-plane>
```

Detalhando:
- Como visto anteriormente, eu criei um componente `img` dentro do sistema de gerenciamento de ativos e depois utilizei o atributo `src` para apontar para aquele ativo.
- Demos a este plano uma `height`(altura) e uma `width`(largura), sinta-se à vontade para torná-lo maior ou menor.
- Tivemos que girar o componente plano porque, por padrão, ele não é paralelo ao chão.

Depois de importarmos a imagem de um chão e clicarmos em `run`, veremos um belo chão renderizado.

![Chão renderizado](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/mundos-vr/img/recording.gif)

Mas nosso projeto parece meio entediante, então vamos corrigir ele adicionando modelos 3d. Há duas maneiras de fazer isso:
1. Criando modelos 3D nós mesmos.
2. Importando modelos 3D.

Vamos tentar os dois métodos muito rapidamente. Então vamos colocar dentro da tag `<a-scene>`, criar uma `<a-box>` dando-lhe estes atributos:

```html
<a-box width="1" height="0.2" position="0 0.75 -5" color="#00C5CD"></a-box>
```

Vamos explicar isso:
- Os atributos de width (largura), height (altura) e depth (profundidade) podem encolher a caixa ou esticá-la. Sinta-se à vontade para brincar com elas.
- Precisamos mover o cubo nas coordenadas y e z para poder ver o cubo. A posição da câmera é definida como `0 0 0` por padrão e também a posição da caixa é definida como `0 0 0` por padrão, o que significa que não podemos ver o cubo a menos que movamos a câmera ou o cubo.

*Nota: A A-frame usa um sistema de coordenadas à direita e usa como unidade de distância o medidor (m)*

![Caixa primitiva](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/mundos-vr/img/0box.gif)

Agora, podemos usar a caixa que acabamos de criar como pai e depois criar várias crianças primitivas.

```html
<a-box width="1" height="0.2" position="0 0.75 -5" color="#00C5CD">
    <a-box color="black" width="0.25" height="2" depth="0.25" position="-0.38 0 -0.38"></a-box>
    <a-box color="black" width="0.25" height="2" depth="0.25" position="0.38 0 -0.38"></a-box>
    <a-box color="blue" width="0.25" height="1" depth="0.25" position="-0.38 -0.5 0.38"></a-box>
    <a-box color="blue" width="0.25" height="1" depth="0.25" position="0.38 -0.5 0.38"></a-box>
    <a-box color="green" width="1" height="0.25" depth="0.25" position="0 0.75 -0.38"></a-box>
</a-box>
```

O código acima renderizará uma cadeira. Quando utilizamos objetos crianças e pais, veremos que nosso objeto pai é agora a posição padrão `0 0 0` para nossos objetos crianças, de modo que objetos crianças não aparecerão onde está a câmera, mas onde está o objeto pai.

Vamos explicar isto:
1. Criamos 2 caixas pretas esticadas e as movemos dentro das coordenadas x e z.
2. Depois criamos 2 caixas azuis com metade da altura das 2 caixas pretas, e então movemos estas caixas dentro da coordenada y.
3. Finalmente, criamos outra caixa com a largura do filho pai e a altura das caixas pretas, depois elas foram movidas nas coordenadas y e z.

![Cadeira renderizada](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/mundos-vr/img/0chaor.gif)

Com este método você pode fazer quase tudo o que quiser, é só utilizar a imaginação. Agora, vou lhe mostrar como importar um modelo 3D.

A A-Frame fornece componentes para carregamento [gltf](https://aframe.io/docs/1.0.0/components/gltf-model.html) e [OBJ](https://aframe.io/docs/1.0.0/components/obj-model.html). Mas ela [recomenda o uso do gltf](https://aframe.io/docs/1.0.0/components/gltf-model.html#why-use-gltf) se possível, pois o gltf é o padrão para a transmissão de modelos 3D pela Web.

Portanto, tudo que temos que fazer para importar um modelo 3D é criar um componente [asset item](https://aframe.io/docs/1.0.0/core/asset-management-system.html#lt-a-asset-item-gt) dentro do sistema de gerenciamento de ativos, e então criar a `<a-entity>` primitiva dentro de nossa cena apontando para o componente `<a-asset-item>` utilizando o atributo `gltf-model`.

```html
<a-assets>
  <a-asset-item id="modelo" src="scene.gltf"></a-asset-item>
</a-assets>
<a-entity gltf-model="#modelo"></a-entity>
```

Eis o que obtemos:

![Importação de modelo 3D](https://cloud-nay6jhbpz.vercel.app/0screen_recording_2020-11-17_at_3.22.37_pm.gif)

Há milhares de websites onde você pode obter os modelos em 3D, aqui estão alguns deles:
- [Sketchfab](https://sketchfab.com/)
- [Clara.io](https://clara.io/)
- [Archive3D](http://archive3d.net/)
- [Sketchup's 3D Warehouse](https://3dwarehouse.sketchup.com/)
- [TurboSquid](https://www.turbosquid.com/Search/3D-Models/free)

Agora, há algo mais que podemos acrescentar ao nosso Mundo VR, sons. Os sons são **muito** importantes porque nos ajudam a nos imergir em nosso mundo.

Tudo que você tem que fazer é criar um componente de áudio dentro do sistema de gerenciamento de ativos e depois criar um som primitivo dentro da cena, apontando para o componente de áudio:

```html
<a-assets>
    <audio id="musica" src="musica.wav"></audio>
</a-assets>

<a-sound src="#musica" autoplay="true"></a-sound>
```

No mundo real, o som é emitido de uma fonte, e quanto mais perto você chegar dessa fonte, mais alto você pode ouvi-la. Podemos fazer a mesma coisa na A-frame utilizando o atributo position (posição). Observe também que adicionamos o atributo `autoplay` porque queremos que o som comece a tocar quando o usuário entrar em nosso mundo.

Outra coisa que é muito importante ao fazer um mundo é o relâmpago. E se quiséssemos fazer um mundo escuro e assustador? bem, aqui é onde você pode brincar com o relâmpago.

Existem 3 tipos de luzes que podemos utilizar, ambient (ambiente), directional (direcional) e point (ponto). Confira estes 3 exemplos:

**Luzes ambiente**

As luzes ambiente afetam todos os primitivos da cena, se você escolher uma cor escura, então todos os elementos pareceriam mais escuros, a mesma coisa para cores mais claras. Podemos utilizar o atributo `intensity` (intensidade) para mudar a maneira como esta luz afeta a cena.

```html
<a-light type="ambient" color="#43484d" intensity="0.5"></a-light>
```

É assim que as luzes ambiente afetam a cena e seus componentes:

![Luz ambiente](https://cloud-821gtbu0s.vercel.app/0screen_recording_2020-11-17_at_5.18.31_pm.gif)

**Luzes direcionais**

As luzes direcionais são como uma fonte de luz que está infinitamente distante, mas brilhando de uma direção específica, como o sol. Devemos especificar para onde a luz está apontando, fazemos isso utilizando o atributo `target` (alvo), que aponta para a posição do objeto filho.

```html
<a-light type="directional" target="#childbox" color="#007DF9" intensity="0.5" position="-0.5 1 1">
    <a-box id="childbox"></a-box>
</a-light>
```

Você pode ver aqui que este tipo de luz age como o sol, você também pode ver como ela afeta apenas um lado dos objetos e o outro é completamente preto.

![Directional light](https://cloud-g8qe1cxw5.vercel.app/0screen_recording_2020-11-17_at_5.26.33_pm__1_.gif)

**Luzes pontuais**

Luzes pontuais são como lâmpadas; podemos posicioná-las ao redor da cena, quanto mais perto a lâmpada chegar de um objeto, maior o objeto é aceso.

```html
<a-light type="point" color="#43484d" position="-0.5 1 1"></a-light>
```

Veja aqui como as luzes pontuais interagem com a cena e os objetos.
![luzes pontuais](https://cloud-2hboh6agi.vercel.app/0screen_recording_2020-11-17_at_5.33.22_pm.gif)

Sinta-se à vontade para brincar com as luzes!

Certo, a última coisa, mas não menos importante, vamos acrescentar texto ao nosso mundo. Podemos usar textos para fazer um monte de coisas, tais como dizer aos usuários o que fazer ou para que serve alguma coisa.

É assim que funciona:

```html
<a-text value="Ei Hack Clubbers" color="#white" align="center" position="0 2 -3" scale="1.5 1.5 1.5"></a-text>
```

Vamos explicar isso:
1. Podemos simplesmente adicionar texto utilizando o primitivo `<a-text>`.
2. O atributo `value` (valor) é onde colocamos nosso texto.
3. O atributo `align` (alinhar) é utilizado para alinhar nosso texto ao centro, à esquerda e à direita.
4. Podemos utilizar o atributo `scale` (escala) para fazer o texto maior ou menor, o tamanho padrão é `1 1 1`.

Isto é o que o código acima renderiza:

![Texto renderizado](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/mundos-vr/img/eihackclub.gif)

E é isso para o workshop de hoje :)

## Hackeando
Yay! você conseguiu chegar ao final desta oficina.

Parabéns!!!🎉🎉

![GIF](https://cloud-d0aqa4icc.vercel.app/0bec38a05d56ac6ae2d9dec2f482ebff9.gif)

Agora que você terminou de construir este maravilhoso projeto, compartilhe sua bela criação com outras pessoas! Lembre-se, é só mandar a URL do seu projeto!
