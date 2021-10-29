---
name: 'Muse: a language for jamming'
description: 'compose some music with code'
author: 'Leo McElroy'
---

# Muse

Muse is a simple language for making music. It is a simple language embedded inside of JavaScript. You can get started with Muse as your first experience programming or you can make complicated JavaScript laced compositions if you're an audio algorithm wizard.

For a quick introduction to Muse you can watch [this video](https://youtu.be/hAcQ2x1PTYM).

For more [documentation refer to the GitHub repository](https://github.com/hackclub/muse) for Muse.

Launch the editor by clicking the image below:

[![muse editor](./img/demo.png)](https://muse.hackclub.dev/)

You can create music with synthesized sounds. Listen to the example shown below [here](https://hackclub.github.io/muse/?file=recYJJltQstKbefwZ).

```javascript
createMuse({ bpm: 110, type: "square" }).play`

[
  [a3 c4 e4 a4]++++ ;;;;
  [f3 a3 f4 a4]++++ ;;;;
  [d3 a3 c4 a4]++++ ;;;; 
  [c4 e4 g4 c5]++++ ;;;; 
  [b3 d4 g4 b4]++++ ;;;;
] x 4

`
createMuse({ bpm: 110, type: "sawtooth" }).play`

[;;;;] x 5


;
[
  [a1 a1;- a1 a1;- a1 a1;- a1 a1;- ;;] x 2
  
  [d1 d1;- d1 d1;- d1 d1;- d1 d1;- ;;] 
  
  [d1 d1;- d1 d1;- d1 d1;- d1 d1;- ;;] ^2
  
  [d1 d1;- d1 d1;- d1 d1;- d1 d1;- ;;] ^2
] x 3


` 
createMuse({ bpm: 220, type: "triangle" }).play`


[;;;;] x 20  

[
  [a5+; c6+; e6+; a6+; a5+; c6+; e6+; a6+;]
  [a5+; c6+; f6+; a6+; a5+; c6+; f6+; a6+;]
  [a5+; c6+; f6+; a6+; a5+; c6+; f6+; b6+;]
  [c7+; a6+; e6+; c5+; c6+; e6+; a6+; c7+;]
  [b6+; g6+; d6+; b5+; b5+; d6+; c6+; b5+;]
  
] x 2 

`
```

Or you can make songs using samples. [Listen to the song below here](https://hackclub.github.io/muse/?file=recwU2R3A0KfL11Ka).

```javascript
createMuse({ bpm: 110, type: "square" }).play`

[
  [a3 c4 e4 a4]++++ ;;;;
  [f3 a3 f4 a4]++++ ;;;;
  [d3 a3 c4 a4]++++ ;;;; 
  [c4 e4 g4 c5]++++ ;;;; 
  [b3 d4 g4 b4]++++ ;;;;
] x 4

`
createMuse({ bpm: 110, type: "sawtooth" }).play`

[;;;;] x 5


;
[
  [a1 a1;- a1 a1;- a1 a1;- a1 a1;- ;;] x 2
  
  [d1 d1;- d1 d1;- d1 d1;- d1 d1;- ;;] 
  
  [d1 d1;- d1 d1;- d1 d1;- d1 d1;- ;;] ^2
  
  [d1 d1;- d1 d1;- d1 d1;- d1 d1;- ;;] ^2
] x 3


` 
createMuse({ bpm: 220, type: "triangle" }).play`


[;;;;] x 20  

[
  [a5+; c6+; e6+; a6+; a5+; c6+; e6+; a6+;]
  [a5+; c6+; f6+; a6+; a5+; c6+; f6+; a6+;]
  [a5+; c6+; f6+; a6+; a5+; c6+; f6+; b6+;]
  [c7+; a6+; e6+; c5+; c6+; e6+; a6+; c7+;]
  [b6+; g6+; d6+; b5+; b5+; d6+; c6+; b5+;]
  
] x 2 

`

```

Of course you can mix samples and synthesized sounds (and add your own samples)!

## Tips on composing your first song







