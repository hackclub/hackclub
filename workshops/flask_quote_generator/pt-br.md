---
name: 'Gerador de Citações KanyeRest'
description: 'Faça um gerador de citações do Kanye West com Flask'
author: '@s1ntaxe770r, @vitorvavolizza'
img: 'https://cloud-57v29xozt.vercel.app/0screen_shot_2020-12-07_at_5.26.13_pm.png'
---

Você já deve ter escutado "Stronger", "POWER" e "FourFiveSeconds". Agora você deve estar procurando pela inspiração do Kanye? Sim, eu também!! Neste workshop, você construirá um gerador de citações do Kanye West. Ao final deste workshop, você aprenderá a fazer três coisas:

- Buscar em uma API usando solicitações da web.
- Interpretar dados da solicitação.
- Renderizar esses dados.

Este workshop pressupõe um conhecimento básico de Python, HTML e CSS.

Vamos começar!

## Mas o que é Flask?

O Flask é uma framework para Python. Com ele, você pode construir com muita facilidade APIs web totalmente funcionais. Se você não entender totalmente o que isso significa, não se preocupe - você começará a entender à medida que for avançando.

## Começando

Vamos usar o [repl.it](https://repl.it), um editor de código online gratuito para esse workshop. Para começar, visite o projeto inicial [aqui](https://repl.it/@hcbjcentro/kanyerest). Seu ambiente de codificação vai girar em poucos segundos!

### Mas onde estão os dados?

![onde](https://cloud-c2egtgknk.vercel.app/0where.gif)

Vamos buscar nossas citações do Kanye da [kanye.rest](https://kanye.rest), uma API gratuita que gera citações aleatórias do Kanye.

### Muito bem, vamos fazer isso!

Vamos começar importando algumas bibliotecas no arquivo `main.py`:

```python
from flask import Flask,render_template
import requests
```

Na primeira linha, importamos `Flask` e `render_template`. O `render_template` nos permite retornar um "template" - no nosso caso, o arquivo HTML na pasta `templates` - junto com alguns dados.

## Criando sua primeira rota do Flask

Uma rota no Flask é como definimos os caminhos em nossa aplicação. Um exemplo seria `https://brasil.hackclub.com/workshops` - a rota seria `/workshops`.

Vamos criar uma instância do `Flask` e criar nossa primeira rota. Abaixo das duas primeiras linhas que você escreveu, acrescente:

```python
app = Flask(__name__)

@app.route("/")
def index():
   # faça coisas aqui
```

Primeiro, estamos atribuindo uma instância do Flask a uma variável chamada `app`. Em seguida, criamos nossa primeira rota.

Como você pode ver, as rotas do Flask são definidas com o `@flaskinstance.route("/nomedarota")`em nosso caso, `@app.route("/nomedarota")`- usamos o decorador (@) logo acima da função que roda sempre que um usuário visita a rota em seu navegador da web.

## Obtendo esses dados!

Anteriormente, importamos o módulo `requests`, que utilizaremos para fazer [requisições HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Messages).

Dentro da função `index`, adicione o seguinte código:

```python
@app.route("/")
def index():
  url = "https://api.kanye.rest"
  dados = requests.get(url)
  resposta = dados.json()
  citacao = resposta["quote"]

  return render_template("index.html",citacao=citacao)
```

- Começamos declarando uma variável `url` que contém a url da API que estamos tentando buscar
- Então, fazemos uma [requisição HTTP GET](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/GET) para a url utilizando a biblioteca de `requests` e atribuímos a uma variável `dados`.
- A seguir, analisamos a resposta HTTP utilizando `dados.json()`
  - A resposta da API parece com isso:
  ```json
  {"quote":"Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary."}
  ```
- Então, obtemos a "quote" (citação) da resposta HTTP e a atribuímos a uma variável `citacao`.
- Finalmente, nós disponibilizamos os dados em uma página web utilizando a função `render_template`.

**Dica de mestre!**

Se você quiser ver a resposta que você obtém da `resposta`, adicione:

```python
print(resposta)
```

logo após a linha que começa com `resposta =`.

## Renderizando os dados

![presente](https://cloud-8ec0u6szu.vercel.app/0garfield.gif)

Por padrão, o Flask procura por qualquer arquivo HTML que você passa para a função `render_template` em uma pasta chamada `templates`. Na barra lateral à esquerda do seu projeto, clique na pasta chamada `templates` para abri-la. Em seguida, abra o arquivo `index.html` dentro dele. Você deve ver o seguinte código:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/blocks.css/dist/blocks.min.css" />
    <link rel="stylesheet" href="{{ "{{ url_for('static', filename='style.css') " }}}}">
    <title>Citações do Kanye</title>
</head>
<body>
  <div class="titulo block">
   <h1>Kanye disse uma vez</h1> 
  </div>
      <div class="citacao block">
      <h3> {{ "{{ citacao " }}}} </h3>
   </div>
   <a href="{{ "{{ url_for('index') " }}}}" class="block atualizar round">atualizar</a>
</body>
</html>
```

O Flask usa uma linguagem de modelo chamada [jinja](https://jinja.palletsprojects.com/en/2.11.x/). É assim que podemos passar dados e até mesmo usar coisas como loops e condições if. O início e o fim da sintaxe jinja são indicados por `{{ "{{  " }}}}` ou `{{ "{%  " }}%}` no caso de coisas como condições.

Há três trechos principais para se prestar atenção aqui:

```html
<link rel="stylesheet" href="{{ "{{ url_for('static', filename='style.css') " }}}}">
```
- Aqui nós utilizamos `url_for` para falar para o Flask para procurar na pasta estática (static) do diretório atual e devolver um arquivo chamado `style.css`.

```html
<h3> {{ "{{ citacao " }}}} </h3>
```
- Aqui nós mostramos a citação que passamos para a função `render_template` mais cedo.

```html
<a href="{{ "{{ url_for('index') " }}}}" class="block atualizar round">atualizar</a>
```
- Mais uma vez utilizamos a função `url_for()`, mas desta vez passamos o nome da função que manipula a rota do índice (index), já que cada página carrega uma nova citação.

## CSS!!!

Para fazer as coisas parecerem um pouco mais agradáveis, abra o arquivo `style.css` localizado na pasta `static`. Sinta-se à vontade para brincar com ele e adicionar seus próprios estilos, ou você pode utilizar o CSS abaixo:

```css
.titulo {
  margin: 4em auto 0 auto;
  width: 60%;
}

h1 {
  text-align: center;
}

.citacao { 
  text-align: center;
  font-size: 2em;
  margin: 0 auto;
  margin-top: 2em;
}

.atualizar {
  text-decoration: none;
  text-align: center;
  font-size: 2em;
  width: 6em;
  margin: 0 auto;
  margin-top: 2em;
}
```

Depois de adicionar seus estilos, navegue de volta para o arquivo `main.py` e acrescente isto ao final do arquivo:

```python
if __name__ == "__main__":
  app.run(host="0.0.0.0")
```

Isto garantirá que nosso app funcione continuamente assim que o executarmos. O parâmetro `host="0.0.0.0.0"` torna-o acessível a todos na web.

Esse é o código final:

`main.py`:

```python
from flask import Flask,render_template
import requests

app = Flask(__name__)

@app.route("/")
def index():
  url = "https://api.kanye.rest"
  dados = requests.get(url)
  resposta = dados.json()
  citacao = resposta["quote"]

  return render_template("index.html",citacao=citacao)

if __name__ == "__main__":
  app.run(host="0.0.0.0")
```

`index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/blocks.css/dist/blocks.min.css" />
    <link rel="stylesheet" href="{{ "{{ url_for('static', filename='style.css') " }}}}">
    <title>Citações do Kanye</title>
</head>
<body>
  <div class="titulo block">
   <h1>Kanye disse uma vez</h1> 
  </div>
      <div class="citacao block">
      <h3> {{ "{{ citacao " }}}} </h3>
   </div>
   <a href="{{ "{{ url_for('index') " }}}}" class="block atualizar round">atualizar</a>
</body>
</html>
```

`style.css`:

```css
.titulo {
  margin: 4em auto 0 auto;
  width: 60%;
}

h1 {
  text-align: center;
}

.citacao { 
  text-align: center;
  font-size: 2em;
  margin: 0 auto;
  margin-top: 2em;
}

.atualizar {
  text-decoration: none;
  text-align: center;
  font-size: 2em;
  width: 6em;
  margin: 0 auto;
  margin-top: 2em;
}
```

Para ver o que você fez, clique no botão verde "Run" na parte superior do seu projeto.

Viva!!! Você conseguiu!!!!

## Hackeando

![hackeando](https://cloud-hjufepegf.vercel.app/0hacker_cat.gif)

Confira o que outros Hack Clubbers fizeram!

- [Khushraj Rathod](https://repl.it/@hcbjcentro/gerador-de-piadas) usou a API de piadas de pai para fazer um gerador de piadas de pai
- [Jason Antwi-Appah](https://repl.it/@hcbjcentro/sugestao-de-comidas) usou uma API de alimentos para construir um aplicativo de sugestão de alimentos

Confira [esta](https://apilist.fun) lista de outras APIs legais com as quais você poderia construir coisas.

O código fonte para esta oficina pode ser encontrado [aqui](https://github.com/s1ntaxe770r/KQG)

## Outros recursos

- A documentação do [Flask](https://flask.palletsprojects.com/en/1.1.x/) é super amigável, então vale a pena conferir.
- Se você é mais um aprendiz visual, confira o [Pretty Printed](https://prettyprinted.com) - eles têm ótimos tutoriais do Flask.

Agora que você terminou de construir este maravilhoso projeto, compartilhe sua bela criação com outras pessoas! Lembre-se, é só mandar a URL do seu projeto!