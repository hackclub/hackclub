---
name: 'Salpicaduras de pintura'
description: 'Salpicaduras de pintura locas y coloridas en tu navegador con Paper.js'
author: '@MatthewStanciu, @J-cordz'
locales: 'es-xl'
---

**Advertencia: el siguiente taller incluye colores destellantes y no se recomienda para personas con antecedentes de epilepsia.**

Uno de los mitos más comunes sobre la codificación entre las personas que están aprendiendo a programar por primera vez es que consiste principalmente en sentarse en una habitación oscura todo el día escribiendo ~Algoritmos~ en una ventana de terminal negra con texto verde, resolviendo ecuaciones matemáticas complejas y en general, ser un genio. Vas a aplastar este mito en este taller haciendo  salpicaduras de pintura locas y coloridas directamente en tu navegador web, en solo 20 minutos.

![Patrones de colores de puntos y líneas en un lienzo](https://cloud-3aosybiuc-hack-club-bot.vercel.app/1final-demo.png)

[Código Final](https://repl.it/@TechBug2012/splatter-paint#index.html)
<br/>
[Demo Final](https://splatter-paint.techbug2012.repl.co)

## Empezando

Comienza creando un nuevo proyecto HTML en repl.it yendo a [repl.it/languages/html](https://repl.it/languages/html).

Vamos a utilizar una biblioteca llamada [Paper.js](http://paperjs.org), lo que facilita la creación de efectos visuales geniales en un [canvas HTML](https://www.w3schools.com/html/html5_canvas.asp).

Para importar una biblioteca de JavaScript en HTML, usamos la etiqueta `<script>`  e incluir un enlace a la biblioteca que queremos importar. Para Paper.js, esto se ve así:

```html
<script src="https://unpkg.com/paper@0.11.5/dist/paper-full.min.js"></script>
```

Agrega una etiqueta de script que importe Paper.js en algún lugar del `<head>`. Luego, directamente debajo, agrega lo siguiente:

```html
<script
  type="text/paperscript"
  canvas="splatterPaint"
  src="/script.js"
></script>
```

Repasemos lo que hace cada atributo de esta etiqueta:

1. `type="text/paperscript"` le dice a Paper.js que el código en el script es código de Paper.js
2. `canvas="splatterPaint"` hace referencia al ID del lienzo HTML en el que operará Paper.js (aún no hemos creado este lienzo, pero lo haremos en un segundo)
3. `src="/script.js"` significa que el contenido de este script se encuentra en tu archivo `script.js` 

¿Recuerdas cuando nos referíamos a un lienzo llamado `splatterPaint` que aún no se ha creado? Creemos ese lienzo. En el `<body>`, eliminar la línea que importa `script.js` y se reemplaza con

```html
<canvas id="splatterPaint"></canvas>
```

Increíble—¡tenemos un lienzo para nosotros!

## Dibujando algunos círculos

Ahora que importamos Paper.js con éxito y creamos un lienzo en el que trabajar, es hora de escribir el código JavaScript que creará nuestra salpicadura de pintura.

Escribamos una función que dibuje un círculo en la posición del cursor cada vez que se mueve el mouse.

Navega hasta tu archivo `script.js` y crea una función llamada `onMouseMove`:

```js
function onMouseMove(event) {}
```

Aunque normalmente puedes llamar a las funciones como quieras, es importante que esta función se llame `onMouseMove` y pasa en un `event`. Paper.js sabe lo que es `onMouseMove` cuando vea esta función, sabrá ejecutar el código que escribas dentro de ella cada vez que tu mouse se mueva, y que el `event` tú pasas es un [Evento del mouse Paper.js](https://paperjs.org/reference/mouseevent/). ¿Genial, verdad?

¡Es hora de dibujar nuestro círculo! Dentro de la función que acabas de crear, agrega este fragmento de código, que crea un círculo en el cursor del mouse con un radio de 10px:

```js
var path = new Path.Circle({
  center: event.middlePoint,
  radius: 10
})
```

Si ejecutas tu repl ahora y mueves el mouse, verás... nada. De hecho, estás dibujando círculos, pero los círculos son actualmente transparentes. Entonces, démosles un poco de color. En el fragmento de código anterior, aún en la función `onMouseMove`, añade:

```js
path.fillColor = {
  hue: 0,
  saturation: 1,
  brightness: 1
}
```

Ahora mismo, todo tu archivo `script.js`  debería verse así:

```js
function onMouseMove(event) {
  var path = new Path.Circle({
    center: event.middlePoint,
    radius: 10
  })
  path.fillColor = {
    hue: 0,
    saturation: 1,
    brightness: 1
  }
}
```

En lugar de usar los sistemas de color hexadecimal o RGB más comunes, Paper.js usa el sistema de color HSB, que usa ángulos en una rueda de color para describir el color. En el sistema de color HSB, 0 = 0° = rojo, y `360*n`° también es rojo.

![Rueda de color en la que a cada color se le asigna un valor de grado](img/hsb-color-wheel.PNG)

(Si estás interesado en obtener más información sobre el sistema de color HSB, consulta [esta fantástica explicación](https://learnui.design/blog/the-hsb-color-system-practicioners-primer.html))

Con esto en mente, intenta ejecutar tu repl ahora. Porque pusiste el `hue` en 0, ¡ahora estás dibujando círculos rojos! Pero tus círculos solo aparecen en la esquina superior izquierda de la pantalla. Esto se debe a que el ancho y la altura de su lienzo están configurados actualmente en los valores predeterminados de Paper.js. (300px por 150px).

Hagamos que tu lienzo ocupe toda la pantalla. En tu archivo `style.css`, agrega lo siguiente:

```css
canvas {
  width: 100%;
  height: 100%;
}
```

Corre tu repl de nuevo.

Casi llegamos. El CSS que acabas de escribir establece el ancho y la altura del lienzo al 100% del elemento principal. En tu archivo `index.html` , `<body>` es el elemento padre del `<canvas>` porque creaste el lienzo entre las etiquetas `<body>`.
`<body>` es actualmente tan grande como su propio elemento padre, `<html>`, que no ocupa la pantalla del todo. Con esto en mente, agrega lo siguiente a tu archivo CSS:

```css
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
```

Esto establece el ancho y alto del cuerpo al ancho y alto de tu pantalla y elimina cualquier espacio adicional entre el borde de la pantalla y el cuerpo.

Solo para recapitular: todo tu archivo CSS ahora debería verse así:

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

Si corres tu repl de nuevo, deberías notar que tus círculos rojos ahora están llenando toda la pantalla. Woohoo!

![Patrón aleatorio formado por círculos rojos](https://cloud-3aosybiuc-hack-club-bot.vercel.app/6red-circles.jpg)

## Haciendo salpicaduras

Estamos llegando a alguna parte, pero esto todavía no se ve muy salpicado.

![Pintura colorida salpicada al azar sobre un lienzo](https://cloud-3aosybiuc-hack-club-bot.vercel.app/5real-splatter-paint.jpg)

Parte de lo que hace que la salpicadura de pintura sea tan divertida de crear y mirar es la caótica aleatoriedad de todo en el lienzo. Por lo tanto, si deseas que tu sitio web esté lo más cerca posible de la salpicadura de pintura, la mejor manera de hacerlo es introducir algo de aleatoriedad.

Cambia el radio de tus círculos de `10` a `Math.round(Math.random() * 25) + 5`. Esto hace que el radio sea un número aleatorio entre 5 y 30. Luego corre el repl de nuevo.

![Círculos con radios grandes que forman un patrón aleatorio sobre un lienzo.](https://cloud-3aosybiuc-hack-club-bot.vercel.app/4random-radius.jpg)

No está mal, pero se siente un poco aplastado, ¿no? Tal vez podamos hacer que cada círculo sea único haciéndolo de un color diferente al anterior. Intenta cambiar el tono de `0` a `event.count * 3`. Corre el repl y mira lo que sucede.

![Surtido arcoiris de círculos de varios tamaños sobre un lienzo](https://cloud-3aosybiuc-hack-club-bot.vercel.app/3rainbow-colors.jpg)

`event.count * 3` crea un efecto de arcoíris al establecer el tono en cada círculo en el número total de veces que se ha dibujado un círculo multiplicado por 3, lo que salta alrededor de la rueda de colores HSB. ¡Y luce genial!

Enhorabuena, ahora puedes esparcir círculos de colores por toda la pantalla. Si aún no lo has hecho, abre tu repl en una nueva pestaña y disfruta de un lienzo más grande en el que volverse loco.

## Hacking

Tu viaje está lejos de terminar. Hay un sinfín de direcciones en las que puedes llevar este proyecto. Aquí hay algunas sugerencias.

1. Si deseas aumentar la distancia entre cada círculo, puedes agregar `tool.fixedDistance = SOME_NUMBER` al principio de tu archivo `script.js` . Esto activará el evento después de que el cursor se haya movido en cada `SOME_NUMBER`px en lugar de cada vez que se mueva el mouse. Puedes configurarlo en un número fijo, ¡o puedes hacerlo aleatorio!
2. Si encuentras que el arcoíris es demasiado predecible, puede establecer el tono en un número aleatorio entre 0 y 360 (recuerde, esto cubre todos los colores en el sistema HSB).
3. ¿Quién dice que tu lienzo tiene que ser blanco? Intenta configurar el color de fondo de tu sitio web en algo personalizado: tu color favorito, una imagen o incluso un [gradiente](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)—y/o cámbialo cada vez que se crea un nuevo círculo.
4. ¿Quién dice que tienes que dibujar círculos? Intenta dibujar una mezcla aleatoria de círculos, óvalos de longitudes y anchos aleatorios y otras formas.
5. La aleatoriedad es divertida, pero la aleatoriedad controlada es aún más divertida. Echa un vistazo a los [documentos de Paper.js sobre eventos de mouse](https://paperjs.org/reference/mouseevent/). ¿Cómo se pueden utilizar las propiedades de MouseEvent para jugar con el radio? (esto es lo que se me ocurrió: intenta establecer el radio a `event.delta.length` y ve qué sucede)
6. Si deseas lastimarte los ojos y los oídos, intenta usar la librería [Tone.js](https://tonejs.github.io) para reproducir un sonido de sintetizador de una frecuencia aleatoria cada vez que se crea un nuevo círculo.

A continuación, se muestran algunos proyectos de ejemplo que se han derivado de este proyecto:

- [https://welllitvelvetyoperation.techbug2012.repl.co](https://welllitvelvetyoperation.techbug2012.repl.co)
- [https://splatter-paint-crazy.techbug2012.repl.co](https://splatter-paint-crazy.techbug2012.repl.co) (**ADVERTENCIA: COLORES DESLUMBRANTES**)
- [https://wlhc-paperjs-demo-custom1.glitch.me](https://wlhc-paperjs-demo-custom1.glitch.me)

Ahora, tu tarea es pasar el resto de la reunión haciendo que este proyecto sea increíblemente genial y totalmente único.
