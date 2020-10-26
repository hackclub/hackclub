---
name: 3D World
description: Make your own 3D World in under 20 minutes!
author: '@wollygfx'
---

# 3D World

Virtual worlds are places where you can chill and vibe, in this workshop i will teach you how to make your own virtual world from scratch. At the end of this workshop, you will know how to make objects, how to give them textures, how to animate them, how to add sound to your world and much more! Follow along with me to see how easy it is! 

## Prerequisites

For this workshop you will need a very basic level of HTML in order to understand what is going on, but don't worry if it's your first time with HTML — I will do my best to explain everything so you can understand.

## Set up

To start creating our virtual world, we will need just one thing, an [IDE](https://www.veracode.com/security/integrated-development-environment) (Integrated Development Environment). In this case, we will use [repl.it](repl.it), click [here](https://repl.it/languages/html) to create an IDE right for this workshop.

Once you have created your Html IDE, it should look like this:

![Replit IDE](https://cloud-qbmylslty.vercel.app/0image.png)

## A-Frame

For this workshop we will use [A-frame](https://aframe.io), a web framework for building virtual reality (VR) experiences. But A-Frame is not just a 3D scene graph or a markup language; the core is a powerful entity-component framework that provides a declarative, extensible, and composable structure to [three.js.](https://threejs.org)

Knowing what A-frame is, we can start creating our virtual world.

### Setting up A-Frame

To start creating our virtual world, we must install A-frame in our IDE, we do this in a very simple way using a [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/).

Add the following line of code inside of the <head> tag.
```javascript
<script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
```
Cool!- Now we can start creating our virtual world.

### Creating a scene

In order to start creating our virtual world, we must create an scene. Create an scene inside of the  <body> tag using the tag </a-scene>:

```html
<a-scene></a-scene>
```
The scene contains all the elements of our world, this includes the [primitives](https://aframe.io/docs/1.0.0/introduction/html-and-primitives.html#primitives), the camera and many more that we will get to know through this workshop, something that you should know is that all the A-frame components are tags that start with "a-" and finish with the name of the component.

### Coordinate system

A-frame uses a right-handed coordinate system, los elementos se mueven de diferentes maneras asi:

- X Coordinate: An element will move to the right if it has a positive value or to the left if it has a negative value.
- Y Coordinate: An element will move up if it has a positive value or it will move down if it has a negative value.
- Z Coordinate: An element will move out of the screen towards us if it has a positive value or it will move in the opposite direction if it has a negative value.

*Note: A-frame uses as distance unit the meter (m)* 

![Right Handed system](https://cloud-jp2e01qs3.vercel.app/0original.png)

### Creating our first object

To learn the basics of A-frame, we will need to create our first object, in this case we will make a cube to be able to see how the rotation, position, color and scale properties work.

Inside of the <a-scene> tag, add the following primitive:

```html
<a-box></a-box>
```
Probably, after clicking on "Run" we won't be able to see our cube, this is because white is set as default color for every object, since our scene is all white, the cube will render with everything!

To fix this, we will give our cube a color. There are 3 different ways to add colors, using [HEX codes](https://www.techopedia.com/definition/29788/color-hex-code) (#FF5733), [RGB Colors](https://en.wikipedia.org/wiki/RGB_color_model) (255,87,51) or color names (red, blue, black, etc).

Feel free to use any of the three ways, personally, i will use a HEX Code. Now we're gonna add to the primitive <a-box> the [attribute](https://www.w3schools.com/html/html_attributes.asp) "color" and we will give it the wanted color.

```html
<a-box color="#FF5733"></a-box>
```
Now you can press on the **run** button and see what happens. Okay, maybe you realized you can't see the cube, this is because of the position of the camera and the object, they both are by default in the same position.... We can fix this by moving the cube to just in front of us, add the attribute **position** to our primitive.

This is the syntax for this attribute:
```position="x y z"```

We have to replace z with -5 to move the cube to in front of us, the other values will stay at 0

```html
<a-box color="#FF5733" position="0 0 -5" ></a-box>
```

Now you can click on "Run" yand see what happens!
![Cube created](https://cloud-jpkgy1j4x.vercel.app/0image.png)

You can use the keys W,S,A,D to move around.

Para que el cubo no sea tan aburrido, rotaremos el cubo y lo moveremos un poco hacia arriba. Para rotarlo usa el atributo **rotation**, la syntax es muy similar a la del atributo **position**. 

```html
<a-box color="#FF5733" position="0 2 -5" rotation="15 35 2"></a-box>
```
Use the right handed system to rotate the object, the direction in which your fingers curl is the positive direction of rotation. The other way is the negative direction of rotation.
![Right handed system for Rotation](https://cloud-p06rsrrdj.vercel.app/0image.png)

Ahora, si queremos escalar un objeto debemos usar el atributo **scale**, este tambien tiene una syntax similar a la de los anteriores, 

- X Y Z Coordinates: El elemento se encogera si se le asigna un value inferior a 1 o se estirara si se le asigna un valor superior a 1 

Example:

```html
<a-box color="#FF5733" position="0 2 -5" rotation="15 35 2" scale="0.3 1 2"></a-box>
```
![Box shrunk and stretched](https://cloud-hrdeplvl1.vercel.app/0image.png)
- The element will shrink in X Coordinate
- The element will stay the same in Y Coordinate
- The element will stretch in Z Coordinate

Feel free to play around with this attribute for a better understanding.

## Asset Management System

A-Frame has an asset management system that allows us to place our assets in one place and to preload and cache assets for better performance. Note the asset management system is purely for preloading assets. Assets that are set on entities at runtime could be done via direct URLs to the assets.

Nosotros pondremos nuestros assets dentro del tag <a-assets>. Hay 4 tipos de assets que podremos usar para crear nuestro mundo virtual, estos los veremos a traves del taller.

- ```<a-asset-item>``` Miscellaneous assets such as 3D models and materials
- ```<a-audio>``` Audio files
- ```<img>``` Image textures
- ```<video>``` Video textures

**The scene won’t render or initialize until the browser fetches (or errors out) all the assets or the asset system reaches the timeout.**

### Image Textures

Ahora que hemos aprendido los atributos de los primitivos, podemos movernos a un tema mas interesante, las texturas. Usar colores para nuestros objetos podria ser algo aburrido, por eso es mejor darles un poco de personalidad usando texturas.

Para empezar, primero debemos crear nuestro asset management system, este debe ir dentro del tag <a-scene> 
```html
<body>
    <script src="script.js"></script>
    <a-scene>

      <a-assets>
          <img>
      </a-assets>

      <a-box 
      color="#FF5733"
      position="0 2 -5" 
      rotation="15 35 2"
      scale="0.3 1 2">
      </a-box>

    </a-scene>
  </body>
```
Luego de eso, debemos adjuntar una imagen a ese objeto; eso lo haremos creando un tag <img> dentro del asset management system y darle los atributos **id** y **src**

```html
      <a-assets>
          <img id="tiger" src="">
      </a-assets>
```
La id puede ser nombrada como quieras, solo recuerda que debe ser algo que recuerdes facilmente para que despues puedas texturizar otros objetos, yo le dare una id tiger. Despues tendremos que decirle a nuestro tag donde esta nuestra imagen, para eso deberemos subir una imagen a repl.it:

![Uploading to replit](https://cloud-fnagdq7dy.vercel.app/0screen_recording_2020-10-10_at_3.05.44_pm.gif)

Ahora, podemos colocar **tiger.jpg** dentro del atributo **src**
```html
      <a-assets>
          <img id="tiger" src="tiger.jpg">
      </a-assets>
```
Si clickeas en run no podras ver cambios aun, esto es por que lo que acabamos de hacer fue simplemente cargar la texture, mas no asignarla. Entonces vamos a asignarla a el cubo.

Reemplaza el atributo **color** por **src** y coloca la id de la textura que subiste, asi:

```html
<a-box src="#tiger" position="0 2 -5" rotation="15 35 2" scale="0.3 1 2"></a-box>
```
Ahora presiona Run y mira que pasa! 
![Tiger texture rendered](https://cloud-hipca4cbn.vercel.app/0screen_recording_2020-10-10_at_3.23.45_pm.gif)

### Environment

Ahora que sabemos como usar texturas, podemos aplicarlas para crear nuestro mundo virtual.
![Yay! gif](https://cloud-7n2jdmyvd.vercel.app/03176028b92c680e1b07a159db36cc3a8.gif)

Empezaremos creando el cielo, para esto usaremos el primitivo <a-sky>; el cual es basicamente una gran esfera con un color o una textura mapped to the inside.

Dentro de nuestra escena, creemos un primitivo <a-sky> y demosle un color cyan.
```html
<a-sky color="cyan"></a-sky>
```
![Sky](https://cloud-qsambqiyk.vercel.app/0image.png)

Okay, ahora tenemos un cielo! Pero hagamoslo un poco mejor agregando una textura, debemos hacer el mismo proceso que hicimos anteriormente con el cubo.

Yo usare esta imagen, pero tu puedes usar cualquiera.
![Sky image](https://cloud-ia3f6gmh3.vercel.app/1sky_photo6.jpg)

Al final obtendremos algo asi:
![Final result 1](https://cloud-ia3f6gmh3.vercel.app/0image.png)

Ahora, crearemos el suelo; para esto usaremos el primitivo <a-plane>, en el cual necesitaremos los siguientes atributos:

- Width: Sets the width of the plane
- Height: Sets the height of the plane
- Rotation: Rotates the plane

To make a plane parallel to the ground or make a plane the ground itself, rotate it around the X-axis:
```html
<a-plane color="green" height="100" width="100" rotation="-90 0 0"></a-plane>
```
Remember, you can always play with the texture... This is what i came up with:
![final result plane](https://cloud-1tlv4du42.vercel.app/0image.png)

Ahora, si quieres cambiar cosas como la luz de ambiente, puedes usar el primitivo <a-light>. Ambient lights globally affect all entities in the scene. The color and intensity properties define ambient lights. Additionally, position, rotation, and scale have no effect on ambient lights.

```html
<a-light 
    type="ambient" 
    color="#445451">
</a-light>
```
There's another type of light that you can add in your scene, those are called point lights, point lights are like light bulbs; we can position them around the scene, the closer the light bulb gets to an object, the greater the object is lit. This type of lights require the following attributes:

- Intensity
- Position
- Color
- Distance (optional)

Here's an example of a spot light:
```html
<a-light 
    type="point" 
    intensity="2" 
    position="2 4 4"
    distance="1"></a-light>
```
Notice how the spot light has some intensity that only goes to a certain distance in the ambient.
![Spot light](https://cloud-5uvjjeemk.vercel.app/0image.png)

If you want to know more about lights, click [here](https://aframe.io/docs/1.0.0/components/light.html)

Otra cosa que podemos agregar son sonidos, los sonidos son importantes por que son los que provocan una inmersion total en espacios virtuales. Agregar sonidos es muy similar a agregar texturas, lo unico que tendremos que hacer es adjuntar nuestro sonido a el asset management system y luego colocarlo en un primitivo, miremos el siguiente ejemplo:

Yo usare este sonido que me encanta: https://www.youtube.com/watch?v=T9qVyDbnF3I. Una vez lo haya descargado, lo puedo colocar en el asset management system usando el tag <audio>

```html
<audio id="background-music" src=""></audio>
```
Luego usando el primitivo <a-audio> puedes hacer





