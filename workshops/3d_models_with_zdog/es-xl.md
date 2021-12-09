---
name: Modelos 3D Animados
description: Crea modelos 3D animados utilizando una librería de JavaScript simple
author: '@wollygfx'
img: 'https://cloud-f0her7co2.vercel.app/2020-10-21_84xj5ymva0f16vfmyderfn46epzgzbp7.jpeg'
---

# Modelos 3D Animados

En algún punto todos hemos querido crear modelos en 3D, y aunque suene complicado; ¡no lo es! En este taller, usaremos una simple librería de JavaScript llamada [ZDog](https://zzz.dog/getting-started) que nos dejará crear lo que queramos en cuestión de minutos. Al final de este taller, tendrás la capacidad de crear modelos 3D como este:


![Ejemplos](https://cloud-5a0ya05fk.vercel.app/0large.gif)

Aquí hay un [demo en vivo](https://repl.it/@wollygfx/Hack-Club-logo) de lo que vamos a hacer, también puedes encontrar el código final ahí. de lo que vamos a hacer, tambien puedes encontrar el codigo final ahi.

![Hack Club logo 3D](https://cloud-590c1rr82.vercel.app/0screen_recording_2020-10-21_at_7.00.53_am.gif)

## Configuración

Este taller requiere de unos conocimientos básicos en los siguientes lenguajes de programación: HTML y JavaScript. ¡No te preocupes si te quedas atascado en algún punto del taller, todo está explicado de la mejor manera posible!

Para este taller utilizaremos [Repl.it](https://repl.it), clic [aquí](https://repl.it/languages/html) para crear un entorno de programación para este taller.

![Configuración](https://cloud-qbmylslty.vercel.app/0image.png)

## Sección HTML

Está bien, ¡comencemos! Primero, vamos a crear dentro del `<body>` tag un elemento `<canvas>` en donde, los modelos 3D que vamos a crear se van a renderizar. Luego, le damos una class (clase); siéntete libre de darle la clase que quieras… Yo le daré la clase `model`.

```html
<canvas class="model"></canvas>
```

Ahora tenemos que poner el siguiente código dentro del `<body>` tag, este codigo nos permite usar la librería ZDog sin tener que descargarla localmente. Aprende más a cerca de CDN [aquí](https://en.wikipedia.org/wiki/Content_delivery_network).

```html
<script src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js"></script>
```

Al final, tu código debería verse así:

```html
<body>
  <canvas class="model"></canvas>
  <script src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js"></script>
  <script src="script.js"></script>
</body>
```

_Nota: Es muy importante mantener este orden para asegurarnos que todo funcione correctamente_

## Sección JavaScript

Ahora que tenemos nuestro documento HTML listo, tenemos que trabajar con nuestro código JavaScript.

![Cool gif](https://cloud-p49mi1lgl.vercel.app/0tumblr_e49d74c805eec46704d22c1da59ecded_cc93a056_500.gif)

### Configurando el Canvas

Empezaremos con la parte divertida. Primero, vamos a crear una variable principal y le vamos a dar un nombre, yo la nombraré como “ws”

```javascript
const ws = new Zdog.Illustration({
  element: '.model',
  resize: 'fullscreen',
})
```

Desglosando este código:

1. **Illustration** es la clase de nivel superior que se encarga de tratar el elemento `<canvas>`. Sostiene todas las formas de la escena, y renderiza esas formas en el elemento `canvas`.
2. La propiedad **element** es utilizada para hacer coincidir el render con el tag canvas de clase "model" que se encuentra en el documento HTML. En otras palabras, conecta la libreria ZDog, con el elemento `<canvas>` que creamos en el documento HTML.
3. La propiedad **resize** es usada para modificar el tamaño en el que se renderizara el modelo 3D, en este caso, el modelo 3D se renderizará en pantalla completa. Si quieres, puedes borrar esta propiedad.

En este momento no se muestra nada en nuestro `<canvas>`, así que creemos nuestro primer modelo 3D.

### Creando nuestro modelo 3D

Ahora, vamos a crear una figura, para este taller elegiré un simple cubo, pero tú puedes elegir lo que quieras. Aquí hay una lista de [figuras](https://zzz.dog/shapes) que puedes crear con ZDog.

_Nota: Cada figura tiene sus propios elementos y propiedades, puedes mirar la lista completa [aquí](https://zzz.dog/shapes)._

Agreguemos el siguiente bloque de código a nuestro JavaScript:

```javascript
new Zdog.Box({
  addTo: ws,
  width: 100,
  height: 100,
  depth: 100,
  stroke: false,
  leftFace: '#da0',
  rightFace: '#e62',
  topFace: '#ed0',
  bottomFace: '#636',
})
```

Explicación:

1. **Box** es una clase de figura, puedes reemplazarla por la que quieras…
2. Usando la propiedad **AddTo**, agregamos la figura **Box** (cubo) a la clase de nivel superior **Zdog.Illustration**, la misma que utilizamos para renderizar las figuras. Esta propiedad debe estar aquí, de lo contrario, la figura no será renderizada.
3. Las propiedades **width**, **height** and **depth** pueden estirar o encoger tu figura.
    - Width: Configura el ancho del cubo
    - Height: Configura la altura del cubo
    - Depth: Configura la profundidad del cubo. Si el valor de esta es 0, el cubo se renderizará como una figura 2D; así que asegúrate de darle un valor.
4. La propiedad **stroke** le da a nuestra figura un borde o trazo, trabaja como una capa externa que puedes utilizar para darle un efecto redondo a tu modelo 3D. Siéntete libre de jugar con esta propiedad cambiando su valor.
5. Las propiedades **leftFace**, **rightFace**, **topFace** & **bottomFace** le dan color a cada cara de tu figura. Intenta utilizando diferentes colores para cada cara, para que puedas apreciar mejor el efecto 3D de la figura cuando la animemos.

### Renderizando nuestro modelo 3D

Ahora que hemos creado nuestra figura, vamos a renderizarla. Usa la siguiente línea de código para renderizar la figura que acabamos de crear.

```javascript
ws.updateRenderGraph()
```

Este código actualiza y renderiza la clase de nivel superior **Zdog.illustration** que declaramos en la primera variable, así que asegúrate de colocar el nombre correcto de la variable para que funcione.

Ahora, dale clic al botón **Run** para ver que pasa…

![Imagen renderizada](https://cloud-k11ck8g2n.vercel.app/0image.png)

Felicidades, acabaste de crear tu primer modelo 3D… Si, quizás no era lo que estabas esperando. Arreglemos esto animando nuestra figura.

![woah gif](https://cloud-kr2lyxjbx.vercel.app/0woah.gif)

### Animando nuestro modelo 3D

Agrega el siguiente bloque de código dentro de nuestro JavaScript.

```javascript
function animateModel() {
  ws.rotate.y += 0.01
  ws.rotate.x += 0.01
  ws.updateRenderGraph()
  requestAnimationFrame(animateModel)
}

animateModel()
```
Explicación:

1. Acabamos de crear una función que hará que el modelo 3D rote, puedes nombrar a esta función como quieras.
2. `rotate.x` y `rotate.y` establecen la velocidad a la que rota nuestra figura dentro de las coordenadas (x, y) respectivamente, así:
    - El cubo se moverá hacia arriba o abajo dependiendo del valor que tenga (- o +, respectivamente)
    - El cubo de moverá hacia la derecha o izquierda dependiendo el valor que tenga (- o +, respectivamente)
3. `ws.updateRenderGraph()` actualiza y renderiza la clase de nivel superior **Zdog.illustration** que declaramos en la primera variable, así que asegúrate de colocar el nombre correcto de la variable para que funcione.
4. `requestAnimationFrame(animatemodel)` esto es como un bucle, básicamente hace que la figura rote todo el tiempo creando fotogramas.
5. `animateModel()` llama la función que acabamos de crear.

Ahora, dale clic al botón **Run** de nuevo

![Modelo animado](https://cloud-djkuut7y4.vercel.app/0screen_recording_2020-10-03_at_7.31.47_pm.gif)

Increíble, ¿cierto?

![Increíble gif](https://cloud-hrs0t8jeh.vercel.app/0tenor.gif)

### Múltiples figuras

Si quieres intentar crear modelos 3D complejos, necesitaras utilizar muchas figuras y ponerlas juntas, [aquí](https://zzz.dog/#made-with-zdog) hay algunos ejemplos de lo que puedes hacer:

![Ejemplos](https://cloud-2jaw6a14x.vercel.app/0image.png)

Crear múltiples figuras es muy fácil, es tan simple como crear varias figuras y juntarlas hasta obtener lo que quieras. Sin embargo, la parte difícil es colocar las figuras en el lugar correcto para que nuestra figura se vea bien. Podemos hacer esto utilizando la propiedad `"translate"`. ¡Miremos como funciona!

Para este ejemplo, crearé el logo de Hack Club, ¡pero tú puedes crear lo que quieras! Clic [aquí](https://repl.it/@wollygfx/Hack-Club-logo) para ver el código final.

Primero, vamos a cambiar la clase (class) del elemento `<canvas>` que creamos en nuestro documento HTML. La reemplazaremos por `hackclub`, esa será su nueva clase. Así debería verse ahora:

```html
...
<canvas class="hackclub"></canvas>
...
```

Y agrega un color de fondo a nuestro documento HTML utilizando el siguiente bloque de código, este lo colocaremos en el archivo `style.css`. Este archivo se encuentra en el panel a la izquierda.

```css
.hackclub {
  background: #FDB;
}
```

Luego de eso, vamos de vuelta a nuestro JavaScript (script.js). Ahora haremos algunos cambios a la clase de nivel superior **Zdog.Illustration**, empezaremos por modificar el valor de la propiedad `element` de `.model` a `.hackclub` y finalmente agregaremos la propiedad `dragRotate` con un valor establecido `true`, la cual sirve para permitirle al usuario rotar nuestro modelo 3D utilizando el ratón.

```js
const ws = new Zdog.Illustration({
  element: '.hackclub',
  resize: 'fullscreen',
  dragRotate: true
})
```

Luego, vamos a cambiar las propiedades de nuestro cubo para que parezca un cuadrado rojo:

```javascript
new Zdog.Box({
  addTo: ws,
  width: 100,
  height: 100,
  color: '#ec3750',
  stroke: 20,
  translate: { z: -18 },
})
```

1. Como hemos visto antes, la propiedad `addTo` agrega nuestra figura a la clase de nivel superior **Zdog.Illustration**.
2. Usamos las propiedades **width** and **height** para hacer un cuadrado perfecto, y no le dimos una profundidad a nuestra figura porque no es necesario.
3. Toda la figura completa tendrá el mismo color (rojo), así que utilizaremos la propiedad `color` para darle el mismo color a toda la figura y sus caras. 
4. Como mencioné previamente, la propiedad `stroke`  nos permite darle a la figura un efecto redondeado.
5. La propiedad `translate` mueve la figura -18 dentro de la coordenada z. La coordenada z es la coordenada para la tercera dimensión; puedes interpretar esto como si estuviéramos moviendo la figura hacia atrás dentro de un espacio virtual.

Cuando damos clic al botón **Run**, obtendremos esto:

![Cuadrado rojo](https://s2.gifyu.com/images/hc-rotate.gif)

¡Esto se ve muy bien! Ahora crearemos la letra "h", para esto necesitaremos otras 3 figuras:

```javascript
new Zdog.Box({
  addTo: ws,
  depth: 20,
  width: 20,
  height: 80,
  color: '#fff',
  translate: { z: 18, x: -20 },
})
```
- Esta vez, la figura es movida 18 dentro de la coordenada z (se mueve la figura hacia adelante)... Esto crea un espacio entre el cuadro rojo (el que hicimos previamente) y la nueva figura.
- La figura es movida -20 dentro de la coordenada x (se mueve la figura hacia la izquierda).
- Cambiamos el color de la figura utilizando el código HEX `#fff`, equivalente al color blanco.
- Adicionalmente, cambiamos el tamaño de la figura utilizando las propiedades `width` y `height` para crear un rectángulo y le dimos una profundidad de 20 a nuestra figura.


![Resultado 1](https://cloud-kg0xtr3hs.vercel.app/0image.png)

```javascript
new Zdog.Box({
  addTo: ws,
  depth: 20,
  width: 20,
  height: 40,
  color: '#fff',
  translate: { z: 18, y: 20, x: 20 },
})
```

- Esta vez creamos una figura mucho más pequeña usando las propiedades `width` y `height`
- Movimos la figura 18 entro de la coordenada z (hacia adelante), hacia la derecha dentro de la coordenada x y hacia abajo dentro de la coordenada y

![Resultado 2](https://cloud-1nisp19i8.vercel.app/0image.png)

```javascript
new Zdog.Box({
  addTo: ws,
  depth: 20,
  width: 40,
  height: 20,
  color: '#fff',
  translate: { z: 18, x: 10 },
})
```

En esta última, todo lo que tuvimos que hacer fue duplicar la figura anterior y moverla hacia la derecha dentro de la coordenada x para que se mezcle con la figura de la derecha.

![Resultado 3](https://cloud-m2gpkvlqa.vercel.app/0image.png)

Ahora vamos a actualizar la función de animación, agregándole unas propiedades simples:

```javascript
function animateModel() {
  ws.rotate.y += 0.01
  ws.updateRenderGraph()
  requestAnimationFrame(animateModel)
}

animateModel()
```

Aquí está el resultado final:

![Resultado final](https://cloud-d9lxnrldx.vercel.app/0screen_recording_2020-10-09_at_12.05.02_pm.gif)

### Hackealo

¡Felicitaciones! Acabaste de aprender lo básico de ZDog, siéntete libre de revisar los siguientes recursos para incrementar tu conocimiento...

![Felicitaciones gif](https://cloud-d0aqa4icc.vercel.app/0bec38a05d56ac6ae2d9dec2f482ebff9.gif)

Crea tu propio modelo 3D y compártelo en el [Slack de Hack Club](https://hackclub.slack.com), me encantaría ver que puedes crear utilizando lo que acabaste de aprender en este taller. 

### Otros ejemplos

Revisa estos increíbles modelos 3D creados por otras personas:

- [Reloj digital en vivo usando ZDog](https://codepen.io/jh3y/pen/vqYLKd)
- [Amatista de Steven Universe usando ZDog](https://codepen.io/Metahari/pen/dEQMBy)
- [Octocat usando ZDog](https://codepen.io/defunty/pen/vwwjPL)

### Recursos

- [Sitio web Zdog](https://zzz.dog)
- [Hecho con Zdog](https://codepen.io/collection/DzdGMe/?cursor=ZD0xJm89MSZwPTEmdj0z)
- [Plug-in de texto para Zdog](https://jaames.github.io/zfont/)
- [Graficar datos con Zdog](https://observablehq.com/@zechasault/images-drawn-with-zdogs)
