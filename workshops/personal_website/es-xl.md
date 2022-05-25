---
name: 'Sitio Web Personal'
description: 'Crea tu primer sitio web desde cero'
author: '@MaxWofford, @J-cordz'
---

# Sitio Web Personal

Profeta Orfeo, [nuestra mascota](https://hackclub.com/workshops/orpheus), se encuentra aquí para guiarte a través de la creación de tu propio sitio web personal. 

Se verá algo similar a esto:

![dinosaurio leyendo un libro](https://cloud-4zpw37atj-hack-club-bot.vercel.app/2dino_site.png)

Aquí se encuentra el [demo en vivo][final_live_demo] y el [código final][final_code] (mirar `index.html` y `style.css`).

Este taller debería durar aproximadamente unos 45 minutos.

[final_live_demo]: https://website--prophetorpheus.repl.co
[final_code]: https://repl.it/@prophetorpheus/website

## Parte I: Configuración

### Preparándose para "repl it" en Repl.it

[Repl.it](https://repl.it) es un editor de código en línea. Es similar a Google Docs, pero tiene algunas características importantes que lo hacen mucho mejor para escribir código que un editor de texto normal.

Para empezar, ve a [https://repl.it/languages/html](https://repl.it/languages/html). ¡Tu entorno de codificación se activará en solo unos segundos!

![Texto dentro de un editor de código](https://cloud-4zpw37atj-hack-club-bot.vercel.app/5html_repl.png)

## Parte II: El archivo HTML

### 1) El archivo HTML

HTML son las siglas de Hypertext Markup Language (Lenguaje de Marcado de Hipertexto). Todos los sitios web, desde el New York Times hasta Twitch, utilizan HTML para mostrar contenido en la web.

Deberías tener abierto el archivo `index.html` y un montón de texto con símbolos `<` & `>` . ¡Eso es HTML!

![Texto dentro de un editor de código](https://cloud-4zpw37atj-hack-club-bot.vercel.app/5html_repl.png)

Repl.it nos da un poco de código para empezar, pero nosotros vamos a comenzar desde cero. Continúa y elimina todo en el archivo `index.html` y luego **escribe** adentro el siguiente código. **NO COPIES Y PEGUES.**

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body></body>
</html>
```

Esta estructura es común para todas las páginas HTML. De hecho, ¡puedes echar un vistazo por ti mismo! Simplemente da clic con el botón derecho en cualquier página web, incluida esta, y luego da clic en "Ver código fuente de la página" (a veces llamado "Inspeccionar" según tu navegador) para ver lo que sucede detrás de escena. Encontrarás cada uno de estos elementos en cada página: — La declaración de tipo de documento <!DOCTYPE> y una etiqueta HTML envuelta alrededor de un encabezado y un cuerpo.

<!-- Source https://developers.google.com/web/tools/chrome-devtools/inspect-styles/imgs/elements-panel.png -->

![Panel de Inspección de Elementos que contiene estilos html y css para un sitio web](https://cloud-4zpw37atj-hack-club-bot.vercel.app/3elements-panel.png)

Antes de proceder, repasaremos brevemente lo que significa nuestra plantilla.

HTML funciona almacenando información dentro de etiquetas. `<html></html>` es un ejemplo de una de esas etiquetas. Dentro de `<html></html>`, hemos colocado otros dos conjuntos de etiquetas: `<head></head>` (que envuelve alrededor de la "cabeza") y `<body></body>` (que envuelve alrededor de el "cuerpo"). El cuerpo contiene todo lo que verías en la pestaña/ventana actual cuando se abre la página, mientras que el encabezado transmite información sobre la página al navegador.

`<!DOCTYPE html>` le dice al navegador qué versión de HTML esperar. Dado que es un lenguaje, HTML está en constante crecimiento y actualización, por lo que existen múltiples versiones. En nuestro caso, usaremos HTML5, la versión más actual.

### 2) Previsualizando la Página

¡Veamos cómo se ve nuestro archivo HTML en una vista previa en vivo! Para hacer esto, da clic en el botón **Run**  encima del editor o presiona <kbd>Ctrl</kbd> + <kbd>Enter</kbd> (<kbd>Command</kbd> + <kbd>Enter</kbd> en Mac).

![Un botón verde y un botón gris uno al lado del otro.](https://cloud-1lgnmk5nw-hack-club-bot.vercel.app/5run.png)

A partir de ahí, la vista previa en vivo a la derecha del editor debería mostrar cómo se ve tu sitio web. Si deseas verlo en una nueva pestaña, la URL que se encuentra arriba de la vista previa del sitio web es la URL activa de tu sitio web.

![Imagen de la URL de un sitio web](https://cloud-1lgnmk5nw-hack-club-bot.vercel.app/6url.png)

También puedes abrir la vista previa externa en vivo haciendo clic en el ícono que parece un cuadrado con una flecha. Esto abrirá la vista previa en vivo en una nueva pestaña en la URL mencionada anteriormente.

![Lanzamiento del sitio web en una nueva página](https://cloud-1lgnmk5nw-hack-club-bot.vercel.app/3preview.gif)

Como puedes ver, la página está en blanco. Esto se debe a que no hemos agregado nada a la sección del cuerpo `body` todavía. ¡Agreguemos algo de contenido!

### 3) Agregar Texto al Cuerpo

Como se mencionó anteriormente, toda la información está envuelta en etiquetas. Las etiquetas están predefinidas en el lenguaje; piensa en ellas como las palabras en el idioma. Para el texto, HTML proporciona una serie de etiquetas para almacenar texto. Usaremos dos de las más básicas: la etiqueta h1 (`<h1>`) y la etiqueta de párrafo (`<p>`). La etiqueta h1 es la primera de una serie de etiquetas de encabezado, siendo `h1` la de ranking más alto y `h6` la de ranking más bajo. Al igual que con las otras etiquetas, puedes colocar información dentro de estas etiquetas rodeando su contenido con una etiqueta de apertura y cierre.

Continúa y agrega tu nombre en una etiqueta de título, y tu descripción en una etiqueta de párrafo, entre las etiquetas de apertura (`<body>`) y cierre (`</body>`) . Aquí está el nombre y la descripción del Profeta Orfeo:

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <h1>Prophet Orpheus</h1>
    <p>Coder Dino Will code for food</p>
  </body>
</html>
```

Si tu descripción constaba de unos pocos párrafos o tenía saltos de línea, es posible que hayas notado que `<p></p>` no cierra bien del todo. Agregar líneas o espacios en blanco adicionales entre palabras en HTML no cambia el espaciado del contenido. Podemos resolver esto colocando cada párrafo en su propio `<p></p>`.

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <h1>Prophet Orpheus</h1>
    <p>Coder Dino</p>
    <p>Will code for food</p>
  </body>
</html>
```

Ejecuta tu `index.html` y actualiza la vista previa en vivo. ¡Yay!

### 4) Agregar imágenes al cuerpo

Primero, busca una imagen que te gustaría incluir en tu página. Puedes encontrar algo en Google Images, Facebook o Imgur. Necesitaremos la URL de origen de la imagen, así que da clic derecho y selecciona "Copiar dirección de imagen".

Las imágenes se incluyen en HTML a través de la etiqueta de imagen, o `<img>`. La etiqueta de la imagen tiene un atributo llamado `src`, que contendrá la _fuente_ de la URL de la imagen que deseas mostrar. Por ejemplo, si tuviera que agregar esta imagen del Profeta Orfeo, daría clic derecho y obtendría la URL de origen, que en este caso es https://github.com/hackclub/dinosaurs/raw/master/smart_dinosaur_docs.png para ponerla en una etiqueta de imagen de esta forma:

```html
<img
  src="https://github.com/hackclub/dinosaurs/raw/master/smart_dinosaur_docs.png"
/>
```

Es posible que hayas notado que la etiqueta de imagen no tiene una etiqueta de cierre como `<h1></h1>` o `<body></body>`. Eso es porque es un [elemento vacío](https://www.w3.org/TR/html-markup/syntax.html#syntax-elements), lo que significa que no tiene ningún contenido.

Continúa y agrega esto en tu `index.html` . Yo puse mi imagen antes de mi encabezado y mi código se ve así:

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <img
      src="https://github.com/hackclub/dinosaurs/raw/master/smart_dinosaur_docs.png"
    />
    <h1>Prophet Orpheus</h1>
    <p>Coder Dino</p>
    <p>Will code for food</p>
  </body>
</html>
```

![dinosaurio leyendo un libro y un texto que lo describe en la parte inferior.](https://cloud-1lgnmk5nw-hack-club-bot.vercel.app/2no_css.png)

Recuerda, necesitas **Correr** tu programa cada vez que desees ver tu sitio web actualizado.

Aunque nuestro sitio web tiene algo de texto y existe en el _Internet_, todavía no hemos terminado. Nuestra página web es completamente funcional, pero necesita un poco de ayuda en el departamento de imagen-y-diseño. No temas. CSS te permitirá manipular el estilo de tu página en todas tus necesidades.

## Parte III: El archivo CSS

Entonces, ¿qué es CSS? CSS, también conocido como Cascading Style Sheets (Hojas de Estilo en Cascada), es un lenguaje utilizado para personalizar las etiquetas (o "elementos") en una página web.

Mientras HTML supervisa el contenido y la forma en que está estructurado, CSS es la forma en que especificarás cómo te gustaría que se vea tu contenido: — Con él puedes configurar cosas como los colores, el espaciado y más.


### 1) Usando CSS

Ya tenemos un `style.css` en el árbol de archivos y esto se denomina hoja de estilo externa porque el archivo CSS es externo al archivo HTML (i.e., la hoja de estilo no está dentro del archivo HTML).

![Tres archivos en una lista](https://cloud-4zpw37atj-hack-club-bot.vercel.app/9index_css.png)

Aunque tenemos un archivo CSS, hasta que le digamos explícitamente al archivo HTML que use el archivo CSS, no lo usará. Debemos vincular explícitamente el archivo CSS en el HTML. Haremos esto escribiendo lo siguiente en el encabezado de `index.html` (entre `<head>` y `</head>`), porque la cabeza es donde le contamos información sobre la página al navegador.

```html
<link rel="stylesheet" href="style.css" />
```

`<link />` es la etiqueta de enlace, que describe las relaciones entre el archivo actual (en este caso, `index.html`), y algún archivo externo (`style.css`). En nuestro ejemplo, `rel="stylesheet"` especifica cuál es esta relación, i.e., que `style.css` es una hoja de estilo, y `href` (hypertext reference / referencia de hipertexto) especifica dónde se puede encontrar el archivo (en este caso, es solo el nombre del archivo `style.css`). La etiqueta de enlace, similar a la etiqueta de imagen, es una etiqueta self-closing (de cierre automático), una vez más denotado por el `/` que precede al `>`.

Nuestro archivo HTML ahora se ve así:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <img
      src="https://github.com/hackclub/dinosaurs/raw/master/smart_dinosaur_docs.png"
    />
    <h1>Prophet Orpheus</h1>
    <p>Coder Dino</p>
    <p>Will code for food</p>
  </body>
</html>
```

### 2) Agregar Estilos a la Hoja de Estilo

Ahora que hemos vinculado nuestro archivo CSS a nuestro archivo HTML, escribamos algo de CSS para cambiar el tamaño de la imagen.

Abre `style.css` y escribe lo siguiente:

```css
img {
  width: 200px;
}
```

Una hoja de estilo CSS contiene "reglas", cada una de las cuales consta de un selector, y atributos y valores entre llaves, lo que se conoce como "bloque de declaración".

En nuestro caso, el selector es `img`. Esto simplemente selecciona todas las etiquetas de imagen (y por lo tanto, todas las imágenes). La regla luego dice que se establezca el `width` (ancho) de todas las cosas seleccionadas (en nuestro caso, todas las imágenes) a `200px`. `px` se refiere a los píxeles, que son una unidad de medida en la pantalla. Cuando se aplica esta regla, todas las imágenes de nuestra página tendrán un ancho de 200 píxeles.

A continuación, vamos a alinear al centro toda la sección del cuerpo.

Añadiremos

```css
body {
  text-align: center;
}
```

Al igual que con el cambio de tamaño de la imagen, esta regla especifica que cada etiqueta `body`  debe de tener un atributo de alineación de texto `text-align` de valor centro `center`. Esto centra todo en nuestra página porque todo el contenido de nuestro archivo HTML está escrito dentro de la etiqueta del cuerpo.

Ahora cambiemos la fuente de nuestro texto. Agregaremos otro atributo, familia tipográfica `font-family`, a la regla del cuerpo `body`  y establecer el valor en `"Arial"`. Ahora se verá así:

```css
body {
  text-align: center;
  font-family: 'Arial';
}
```

¡Puedes llevar esto aún más lejos agregando un poco de color a la página! El atributo de color `color` te permite establecer el color del texto y el atributo de color de fondo `background-color` te permite establecer un color de fondo. Puedes encontrar una lista de nombres de colores soportados en [W3Schools](https://www.w3schools.com/colors/colors_names.asp). Ten en cuenta que es una buena idea elegir una combinación de colores que mantendrá el texto legible.

```css
body {
  text-align: center;
  font-family: 'Arial';
  background: azure;
  color: purple;
}
```

Ahora asegúrate de **Correr** tu programa para obtener la versión más reciente de tu sitio web. Ah, es realmente hermoso de contemplar.

![Niños celebrando](https://cloud-4zpw37atj-hack-club-bot.vercel.app/0celebrate_harry_potter.gif)

## Parte IV: Publicación

Para poder guardar tu sitio web y ser capaz de volver a él en el futuro, deberás crear una cuenta en Repl.it.

Para crear una cuenta, da clic en el mensaje de registro (sign up) en la esquina superior derecha.

![Campos de entrada para iniciar sesión](https://cloud-1lgnmk5nw-hack-club-bot.vercel.app/4signup.png)

Una vez que hayas completado los campos (o te hayas registrado con otra cuenta), continúa y da clic en el enlace que te enviaron por correo electrónico.

![Correo electrónico de confirmación solicitando verificación por correo electrónico](https://cloud-4zpw37atj-hack-club-bot.vercel.app/8email.png)

Ahora que tienes tu cuenta configurada, todo lo que necesitas hacer para cambiar el nombre de tu repl es dar clic en el lápiz que se encuentra al lado.

![Botón editar para cambiar el nombre de un proyecto](https://cloud-4zpw37atj-hack-club-bot.vercel.app/7edit_name.png)

Una vez que estés contento con el nombre que le has dado, presiona <kbd>Enter</kbd> para confirmar tus cambios (o <kbd>Escape</kbd> para cancelar el cambio de nombre)

Y así nada más, ¡tu sitio web se encuentra ahora publicado en el dominio `NOMBREDEPROYECTO--NOMBREDEUSUARIO.repl.co` (son dos guiones antes de tu nombre de usuario) en Internet para que todos tus amigos lo vean!

![Dos personas cantando y moviéndose de lado a lado en un coche.](https://cloud-4zpw37atj-hack-club-bot.vercel.app/1celebrate_rush_hour.gif)

## Parte V: Hacking

En esta sección, ¡tu desafío es agregar funciones adicionales a tu sitio web para personalizarlo y volverlo único!

¿Quieres usar una fuente diferente? ¡Búscalo en Google!
¿Quieres agregar más imágenes? ¡Búscalo en Google!  
¿Quieres agregar más texto? ¿Toda la historia de tu vida? ¿Imagen de fondo? ¿Música de fondo? ¿Video? ¿Más páginas? ¡Búscalo en Google!


Una buena forma de obtener ideas sobre qué agregar a tu sitio web es mirar los sitios web de otras personas. Encuentra un sitio web que te guste, ya sea de la siguiente lista o de otro lugar en Internet, elige un aspecto de ese sitio web que te gustaría en tu propio sitio web, y busca en Google las formas de hacerlo realidad.

**Sitios web creados por otros hackers de Hack Club:**

- [Malte I. Lauterbach](https://patakh.com/)
- [Kognise](https://kognise.dev/)
- [Celeste](https://celeste.exposed/)
- [Leo McElroy](https://leomcelroy.com/)
- [Sarthak Mohanty](https://sarthakmohanty.me/)
- [Kat Huang](https://katmh.com)
- [Theo Bleier](https://tmb.sh/)
- [Megan Cui](https://megancui.com/)
- [Matthew Stanciu](https://matthewstanciu.me/)
- [Winston Iskandar](https://winstoniskandar.com)
- [Sophie Huang](https://sohuang.github.io/)
- [Jevin Sidhu](http://jevinsidhu.com/)
- [Sam Poder](http://sampoder.com/)
- [Faisal Sayed](https://fayd.me/)

**Sitios web creados por profesionales:**

- [Melody Starling](https://melody.dev/)
- [Eel Slap](http://eelslap.com)
- [Lynn Fisher](https://lynnandtonic.com)
- [Tatiana Mac](https://tatianamac.com)
- [Mina Markham](http://mina.codes/)
- [Robb Owen](https://robbowen.digital)
- [Alice Lee](http://byalicelee.com)
- [Yaron Schoen](http://yaronschoen.com)

### Recursos adicionales

Estos son algunos recursos adicionales que puedes utilizar para mejorar aún más tu sitio.

- [HTML Dog](http://www.htmldog.com/guides/html/beginner/): _Muy centrado en principiantes. Si no estás seguro de cuál elegir, elige este._
- [Free Code Camp](http://www.freecodecamp.com/map): _Interactivo y muy metódico._
- [Treehouse](https://teamtreehouse.com/library/html/introduction/): _Sus vídeos son extremadamente completos y exhaustivos._

## Parte VI: Compartiendo con la comunidad

Ahora que has terminado de crear un sitio web, debes compartir tu hermosa creación, y ya que tu sitio está en Internet, ¡puedes compartirlo con cualquier persona que también esté en línea! Recuerda, ¡es tan fácil como darles tu URL!

Probablemente conozcas las mejores formas de ponerte en contacto con tus amigos y familiares, pero si quieres compartir tu proyecto con la comunidad mundial de Hack Club, no hay mejor lugar para hacerlo que en Slack.

1. En una nueva pestaña, abre y sigue [estas indicaciones][slack] para registrarte en nuestro Slack.
2. Luego, publica el enlace en el canal [`#ship`](https://hackclub.slack.com/messages/ship)  ¡Para compartirlo con todos!

[slack]: https://slack.hackclub.com/
