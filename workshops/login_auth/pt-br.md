---
name: 'Login na Web'
description: 'Construa uma página de login segura na web usando Firebase & JavaScript'
author: '@tanishq-soni, @gabriellimma'
img: 'https://cloud-i1u39hjuk.vercel.app/2020-10-23_h3cu9gf014ymk5drx379wq6gdqjxz0e8.png'
---

Nesta oficina, você construirá uma página de Autenticação de Login na web usando o [Firebase](https://firebase.google.com/).

Firebase é uma plataforma desenvolvida pela Google para a criação de aplicativos móveis e web.

Seu resultado final será algo assim 👇

![live gif](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//logingif0.gif)

[Dá uma olhada na versão final!](https://tela-login-segura.biel42.repl.co/)

Você pode testar o site de demonstração usando as seguintes credenciais:

- Email: `login@autenticado.com`
- Senha: `senha123`

### Começando 🚀

Para começar, você precisará ter conhecimento básico de:

- HTML
- CSS
- JavaScript

Então, vamos lá 💨

## Criando um projeto no Firebase 💻

Primeiro, você precisará  [entrar no Firebase](https://firebase.google.com/) usando uma conta do Google. Se você não tiver uma, você pode [criar uma aqui](https://accounts.google.com/signup).

Após o login, você verá uma página semelhante a esta:

![Firebase página principal](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-0.png)

Na imagem acima, você verá o botão `Ir para o console` no canto superior direito. Clique nele, e você será redirecionado para a seção de console.


![Página de projetos](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-1.png)

Na seção de console, você verá todos os seus projetos no Firebase e o botão `Criar um projeto`. Clique no botão `Criar um projeto` para criar um novo projeto.

![Criar um projeto](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-2.png)

Aqui você tem que dar um nome ao seu projeto Firebase, tipo `Login-na-web`.

Essa parte é opcional onde você pode utilizar o Google Analytics no seu projeto, mas pra esse workshop, você não precisará dele. Depois de dar um nome ao seu projeto, clique no botão `continuar` para prosseguir.

![Página de analytics](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-3.png)

![Projeto criado](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-4.png)

Agora você deve ver `Seu novo projeto está pronto`.

Boaaaa! 🎉 Você acabou de criar um novo projeto Firebase.

## Conectando o Firebase à sua página web 🔗

Depois de criar com sucesso o projeto Firebase, você verá o console do projeto.

Na página de principal do console do projeto, você verá 'Comece adicionando Firebase ao seu aplicativo'. Abaixo disso você verá três opções de integrações:

1. iOS
2. Android
3. `</>` (é nessa opção que você deve clicar)

![Project Console](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-5.png)

Após clicar em `</>` uma nova página aparecerá e te pedirá um nome para seu aplicativo. Para este workshop utilizaremos `login-na-web` como nome do aplicativo.

![Nome do app](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-6.png)

Se liga que essa parte é **importante**!

Agora você verá um pouco de código JavaScript. Este código ajuda seu website a se conectar ao seu projeto Firebase. Certifique-se de copiar e colar isto em algum lugar, pois será necessário já já.

Após **salvar** o código, clique em `continuar no console`.

![Chaves da API](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-7.png)

Depois disso, você precisa adicionar os usuários existentes para que eles possam fazer o login. Para isso você precisa habilitar a autenticação de **Email/Password** na seção Autenticação do seu projeto. Para fazer isso, você precisa clicar na aba `Authentication` no canto superior esquerdo da seção `Desenvolvimento`.

![Página de autenticação](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-8.png)

Aqui na página de Autenticação, você verá diferentes abas:

- *Users* (Usuários)
- *Sign-in method* (Modos de entrar)
- *Templates* (Modelos)
- *Usage* (Usos)

Clique em *Sign-in* method.

![Sign in methods](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-9.png)

Aqui você precisa habilitar **Email/Senha** na seção `Provedores de login`. Clique em **Email/Senha**, ative-o e depois salve-o.

![Ativando email/senha](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-10.png)

Após habilitar, você precisará adicionar usuários, então clique na aba `Users`.

![Adicionando usuário](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-11.png)

Em seguida, clique em `Adicionar usuário` e adicione um `e-mail` e uma `senha` para esse usuário. quando você terminar de preencher, clique em `Adicionar usuário`.

![Adicionando um usuário](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-12.png)

##  Projetando uma página web 🖊️

Primeiro, você precisa criar um ambiente de desenvolvimento. Sugiro que você use [Repl.it](https://repl.it), pois ele define tudo para você com apenas um clique.

Para começar, vá para [https://repl.it/languages/html](https://repl.it/languages/html).

Você verá algo parecido com isso 👇

<a href="https://repl.it/languages/html" target="_blank"><img src="../login-seguro/img/firebase-13.png" alt="página do Repl" ></a>

### Hora de Codar </>

#### HTML

Quando você der uma olhada no arquivo `index.html` em sua repl, você verá a tag `<html>` que é a raiz do arquivo HTML. Dentro da tag `<html>`, você verá a tag `<body>`. Este é o corpo principal do arquivo HTML e contém todo o conteúdo da nossa página web.

Você também encontrará linhas como:

- `<link href="style.css" rel="stylesheet" type="text/css">`, que linka seu arquivo css (`style.css`) com o HTML.
- `<script src="script.js"></script>`, que linka seu arquivo JavaScript (`script.js`) com o HTML. Deve ser colocado logo acima da *tag* de fechamento do "corpo" `</body>`.

Na tag `<body>`, você precisará criar duas divisões. A primeira divisão é para a página de login e a segunda é para a página de logout.

#### Divisão 1:

Crie a sua primeira divisão (`<div>`) com a classe `div_principal` e atribua o ID `div_login`.

Você também pode dar um título a sua página utilizando tags de título (`<h1>,<h2>,<h3>.....`).

Nesta divisão, você criará dois campos de entrada para um e-mail e senha utilizando a tag `<input>` com `type` definidos como `email` e `password` respectivamente. Atribua IDs a ambos os campos de entrada como `campo_de_email` e `campo_de_senha`, respectivamente.

Você também pode adicionar o atributo `placeholder` que especifica uma pequena dica que descreve o valor esperado de um campo de entrada / área de texto.

Aqui você também criará um botão de login utilizando a tag `<button>` e atribuirá a ele uma função chamada `entrar` (lembre-se dos parênteses para chamar a função) e dentro da tag, um "nome" para seu botão, no meu caso, `entrar`. Finalmente, feche sua primeira divisão utilizando o `</div>`.

Portanto, veja como deve ficar sua primeira divisão 👇:

```html
<div class="div_principal" id="div_login">
    <h3>Faça seu Login:</h3>
    <input type="email" placeholder="insira seu email" id="campo_de_email">
    <input type="password" placeholder="insira sua senha" id="campo_de_senha">
    <button onclick="entrar()">Entrar</button>
</div>
```

#### Divisão 2:

Crie sua segunda divisão abaixo da primeira com uma classe de `div_logado` e atribua um ID de `div_usuario`.

Nesta divisão, você criará um botão de sair e atribuirá a ele uma função chamada `sair` (lembre-se dos parênteses para chamar a função).

Portanto, veja como deve ficar sua segunda divisão 👇:

```html
<div class="div_logado" id="div_usuario">
    <h3>AEEEEEEE! Você entrou com sucesso usando o Firebase 🎉🎉🎉</h3>
    <button onclick="sair()">Sair</button>
</div>
```

Acrescente esta divisão logo após a primeira.

Portanto, aqui está como seu código HTML deve ser até agora:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Login com firebase</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div class="div_principal" id="div_login">
      <h3>Faça seu Login:</h3>
      <input type="email" id="campo_de_email" placeholder="insira seu email">
      <input type="password" id="campo_de_senha" placeholder="insira sua senha">
      <button onclick="entrar()">Entrar</button>
    </div>
    <div class="div_logado" id="div_usuario">
      <h3>AEEEEEEE! Você entrou com sucesso usando o Firebase 🎉🎉🎉</h3>
      <button onclick="sair()">Sair</button>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

![sem JS](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-14.png)

Como você pode ver, ambas as divisões (`<div>`) estão sendo exibidas na mesma página. É necessário exibir a segunda divisão após o login bem sucedido do usuário, pois ela contém o botão de logout.

Para isso, você precisa usar o JavaScript. Mas antes de continuar, se lembra de ter salvo algumas linhas de código JavaScript do Firebase? Elas devem ser algo parecido com isto:
```html
<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: 'AIzaSyAVNeXl4cBro95I3dFWMaiT2rI88sqyBtc',
    authDomain: 'loginauth-12.firebaseapp.com',
    databaseURL: 'https://loginauth-12.firebaseio.com',
    projectId: 'loginauth-12',
    storageBucket: 'loginauth-12.appspot.com',
    messagingSenderId: '308714255384',
    appId: '1:308714255384:web:98e87065f0e45910f0ff6d',
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
</script>
```

Se liga que essa parte é **importante**, veja a primeira linha do código:

```html
<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>
```

essa linha retorna um erro, pois só carrega a biblioteca do Firebase. Então, para isso, acrescente a linha abaixo em cima da primeira linha.

```html
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
```

Depois de adicionar essa linha, seu código deve ficar asssim: 

```html
<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
<script>
  // Configuração do seu aplicativo no Firebase
  var firebaseConfig = {
    apiKey: 'AIzaSyAVNeXl4cBro95I3dFWMaiT2rI88sqyBtc',
    authDomain: 'loginauth-12.firebaseapp.com',
    databaseURL: 'https://loginauth-12.firebaseio.com',
    projectId: 'loginauth-12',
    storageBucket: 'loginauth-12.appspot.com',
    messagingSenderId: '308714255384',
    appId: '1:308714255384:web:98e87065f0e45910f0ff6d',
  }
  // Inicializa o Firebase
  firebase.initializeApp(firebaseConfig)
</script>
```

Então, cole o código acima logo após a segunda divisão.

Aqui está seu código HTML final:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Login com firebase</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div class="div_principal" id="div_login">
      <h3>Faça seu Login:</h3>
      <input type="email" placeholder="insira seu email" id="campo_de_email" />
      <input type="password" placeholder="insira sua senha" id="campo_de_senha" />
      <button onclick="entrar()">Entrar</button>
    </div>
    <div class="div_logado" id="div_usuario">
      <h3>AEEEEEEE! Você entrou com sucesso usando o Firebase 🎉🎉🎉</h3>
      <button onclick="sair()">Sair</button>
    </div>
    <script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
    <script>
      // Configuração do seu aplicativo no Firebase
      var firebaseConfig = {
        apiKey: 'AIzaSyAVNeXl4cBro95I3dFWMaiT2rI88sqyBtc',
        authDomain: 'loginauth-12.firebaseapp.com',
        databaseURL: 'https://loginauth-12.firebaseio.com',
        projectId: 'loginauth-12',
        storageBucket: 'loginauth-12.appspot.com',
        messagingSenderId: '308714255384',
        appId: '1:308714255384:web:98e87065f0e45910f0ff6d',
      }
      // Inicializa o Firebase
      firebase.initializeApp(firebaseConfig)
    </script>
    <script src="script.js"></script>
  </body>
</html>
```

#### JavaScript

O javaScript está no arquivo `script.js` presente no seu repl logo abaixo do arquivo `index.html`. O JavaScript se trata da lógica da sua página web.

Aqui você só tem que escrever uma pequena quantidade de código JavaScript porque o Firebase tem alguns métodos pré-definidos para autenticação. Dá uma olhada na [Documentação Firebase sobre autenticação web](https://firebase.google.com/docs/auth/web/start) para mais informações.

Portanto, você tem que obter o usuário atualmente conectado que você criou no Firebase.

No arquivo `script.js` você precisa chamar um método para [Obter o usuário atualmente conectado](https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user), é o método que especifica se o usuário está conectado ou não.

```javascript
firebase.auth().onAuthStateChanged(function (usuario) {
  if (usuario) {
    // Usuário está conectado
  } else {
    // Nenhum usuário está conectado
  }
})
```

Agora podemos mostrar a divisão com ID `div_login` na página de login e a divisão com ID `div_usuario` quando o usuário estiver conectado.

Adicione essas duas linhas de código na condição `if` do código acima.

```javascript
document.getElementById('div_usuario').style.display = 'block'
document.getElementById('div_login').style.display = 'none'
```

Seu código deverá se parecer com isso:

```javascript
firebase.auth().onAuthStateChanged(function (usuario) {
  if (usuario) {
    // Usuário está conectado
    document.getElementById('div_usuario').style.display = 'block'
    document.getElementById('div_login').style.display = 'none'
  } else {
    // Nenhum usuário está conectado
  }
})
```

No código acima `block` exibirá a divisão e `none` a esconderá.

Você adicionou a parte para o usuário logado, então agora você precisa adicionar a parte do `else`. Aqui é onde o usuário não está conectado. O código será o mesmo que o código no primeiro `if`, mas você precisa trocar `block` e `none` para exibir apenas `div_principal` com ID `div_login`.


Adicione o código a seguir à condição `else`:

```javascript
document.getElementById('div_usuario').style.display = 'none'
document.getElementById('div_login').style.display = 'block'
```

O seu código JavaScript deve ser parecido:

```javascript
firebase.auth().onAuthStateChanged(function (usuario) {
  if (usuario) {
    // Usuário está conectado
    document.getElementById('div_usuario').style.display = 'block'
    document.getElementById('div_login').style.display = 'none'
  } else {
    // Nenhum usuário está conectado
    document.getElementById('div_usuario').style.display = 'none'
    document.getElementById('div_login').style.display = 'block'
  }
})
```

Agora, olha como ficou:

![com JS](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-15.png)

Agora você precisa trabalhar em ambas as funções que foram atribuídas aos botões HTML (`entrar()` e `sair()`).

#### Função entrar()

Um usuário só pode fazer o login se seu registro for armazenado no Firebase. O Firebase tem um método chamado [`Login de usuários existentes`](https://firebase.google.com/docs/auth/web/start#sign_in_existing_users) que permite aos usuários existentes entrar utilizando seu endereço de e-mail e senha.

Agora você precisará criar variáveis em `entrar()` chamadas `emailUsuario` e `senhaUsuario`. Eles receberão os valores de e-mail e senha dos campos de entrada (`<input>`) com IDs  `campo_de_email` e `campo_de_senha`.

```javascript
function entrar() {
  var emailUsuario = document.getElementById('campo_de_email').value
  var senhaUsuario = document.getElementById('campo_de_senha').value
}
```

Portanto, você precisa adicionar o método [`Login de usuários existentes`](https://firebase.google.com/docs/auth/web/start#sign_in_existing_users) dentro de `entrar()`.

```javascript
firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .catch(function (error) {
    // Lide com erros aqui
    var codigoErro = error.code
    var mensagemErro = error.message
    // ...
  })
```

No código acima, substitua `email` por `emailUsuario` e `password` por `senhaUsuario`.

Você também precisa exibir uma mensagem de erro quando ocorrer um erro como email ou senha incorretos, então adicione o código abaixo dentro do método `Login de usuários existentes`.


```javascript
window.alert('Erro : ' + mensagemErro)
```

Portanto, seu código deve ser parecido com este:

```javascript
function entrar() {
  var emailUsuario = document.getElementById('campo_de_email').value
  var senhaUsuario = document.getElementById('campo_de_senha').value
  
  //método de login de usuários existentes no firebase
  firebase
  .auth()
  .signInWithEmailAndPassword(emailUsuario, senhaUsuario)
  .catch(function (error) {
    // Lide com erros aqui
    var codigoErro = error.code
    var mensagemErro = error.message
    window.alert('Erro : ' + mensagemErro)
    // ...
  })
}
```

#### Função sair()

Para a função sair, adicione o seguinte código abaixo da função de entrar():

```javascript
function sair() {
  firebase.auth().signOut()
}
```

Here is your final JavaScript code:

```javascript
firebase.auth().onAuthStateChanged(function (usuario) {
  if (usuario) {
    // Usuário está conectado
    document.getElementById('div_usuario').style.display = 'block'
    document.getElementById('div_login').style.display = 'none'
  } else {
    // Nenhum usuário está conectado
    document.getElementById('div_usuario').style.display = 'none'
    document.getElementById('div_login').style.display = 'block'
  }
})

function entrar() {
  var emailUsuario = document.getElementById('campo_de_email').value
  var senhaUsuario = document.getElementById('campo_de_senha').value
  
  //método de login de usuários existentes no firebase
  firebase
  .auth()
  .signInWithEmailAndPassword(emailUsuario, senhaUsuario)
  .catch(function (error) {
    // Lide com erros aqui
    var codigoErro = error.code
    var mensagemErro = error.message
    window.alert('Erro : ' + mensagemErro)
    // ...
  })
}

function sair() {
  firebase.auth().signOut()
}
```

Seu site deve se parecer com esse 👇

![live](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//logingif1.gif)

Tente entrar com o e-mail e a senha que você armazenou no Firebase. Se funcionou, então está tudo certo!

Como você pode ver, o objetivo principal desta oficina foi completado aqui. Para que sua página web fique mais legal, você pode adicionar um pouco de CSS personalizado.


#### CSS

O arquivo `style.css` presente em seu projeto logo abaixo do `script.js` dá estilos, desenhos e cores à sua página web.

Você só precisa:

- Mencionar o elemento/ nome da classe/ ID. (ex: `<div>`, `div_principal`, `campo_de_email`)
- Abrir chaves `{`.
- Adicionar estilos.
- Fechar chaves `}` .

E aqui vai como você pode adicionar estilos à sua tag `<body>`:

```CSS
body {
  background: #000000;
  color: #fff;
  padding: 0px;
  margin: 0px;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
}
```

Desta forma, você pode adicionar estilos às suas divs, ids e a página web inteira. Inspecione meu [arquivo CSS](https://repl.it/@biel42/tela-login-segura#style.css) para entender melhor.

Você pode selecionar cores diferentes usando um [selecionador de cores](https://www.google.com/search?q=color+picker) para dar a sua página da web um visual colorido e legal.

Se você precisar de ajuda com relação às várias palavras-chave usadas no CSS, você pode consultar a [documentação CSS (em inglês)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference). `Dica: no canto superior direito existe um selecionador de idioma`

Boaaaa 🎊! Você concluiu!!

Dê uma olhada no [código final](https://repl.it/@biel42/tela-login-segura).

## Uhuuuuuuuuuuuu!🎉

Você terminou o Workshop de Autenticação de Login na Web completando todas as tarefas:

- [x] Criar um projeto no Firebase.
- [x] Conectar o Firebase à sua página da Web.
- [x] Projetar uma página Web.

## ⚡ O que vem agora??

Agora, como você pode expandir seu projeto? Tente adicionar algumas outras características com a ajuda do [Guia Firebase](https://firebase.google.com/docs/auth/web/start?authuser=0)

Aqui estão alguns exemplos 👇

- `criar uma conta` para que um usuário possa criar uma nova conta.
- Funcionalidade de `verificação de e-mail`.
- Recurso de `Login anônimo` para que um usuário possa visitar a página sem fazer login.


### ⭐ Exemplos com código

#### Criar conta

Neste recurso, você pode digitar um e-mail e senha de sua escolha e clicar em `criar uma conta`.

- [Exemplo Live](https://login-criar-usuario.biel42.repl.co/)
- [Código](https://repl.it/@biel42/login-criar-usuario)

#### Verificação por e-mail

Neste recurso, você pode enviar um e-mail de verificação para verificar sua conta após o login.

- [Exemplo live](https://login-com-verificacao-email.biel42.repl.co/)
- [Código](https://repl.it/@biel42/login-com-verificacao-email)

#### Login Anônimo

Neste recurso, você pode entrar anonimamente sem digitar um e-mail ou senha.

`Dica: você precisa ativar o login como anônimo no firebase`
`Authentication  > Sign-in method > Anônimo`
![firebase anonimo](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/login-seguro/img//firebase-17.png)

- [Exemplo live](https://login-anonimo.biel42.repl.co/)
- [Código](https://repl.it/@biel42/login-anonimo)

Agora que você terminou de construir este maravilhoso projeto, compartilhe sua bela criação com outras pessoas! Lembre-se, é só mandar a URL do seu projeto!