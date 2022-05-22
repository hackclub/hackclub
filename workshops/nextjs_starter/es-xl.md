---
name: Comenzando con Next.js
description: Introducción a React & Next.js con un sitio de lista de compras 
author: '@lachlanjc, @davidballezaa'
---

# Bienvenido a React con Next.js

¡Hola! Este taller es una introducción a [React.js](https://reactjs.org) usando [Next.js](https://nextjs.org). Asumimos que ya tienes familiaridad con HTML y JavaScript, al igual que con conceptos de programación como funciones, objetos, arrays y clases, pero deberías ser capaz de avanzar aunque no sea así. Si estás teniendo problemas, ¡siéntete con la libertad de preguntar en el [Slack de Hack Club](https://hackclub.com/community)!

Una nota rápida: estamos usando algunas funcionalidades de ES6, una versión reciente de JavaScript. En este tutorial, usamos [funciones flecha](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) y [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), entre otras funcionalidades. Si estás más familiarizado con versiones antiguas de JavaScript, podría serte útil el [REPL de Babel](https://babeljs.io/repl/#?presets=react&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA) para ver en qué se convierte el código ES6 una vez compilado.

## Introducción a React

HTML, como ya bien sabrás, es la manera en la que declaramos qué contenido habrá en tu página web. Hoy estamos dejando atrás a las páginas web y nos adentramos a la construcción de aplicaciones interactivas. Las páginas web tradicionales tienen HTML regular y luego usan JavaScript para modificar manualmente el HTML cada que los datos cambian. Imagina recibir un mensaje en Facebook: cuando hay un nuevo mensaje, el sitio lo inserta automáticamente en la feed sin la necesidad de recargar la página.

React fue construido hace unos años por ingenieros de Facebook y es un framework que sirve para hacer más fácil la construcción de sitios web complejos. Vamos a empezar simples, usaremos React para hacer un sitio regular y luego iremos añadiendo funcionalidades más complejas. Aquí hay cinco términos que deberías saber antes de comenzar:

- **JSX.** Algunos ingenieros idearon la manera de escribir HTML dentro de JavaScript. Suena loco, pero usa casi la misma sintaxis que el HTML regular (en el fondo es sintaxis elegante para funciones de JavaScript que crean elementos HTML). El JSX más simple: `<p>¡Hola!</p>`. También puedes usar JavaScript dentro de JSX. Por ejemplo, si tienes `const name = 'Zach Latta'` en tu archivo JS, puedes escribir `<h1>Bienvenido, {name}</h1>` y en tu página se mostrará `Bienvenido, Zach Latta` en un encabezado.
- **Componentes.** Las aplicaciones de React están hechas por componentes, que son piezas de tu aplicación que encapsulan sus datos, estado (mira abajo), estilo, subcomponentes. Todo es un componente, desde una simple etiqueta (la etiqueta `p` de arriba es un componente) hasta secciones enteras de una página web. Por ejemplo, si crearas un componente llamado "Saludo"—`const Saludo = () => <h1>¡Bienvenido!</h1>`—luego podrías escribir `<Saludo />` en algún otro lugar de tu aplicación para cargar ese componente. Este es un componente simple, pero imagina si fuera una sección completa de tu sitio; ser capaz de renderizarlo múltiples veces en diferentes lugares sería extremadamente útil. Puedes componer componentes juntos para crear interfaces complejas.
- **Props.** Las props nos permiten pasar datos entre componentes. Son “entradas” que puedes usar dentro de los componentes. Vamos a actualizar el componente `Saludo` con props: `const Saludo = ({ name }) => <h1>¡Bienvenido, {name}!</h1>`. Aquí, estamos indicando que tenemos un componente llamado `Saludo` y que acepta una entrada llamada `name`. Se usan las llaves dentro del componente para “insertar” valores de JavaScript, en este caso el valor de la prop `name`. Las props se pasan como atributos HTML: `<Saludo name="Zach Latta" />`.
- **Estado.** Es la data de tu app. Esto podría ser el hecho de que el menú desplegable está abierto o no. Si necesitas información para decidir cómo renderizar tu sitio, usas estado. Estaremos usando estado más tarde.

### Componentes

Ahora hagamos un componente más complejo, con varias props. Imagina que estás construyendo un sitio de noticias o un blog, por lo que necesitarás mostrar una serie de artículos con estilo consistente.

```js
const Articulo = ({ title, author, preview }) => (
  <div>
    <h3>{title}</h3>
    <p>Por {author}</p>
  </div>
)
```

Ahora puedes usarlo así:

```js
<Articulo title="¡Hola Hack Club!" author="@lachlanjc" />
```

(En lugar de usar componentes uno a la vez como aquí, imagina descargar una lista de artículos y renderizar el componente Articulo por cada uno de ellos. Bueno, ¡así es como funcionan los sitios de noticias!)

Tip de JSX: cuando estás pasando un valor string (texto) como prop, puedes usar comillas como en HTML, pero si estás pasando JavaScript, usa llaves. Si nuestro artículo tuviera varios autores, pasaríamos un array:

```js
<Articulo title="¡Hola Hack Club!" author={['@lachlanjc', '@zachlatta']} />
```

[(¿Quieres leer más sobre JSX?)](https://reactjs.org/docs/introducing-jsx.html)

## Next.js

Hasta ahora, solo hemos estado hablando de React. [Next.js](https://nextjs.org) es un framework para hacer más fácil la construcción de sitios web basados en React. Se encarga de la configuración necesaria para el uso de múltiples páginas, empezar un servidor y de varias otras cuestiones complejas. [Un montón](https://nextjs.org/showcase/) de grandes compañías lo usan—incluso está presente en partes de GitHub.

Has estado leyendo por tiempo suficiente; abramos tu entorno de desarrollo. Empieza con una plantilla súper simple en [Glitch](https://glitch.com): ve a [https://glitch.com/~hackclub-next-starter](https://glitch.com/~hackclub-next-starter), da clic en “Remix” y puedes comenzar. Da clic en “Show” para ver el sitio en vivo (tomará un momento en correr por ser la primera vez).

En nuestro proyecto, hay dos archivos importantes:

- `pages/index.js`. Para crear una página en tu sitio con Next.js, en lugar de un archivo `index.html`, usaremos el folder `pages` y pondremos `index.js` dentro de él. Quieres una página /about? Agrega `about.js` dentro del folder.
- `package.json`. En un proyecto basado en JavaScript, configuramos este archivo para definir dependencias conocidas como “paquetes”—pedazos de código de otros programadores que necesitamos para que corra nuestro proyecto. Puedes ver que estamos requiriendo `next`, `react` y `react-dom` (el último es el “adaptador” para correr React en la web). Glitch se encarga de descargar automáticamente las dependencias y de correr la aplicación por nosotros.

En su nivel más básico, una página con Next.js (un archivo como `pages/index.js`) se ve así. Lo que se renderiza en la página lo colocamos dentro del “default export” del archivo.

```js
export default () => <h1>¡Bienvenido!</h1>
```

### Creando tu primera página con Next.js

Probemos el componente que estábamos usando arriba:

```js
const Articulo = ({ title, author, preview }) => (
  <div>
    <h3>{title}</h3>
    <p>Por {author}</p>
  </div>
)

export default () => (
  <main>
    <h1>Articulos</h1>
    <Articulo title="¡Hola Hack Club!" author="@zachlatta" />
    <Articulo title="Los talleres son cool" author="@lachlanjc" />
  </main>
)
```

Oye, ¡mira eso! Prueba añadiendo los tuyos. Tu sitio se debería actualizar inmediatamente.

### Poner un link hacia una nueva página

Creemos una segunda página y agreguemos un link a ella.

Primero, el link. Necesitamos una manera para crear el link y Next.js nos respalda. En la parte superior del archivo, agrega `import Link from 'next/link'`. ¡Acabas de importar tu primer componente de React y puedes empezar a usarlo!

```js
import Link from 'next/link'

const Articulo = ({ title, author, preview }) => (
  <div>
    <h3>{title}</h3>
    <p>Por {author}</p>
  </div>
)

export default () => (
  <main>
    <h1>Artículos</h1>
    <Articulo title="¡Hola Hack Club!" author="@zachlatta" />
    <Articulo title="Adiós Hack Club :(" author="@lachlanjc" />
    {/*¡Prueba añadiendo otro artículo!*/}
    <Link href="/shopping">
      <a>Vamos de compras</a>
    </Link>
  </main>
)
```

El componente `Link` sirve para que cuando hagamos clic vaya a esa página y la etiqueta `<a>` es el elemento HTML que aparecerá en nuestro sitio.

### Construyendo un sitio de lista de compras

Ahora, nuestro link aún no va a ninguna parte. Da clic en “New file” y pon `pages/shopping.js`. ¡Hagamos una lista de compras!

En tu mente, imagina cómo se verá el HTML: (`ul` crea una lista con viñetas, por si no lo habías usado antes)

```html
<h1>Lista de Compras</h1>
<ul>
  <li>Manzanas</li>
  <li>Naranjas</li>
  <li>Peras</li>
  <li>Fresas</li>
</ul>
```

Si solo tuviéramos esos artículos en nuestra página, pondríamos exactamente lo mismo en Next, envuelto en el `export default` que vimos antes.

Sin embargo, declarar elementos `<li>` una y otra vez se está volviendo cansado. Movamos la lista de artículos a un array de JavaScript (`['cosa', 'otra cosa']`, etc), luego hagamos “map” por cada uno de los elementos y pongámoslos en el HTML.

```js
const items = ['Manzanas', 'Naranjas', 'Peras', 'Fresas']

export default () => (
  <main>
    <h1>Lista de Compras</h1>
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </main>
)
```

Espera un momento. Acabas de hacer un gran cambio en la forma en que programas: pasaste de escribir directamente el código del sitio web, a _escribir el código para que el sitio web se genere por sí mismo_. Definiste los datos (en casi todas las apps “reales” obtendrías los datos de un servidor) y _cómo_ se deberían ver en tu sitio, pero tu sitio hizo todo el trabajo para el producto final.

Esto abre la puerta a sitios web drásticamente más poderosos e interesantes. Puedes obtener la temperatura actual desde un servicio de clima y hacer un componente para mostrarla. Puedes obtener titulares de noticias y mostrar una lista de artículos con imágenes. ¡Síííí!

### Añadiendo interactividad a la lista

Es momento de llevar esto al siguiente nivel, permitiremos a los usuarios agregar nuevos elementos a lista. Usaremos la función de estado de React para mantener nuestra data y manejar los “eventos” (usuario tecleando, usuario haciendo clic en el botón de Agregar).

Primero, hagamos un nuevo componente. Dado que este componente usa “estado” (valores que cambian, usualmente por la interacción del usuario), necesitaremos la funcionalidad `useState` de React (es uno de los “Hooks de React”). En `pages/shopping.js`, agrega esta línea en la parte superior:

```js
import React, { useState } from 'react'
```

Ahora necesitamos crear nuestro componente. Necesitaremos un input de texto, un botón para agregar el artículo y la lista de artículos. Observa que tenemos un `return` después del `export` pero antes del JSX para la página—lo necesitarás para el siguiente paso.

```js
const items = ['…']

export default () => {
  return (
    <main>
      <h1>Lista de Compras</h1>
      <div>
        <input placeholder="Nuevo artículo" />
        <button>Agregar artículo</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  )
}
```

Ahora, necesitamos definir algún estado en este componente. Elimina la línea `const items` y coloca:

```js
export default () => {
  const [items, setItems] = useState(['Manzanas', 'Fresas'])
  const [newItem, setNewItem] = useState('')
  return (
    <main>
      <h1>Lista de Compras</h1>
      <div>
        <input placeholder="Nuevo artículo" />
        <button>Agregar artículo</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  )
}
```

`newItem` es donde mantendremos el texto que el usuario coloque dentro del input. Ahora, todo lo que queda por hacer es el manejo de eventos:

```js
export default () => {
  const [items, setItems] = useState(['Manzanas', 'Fresas'])
  const [newItem, setNewItem] = useState('')
  const changeNewItem = (e) => setNewItem(e.target.value)
  const addItem = () => {
    setItems((list) => [...list, newItem])
    setNewItem('')
  }
  return (
    <main>
      <h1>Lista de Compras</h1>
      <div>
        <input
          placeholder="Nuevo artículo"
          onChange={changeNewItem}
          value={newItem}
        />
        <button onClick={addItem}>Agregar artículo</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  )
}
```

Esto se puso un poco más complicado, vamos a desglosarlo:

1. `items` es nuestro array de elementos en nuestra lista (que `items.map` muestra más abajo)
   - Lo que pasamos a `useState` es el valor que tiene nuestra variable antes que el usuario haga algo (estado inicial).
   - `setItems` es una función que React está generando por nosotros para cambiar el valor de `items`. La página completa es, en el fondo, una función (mira el `() => {}` en la primera línea), así que si hicieras `items = […]`, la siguiente vez que React corra la función para renderizar la página, los cambios de la variable desaparecerían. Para evitar esto, React mantiene nuestro estado fuera del contexto de las funciones.
2. `newItem` & `setNewItem` funcionan de manera similar, hacen seguimiento de lo que el usuario teclea en el input en otro pedazo de estado de React.
3. `changeNewItem` es una función que escribimos para que cuando el usuario teclee en el input, obtengamos el valor del input y lo establezcamos en el estado. (`e` es el evento puro de JavaScript, `target` es el elemento HTML en el que pasó el evento y `value` es el valor actual del elemento).
4. `addItem` es el código que corre cuando el usuario presiona el botón de “Agregar artículo”. Agrega el `newItem` a la lista de `items` y luego limpia el input. (Esto funciona porque nosotros establecemos el `value` del input, así que cuando cambiamos el estado, también lo hace el elemento).

Una cosa del estado de React es que no es “persistente”—la lista no será guardada si regresas otro día, pero hay varias maneras para almacenar datos que veremos después.

## Bonus: ¡estilos!

Cuando usas CSS, cada estilo que agregas se aplica a todo tu sitio. Esto es práctico cuando estás comenzando, pero si te imaginas trabajando en Facebook, si una persona hace un pequeño cambio en el estilo de los botones, todo el sitio se actualizaría. Con miles de personas trabajando juntas, no existe manera de darle seguimiento a todos los cambios.

Una de las características interesantes de Next.js es que puedes encapsular estilos dentro de un componente de React. Vuelve a `pages/index.js` y agrega una etiqueta `<style>` como se muestra aquí.

```js
export default () => (
  <main>
    <h1>Artículos</h1>
    {/* el resto de tu código... */}
    <style jsx>{`
      h1 {
        color: magenta;
      }
    `}</style>
  </main>
)
```

Abre tu app: la página principal tiene su encabezado de color magenta, ¡pero el encabezado en la página de lista de compras no! Mágico. Entonces, puedes estilizar los componentes por separado en la página de tu lista de compras.

```js
<main>
  <h1>Lista de Compras</h1>
  {/* el resto de tu código... */}
  <style jsx>{`
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      padding: 1em 0;
      border-top: 1px solid #eee;
    }
  `}</style>
</main>
```

Alócate—¡prueba cambiando la fuente, colores y todo lo demás!

## Conclusión

Durante este taller, pasaste de no saber qué era JSX a escribir una aplicación web interactiva de dos páginas con él. ¡Buen trabajo! Este solo es el punto de partida—puedes seguir agregando cosas a esta app, pero también puedes mirar el taller [Next.js Dashboard](/nextjs_dashboard) para seguir aprendiendo.
