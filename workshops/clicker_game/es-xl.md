---
name: 'Clicker Game'
description: '¡Construye tu propio clicker game usando React!'
author: '@jasonappah, @davidballezaa'
img: 'https://cloud-a2dkhe77f.vercel.app/0screen_shot_2020-12-26_at_12.20.26_am.png'
---

# Construye un clicker game con React

En este taller, ¡construiremos un clicker game! Al finalizar, tendrás un juego como este y aprenderás React en el camino.

[Demo en vivo](https://finished-clicker-game.jasonantwiappah.repl.co/)
<br>
[Código final](https://repl.it/@JasonAntwiAppah/finished-clicker-game#src/App.js) 

![Captura de pantalla de una página con fondo rojo y un número en el centro](https://cloud-hr9ez7m8r.vercel.app/0clicker.gif)

## Empezando

Usaremos [Repl.it](http://repl.it) para escribir nuestro código. Abre la [plantilla de inicio aquí](https://replit.com/@davidballezaa/clicker-game-starter-spanish) y da clic en el botón de 'Fork' (está en la parte superior de tu pantalla). Ahora da clic en 'Run' y deberías ver algo como esto. No te preocupes si ves advertencias en la consola - lo arreglaremos más tarde.

![Captura de pantalla del clicker game abierto en el editor de repl.it](https://cloud-jo30cv8wy.vercel.app/0untitled.png)

Si ves una pantalla roja con texto blanco en el centro, ¡estás listo para continuar! Por ahora, nuestro juego no hace demasiado - si le damos clic a la pantalla o presionamos cualquier tecla, no pasa nada.  

## ¡Continuando!

Ahora echemos un vistazo a los archivos que tenemos. 

- En la raíz de nuestro repl, tenemos `package.json` y `yarn.lock` - estos 2 archivos contienen todos los paquetes que nuestro proyecto necesita para funcionar, incluyendo a React.
- Luego, la carpeta `public` incluye el archivo HTML en el que nuestro juego será renderizado, favicons (los pequeños íconos en la parte superior de cada pestaña de tu navegador) y otros archivos que no hurgaremos por ahora.
- Ahora inspeccionemos los archivos dentro de `src`. `serviceWorker.js` nos da acceso a un "service worker", que nos sirve para usar funcionalidades como notificaciones push y soporte offline, pero podemos dejar este archivo a un lado porque no usaremos ninguna de esas funcionalidades en este taller. Si quieres aprender más de service workers, da clic en este link del [sitio de Fundamentos Web de Google](https://developers.google.com/web/fundamentals/primers/service-workers).
- `App.css` e `index.css` son archivos CSS - ahí, podemos cambiar el estilo de nuestra página. La mayoría de nuestros estilos se encuentran en `App.css`.
- Luego tenemos `App.js`. Aquí es donde la magia sucede - es donde construiremos nuestro juego.
- Finalmente, tenemos `index.js`. Aquí es donde todas las piezas se unen para renderizar nuestro juego en el archivo HTML.  

Entremos a `App.js`. Al terminar, tenemos que ser capaces de contar cuántas veces ha sido clickeada la pantalla, ver cuántos puntos hemos acumulado y poder restablecer nuestros puntos si presionamos nuestro teclado. Para mantener cuenta de los clics, hagamos una variable `count` y agreguemos una función manejadora `onClick` al elemento `<div>` principal:

```jsx
function App() {
    // variable para contar clics
    var count = 0;
    return (
        <div onClick={() => {
            count++ // usa el operador de incremento para aumentar uno a nuestra variable count
            console.log(count) // imprime la cuenta actual a la consola del navegador
        }} className="App">
            <h4>¡Da clic en donde sea! Presiona cualquier tecla para resetear.</h4>
        </div>
    );
}
```

Probemos lo que hemos hecho hasta ahora. Abre tu aplicación en una nueva pestaña, da clic derecho en la pantalla, selecciona "Inspeccionar" y luego ve a la consola. Ahora, ¡deberías ver que la variable `count` se imprime cada que damos clic en la pantalla!

Estamos progresando, pero ahora necesitamos averiguar cómo hacer que nuestra variable se vea en nuestra página. Agreguemos un elemento `<h1>` para mostrar nuestra cuenta. Inserta esta línea encima de la etiqueta `<h4>`:

```jsx
<h1>Cuenta va aquí</h1>
```

Ya tenemos nuestra etiqueta `<h1>`, así que lo único que tenemos que hacer es colocar la variable `count` dentro de ella, así:

```jsx
<h1>{count}</h1>
```

Ahora todo debería de funcionar... ¿o no? Intenta y mira lo que pasa.

![Un video mostrando números siendo impresos en la consola del navegador cada que damos clic, sin que se actualice la página](https://cloud-rbqvdgtkm.vercel.app/0screen_recording_2020-11-20_at_10.04.52_pm.gif)

Como puedes ver, la variable está incrementando cada que damos clic (podemos saberlo porque vemos la cuenta actualizada siendo impresa en la consola). Pero, por alguna razón, nuestra página no se actualiza. ¿Por qué? Bueno, tenemos que decirle explícitamente a React que re-renderice un cierto componente cuando queramos actualizarlo - si no, se quedará igual que como estaba en el renderizado inicial. ¿Cómo hacemos eso? Ahí es donde el hook `useState()` de React entra al juego. 


`useState()` es una función que retorna 2 cosas: una variable y una función. La variable se comporta como una variable regular y podemos establecerle cualquier valor, pero para editarla, tenemos que usar la función. Cuando usas la función para editar la variable, también se re-renderiza el componente - por lo que la variable será actualizada en todos los lugares del componente donde es usada. Aquí hay un ejemplo rápido de cómo funciona `useState()`.

```jsx
const [variable, setVariable] = useState("valor inicial")
console.log(variable) // imprime "valor inicial"
setVariable("diferente valor")
console.log(variable) // imprime "diferente valor"
```

Es totalmente normal si eso no tuvo nada de sentido. Veamos otro ejemplo antes de usar este hook en nuestro código. Si así lo deseas, puedes correr este ejemplo en tu repl - solo asegúrate de deshacer los cambios cuando acabes.

<details>

<summary>Otro ejemplo del Hook de React</summary>

```jsx
// Además de importar React, también tenemos que importar useState. 
// Si no lo hacemos, ¡nuestro programa no será capaz de usar useState!
import React, { useState } from 'react';
import './App.css';

// Aquí estamos creando un componente. 
function App() {
    // Aquí definimos una variable de estado llamada bgColor y le establecemos el valor de green.
    // También establecemos la función setColor, que podemos usar para editar a la variable bgColor.
    const [bgColor, setColor] = useState("green")

    console.log(bgColor) // imprime "green" en la consola

    return (
        <div className="App">
            {/* Esto es un elemento <h1> que usa nuestra variable de estado, bgColor, para establecer su color de fondo. */}
            <h1 style={{ backgroundColor: bgColor }}>Texto cualquiera.</h1>

            {/* Usando la función setColor, podemos cambiar el valor de la variable bgColor a "blue", 
                que provocará un re-renderizado a este componente y actualizará a todos los elementos que la usen - incluyendo a nuestra etiqueta <h1>.
                Cuando le hagamos console.log, ahora imprimirá blue. 
                Si le volvemos a dar clic al botón, el componente se re-rendizará,
                pero la etiqueta <h1> tendrá el mismo color porque le volvimos a asignar el valor blue a bgColor.
             */}

            <button onClick={() => {
                setColor("blue")
                console.log(bgColor)
            }}>¡Cambia el color a azul!</button>
        </div>
    )

}

export default App;
```

</details>

¡Ahora probemos esto en nuestro código!

Al inicio de nuestro componente `App()`, antes del `return`, reemplaza esto...

```jsx
var count = 0;
```

con esto:

```jsx
const [count, setCount] = useState(0)
```

Esta nueva línea inicializa una variable llamada `count`, le establece un valor inicial de 0 y nos da una función llamada `setCount()` que podemos usar para editar `count` y para re-renderizar el componente. Ahora, editemos la función `onClick` en el  `<div>` para que use nuestra función `setCount()`:

```jsx
<div onClick={() => {
    setCount(count+1)
    console.log(count)
}} className="App">
```

¡Ahora veamos si todo funciona!

![Un video mostrando una página con un número siendo incrementado por cada clic](https://cloud-4q8ijirlb.vercel.app/0screen_recording_2020-11-24_at_5.40.24_pm.gif)

Eso es cool, pero ¿si queremos resetear? Claro, podríamos refrezcar la página, pero eso no es muy sofisticado. Usemos el teclado para resetear `count` a 0, añadiendo esta línea de código antes de nuestro `return`.

```jsx
document.addEventListener("keydown", () => {setCount(0)}, false);
```

Básicamente, esto usará nuestra función `setCount` para asignar `count` a 0 cada vez que el navegador detecte que una tecla ha sido presionada. ¡Cercioremos que todo funciona!

Si corres tu repl, ¡deberías de ver todo funcionando!

## Yyyyy... ¡Acabamos!

¡Hurra! ¡Todo funciona! Aquí hay algunas ideas que puedes usar para cambiar tu juego:

- Cambia el color de fondo cada que des clic o cuando llegues a cierto puntaje (pista: ¡mira el ejemplo de arriba!)
- Agrega sonidos cada que des clic (checa el [hook `use-sound` aquí](https://github.com/joshwcomeau/use-sound), y échale un vistazo a [este ejemplo](https://repl.it/@JasonAntwiAppah/finished-clicker-game-with-sound))
- Crea una [calculadora de clics por segundo (CPS)](https://cpstest.org/)
- Edita `App.css` para cambiar completamente el estilo y darle a tu juego una temática, como [este juego de cookie clicker](https://orteil.dashnet.org/cookieclicker/)
