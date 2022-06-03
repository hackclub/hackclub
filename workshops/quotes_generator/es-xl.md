---
name: 'Generador de frases'
description: 'Construye un generador de frases aleatorias con ReactJS'
author: '@faisalsayed10, @davidballezaa'
img: 'https://cloud-kuvixvb93.vercel.app/0quotes-generator.png'
---

# Generador de frases 

En este taller, construiremos un generador de frases aleatorias usando una API en React. Al terminar, habrás aprendido cómo manejar APIs en React, al igual que conceptos interesantes como los Hooks de React.

[![Generador de frases](https://cloud-eoezh7wof-hack-club-bot.vercel.app/0ej0.png)](https://ut9jvq.csb.app/)

Aquí está el [código final](https://codesandbox.io/s/generador-de-frases-final-ut9jvq).

## Parte 1: Prerrequisitos 

Deberías tener conocimientos básicos de React y recomendamos que sigas [este](https://workshops.hackclub.com/nextjs_starter/es-xl) taller antes de continuar. Si estás teniendo dificultades, siéntete con la libertad de preguntarle a [fayd](https://app.slack.com/client/T0266FRGM/user_profile/U014ND5P1N2) o a cualquiera en el [Slack de Hack Club](https://hackclub.com/slack/)!

## Parte 2: Setup

Para escribir nuestro código, usaremos [CodeSandbox](https://codesandbox.io), que es uno de los mejores editores de código en línea para React.

Para comenzar, abre esta [plantilla de código](https://codesandbox.io/s/generador-de-frases-starter-code-n4sg6u). Presiona **`ctrl+s`** / **`cmd+s`** y hará un fork automáticamente. ¡Ya tenemos todo configurado, así que iniciemos!

## Parte 3: Construyendo el proyecto 

### 1) Inspeccionando la plantilla de inicio

Echemos un vistazo al código inicial de nuestro proyecto.

![Imagen de las carpetas en nuestro proyecto](https://cloud-9ne6wtuvp.vercel.app/0image.png)

Primero, hay 2 carpetas principales y un archivo `package.json`. Ignoremos el `package.json` por ahora y pongamos nuestro enfoque en las 2 carpetas: `public/` y `src/`.

Normalmente, la carpeta `public/` contiene un archivo HTML y todos tus assets. No tocaremos la carpeta `public/` en el taller, ¡ni siquiera el archivo HTML!

Luego viene la carpeta `src/` que incluye todos tus archivos JavaScript y tus archivos CSS. Tenemos un archivo `index.js`, que es el encargado de renderizar nuestro código de React. El archivo `style.css` ya está escrito para ti.

Ahora el archivo `App.js`. Cuando construimos proyectos grandes, no empezamos directamente en el archivo `App.js`. Creamos pequeños componentes y luego los agregamos juntos en el componente `App`. Pero hoy, estaremos construyendo un generador de frases, que es un proyecto pequeño y fácil. Por lo que, escribiremos nuestro código directamente en el componente `App` para evitar hacer componentes innecesarios.

Así es como se ve nuestro archivo `App.js`.

```jsx
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <p>Hola Mundo</p>
    </div>
  );
}
```

Este código renderiza `Hola Mundo` en tu navegador.

Ahora que conocemos nuestro código, ¡llegó el momento de empezar!

### 2) La Interfaz de Usuario (UI)

Primero construyamos la UI básica de cómo se debería ver nuestro sitio. Escribe el siguiente código en el `return()` del componente `App`.

```jsx
export default function App() {
  return (
    <div className="App">
      <h1 className="title">Generador de Frases</h1>
      <p className="quotes">Esto es una frase</p>
      <p className="author">- nombre de autor</p>
      <button className="button">Nueva Frase</button>
    </div>
  );
}
```

Construimos una UI para nuestro proyecto y todo se explica por sí mismo. El `button` no funciona aún y tampoco hemos hecho ninguna `API call`. Así que empecemos a añadir las funcionalidades principales.

Así se debe ver la vista previa:

![Pestaña de vista previa](https://cloud-1jlsaawts-hack-club-bot.vercel.app/0ej1.png)

### 3) API Call

Básicamente, haremos una solicitud a una API que retorna un JSON con frases y sus autores. Luego guardaremos estos datos en estado usando el hook `useState` para que podamos re-renderizar nuestro componente.

![Imagen de useState](https://cloud-90fxjk0al.vercel.app/0image.png)

La URL a la que haremos la solicitud es `https://type.fit/api/quotes`. Si abres este link en tu navegador, ¡verás un JSON lleno de frases!

![Lo que se ve en el navegador si haces la solicitud](https://cloud-h7wzq13xb.vercel.app/0image.png)

Empecemos a trabajar.

Dentro de `App.js`, crearemos una variable para guardar la URL y luego crearemos una variable de estado vacía para guardar los datos.

```jsx
import React, { useState } from "react"; //<-- Importar useState
import "./styles.css";

const url = "https://type.fit/api/quotes"; // La URL de nuestra API

export default function App() {
  const [quotes, setQuotes] = useState({}); // Inicializar variable de estado

  // Retornar todo el jsx que escribimos debajo de esta línea.
  return (...)
}
```

Explicación: Creamos una variable `url` usando `const` para que el valor nunca cambie y le asignamos la URL de nuestra API. Importamos `useState` de `react` y creamos la variable de estado `quotes`. Por ahora `quotes` tiene asignado un objeto vacío, ¡pero será reemplazado pronto!

Ahora escribamos una función que haga la solicitud API y obtenga los datos de esa URL. Usaremos `funciones asíncronas` porque la solicitud nos retornará una promesa. También usaremos `await` dentro de la función.

![Imagen de async await](https://cloud-b58j7jpbu.vercel.app/0image.png)

El operador `await` se usa para esperar a que la `Promesa` se resuelva o se rechace. Solo puede ser usado dentro de una `función asíncrona`.

Las `funciones asíncronas` pueden contener de cero a más expresiones `await`. Las expresiones `await` suspenden el progreso de nuestro programa, toman el control y luego retoman la ejecución solo cuando la operación asíncrona haya sido resuelta o rechazada. El valor resuelto de la promesa es tratado como el valor retornado de la expresión await. Podemos combinar `async` / `await` con los bloques `try` / `catch` que envuelven nuestro código asíncrono.

Aprende más de [`Async await`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await).

Dentro de nuestro componente `App`, crearemos la función asíncrona `getQuotes()` y empezaremos a obtener los datos.

```jsx
async function getQuotes() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    setQuotes(data);
  } catch (err) {
    console.log(err);
  }
}
```

Explicación: Dentro de nuestra función `async`, agregamos un bloque `try` / `catch`, que nos ayudará a obtener los datos o arrojar un error si no lo conseguimos. Creamos una variable llamada `res` (corto de `response`) que almacenará la respuesta que obtenemos de la solicitud a la URL. Esta respuesta no la podemos usar aún porque tenemos que convertirla a formato `json()` y estos datos formateados los guardamos en la variable `data`. Por último, le asignamos todos los datos a nuestra variable de estado `quotes` mediante `setQuotes`.

El bloque `catch` simplemente imprimirá el error (si es que hay) en la consola.

![ejemplo try catch](https://cloud-oxjmrq4w2.vercel.app/0image.png)

Nuestra función `async` está completada y ya podemos usar los datos que obtenemos de la solicitud a la API.

Si echamos un vistazo al valor guardado en nuestro estado, ¡notaremos que es un gran array que consiste de cientos de objetos que contienen frases! 

![Imagen del estado que contiene cientos de frases](https://cloud-7drh3ecj9.vercel.app/0image.png)

**Nota:** Puedes ver esto en las `React DevTools` de codeSandbox (a lado de la consola).

Solo necesitamos mostrar 1 frase aleatoria, por lo que, solo necesitamos almacenar un objeto aleatorio del array en nuestro estado.

Usando una fórmula para obtener un número aleatorio, crearemos una función dentro de nuestro componente que nos retorne un índice aleatorio de nuestro array.

```jsx
// ...

const randomNo = () => Math.floor(Math.random() * data.length) + 1;

export default function App() {
  // código que escribimos antes
}
```

Esta función retorna un número entre 1 y `data.length` (el tamaño del array `data`).

Seguramente el navegador te está gritando que `data` es undefined. Esto es porque la definimos después dentro del componente. Así que, una solución rápida a esto será crear una variable `data` usando `let` arriba de la función `randomNo()` y quitar el `const` de `data` dentro de nuestra función asíncrona.

Lo que hicimos fue definir `data` pero le asignamos valor dentro de la `función asíncrona`.

Ahora ya tenemos un número aleatorio cada vez que llamamos la función `randomNo()`. Si se la pasamos a nuestro array, nos retornará el valor de ese índice. Por lo que, dentro de la función asíncrona, cuando le asignamos valor al estado, agregaremos corchetes a `data` y llamaremos `randomNo()`.

```jsx
setQuotes(data[randomNo()]);
```

Esto nos retornará el objeto que se encuentra en el índice retornado por `randomNo()`.

Ahora solo un objeto aleatorio que contiene la frase y el autor será almacenado en nuestra variable de estado `quotes`.

![Solo una frase se guarda en estado](https://cloud-7drh3ecj9.vercel.app/1image.png)

<details><summary>Tu código hasta ahora se debería ver así:</summary>

```jsx
import React, { useState } from "react";
import "./styles.css";

const url = "https://type.fit/api/quotes";
let data;
const randomNo = () => Math.floor(Math.random() * data.length) + 1;

export default function App() {
  const [quotes, setQuotes] = useState({});

  async function getQuotes() {
    try {
      const res = await fetch(url);
      data = await res.json();
      setQuotes(data[randomNo()]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <h1 className="title">Generador de Frases</h1>
      <p className="quotes">Esto es una frase</p>
      <p className="author">- nombre de autor</p>
      <button className="button">Nueva Frase</button>
    </div>
  );
}
```

</details>

Queremos obtener una frase aleatoria cada que cargue nuestro sitio web, que será lo siguiente que implementaremos. Lo podemos hacer fácilmente usando el hook `useEffect` dentro de nuestro componente, llamando nuestra función `getQuotes()` dentro de él y pasándole un array vacío de dependencias.

![foto de useEffect](https://cloud-q749otmin.vercel.app/0image.png)

**Nota:** Asegúrate de importar `useEffect` de `react`.

```jsx
import React, { useState, useEffect } from "react";
```

```jsx
export default function App() {
  const [quotes, setQuotes] = useState({});

  useEffect(() => {
    getQuotes();
  }, []);
  // Resto del código
```

Aprende más sobre el hook [`useEffect`](https://medium.com/javascript-in-plain-english/react-hooks-how-to-use-useeffect-ecea3e90d84f).


Ahora podemos editar nuestro código jsx para mostrar la frase y el nombre del autor.

```jsx
return (
  <div className="App">
    <h1 className="title">Generador de Frases</h1>
    <p className="quotes">{quotes.text}</p>
    <p className="author">- {quotes.author ? quotes.author : "Anónimo"}</p>
    <button className="button">Nueva Frase</button>
  </div>
);
```

Explicación: La frase (que está en el objeto como `text`) ahora está renderizada en la página. Observa cómo se usa un [`operador ternario`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) para renderizar el nombre del autor. Lo hacemos así porque hay algunas frases que no tienen autor y entonces checamos si existe un autor dentro de nuestro objeto. Si sí hay, renderizamos el nombre del autor, pero si no, renderizamos `Anónimo` en el navegador.

Ahora si observas la vista previa, ¡verás que ya casi acabamos! La última cosa que nos falta es agregar un `onClick` a nuestro botón.

```jsx
<button className="button" onClick={getQuotes}>Nueva Frase</button>
```

Cada que le demos clic al botón, la función `getQuotes()` será llamada y retornará una nueva frase aleatoria, que cambiará nuestro estado y causará que nuestro componente se re-renderice.

¡Wow! ¡Acabas de escribir un código alucinante!

![Mind blowing!](https://media.giphy.com/media/OK27wINdQS5YQ/giphy.gif)

<details><summary>El Código Final:</summary>

```jsx
import React, { useEffect, useState } from "react";
import "./styles.css";

const url = "https://type.fit/api/quotes";
let data;
const randomNo = () => Math.floor(Math.random() * data.length) + 1;

export default function App() {
  const [quotes, setQuotes] = useState({});

  useEffect(() => {
    getQuotes();
  }, []);

  async function getQuotes() {
    try {
      const res = await fetch(url);
      data = await res.json();
      setQuotes(data[randomNo()]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <h1 className="title">Generador de Frases</h1>
      <p className="quotes">{quotes.text}</p>
      <p className="author">- {quotes.author ? quotes.author : "Anónimo"}</p>
      <button className="button" onClick={getQuotes}>
        Nueva Frase 
      </button>
    </div>
  );
}
```

</details>

Así es como se ve nuestro proyecto:
![Producto final](https://cloud-i1q4mn5yo.vercel.app/0final_preview.gif)

¡Acabamos! Aprendimos cómo manejar APIs en React y construimos un simple pero increíble generador de frases aleatorias.

![Celebración](https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif)

## Parte 4: El Final 

Asegúrate de crear una cuenta en codesandbox.io para guardar esta hermosa creación o la perderás 😧.

Aquí hay unas tareas para ti:

1. Intenta mostrar una lista de frases en tu sitio.  
[Ejemplo](https://codesandbox.io/s/quotesgenerator-example-1-6thve)

2. Prueba agregar la funcionalidad de regresar en tu app de frases  
[Ejemplo](https://codesandbox.io/s/peaceful-fog-80vmr)

Ahora que sabes cómo manejar APIs en React, ¡aquí hay unas APIs para que juegues con ellas!

1. [Weather API](https://openweathermap.org/api)  
[Ejemplo](https://weatherer.fayd.me/) y [Código](https://github.com/faisalsayed10/weatherer).

2. [Movies API](https://www.themoviedb.org/documentation/api)  
[Ejemplo](https://binger.fayd.me/) y [Código](https://github.com/faisalsayed10/Movie-Search-App).

3. [Hack Club API](https://scrapbook.hackclub.com/api/users/)  

4. [Fortnite API](https://fortnite-api.com/)

¡Échale un vistazo a lo que otros Hack Clubbers han construido!

1. [Khushraj Rathod](https://codesandbox.io/s/quotesgeneratorstartercode-forked-z0wzm)

2. [Aaryan Porwal](https://codesandbox.io/s/quotesgenerator-sdqkm)

Ahora que ya acabaste de construirlo, ¡deberías compartir tu hermosa creación con otra gente!

Probablemente sepas cuáles son las mejores maneras de comunicarte con tus amigos y familia, pero si quieres compartir tu proyecto con la comunidad global de Hack Club, no hay mejor lugar para hacerlo que en Slack.
1. En una nueva pestaña, abre y sigue estas instrucciones [these directions][slack] para crear una cuenta en nuestro Slack.
2. Luego, publica el link en el canal de [`#ship`](https://hackclub.slack.com/messages/ship) para compartirlo con todos y ¡etiqueta a @fayd!

[slack]: https://slack.hackclub.com/
