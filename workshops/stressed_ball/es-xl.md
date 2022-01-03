---
name: 'Taller invertido: Bola estresada'
description: 'aprender a programar como los verdaderos programadores, buscando todo'
author: '@leomcelroy'
locales: 'es-xl'
---

Hoy vamos a intentar hacer esta bolita estresada.

<video 
       src="https://user-images.githubusercontent.com/27078897/140573691-491e7111-41e6-4c84-a0f9-d5eb405478ce.mov"
       width="80%" controls>
</video>

Es un pequeño círculo de colores que se mueve por la pantalla.

Lo que va a ser un poco diferente es que yo **no** voy a decirte cómo hacerlo. Lo vas a descubrir por ti mismo. Este taller será quizás un poco desafiante, si terminas haciendo algo diferente a la bola, está totalmente bien. Sólo trata de desafiarte a ti mismo haciendo que tu dibujo se mueva, crezca, rebote, etc. La pelota es sólo un ejemplo para conseguir nuestro objetivo.

Si tienes problemas para resolver algo, pregunta también a la gente que te rodea. Intenta resolver las cosas juntos.

## Plantilla

Para empezar, dirígete a este [editor en vivo](https://hackclub.github.io/live-editor/) (utiliza un navegador Chrome o Chromium) y pega el siguiente bloque de código en el editor. Esto creará un lienzo (canvas) para que nuestro círculo este ahí.

```html
<style>
  body {
    margin: 0px;
  }

  #root {
    display: grid;
    place-content: center;
    background: coral;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
</style>

<div id="root">
  <canvas width="300px" height="300px"></canvas>
</div>

<script type="module">
  function resize() {
    const container = document.querySelector("#root");
    const c = document.querySelector("canvas");
    c.width = container.clientWidth;
    c.height = container.clientHeight;
  }

  resize();

  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const w = canvas.width;
  const h = canvas.height;
	
  // COMIENZA TU CÓDIGO

  // VARIABLES AQUÍ

  function draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);

    // DIBUJA EL CIRCULO AQUÍ (3 lineas)

    // COLOR DEL CIRCULO AQUÍ (2 lineas)

    // CAMBIA LAS VARIABLES AQUÍ

  }

  // FINAL DE TU CÓDIGO

  setInterval(draw, 10);
</script>
```

Para ayudarte a avanzar te daré algunos objetivos que desglosan el proyecto, y mencionaré algunas cosas que te serán útiles en tus búsquedas. Google (y StackOverflow.com) serán tus mejores amigos durante este taller.

**Tips:**

- **Busca fragmentos de código cortos.** Es mejor encontrar algo que se pueda copiar, ejecutar y luego entender en lugar de leer sobre sus especificaciones.
- **Sea explícito.** Dígase a sí mismo en voz alta lo que quiere hacer en Español antes de hacerlo en código. Todo buen código comienza con buenos pensamientos.
- **Usa las herramientas del navegador.** Abra las Herramientas de desarrollo para utilizar la consola de JavaScript y el inspector de HTML. Los mensajes de error útiles se registrarán en la consola. Puede hacer uso de estas herramientas haciendo clic con el botón derecho y pulsando inspeccionar elemento.
- **Juega con el código** Si tienes curiosidad por saber qué hace algo, prueba a cambiarlo y mira qué pasa. Todos los números se pueden pulsar y arrastrar.
- **Pregunta en internet** A continuación, encontrarás una serie de sugerencias para las preguntas. Estas sugerencias están `escritas así`, prueba a buscarlas en Google.

## Puntos de referencia

### Dibuja un circulo

![Contorno del círculo](https://cloud-frxdc2f2o-hack-club-bot.vercel.app/1screen_shot_2021-11-02_at_12.21.50_pm.png)

Cuando tengas tu círculo en la pantalla, intenta descifrar qué hace el código para crearlo. En JavaScript, llamar una función tiene el siguiente aspecto: `nombreDeLaFunción(argumento0, argumento1)`. Puede haber cualquier cantidad de argumentos. Cuando dibujes el círculo, intenta averiguar qué significan los diferentes argumentos.

**Preguntas**

- `¿Cómo puedo dibujar un círculo con el Canvas en javascript?`
- `Ejemplos de beginPath() y stroke() en el Canvas`

### Colorea tu círculo

![Círculo coloreado](https://cloud-frxdc2f2o-hack-club-bot.vercel.app/2screen_shot_2021-11-02_at_12.23.35_pm.png)

Hay muchas formas de representar colores en código, como: 

- hex (`#ff4455`)
- rgb (`rgb(100, 200, 30)`)
- hsl (`hsl(34, 23%, 43%)`)
- algunas palabras (`orange`,`green`,`blue`)

Su color probablemente estará en una [cadena de texto](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String), escrita como:

- `"red"`

**Preguntas**

- `¿Cómo rellenar una forma en el Canvas usando JavaScript?`
- `¿Cómo establecer un estilo de relleno en el canvas usando JavaScript?`
- `¿Cómo colorear una figura en el Canvas usando JavaScript?`

### Mueve tu círculo

<video 
       src="https://user-images.githubusercontent.com/27078897/140573485-cab505f7-cd00-4076-8322-152b70285170.mov"
       width="80%" controls>
</video>

Querrás usar variables, como esta:

- `let y = 10;`

**Preguntas**

- `¿Cómo puedo incrementar el valor de una variable en JavaScript?`
- `¿Cuál es la diferencia entre declarar y asignar una variable en JavaScript?`

### Haciendo frente al abandono

Detengamos el balón para que no salga de la pantalla. Entonces, cómo llegamos desde este

<video 
       src="https://user-images.githubusercontent.com/27078897/140573529-2d6162e7-d1ad-44e4-8e7b-768d92282258.mov"
       width="80%" controls>
</video>

a este

<video 
       src="https://user-images.githubusercontent.com/27078897/140573601-f42c7904-df40-4733-9b95-c7b38d3ca5c2.mov"
       width="80%" controls>
</video>

o este

<video 
       src="https://user-images.githubusercontent.com/27078897/140573643-b69d0b8f-4bfd-455d-9289-1bbe74cb3f9d.mov"
       width="80%" controls>
</video>

**Preguntas**

- `¿Qué valores corresponden a la izquierda, derecha, arriba y abajo de la pantalla?`
- `¿Cómo controlamos la dirección del movimiento?`
- `¿Cómo utilizar los condicionales en JavaScripts?`
- `¿Cómo utilizar el operador modulo en js?`

### Arréglalo

<video 
       src="https://user-images.githubusercontent.com/27078897/140573691-491e7111-41e6-4c84-a0f9-d5eb405478ce.mov"
       width="80%" controls>
</video>

Añade algo de aleatoriedad a las coordenadas `x` e `y`

- `¿Cómo puedo generar un número aleatorio en JavaScript`

Haz que el color cambie con la posición, aquí tienes un sencillo ejemplo de interpolación de cadenas que te será útil

```html
`hsl(${number}, 60%, 80%)`
```
**Questions**

- `string interpolation in js`
- `hsl coloring`

Notas sobre las operaciones matemáticas

- División y multiplicación cambian las tasas
- Los signos negativos/positivos corresponden a la dirección

## Compartir


Deja 15 minutos al final del taller para que la gente comparta su trabajo. Puedes pulsar el enlace para compartir que se encuentra en el editor en vivo para generar un enlace. Compárte tu creación con Hack Club pegando el enlace en el cuadro de texto  al final de [esta](https://workshops.hackclub.com/stressed_ball/) página.
