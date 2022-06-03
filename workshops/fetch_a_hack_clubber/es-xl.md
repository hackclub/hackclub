---
name: Obtén un Hack Clubber
description: Aprende a obtener datos con Next.js y ¡conoce a alguien nuevo!
author: '@sampoder, @davidballezaa'
img: 'https://cloud-a1hqcjanz.vercel.app/ezgif-7-3455d319b9c1.gif'
---

# Obten un Hack Clubber con Next.js

Hack Club es una comunidad global llena de personas maravillosas, pero ¿cómo puedes conocerlas? ~Como en todo, ¡la solución es programar!~ Vamos a construir un sitio que te presenta un Hack Clubber aleatorio cada vez que lo visites. Usaremos [Next.js](https://nextjs.org) y la [Hack Club Scrapbook API](https://scrapbook.hackclub.com/about/).

### Nuestra fuente de datos 

Para obtener los datos, necesitaremos una base de datos masiva de Hack Clubbers. La más accesible y actualizada de ellas es la [Hack Club Scrapbook API](https://scrapbook.hackclub.com/about/). Podemos consultar [`/api/users`](https://scrapbook.hackclub.com/api/users) para obtener a todos los usuarios de la plataforma. 

Cuando consultamos ese endpoint, obtenemos un array de objetos JSON con la información de los Hack Clubbers:

```
{
  "id": "recOdZms0k16sfKB8",
  "username": "sampoder",
  "avatar": "https://dl.airtable.com/.attachmentThumbnails/f6b8ebb05997ec8e5f17410ae338ba7e/8267718d",
  "webring": [
    "recwVYLZVDjBVbO0w",
    "recY0GDaua5hyJRyk",
    "recpnOXPx5gPZzfqc",
    "recMVSvrnWJjAfpVw",
    "recoVFgJY4md62oGZ",
    "recVrVJNGjlUj5E54",
    "recrnD6YZioRmwSQt",
    "recp3nz4WcaiGla4H"
  ],
  "css": "https://deadspryintelligence.sampoder.repl.co/style.css",
  "audio": "https://dl.airtable.com/.attachments/d6ddca0c63dff2e05ef91673697461d9/cceb30f2/everything_is_awesome____--_the_lego_movie_--_tegan_and_sara_feat._the_lonely_island.mp3",
  "streakCount": 101,
  "updatesCount":137,
  "displayStreak": true,
  "slack": "USNPNJXNX",
  "github": "https://github.com/sampoder",
  "website": "https://sampoder.com/"
}
```

De este objeto, podemos obtener su nombre de usuario en Scrapbook (que podemos usar para identificarlos), su ID de usuario en Slack, su GitHub y su sitio web. ¡También hay mucha más información con la que puedes experimentar más tarde!

### Empezando

Para ayudarte, hemos preparado una [plantilla de código](https://replit.com/@davidballezaa/fetchahackclubberstarterspanish). Ábrela con Repl.it (Google Docs para programar) y luego da clic en fork para poder empezar a codear.

Da clic en `Run ➤` y verás cómo se verá nuestra interfaz. Por ahora, sólo está introduciendo a [@sampoder](https://github.com/sampoder)

<img src="https://cloud-486h0t7p5.vercel.app/screenshot_2020-09-24_at_10.49.25_pm.png" width="450" alt="Proyecto inicial">

A continuación abre `pages/index.js`, aquí es donde estaremos escribiendo todo el código de nuestro proyecto.

Échale un vistazo al código, una explicación breve es:

* Estamos importando unas cuantas cosas hasta arriba. Tenemos `next/head` que nos permite agregar metadatos a nuestro head. Importamos nuestro CSS de `../styles/Home.module.css` para estilizar la aplicación web. Importamos `isomorphic-unfetch`, que es una utilidad que nos ayuda a obtener data de APIs web.

* Luego dentro de la función llamada `Home` (que es nuestro default export), retornamos todos los elementos de nuestro sitio.

  * Estos son muy similares a elementos HTML
  
  * Para estilizar elementos, le agregamos una clase con el pedazo de código `className={styles.card}`.
  
> Nota rápida: Nos gustaría dar crédito a todos lo que contribuyeron a `create-next-app` ya que la plantilla de inicio que estás usando se basó en su proyecto. Gracias por su esfuerzo.

### Obteniendo la data

Entremos de lleno a las cosas jugosas, ¡obtengamos toda la data!

Para hacer esto, usaremos la funcionalidad `getServerSideProps` de Next.js. Esto significa que cuando una persona visite nuestro sitio, el servidor hará una solicitud para obtener los datos (misma que colocaremos en la función `getServerSideProps`) y luego renderizará el sitio para serle entregado al usuario.

Agregemos una función `getServerSideProps()` en la parte de abajo de `pages/index.js`:

```javascript
export async function getServerSideProps() {
  return {
    props: { 'number': 1 },
  };
}
```

Esto no hace nada aún, ¡pero eso cambiará muy pronto! Por ahora, observa que estamos retornando un objeto JSON llamado `props` que podemos usar en nuestra página.

¡Ahora probemos obtener la data! Usando el siguiente snippet, obtendremos a todos los usuarios de Scrapbook, convertiremos el resultado a JSON y luego lo imprimiremos en la consola. Asegúrate de que estás editando la función existente y no creando una nueva.

```javascript
export async function getServerSideProps() {
  const users = await fetch(
    "https://scrapbook.hackclub.com/api/users/"
  ).then((r) => r.json());
  console.log(users)
  return {
    props: { 'number': 1 },
  };
}
```

Abre el sitio en una nueva pestaña (o recarga) y luego checa la consola en repl.it. Deberías de ver un gran array de objetos JSON con los usuarios (que está tristemente cortado). ¡Esos son nuestros Hack Clubbers!

Ahora que ya tenemos a toda nuestra gente, ¡necesitamos elegir uno! Podemos usar matemáticas en Javascript para lograrlo, pero no te asustes, nuestra computadora hará todos los cálculos necesarios mientras nosotros nos relajamos :D

Agreguemos un poco de código a nuestra función `getServerSideProps()`:

```javascript
export async function getServerSideProps() {
  let users = await fetch(
    "https://scrapbook.hackclub.com/api/users/"
  ).then((r) => r.json());
  let user = users[Math.floor(Math.random() * users.length)];
  console.log(user)
  return {
    props: { 'number': 1 },
  };
}
```

Recarga el sitio de nuevo, ¡ahora deberías ver a solo un usuario que cambia cada vez que recargas la página!

Por último, necesitamos darle a nuestra página acceso a estos datos, podemos lograrlo reemplazando `'number': 1` con `user`. También es innecesario imprimirlo en la consola, así que nuestra función `getServerSideProps()` debería verse así:

```javascript
export async function getServerSideProps(context) {
  let users = await fetch(
    "https://scrapbook.hackclub.com/api/users/"
  ).then((r) => r.json());
  let user = users[Math.floor(Math.random() * users.length)];
  return {
    props: { user }, // será pasado a nuestro componente via props
  };
}
```
Pasemos los datos a la página, podemos hacer esto editando:

```javascript
export default function Home() {
```

Para que sea:

```javascript
export default function Home(props) {
```

Ya tenemos los datos, ¡ahora necesitamos mostrarlos en el sitio!

### Mostrando nuestros datos

En Next.js podemos usar cualquier variable en nuestra página si la ponemos entre llaves (`{}`). Por ejemplo, si quisieramos usar el nombre de usuario de nuestra persona colocaríamos `{props.user.username}`. 

Empezemos cambiando `sampoder` a `{props.user.username}` en nuestra etiqueta `h1`. Prueba recargando la página, deberías de ver un nombre de usuario aleatorio por cada vez que la recargas. ¿Puedes hacer lo mismo cambiando la fuente de nuestra imagen para el avatar? La variable es `{props.user.avatar}`.

Ahora necesitamos cambiar los links para que usen nuestras variables. Esto es un poco más retador, necesitamos reemplazar `{"https://hackclub.slack.com/team/USNPNJXNX"}` con `{"https://hackclub.slack.com/team/" + props.user.slack}` para que el link de Slack funcione. Sabiendo que el nombre de usuario de Scrapbook es `props.user.scrapbook`, ¿puedes hacer lo mismo para el link de Scrapbook?

Hasta este momento, tu código dentro de `main` se debería ver así:

```javascript
<img src={props.user.avatar} className={styles.avatar} />
<h1 className={styles.title}>
  Conoce a <span className={styles.accent}>@{props.user.username}</span>
</h1>
<div className={styles.grid}>
  <a
    href={"https://hackclub.slack.com/team/" + props.user.slack}
    className={styles.card}
  >
    <h3>Mándale mensaje en Slack &rarr;</h3>
    <p>¡Está en el Slack de Hack Club igual que tú (espero)!</p>
  </a>

  <a
    href={"https://scrapbook.hackclub.com/" + props.user.username}
    className={styles.card}
  >
    <h3>Visita su Scrapbook &rarr;</h3>
    <p>¡El lugar en el que los Hack Clubbers comparten lo que están haciendo!</p>
  </a>
</div>
```

Probablemente hayas notado que no estamos mostrando todos los datos que tenemos :( Las otras dos piezas de data que queremos mostrar son el link de GitHub y el sitio web de la persona. El problema es que estos campos son opcionales y por lo tanto no todos los tienen. Para arregar esto, necesitamos envolver la tarjeta con `{props.user.github && ( YOUR_CONTENT_HERE )}` para solo mostrarlo si el cmapo de Github está disponible. Agreguemos el siguiente código después del último `</a>`:

```javascript
{props.user.github && (
  <a
    href={props.user.github}
    className={styles.card}
  >
    <h3>Visita su GitHub &rarr;</h3>
    <p>Estoy seguro que está lleno de proyectos y tiene mucho verde.</p>
  </a>
)}
```

¡Reto! ¿Puedes hacer lo mismo para el link de su sitio web? La variable es: `{props.user.website}`.

No vale mirar, la solución es:

```javascript
{props.user.website && (
  <a
    href={props.user.website}
    className={styles.card}
  >
    <h3>Visita su sitio web &rarr;</h3>
    <p>Su pequeño rincón en Internet, ¡quién sabe qué encontrarás!</p>
  </a>
)}
```

<img src="https://cloud-a1hqcjanz.vercel.app/ezgif-7-3455d319b9c1.gif" width="450" alt="¡Funciona!">

### Mejoremos nuestro sitio✨

¡Hurra! Acabas de hacer algo asombroso, ¡hágamoslo aún mejor!

Igual y te diste cuenta que algunas veces obtenemos un bot o un usuario inactivo, ¡queremos personas que podamos conocer! Todos amamos a Orfeo, pero no es una persona real y tampoco lo es `@wb_bot_a01a9mk4fqw`.

<img src="https://cloud-39fyb55qc.vercel.app/screenshot_2020-09-26_at_5.58.05_pm.png" width="450" alt="¡Funciona!">

Cambiemos esto filtrando a los usuarios.

¿Cómo podemos determinar si un usuario es activo? La manera más fácil es checar si han publicado en Scrapbook. Cada objeto de usuario tiene un campo llamado `updatesCount` que nos dice cuántas publicaciones han hecho. 

Para filtrar en Javascript podemos usar `.filter`: le damos un array, algunos criterios y nos retorna un nuevo array con los elementos que cumplieron con los criterios.

En nuestro caso necesitamos agregar este (↓) código justo abajo de la línea donde obtuvimos nuestros usuarios.

```javascript
users = users.filter(u => u.updatesCount != 0)
```

Recarga la página, ¡ya no deberíamos obtener gente inactiva ni bots!

¡Nuestro sitio está finalizado! Esperamos te sientas orgulloso porque ahora es momento de que tomes crédito de tu creación :D

Si scrolleas hacia abajo encontrás `@yourname`, ¡reemplázalo con tu nombre!

### ¡Tiempo de Hackear!

Un gran dato conlleva una gran oportunidad. Hay mucho que podemos hacer con estos datos, ¡así que experimenta con ellos!

Si no sabes qué hacer, aquí hay algunos ejemplos de siguientes pasos:

* Usando el CSS personalizado de Scrapbook, ¡[esta versión del proyecto](https://meet-hackclub.vercel.app) hace cada perfil más personal!
* ¿Quieres obtener un usuario específico? Sam Poder construyó una versión que te permite hacerlo si agregas un nombre de usuario a la URL, [prueba obteniendo a Sam aquí](https://meet-hackclub.vercel.app/sampoder). 
* ¿Qué otros datos podemos conseguir? Podemos obtener una publicación del Scrapbook de alguien, ¡tal como [Sam hizo aquí](https://meet-hackclub.vercel.app/post-ver)!

¿Estás haciendo algo cool? ¡Asombroso! ¡Compártelo en [#ship](https://hackclub.slack.com/archives/C0M8PUPU6/) en Slack y taggea a [@sampoder](https://hackclub.slack.com/archives/DT08DHJKF/)!
