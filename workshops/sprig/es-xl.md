---
name: 'Dirigiendo un taller de Sprig'
description: 'Utiliza el editor de juegos Sprig en tu club.'
author: '@leomcelroy'
img: "https://user-images.githubusercontent.com/27078897/192363683-dc202e64-bf3b-475f-81c1-18cd769a4b6e.png"
---

# Dirigiendo un taller de [Sprig](https://editor.sprig.hackclub.com)

<img width="500" alt="Screen Shot 2022-09-23 at 4 41 25 PM" src="https://user-images.githubusercontent.com/27078897/192053140-3bf9cc19-0aa4-4cdb-9845-e4fdf04f2286.jpg">

[Sprig](https://editor.sprig.hackclub.com/) es una herramienta desarrollada por Hack Club para ayudar a la gente a empezar rápidamente a crear interesantes juegos 2d usando [tilemaps](https://www.domestika.org/es/blog/7053-que-son-el-tileset-y-el-tilemap-en-el-desarrollo-de-videojuegos). Es un pequeño motor de juego integrado en un editor basado en la web con herramientas de arte y música integradas. ¡Si construyes un juego en Sprig y lo compartes en la galería de la comunidad, puedes conseguir una [Consola Sprig](https://sprig.hackclub.com)!

> Este taller está diseñado para ayudar a los líderes de los clubes a utilizar Sprig en sus clubes. 
> Si eres un hacker en solitario puedes saltar directamente al [editor de Sprig](https://editor.sprig.hackclub.com).
> Sin embargo, es posible que pueda obtener algunos consejos útiles leyendo esto.

<img width="500" alt="Screen Shot 2022-09-23 at 4 41 25 PM" src="https://user-images.githubusercontent.com/27078897/192053241-51cd9891-2e13-482c-b5e0-2d285b87f62c.png">

Hemos diseñado Sprig para que puedas dirigir tus talleres con un mínimo de instrucción y un máximo de creación y exploración. Así es como yo dirigiría Sprig como taller.

## Demo (2 minutos)

Da una demostración rápida de un juego relativamente completo con código accesible. Puedes ir a la [galería](https://sprig.hackclub.com/gallery) y filtrar los juegos con la etiqueta de `beginner`.

<img width="500" alt="Screen Shot 2022-09-23 at 5 00 24 PM" src="https://user-images.githubusercontent.com/27078897/192056026-c4c5492d-00e8-44fb-be35-6b74a1c3bfe2.png">

Aquí hay algunos juegos que cumplen los criterios:

- [Sokoban](https://editor.sprig.hackclub.com/?file=https://raw.githubusercontent.com/hackclub/sprig/main/games/sokoban.js)
- [Penguin Slide](https://editor.sprig.hackclub.com/?file=https://raw.githubusercontent.com/hackclub/sprig/main/games/penguin_slide.js)
- [Nomis](https://editor.sprig.hackclub.com/?file=https://raw.githubusercontent.com/hackclub/sprig/main/games/nomis.js)

## Kit de herramientas (3 minutos)

Abre el kit de herramientas y describe rápidamente las diferentes cosas que puedes hacer con estas. No se trata de explicar todas las funciones. Es solo para dar a la gente una idea de lo que es posible y dónde buscar ayuda. Dedica solo unos minutos a esto. Echa un vistazo al [fragmento de abajo](#toolkit) para examinar esencialmente cada función en Sprig.

Asegúrate de **decirle a la gente cómo guardar los archivos**.

Para guardar, añada un nombre así:

```js
/*
@title: my_game_name
@author: leo_mcelroy
*/
```

Y luego pulsa `save`.

Los archivos recientes están disponibles en el menú. Un asterisco junto al archivo significa que los cambios actuales no se han guardado. Los archivos se guardan en el almacenamiento local de su navegador. Solo serán accesibles en el ordenador y en el navegador que estés usando. **La forma más fiable de guardar es descargar el archivo `js`**.

## ¡Dile a la gente que se ponga a hackear! (en el resto del tiempo disponible del taller)

Dígale a la gente que empiece por trabajar con el [tutorial](https://editor.sprig.hackclub.com/?file=https://raw.githubusercontent.com/hackclub/sprig/main/games/getting_started.js).

Una vez que la gente haya completado el tutorial, anímala a que empiece a pensar en su propio juego. A menudo, una buena forma de crear un juego original es empezar con uno ya existente y añadirle una nueva mecánica. Echa un vistazo a los juegos etiquetados como "hackeables" para encontrar bases remezclables.

## Compartir las creaciones (10 minutos)

Llama la atención de todos y pídeles que compartan sus juegos contigo. Pregunta si alguien quiere hacer una demostración de su juego al grupo. Celebra el trabajo de todos y aprovecha para que cada persona reciba comentarios, inspiración y afirmación.

Si los juegos están completos, entonces puedes [hacer un Pull Request](https://sprig.hackclub.com/share) para presentarlos a la galería y [ganar una consola Sprig](https://sprig.hackclub.com). 

Si los juegos no están completos, anima a la gente a seguir trabajando en ellos y planea seguir trabajando en estos en la próxima reunión del club.
También puedes animar a la gente a compartir los juegos que tienen hasta ahora publicando enlaces a esos juegos en el [canal Sprig](https://hackclub.slack.com/archives/C02UN35M7LGs) en Slack.
Puede generar un enlace navegando a la opción `share` -> `as link` en el menú de archivos, como se ve a continuación:

<img width="500" alt="Screen Shot 2022-09-23 at 4 41 25 PM" src="https://user-images.githubusercontent.com/27078897/192363738-35a5fa1e-d4e8-4b56-8ff1-878191ab8829.png" />

Los miembros del club podrían dedicar fácilmente 3 o 4 reuniones a trabajar en los juegos.

# Referencia

<a name="toolkit">El kit de herramientas</a> contiene esencialmente cada función que añadimos a Sprig, por lo demás es solo JavaScript.
Para más información sobre estas funciones, consulta el menú `help` del editor de Sprig.

```js
const player = "p";
const wall = "w";

setLegend(
    [ player, bitmap`.` ],
    [ wall, bitmap`.` ],
);

setBackground(wall);

const level = map`.`
setMap(level);

setSolids([ player, wall ]);
setPushables({
  [player]: [wall]
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

const melody = tune`...`
playTune(melody)
playTune(melody, 5)
const playback = playTune(melody, Infinity)
playback.end()

width();
height();
```



