La mayoría de los programas actuales utilizan reconocedores de voz o texto a voz, ya sea para un
propósito complejo como son las IA las cuales utilizan reconocedores de voz para ejecutar
funciones, o son utilizados simplemente para reconocer la voz, luego escribirla y por último
reproducirla dependiendo lo que quiera el usuario, un ejemplo de esto son los traductores.
En la actualidad la mayoría de las personas utiliza uno diario para facilitar la vida cotidiana.
En este workshop aprenderás a hacer un reconocimiento de voz y un texto a voz para que lo
utilices en lo que quieras.
Por lo tanto, no esperemos más y comencemos
HTML
<body>
 <div class="buttons">
 <button id="btnStartRecord">Start to record</button>
 <button id="btnStopRecord">Finish recording</button>
 <button id="playText">Play</button>
 </div>
 <textarea id="text" cols="30" rows="10"></textarea>
 <script src="script.js"></script>
</body>
• En el div crearemos una clase para los botones
• Creamos unos id para facilitar su uso en el JavaScript
• Creamos un textaria para las líneas de texto.
• Creamos un JavaScript y lo enlazamos con un src.
Felicitaciones terminaste el HTML
JavaScript:
Comenzaremos trayendo los botones para darle funcionalidad se haría de esta manera:
const btnStartRecord = document.getElementById('btnStartRecord');
const btnStopRecord = document.getElementById('btnStopRecord');
const btnPlayText = document.getElementById('playText');
const text = document.getElementById('text');
• Usaremos const para traer los botones.
• Utilizaremos document.getElementById para seleccionar un elemento del
elemento.
Ahora usaremos el objeto recognition para el reconocimiento de voz, esto hará que el micrófono
del equipo se encienda y grabe lo que estamos diciendo se haría de esta manera:
let recognition = new webkitSpeechRecognition();
• El webkitSpeechRecognition, es una clase que facilita la conversión de texto a
voz
• El recognition se utiliza para el reconocimiento de caracteres
Ahora usaremos unas de las variantes del recognition las cuales nos permitirá escoger
diferentes valores interesantes como idioma y entre otras.
recognition.lang ='en-US'
recognition.continuous = true;
recognition.interimResults = false;
• recognition.lang sirve para escoger el idioma.
• recognition.continuous, se utiliza para definir si el micrófono sigue grabando
continuamente.
• recognition.interimResults, es utilizado para botar resultados al tiempo que
lo recibe.
Ahora usaremos un evento del recognition el cual nos permitirá tener un resultado del
micrófono.
recognition.onresult = (event) => {
 const results = event.results;
 const sentence = results[results.length - 1] [0].transcript;
 text.value += sentence;
}
• recognition.onresult este es utilizado para dar los resultados del evento
• length es utilizado para una cadena que representa el número de objetos.
Ahora crearemos un evento del recognition el cual indica que el micrófono esta activo se
desarrolla de esta manera:
recognition.onend = (event) => {
 console.log('the microphone stops listening');
}
• console.log es utilizado para mandar un mensaje por la consola.
• recognition.onend es una variante del recognition
En caso de que se devuelva un error se crea el siguiente código:
recognition.onerror = (event) =>{
 console.log(event.error)
}
• recognition.onerror se utiliza para errores
• console.log (event.error) se utiliza para guardar el error que es devuelto
Ahora haremos que los botones sean funcionales se haría de esta manera:
btnStartRecord.addEventListener('click',() => {
 recognition.start();
});
btnStopRecord.addEventListener('click',() => {
 recognition.abort();
})
• btnStartRecord.addEventListener es utilizado para identificar el botón .
• 'click' es utilizado para que al momento de dar click en el botón se ejecute una
función.
• recognition.start() sirve para comenzar que el micrófono funcione.
• btnStopRecord.addEventListener es utilizado para identificar el botón .
• recognition.abort(); sirve para parar el micrófono.
Utilizaremos este código para lo escrito en un cuadro de texto sea narrado
btnPlayText.addEventListener('click',() => {
 readtext(text.value);
});
function readtext(text){
 const speech = new SpeechSynthesisUtterance();
 speech.text = text;
 speech.volume = 1;
 speech.rate = 1;
 speech.pitch = 1;
 window.speechSynthesis.speak(speech);
}
• function readtext(text) crearemos esta funcion para luego usarla
• readtext(text.value) sirve para que al oprimir el botón se lea el
texto
• SpeechSynthesisUtterance modifica sus propiedades para diferentes acciones.
• speech.text se utilizapara definir el texto
• speech.volume se utiliza para el nivel del volumen
• speech.rate se utiliza para el nivel del rate
• speech.pitch se utiliza para el nivel del pitch
• Window.speechSynthesis.speak(speech) se utiliza para que diga lo que está en
un cuadro de texto.
Listo terminaste el reconocimiento de voz y el texto a voz ¡FELICITACIONES!
Así se vería
Oprime aquí para ver todo el JavaScriptSi quieres cambiar el estilo puedes hacerlo atraves de un CSS. Espero que este tutorial te
hay sido útil ¡ADIOS!