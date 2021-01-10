---
name: 'Particle Physics'
description: 'Creating a basic particle physics simulation and rendering using p5.js'
author: '@SquarePear'
img: 'https://cloud-k50jkthdw.vercel.app/0particle-physics-summary.png'
---

# Particle Physics

The goal of this workshop is to explore some basic usage of [p5.js](https://p5js.org) while applying some of the things you may have learned in physics class in an interesting way.

All of the different particles will act like planets in orbit. They all apply forces (gravity) to eachother depending on their mass and their distance from eachother. The main difference here is that they are much closer together than real planets. This is so you don't have to wait an entire year for one particle to orbit another.

When you are done with this workshop, you should end up with something similar to this!

![Final product](https://cloud-oddjiiq5k.vercel.app/0summary.gif)

## Getting Set Up

First you need to setup your project. I created a basic p5.js [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code) that you can use to easily start coding.

1. Go to [https://repl.it/@SquarePear/p5-boilerplate](https://repl.it/@SquarePear/p5-boilerplate)
2. Click "fork" to make a copy for you to edit

## Making a Particle

The first step in this project is to create a class to manage the particles. Before you can do this, you should create a new file to store the class for easier readibility.

1. Create a new file called `particle.js`
2. Add this file to the body of `index.html`

```html
...
<body>
  <script src="particle.js"></script>
  <script src="sketch.js"></script>
</body>
...
```

3. Add the class definition to `particle.js`

```javascript
class Particle {}
```

A [class](<https://en.wikipedia.org/wiki/Class_(computer_programming)>) is just a way of connecting a set of variables and functions in one package. Now that you have a particle class, you need to define what the particle can do.

```javascript
class Particle {
  constructor (x, y, mass) {
    // Setup particle
  }

  draw () {
    // Draw particle
  }

  applyForce (force) {
    // Apply force to particle
  }

  physics (particle) {
    // Use particle
  }

  update () {
    // Update particle
  }
}
```

We just added a list of functions that objects of this class can perform. With the basic structure set up, lets go through each function individually and add the code.

```javascript
...
constructor(x, y, mass) {
  this.position = createVector(x, y)
  this.acceleration = createVector(0, 0)
  this.velocity = createVector(0, 0)
  this.mass = mass

  // radius = (mass / π) ** 0.5
  this.radius = Math.sqrt(this.mass / PI) * SCALE
  // set random color for particle
  this.color = color(random(0, 255), random(0, 255), random(0, 255))
}
...
```

The [constructor](<https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)>) is used to create an instance of a class. In this case, we use it to set up all of the variables when you make a new particle. The [`createVector()`](https://p5js.org/reference/#/p5/createVector) function is provided by p5 to easily make a [vector object](https://p5js.org/reference/#/p5.Vector). This is just a 2d line or position with a few helper functions to easily modify the values.

```javascript
...
draw() {
  // Remove outline
  noStroke()
  // Set fill to particles color
  fill(this.color)
  // Draw particle
  ellipse(this.position.x, this.position.y, this.radius * 2)
}
...
```

This one is much simpler. All this function does it set the color using the [`fill()`](https://p5js.org/reference/#/p5/fill) function and then draws the particle using the [`ellipse()`](https://p5js.org/reference/#/p5/ellipse)

```javascript
...
applyForce(force) {
  // acceleration = force / mass
  this.acceleration.add(p5.Vector.div(force, this.mass))
}
...
```

Here we see the first physics formula. This calculates how much acceleration the object should have based on the force applied. We use [Newton's second law of motion](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion#Constant_Mass) to calculate this acceleration.

```javascript
...
physics(particle) {
  // Don't apply to self
  if (this === particle) return

  // mass1 * mass2
  let mass = this.mass * particle.mass
  // radius1 + radius2
  let radius = this.radius + particle.radius
  // Distance between paticles
  let distance = this.position.dist(particle.position)

  // Don't apply if particles are touching
  if (distance <= radius) return

  // force = G * mass1 * mass2 / distance ** 2
  let force = p5.Vector.sub(this.position, particle.position)
    .setMag(G * mass  / (distance ** 2))

  // Apply the force
  particle.applyForce(force)
}
...
```

This one looks complicated, but if you think about it in terms of physics it is actually suprisingly simple.
The first line is just making sure it isn't trying to compare itself. Next we declare a few variables. The second if statement is just used to stop the forces when the paricles are colliding. This isn't 100% necessary, but things will probably break if they get too close. The `force` variable points from the affected particle to the affector. Next the magnitude is set to the amount of force using the [gravitational formula](https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation). Finally, the force is applied to the particle.

```javascript
...
update() {
  let deltaVelocity = p5.Vector.mult(this.acceleration, deltaTime)

  this.velocity.set(this.velocity.add(deltaVelocity))

  this.position.set(this.position.add(p5.Vector.mult(this.velocity, deltaTime)))

  this.acceleration.set(0, 0)
}
...
```

This might also look a bit intimidating at first, but if you break it down into sections it is much easier to understand.
The first line just calculates the change in acceleration. [`deltaTime`](https://p5js.org/reference/#/p5/deltaTime) is used to keep the forces constant no matter how many frames per second you are getting. The next line adds the acceleration to the velocity. Then the velocity is added to the position, again using `deltaTime` to keep constant changes. Finally you reset the acceleration to zero. The velocity stays because of momentum.

Yay! You set up the Particle class! Now you can go back to the main sketch and set up the particle management.

## Managing the Particles

Let's go back to `sketch.js`. Right now the code should look like this:

```javascript
function setup () {
  createCanvas(400, 400)
}

function draw () {
  background(51, 51, 51)
}
```

The [`setup()`]() function is run once at the begining of the program to do any setup you might need. We use it to create the canvas using [`createCanvas()`](). This creates a 400x400 pixel canvas for us to draw on.

The [`draw()`]() function is run every frame of the program. This can be used to update the animation every frame. We will use it to perform the the physics updates and draw the particles to the canvas.

First, we will create the array of particles we will be displaying. Then we need to update and display them every frame inside `draw()`.

```javascript
// Constants
const G = 6.67e-11
const SCALE = 0.001

// Array to store particles
let particles = []

function setup () {
  createCanvas(400, 400)

  // Loop and create each particles
  for (let i = 0; i < 10; i++) {
    let x = random(0, width)
    let y = random(0, height)
    let mass = random(2e8, 1e9)

    // Add the new particle to the list
    particles.push(new Particle(x, y, mass))
  }
}

function draw () {
  background(51, 51, 51)

  // Loop all particles twice
  for (const particleA of particles)
    for (const particleB of particles)
      if (particleA !== particleB) particleA.physics(particleB)

  // Loop particles again
  for (const particle of particles) {
    // Upadte the particle with the new acceleration and velocity
    particle.update()
    // Draw the particle on the canvas
    particle.draw()
  }
}
```

## You're Finished!

You should now have a working although very basic simulation of gravity between particles. This simulation is roughly what would happen in real life with these exact masses and distances. The values themselves are a bit over exagerated to be more visually interesting.

- [Code](https://repl.it/@SquarePear/Particle-Physics#sketch.js)
- [Project](https://Particle-Physics.squarepear.repl.co)

## What to Do Next?

Try changing some values and see how they affect the simulation. Add some extra features like creating a particle on click, anti-particles, or maybe apply this concept in a whole different way?

1. [Add on Click](https://repl.it/@SquarePear/Particle-Physics-Add-on-Click#sketch.js)
2. [Anti-Particles](https://repl.it/@SquarePear/Particle-Physics-Anti-Particle#sketch.js)
3. [Physical Text](https://repl.it/@SquarePear/Particle-Physics-Text#sketch.js)
