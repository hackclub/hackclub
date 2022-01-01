---
name: 'Visualizar Dados com Python'
description: 'Use Python para criar gráficos e visualizar dados reais'
author: '@maddieWillett-boop, @vitorvavolizza'
img: 'https://cloud-buf4qdryr.vercel.app/0image_from_ios.jpg'
locales: 'pt-br'
---

![Stonks](https://cloud-byn8r1k9a.vercel.app/0image_from_ios.jpg)

Você, depois de fazer sua primeira ferramenta de visualização de dados ^

Neste workshop, você usará Python para criar gráficos básicos e visualizações com dados reais. Primeiro, começamos com visualizações gráficas mais simples e aprendemos como torná-las mais personalizadas e complicadas! Você pode desenhar um gráfico à mão sempre que quiser, mas por que não aprender a programar um! Você aprenderá e usará as bibliotecas matplotlib, pandas e numpy, para que possa criar qualquer gráfico ou visualização com que sonhar!

Esse é um exemplo de algo que você terá programado após o workshop:

**![Exemplo do Workshop](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/data-vis-python/img/exemplo5.PNG)**

Exemplo do código final: 
``` python
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

x=np.linspace(0,2,100)
fig,ax= plt.subplots()
ax.plot(x,x,label='Dormir')
ax.plot(x,x**2,label='Se preocupar que o céu esteja caindo...')
ax.plot(x,x**3,label='Ser uma estrela')
ax.set_xlabel('Tempo') #adiciona descrição do eixo X
ax.set_ylabel('Ano') #adiciona descrição do eixo Y
ax.set_title("Enredo do Chicken Little") #adiciona um título
ax.legend() #adiciona legenda ao gráfico
```

# Começando!

Comece acessando o site do [Jupyter](https://jupyter.org/try). Quando você acessar o site, verá algo assim...

**![Mostrando a página inicial do Jupyter](https://cloud-55ad5w43q.vercel.app/0image_from_ios.jpg)**

Clique no botão do meio (Try JupyterLab)!

O Jupyter criará um ambiente de programação direto no seu navegador! Após alguns segundos, você verá o seguinte:

![Um bloco de notas Jupyter](https://cloud-4jz1jljdx.vercel.app/0image_from_ios.jpg)

Clique no botão `+` no canto superior esquerdo e selecione Notebook -> Python 3.

![Captura de tela de um bloco de anotações Jupyter mostrando quais etapas executar](https://cloud-hywsca56c.vercel.app/0image_from_ios.jpg)

Você deverá ver um novo bloco de notas Jupyter sem título.

![Um bloco de notas Juypter sem título](https://cloud-gxd1qmxly.vercel.app/0image_from_ios.jpg)

**Nunca usou o Jupyter? [Essa aqui é uma introdução ao Jupyter](https://www.wevideo.com/view/1849208046)!**

# Fazendo upload de bibliotecas!

Primeiro, precisamos fazer upload das [bibliotecas](https://docs.python.org/3/library/) que usaremos para este projeto. Cada linguagem de programação tem diferentes “classes” que você precisa usar para acessar variáveis ​​específicas. A mesma coisa ocorre no Python, mas, em vez disso, elas são conhecidas como bibliotecas.

![Princesa Belle em sua biblioteca maravilhosa](https://cloud-pawks5rnb.vercel.app/0file_from_ios.gif)

Neste workshop usaremos as bibliotecas [pandas](https://pandas.pydata.org/), [numpy](https://numpy.org/) e [matplotlib](https://matplotlib.org/)

**Pandas**: Não é o animal peludo em que você está pensando; o pandas é uma maneira fácil e eficiente de usar análise de dados open source.
![gif de pandas fofos](https://cloud-o3apzt5vk.vercel.app/0file_from_ios.gif)

**Matplotlib**: É uma biblioteca de inserção que usa uma extensão matemática numérica Numpy.

**Numpy**: É uma biblioteca Python que é muito boa com arrays e funções matemáticas difíceis.

# Inserção de linha simples!

**Nota: Personalize suas inserções e gráficos! (Descrições, valores, etc.)**

Na primeira linha do seu novo bloco de notas Jupyter sem título, adicione o seguinte código:

```python
import pandas as pd 
import matplotlib.pyplot as plt 
```

O código acima importa o Pandas e a Matplotlib para este projeto para que possamos ter acesso a certas variáveis ​​e métodos disponíveis nessas bibliotecas!

Debaixo dessas duas linhas, adicione:

```python
x=[x*2 for x in range (100)]
y=[y*2 for y in range (100)]

plt.plot(x,y)
```

Este trecho de código criará os intervalos em nossos eixos x e y e `plt.plot` representará os pontos que queremos! Neste exemplo, não há pontos específicos sendo inseridos, estamos apenas fazendo uma função linear básica.

Depois, adicione:

```python
#mostra gráfico
plt.show() 
```

Esta linha mostrará o gráfico e os pontos que traçamos, basicamente dando ao usuário uma saída.

* *`plt.show()` -> mostra a saída do gráfico.*
* *`plt.plot(x, y)` -> insere os pontos.*

Clique no botão Run próximo ao topo de sua janela.

**Você deve ver algo parecido com isto...**

**![gráfico linear básico com tendência ascendente](https://cloud-49wgws6lb.vercel.app/0image_from_ios.jpg)**

![Notebook Jupyter com código e exemplo](https://cloud-pm56h5avl.vercel.app/0image_from_ios.jpg)

Em uma nova seção do seu bloco de notas, adicione:

```python 
import pandas as pd
import matplotlib.pyplot as plt
import random
```

Este código acima importa as bibliotecas novamente. Observe que importamos outra biblioteca chamada `random`. Isso permitirá que um número aleatório seja escolhido cada vez que tivermos um valor `y`. Você poderá ver isso mais tarde em nosso código!

Em seguida, adicione:

```python
x=['Tacos','Burritos','Churros']
y=[random.randint(0,30), random.randint(0,90),random.randint(0,10)]
plt.bar(x,y)
plt.show()
``` 

O código acima nomeia cada uma das barras (define os eixos x e y), cria valores aleatórios de Y usando `` `random.randint ()` ``, insere nossos pontos e mostra o gráfico!

Ao clicar no botão Run novamente, você verá algo assim:

**![gráfico de barras](https://cloud-lb7wueqlz.vercel.app/0image_from_ios.jpg)**

![notebook jupyter com código e gráfico de barras](https://cloud-qyo2g39vl.vercel.app/0image_from_ios.jpg)

# Vamos complicar um pouco mais!

Vamos fazer um gráfico mais personalizado usando três funções diferentes.

## Passo um!

Tenho certeza que todos vocês já adivinharam hehe, importem suas bibliotecas!!!!!!!!!!

![Kermit the Frog Dancing!](https://cloud-n5xpv2pg5.vercel.app/0file_from_ios.gif)

```python
import matplotlib.pyplot as plt 
import numpy as np
```

*Veja que vamos utilizar a numpy agora! :)*

### Espera aí... o que a matplotlib faz?

Estou tãããão feliz que você perguntou!

Para criar o gráfico que queremos fazer, usaremos a biblioteca matplotlib! Que vai...

- Criar um esboço

- Criar eixos

- Criar intervalos de eixos

- Permitir-nos traçar pontos

![Amazed Monkey Meme](https://cloud-nnli579mz.vercel.app/0file_from_ios.gif)

### Ok, agora vamos voltar onde estávamos...

*Certifique-se de que suas bibliotecas sejam importadas!*

## Passo dois!

O código abaixo cria o esqueleto de um gráfico, insere os pontos e mostra a saída!
```python
#cria figura(esqueleto do gráfico)
fig,ax=plt.subplots()
#insere os pontos
ax.plot([1,2,3,4],[1,4,2,3])
plt.show()
```

*Algo que você deve ter notado é o uso de fig, ou também conhecido como [figura](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.figure.html)*.

No código acima, e sempre que quiser criar um gráfico, você usará a fig. Por exemplo, em nosso código até agora, usamos...

```python
fig,ax=plt.subplots()
```

...que cria uma figura em apenas um eixo.

Essas aqui são algumas maneiras em que você pode utilizar as figs:
```python
fig=plt.figure() #cria gráfico vazio que retorna um número
fig,ax=plt.subplots(2,2) #Cria 2 x 2 gráficos de figues
```

Verifique no seu Editor Jupyter!

# Passo três!

*Certifique-se de que as bibliotecas foram carregadas, volte para a Etapa Um, se necessário*.

Defina o espaçamento do seu eixo x e y...
 ```python
 x=np.linspace(0,2,100)
 ```

\*Lembre-se de importar as bibliotecas!

## Etapa Quatro!

Crie uma figura! Olhe para cima para ver como escrever esse código ...
Aqui vai uma dica:

`fig,ax=plt._____()`

*Ainda com dúvidas? No lugar dos underscores, substitua por `fig,ax=plt.subplots()`.*

O seu gráfico deve parecer com isso...

**![Exemplo após a segunda etapa](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/data-vis-python/img/exemplo1.PNG)**

Agora podemos inserir algumas linhas, nesta parte personalize como quiser!

Este exemplo terá 3 funções básicas (linear, quadrada e ao cubo), mas você pode imaginá-la da maneira que quiser!

```python 
ax.plot(x,x,label='Dormir')
ax.plot(x,x**2,label='Se preocupar que o céu esteja caindo...')
ax.plot(x,x**3,label='Ser uma estrela')
```

*`label=` é o nome da sua linha*

*`ax.plot` vai inserir seus pontos/linhas*

Seu gráfico deve se parecer com esse:

**![Depois do passo 5](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/data-vis-python/img/exemplo3.PNG)**

## Passo 6!

Toques finais!

![Bibitty Bobittiy Boo!](Https://cloud-kmkvhdhhs.vercel.app/0file_from_ios.gif)

   ```python
   ax.set_xlabel('Tempo') #adiciona descrição do eixo X
   ax.set_ylabel('Ano') #adiciona descrição do eixo Y
   ax.set_title("Enredo do Chicken Little") #adiciona um título
   ax.legend() #adiciona legenda ao gráfico
   ```

Você deve conseguir algo parecido com isto ...

**![Exemplo Produto Workshop](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/data-vis-python/img/exemplo5.PNG)**

*Se você estiver tendo algum problema, certifique-se de verificar o canto superior direito para verificar se o "kernel" está ligado e configurado para Python 3*
**![No Kernel Error](https://cloud-bej0gbbkn.vercel.app/0image_from_ios.jpg)**

**Exemplo de código:**

```python 
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

x=np.linspace(0,2,100)
fig,ax= plt.subplots()
ax.plot(x,x,label='Dormir')
ax.plot(x,x**2,label='Se preocupar que o céu esteja caindo...')
ax.plot(x,x**3,label='Ser uma estrela')
ax.set_xlabel('Tempo') #adiciona descrição do eixo X
ax.set_ylabel('Ano') #adiciona descrição do eixo Y
ax.set_title("Enredo do Chicken Little") #adiciona um título
ax.legend() #adiciona legenda ao gráfico
```

\*\* PS. Se você nunca assistiu [Chicken Little](https://youtu.be/PPuk2JQgMkU), deve fazer isso o mais rápido possível, pois está perdendo uma obra-prima animada.

![Chicken Little!](Https://cloud-g6jgv31zl.vercel.app/0file_from_ios.gif)
# Compartilhe seu projeto!
Como posso salvar meu projeto com o Jupyter?
[Clique aqui para ver o vídeo!](Https://www.wevideo.com/view/1886850494)

1) Pressione File no canto superior esquerdo

2) Pressione "Save Notebook As"

3) Salve o Notebook como um arquivo .ipynb

4) Então, se você quiser voltar a este código, pode carregar o arquivo .ipynb de volta no Jupyter e editá-lo!

# Hackeando!

[Adicione dados não tratados ao gráfico](https://youtu.be/Ercd-Ip5PfQ) - **[Código Demo](https://gist.githubusercontent.com/datagy/a96789e1a6547cc25c234b6ebf7bf077/raw/25aa94e3a8de7a2a1250c07f74a7584467517721/covid-datagy1.py)**

**OU** 

Siga o workshop e personalize com dados do COVID-19 no workshop: 

[Visualizing Covid-19 Data](https://towardsdatascience.com/visualizing-covid-19-data-beautifully-in-python-in-5-minutes-or-less-affc361b2c6a) Por: Nic Piepenbreier!!! (Em inglês)

**OU** 

**Personalize o seu gráfico totalmente (como eu fiz com o Chicken Little)!
    \-Procure gráficos diferentes como (gráficos de pontos, gráficos de pizza, etc.)**
    
**[Utilizando múltiplos tipos de visualizações e gráficos](https://matplotlib.org/devdocs/gallery/subplots_axes_and_figures/subplots_demo.html):**

```python 
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Ellipse

np.random.seed(19680801)

NUM = 250

ells = [Ellipse(xy=np.random.rand(2) * 10,
                width=np.random.rand(), height=np.random.rand(),
                angle=np.random.rand() * 360)
        for i in range(NUM)]

fig, ax = plt.subplots(subplot_kw={'aspect': 'equal'})
for e in ells:
    ax.add_artist(e)
    e.set_clip_box(ax.bbox)
    e.set_alpha(np.random.rand())
    e.set_facecolor(np.random.rand(3))

ax.set_xlim(0, 10)
ax.set_ylim(0, 10)

plt.show()

#Fonte: https://matplotlib.org/gallery/shapes_and_collections/ellipse_demo.html
```
**![](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/data-vis-python/img/particulas.PNG)**

**OU** 

**Veja como importar [Google Trends](https://trends.google.com/trends/?geo=US) no seu gráfico!**

Código Demo:
```python 
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np 
import random

tiktok=pd.read_csv('multiTimeline.csv', header=1)

#para o arquivo csv, você terá que fazed o download do gráfico direto do google trends e fazer o upload no bloco de notas do jupyter, depois você copia o caminho do arquivo e coloca no lugar do multiTimeline.csv. 

cols = tiktok.columns 
cols = [x.split()[0].lower() if len(x.split())>2 else x.lower() for x in cols]
tiktok.columns=cols

tiktok['semana']= pd.to_datetime(tiktok['semana'])
tiktok = tiktok.replace('<1', 1)
    
tiktok.set_index('semana', inplace=True)

tiktok.plot(figsize=(14,6))

plt.title('Interesse no Tik Tok')
```
Quer ajuda para adicionar Google Trends? [Clique aqui!](https://www.wevideo.com/view/1850050637)

**![](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/data-vis-python/img/tiktok.PNG)**

Agora que você terminou de construir este maravilhoso projeto, compartilhe sua bela criação com outras pessoas! Lembre-se, é só mandar a URL do seu projeto!
