---
name: 'Jugando con Muse'
description: 'Componer música con código'
author: '@leomcelroy'
img: "https://cloud-9ltsqwncl-hack-club-bot.vercel.app/0demo.png"
---

# Muse

**¡¿Crees que tus reuniones son demasiado silenciosas?, pues ya no 🔊!** Queríamos crear una herramienta que hiciera que la programación en un taller fuera vívida, interactiva y que requiriera muy poca explicación antes de empezar a hackear, así que creamos Muse.

Muse es un lenguaje de programación sencillo para hacer música. Está incrustado dentro de JavaScript. Puedes empezar con Muse como tu primera experiencia programando o puedes hacer complicadas composiciones con JavaScript si eres un mago de los algoritmos de audio.

Para tener una idea de lo pequeño que es Muse, el siguiente ejemplo utiliza prácticamente todas las construcciones del lenguaje.

```
[ a4+ ;- c5 ;- e5 ;- ] x 2
[ a4+ ;- c5 ;- e5 ;- ] ^ 5 x 2
[ a4+ ;- c5 ;- e5 ;- ] _ 3 x 2
```

Para una rápida introducción a Muse puedes ver [este vídeo](https://youtu.be/hAcQ2x1PTYM).

Para más documentación, consulta el [repositorio de Github](https://github.com/hackclub/muse).

[Inicie el editor aquí](https://muse.hackclub.dev/) o haciendo clic en la imagen de abajo.

[![Editor Muse](https://cloud-9ltsqwncl-hack-club-bot.vercel.app/0demo.png)](https://muse.hackclub.dev/)

Aquí hay algunas piezas un poco más complicadas que le darán una idea de lo que puede hacer en Muse. 

[Fill-up Glassy](https://hackclub.github.io/muse/?file=recYJJltQstKbefwZ) es un ejemplo que utiliza únicamente sonidos sintetizados.

[Samples in the Klerb](https://hackclub.github.io/muse/?file=recwU2R3A0KfL11Ka) es un ejemplo que sólo utiliza muestras (samples).


Por supuesto, puedes mezclar sonidos sintetizados y muestras (y añadir tus propias muestras).

## Consejos para componer tu primera canción

**Piensa en pequeño, y luego repite.** La mayoría de la música (y códigos) se componen de trozos repetitivos que se combinan para formar estructuras más elaboradas. Esta forma de componer funciona bastante bien en Muse, y le ahorrará escribir mucho código. Comience con una celda como [c4; e4; g4; e4;], y luego multiplíquela. La plantilla de Inicio (Starter) en Ejemplos (Examples) también tiene atajos de teclado para las notas, lo que te permite esquematizar ideas antes de escribirlas. 

**Sonidos en capas.** Una vez que tengas una idea musical que te guste, intenta escribir más funciones `createMuse` para complementarla. ¡Puedes escribir tantas como quieras! Intenta crear un ritmo con las muestras, cambia el sintetizador (por ejemplo, seno, diente de sierra, piano, etc.), o añade una línea de bajo escribiendo en una octava más baja.

**Controla tus ritmos.** La ejecución de varias funciones se convertirá rápidamente en un caos sin una sincronización cuidadosa. Utiliza el símbolo de pausa (;) para asegurarte de que todo entra y sale en el momento adecuado. Utilizar números pares de ritmos facilita este proceso, pero cualquier cosa funciona siempre que seas coherente: ¡intenta una canción basada en múltiplos de 13! 

**Progresa verticalmente.** La mayoría de las canciones se construyen en torno a una progresión de acordes repetida. Puedes construir acordes en Muse apilando notas individuales de esta manera: `[c4 e4 g4 b4;]`. Experimenta con combinaciones y duraciones de notas inesperadas para crear una armonía única. 

A menudo componemos encontrando primero los sonidos que nos gustan mientras tocamos las teclas. Luego copiamos las notas de la consola y añadimos pausas. Prueba a desplazar las notas para formar acordes (el desplazamiento por 5 tiene una bonita consonancia).

Para que los atajos de teclas funcionen tienes que ejecutar el programa. Cuando cargues la página por primera vez, las teclas no emitirán ningún sonido hasta que pulses "play/attach".

## Dirigiendo Muse en una reunión de club

Si estás dirigiendo Muse en tu club como un taller, recomendamos mostrar el vídeo de introducción y escuchar algunos ejemplos de lo que otras personas han hecho en Muse. Después, deja que la gente empiece a tocar por su cuenta. Si es posible, intenta poner la música en voz alta para que todos puedan escuchar las canciones de los demás.

## ¿Cómo funciona?

Muse utiliza algunas técnicas y tecnologías realmente interesantes. Al profundizar en el código base, podrá aprender sobre analizadores sintácticos (en concreto, sobre [combinadores de analizadores sintácticos](https://www.it-swarm-es.com/es/parsing/cuando-usar-un-combinador-de-analizador-cuando-usar-un-generador-de-analizador/l967040965/)), [gramáticas del lenguaje](https://www.uv.es/hmr/Tesis/HTML/Cap2.html), [compiladores](https://www.europeanvalley.es/noticias/que-es-un-compilador-en-programacion/), [literales de plantillas etiquetadas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals), la [API de audio web](https://developer.mozilla.org/es/docs/Web/API/Web_Audio_API), RegEx y mucho más. Por supuesto, no es necesario que se ocupe de nada de esto para utilizar Muse.

## Comparte tu canción hecha con Muse

Nos encantaría escuchar lo que has hecho en Muse. Para compartir tu canción con la comunidad del Hack Club únete al canal `#ship` en el Slack de Hack Club y envía el enlace generado pulsando el botón de compartir.

![Botón de compartir](https://cloud-9ltsqwncl-hack-club-bot.vercel.app/1share.png)

También puede introducir el enlace en el cuadro de texto para compartir que se muestra a continuación.
