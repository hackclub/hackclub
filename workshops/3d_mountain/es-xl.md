---
name: 'Montaña 3D'
description: 'Crea una montaña 3D con herramientas de visualización de datos de Python'
author: '@shivesh01'
img: 'https://cdn.hackclub.com/rescue?url=https://cloud-a08hob7s0.vercel.app/0workshop1.gif'
---

¡Las montañas son divertidas! Échale un vistazo a esta montaña en Google Maps:

![Monte San Bruno](https://cdn.hackclub.com/rescue?url=https://cloud-8at1ve02p.vercel.app/0ezgif.com-gif-maker.gif)    

La razón por la que te estoy mostrando esto, ¡es porque tú vas a crear tu propia montaña con Python!🐍🚀

![Impresionado g.i.f](https://media.giphy.com/media/5p2wQFyu8GsFO/giphy.gif)

[Demo final y código](https://repl.it/@ShiveshSingh/Mtbrunoplot)

## Empezando

Para este taller, estaremos usando [Repl.it](https://repl.it), un editor de código online, gratuito, para escribir nuestro código. Para comenzar, [clic aquí para visitar el proyecto base](https://repl.it/@ShiveshSingh/3DHeatmapWorkshop). Una vez que cargue, cliquea el botón "Fork repl" (Bifurcar Repl) para comenzar a programar.

Una vez que tu proyecto haya cargado, deberías notar un archivo en blanco llamado `main.py`, y un archivo llamado `mountain.csv`, el cual contiene algunos datos. Si ves estos dos archivos, ¡estás listo para continuar con el siguiente paso!

---

Para este taller vamos a utilizar 3 librerías de Python: `pandas`, `numpy`, `matplotlib`, y `mpl_toolkits`.

Comienza por importar estas librerías en la parte superior del archivo `main.py`:
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
```

- La librería `pandas` nos permite importar y trabajar conjuntos de datos. La vamos a usar para gestionar los datos almacenados en nuestro archivo `mountain.csv`.
- La librería `numpy` es una librería que permite realizar fácilmente cálculos científicos. La vamos a utilizar para gestionar arrays (o matrices) en este taller.
- La librería `matplotlib` es una librería para la visualización de datos empleando histogramas, gráficos de dispersión y gráficos de barra, etc. La utilizaremos para crear nuestra montaña 3D.
- La librería `mpl_toolkits` es una colección de funciones que complementan a la librería `matplotlib`. Esta nos permitirá graficar en un plano 3D, en vez de un plano 2D.

Una vez que hayas importado estas librerías, agrega una línea en blanco, luego escribe: 

```python
DataFrame = pd.read_csv('mountain.csv')
```

Aquí, estamos creando una variable llamada `DataFrame`, la cual usa la librería `pandas` para leer el archivo `mountain.csv`.

Debajo de esa línea, agrega:

```python
DataFrame = DataFrame.unstack()
```

La función `unstack()` desapila la fila a las columnas. Aquí hay un diagrama que muestra cómo funciona:

![Imagen desapilar](https://cdn.hackclub.com/rescue?url=https://cloud-rdh98lh2j-hack-club-bot.vercel.app/0grafica_taller.jpg)

Debajo de eso, escribe:

```python
DataFrame = DataFrame.reset_index()
```

Cuando concatenas, ordenas, unes o haces algunos reordenamientos a los datos `DataFrame`, el índice se baraja o se desordena. Para restablecer el índice de los datos `DataFrame`, utilizamos `reset_index()` para reordenar los índices.

![Restablecer índice](https://cdn.hackclub.com/rescue?url=https://cloud-9vtehx4ml-hack-club-bot.vercel.app/00reshaping_unstack_.jpg)

Debajo de eso, escribe:

```python
DataFrame.columns = ['X', 'Y', 'Z']
```

Tus datos `DataFrame` contiene 3 columnas sin etiquetas, entonces tenemos que asignarles etiquetas a esas columnas. `DataFrame.columns = ['X', 'Y', 'Z']` le asigna a la primera columna la etiqueta `X`, a la segunda columna la etiqueta `Y`, y a la tercera columna la etiqueta `Z`. En nuestra gráfica 3D, esto corresponderá a la latitud, longitud y altitud.

Hecho divertido: Tenemos exactamente 552 coordenadas.

Debajo de eso, escribe:

```python
DataFrame['X'] = pd.Categorical(DataFrame['X'])
```

`Categorical` es un tipo de datos de `pandas` el cual es usado para ahorrar espacio de memoria y acelerar el cálculo. Se puede convertir los datos utilizando la sintaxis `pd.Categorical()` con el parámetro `DataFrame['X']`.


Luego, escribe:

```python
DataFrame['X'] = DataFrame['X'].cat.codes
```

Usando `cat.codes`, obtenemos números enteros únicos para cada valor de `X` en una matriz o arreglo. En pocas palabras, esta línea de código toma los datos de `DataFrame['X']` y les asigna a cada uno un número entero, sin importar si los datos tienen algún valor o no.

Supongamos que tus datos contienen una columna llamada "Pájaros" con 100 filas, que solo tienen dos tipos de valores; loro y búho. Aunque únicamente tenemos dos tipos de valores en esta columna, tenemos 100 filas llenas de estos valores, por lo que el ordenador tratará cada valor como único, sin importar que esté repetido. Para ahorrar memoria, especificamos el conjunto de datos similares como una categoría, para que el computador no utilice mucha memoria cada vez que se encuentre con el dato repetido. En lugar de hacer eso, el computador solo asignará una referencia al dato. Si esto te suena a una algarabía, no te preocupes... Todo lo que necesitas saber es que estamos haciendo algunas cosas elegantes para ahorrar memoria en el ordenador. 

Debajo de esta línea, escribe:

```python
fig = plt.figure(figsize=(6, 8))
```

Aquí estamos utilizando `plt.figure()` para crear una ventana de figura y asignarla a una variable llamada `fig`.

Luego, escribe:

```python
ax = fig.gca(projection='3d')
```

`fig.gca()` con el argumento `projection=3d` devuelve las coordenadas tridimensionales asociadas con la ventana de figura. Esto es guardado en una variable llamada `ax`.

Luego, escribe:

```python
ax.plot_trisurf(DataFrame['X'], DataFrame['Y'], DataFrame['Z'], cmap=plt.cm.jet, linewidth=0.2)
```

Esto crea una gráfica tridimensional.

- `cmap` define el mapa de colores de la gráfica. Estamos usando el mapa de color `jet`. Aprende más acerca de los diferentes mapas de colores [aquí.](https://matplotlib.org/tutorials/colors/colormaps.html).
- `linewidth=0.2` hace las curvas más suaves.

![Lista de mapas de colores](https://cdn.hackclub.com/rescue?url=https://cloud-hppbp7hy7.vercel.app/0colormap.gif)

Luego, escribe:

```python
plt.title("Mount San Bruno")
plt.xlabel("x axis")
plt.ylabel("y axis")
```

- `plt.title` agrega un título a la gráfica. 
- `plot.xlabel` y `plot.ylabel` agrega etiquetas a las coordenadas X e Y de la gráfica.

¡Ahora vamos a visualizar la gráfica! 

```python
plt.show()
```

`plt.show` Abre una ventana interactiva que muestra tu gráfica. 
---

<details>

<summary>Clic aquí para mostrar el código final</summary>

```python
import pandas as pd

import numpy as np

import matplotlib.pyplot as plt

from mpl_toolkits.mplot3d import Axes3D

DataFrame = pd.read_csv('mountain.csv')

DataFrame = DataFrame.unstack()

DataFrame = DataFrame.reset_index()

DataFrame.columns = ['X', 'Y', 'Z']

DataFrame['X'] = pd.Categorical(DataFrame['X'])

DataFrame['X'] = DataFrame['X'].cat.codes

fig = plt.figure()

ax = fig.gca(projection='3d')

ax.plot_trisurf(DataFrame['X'], DataFrame['Y'], DataFrame['Z'], cmap=plt.cm.jet, linewidth=0.2)

plt.title("Mount San Bruno")
plt.xlabel("x axis")
plt.ylabel("y axis")


plt.show()
```

</details>

![Demo](https://cdn.hackclub.com/rescue?url=https://cloud-ko9v4kpdg.vercel.app/0ezgif.com-gif-maker__1_.gif)

¡Felicitaciones! ¡Has completado el taller! ¿Bastante sencillo, cierto?

## Hackear

![Felicitaciones g.i.f](https://cdn.hackclub.com/rescue?url=https://cloud-1th3ydnib.vercel.app/2workshop_happy.gif)

Ahora que has explorado cómo hacer una montaña 3D básica, las posibilidades son infinitas. Los verdaderos científicos de datos usan Python, junto con las herramientas que usaste en este taller, para hacer visualizaciones de datos complejas. Aquí hay algunos ejemplos que se me ocurrieron y que puedes probar, ¡pero trata de encontrar algunas cosas interesantes que puedas hacer además de estas!

- Ejemplo 1, usando datos de Kaggle para crear un volcán en 3D.
  - [Demo imagen](https://cdn.hackclub.com/rescue?url=https://cloud-94iqxy8lo.vercel.app/0volcano.gif)
  - [Código](https://repl.it/@ShiveshSingh/Volcano-3D-Heatmap)
- Ejemplo 2, utilizando un arreglo o matriz y una función coseno para hacer una gráfica de superficie.
  - [Demo imagen](https://cdn.hackclub.com/rescue?url=https://cloud-iwpkargvc.vercel.app/0screenshot_2021-01-10_at_15.24.00.png)
  - [Código](https://repl.it/@ShiveshSingh/Surface-Plot-3D#main.py)
- Ejemplo 3, utilizando bucles, una lista y una función seno para hacer una gráfica de isolínea.
  - [Demo imagen](https://cdn.hackclub.com/rescue?url=https://cloud-iwpkargvc.vercel.app/1screenshot_2021-01-10_at_15.25.30.png)
  - [Código](https://repl.it/@ShiveshSingh/3D-Contour-Plot#main.py)

¡Feliz hackeo!
