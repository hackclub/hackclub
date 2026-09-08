---
name: 'App de Tarefas'
description: 'Crie um app de tarefas full-stack usando React e Firebase'
author: '@giridhar7632, @vitorvavolizza'
img: 'https://cdn.hackclub.com/rescue?url=https://cloud-2nf3f60u4.vercel.app/0todo_app.png'
---

## App de Tarefas

A combinação do React e do Firebase pode levar os aplicativos da web a um nível inovador. Neste workshop, você criará um aplicativo de tarefas incrível e completo usando React para front-end e o banco de dados em tempo real do Firebase como back-end. Ao final deste workshop, você aprenderá sobre Forms no React e a implementação de operações CRUD usando o Firebase.

Vamos construir algo semelhante a isso. 👇

![App de Tarefas Final](https://cdn.hackclub.com/rescue?url=https://cloud-2nf3f60u4.vercel.app/0todo_app.png)

Confira a [demo ao vivo](https://app-de-tarefas-inicial.vitorvavolizza.repl.co/) e o [código-fonte](https://repl.it/@VitorVavolizza/app-de-tarefas-final#src/App.js).

Este workshop deve levar cerca de uma hora para ser concluído.

## Pré-requisitos

- Você deve ter um conhecimento básico de HTML, CSS e JavaScript.
- Você também deve conhecer alguns conceitos dos recursos ES6 do JavaScript.
- Você deve estar familiarizado com os fundamentos dos Hooks no React.
- Também é bom se você tiver um pouco de conhecimento sobre o Firebase. Mas não se preocupe, vamos cobrir tudo do zero.

## Ambiente de Programação

Usaremos o [Repl.it](https://repl.it) para construir nosso projeto. O [Repl.it](https://repl.it) é um editor de código online onde você pode programar em diferentes linguagens sem nenhuma instalação.

Dê um Fork nesse projeto inicial [aqui](https://repl.it/@hcbjcentro/app-de-tarefas-inicial#src/App.js).

Ele contém `create-react-app` e `firebase` instalados. Ele também contém todos os estilos necessários para que possamos nos concentrar apenas no React e no Firebase.

Após a instalação, pressione o botão `Run` na parte superior. Se seu projeto estiver assim, está pronto para prosseguir.

![projeto inicial](https://cdn.hackclub.com/rescue?url=https://cloud-5vj1vtivl.vercel.app/0todo-starter-template.png)

## Criação de um projeto Firebase

Você pode acessar o [Firebase](https://firebase.google.com) com sua conta do Google.

> **Firebase**: o Firebase do Google é um Backend-as-a-Service(BaaS), o que torna mais fácil adicionar um back-end aos nossos aplicativos com o conhecimento de programação do lado do servidor.

Vamos usar o Firebase Realtime Database como banco de dados para nosso aplicativo de tarefas.

O **Firebase Realtime Database** é hospedado na nuvem. Os dados são armazenados como JSON e sincronizados em tempo real para cada cliente conectado. Podemos armazenar e sincronizar **dados** em todos os clientes em tempo real e permanecer disponível quando seu aplicativo ficar offline.

Abra o [Firebase](https://firebase.google.com); depois de entrar, clique em `Ir para o console` no canto superior direito.

![firebase.com](https://cdn.hackclub.com/rescue?url=https://cloud-swc0vwpr0.vercel.app/2firebase.png)

Em seu console, se você ainda não tem nenhum projeto, ele estará limpo e vazio. Clique em `Create Project` para adicionar um novo projeto.

![Firebase console](https://cdn.hackclub.com/rescue?url=https://cloud-swc0vwpr0.vercel.app/0firebase_console.png)

Conclua todas as etapas para criar um projeto Firebase. Nomeie seu projeto como desejar.

![Etapa 1](https://cdn.hackclub.com/rescue?url=https://cloud-swc0vwpr0.vercel.app/6step-1.png)

Depois de dar um nome ao seu projeto, clique no botão `Continue` para prosseguir. Esta é uma etapa opcional para usar o Google Analytics em seu projeto, mas você não precisará dela neste workshop. Clique em `Continue`.

![Etapa 2](https://cdn.hackclub.com/rescue?url=https://cloud-swc0vwpr0.vercel.app/7step-2.png)

Finalmente, clique em `Criar Projeto`.

![Etapa 3](https://cdn.hackclub.com/rescue?url=https://cloud-swc0vwpr0.vercel.app/8step-3.png)

🎉 Bingo!!! Seu projeto Firebase será criado. Você deveria ver algo assim.

![Projeto criado](https://cdn.hackclub.com/rescue?url=https://cloud-swc0vwpr0.vercel.app/3project_created.png)

Clique no botão `Continue`.

Agora, vamos configurar nosso projeto com o Firebase.

## Configurando projetos com Firebase

Clique no ícone `(</>)` da Web.

![Visão geral do projeto](https://cdn.hackclub.com/rescue?url=https://cloud-swc0vwpr0.vercel.app/4project_overview.png)

Registre seu projeto com um nome.

![Register name](https://cdn.hackclub.com/rescue?url=https://cloud-swc0vwpr0.vercel.app/5register_app.png)

Essas são as credenciais do seu aplicativo. Este código ajudará seu projeto a se conectar ao projeto do Firebase.

![Firebase config](https://cdn.hackclub.com/rescue?url=https://cloud-swc0vwpr0.vercel.app/1firebase_sdk.png)

Certifique-se de copiar a configuração do Firebase do seu aplicativo da web (objeto `firebaseConfig`).

Vá para seu projeto no Repl.it e crie um novo componente, `Firebase.js` dentro da pasta `src`.

No componente `Firebase.js`, importe o módulo `firebase`, que já está instalado, e cole os dados que você copiou do Firebase. Seu arquivo `Firebase.js` ficará assim com **suas chaves de API**.

```jsx
import firebase from 'firebase'; // <–– importando firebase

var firebaseConfig = {
  apiKey: 'AIzaSyCFg0consEutzxGmXo5zxcibJ2-ZUkGRps',
  authDomain: 'todo-app-9f5a0.firebaseapp.com',
  databaseURL: 'https://todo-app-9f5a0.firebaseio.com',
  projectId: 'todo-app-9f5a0',
  storageBucket: 'todo-app-9f5a0.appspot.com',
  messagingSenderId: '235166947516',
  appId: '1:235166947516:web:bca35a6c27a240d4bad8b9',
  measurementId: 'G-JYGLVL9X55',
};

firebase.initializeApp(firebaseConfig); // <–– inicializando o firebase
export default firebase;
```

## Criando banco de dados

Agora vamos criar um banco de dados para nosso aplicativo.

Abra o console do projeto Firebase. Clique em `Realtime Database` na seção `Build` na barra lateral esquerda.

![Barra lateral do projeto](https://cdn.hackclub.com/rescue?url=https://cloud-9uzz77u17.vercel.app/4project_overview-1.png)

Você verá algo assim. Clique no botão `Create Database`.

![Criar banco de dados](https://cdn.hackclub.com/rescue?url=https://cloud-9uzz77u17.vercel.app/3create_database.png)

Utilize `Start in Test Mode` e clique em `Enable`.

![Modo de teste](https://cdn.hackclub.com/rescue?url=https://cloud-9uzz77u17.vercel.app/5test_mode.png)

Em seguida, seu Realtime Database será criado e iniciado com `null` (nada).

![Realtime Database](https://cdn.hackclub.com/rescue?url=https://cloud-9uzz77u17.vercel.app/2database.png)

O Firebase permite inicialmente que qualquer pessoa leia e grave o banco de dados por 30 dias. Você pode editar as regras a qualquer momento na aba `Rules`.

![Regras](https://cdn.hackclub.com/rescue?url=https://cloud-9uzz77u17.vercel.app/1database_rules.png)

Agora que temos um banco de dados, vamos criar um aplicativo de tarefas usando esse banco de dados.

## Operações CRUD

CRUD significa Create, Read, Update e Delete. (Criar, Ler, Atualizar e Excluir)

Essas são as quatro operações mais básicas que podem ser executadas com a maioria dos sistemas de banco de dados tradicionais e são as bases para interagir com qualquer banco de dados.

![CRUD](https://cdn.hackclub.com/rescue?url=https://cloud-9uzz77u17.vercel.app/0crud_operations.png)

Se você quiser aprender mais sobre a teoria sobre CRUD, dê uma olhada [aqui](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)

## Criando o App de Tarefas

Vamos criar a interface do App de Tarefas para realizar operações CRUD.

Crie uma nova pasta dentro do diretório `src` e nomeie-a como `components`. Todos os nossos componentes do App de Tarefas estarão nesta pasta.

## Inserindo uma Tarefa

Crie um novo arquivo na pasta `components` e nomeie-o `Input.js`. Importe `React` para o componente, crie o componente funcional e exporte-o.

```jsx
import React from 'react';

function Input() {
  {
    /* O código vai aqui */
  }
}

export default Input;
```

Importe também no topo do componente o arquivo `Firebase.js` que você criou antes.

```jsx
import firebase from '../Firebase';
```

Crie um `div` com a classe `input` dentro do componente.

```jsx
import React from 'react';
import firebase from '../Firebase';

function Input() {
  return <div className="input">{/* O código vai aqui */}</div>;
}

export default Input;
```

Adicione um `input` e um botão `Adicionar Tarefa` com uma classe `add-btn` dentro do elemento `div`.

```html
<div className="input">
  <input type="text" placeholder="Digite uma tarefa..." />
  <button className="add-btn">
    <i className="fa fa-plus-circle" aria-hidden="true"></i
    ><span id="btn-text">Adicionar Tarefa</span>
  </button>
</div>
```

Aqui, `<i className="fa fa-plus-circle">` é o [ícone de adição](https://fontawesome.com/v4.7.0/icon/plus-circle) do [Font Awesome](https://fontawesome.com/v4.7.0/icons/) No modelo inicial, o Font Awesome já estava vinculado ao arquivo `public/index.html`.

Os elementos do formulário como `<input>`, `<select>` e `<textarea>` no React são ligeiramente diferentes daqueles do HTML. Em HTML, eles próprios são responsáveis por lidar com a entrada do usuário e atualizar seus respectivos valores. Mas no React, os formulários são controlados por componentes usando o estado. Saiba mais sobre os formulários React [aqui](https://reactjs.org/docs/forms.html).

Crie um valor de estado e atualize-o toda vez que a entrada mudar usando a função `handleChange`.

```jsx
import React, { useState } from 'react'; // <–– importa o hook useState
import firebase from '../Firebase';

function Input() {
  const [tarefa, setTarefa] = useState(''); // <–– cria a variável de estado

  function handleChange(e) {
    setTarefa(e.target.value); // <–– atualiza o valor do estado
  }

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={tarefa}
        onChange={handleChange}
      />
      <button className="add-btn">
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
        <span id="btn-text">Adicionar Tarefa</span>
      </button>
    </div>
  );
}

export default Input;
```

## Operação Criar

Vamos adicionar os dados inseridos no banco de dados quando o usuário clicar no botão `Adicionar Tarefa`.

Adicione um atributo `onClick` que invoca a função `handleClick`.

```html
<button className="add-btn" onClick={handleClick}>
  <i className="fa fa-plus-circle" aria-hidden="true"></i
  ><span id="btn-text">Adicionar Tarefa</span>
</button>
```

Agora vamos escrever a função `handleClick`.

Os dados no Firebase são estruturados como coleções que podemos acessar por meio de `referências`.

```js
function handleClick() {
  const tarefaRef = firebase.database().ref('tarefa'); // <—— criando referência na base de dados
  // código vai aqui
}
```

Para adicionar dados ao banco de dados, você pode usar `set()` para salvar dados em uma referência especificada, substituindo quaisquer dados existentes naquele caminho.

Usamos o método `push()` para anexar dados a uma lista em aplicativos com vários usuários. O método `push()` gera uma chave exclusiva sempre que um novo filho é adicionado à referência especificada do Firebase.

**Mais informações:** Ao usar essas chaves geradas automaticamente para cada novo elemento na lista, vários clientes podem adicionar filhos ao mesmo local simultaneamente sem conflitos. A chave única gerada por `push()` é baseada em um período de tempo, sendo assim os itens da lista são automaticamente ordenados cronologicamente.

⚠ **Nota**: Usar `set()` sobrescreve os dados no local especificado, incluindo qualquer nó filho.

```js
function handleClick() {
  const tarefaRef = firebase.database().ref('tarefa');
  const novaTarefaRef = tarefaRef.push();
  const afazer = {
    tarefa,
    feita: false,
  };
  novaTarefaRef.set(afazer);
  setTarefa('');
}
```

Aqui 👆, adicionamos os dados que obtemos como entrada no banco de dados. Por padrão, o afazer não vai estar feito. Depois que os dados são adicionados ao banco de dados, o campo de entrada é limpo definindo `tarefa` para uma string vazia (`setTarefa("")`).

Seu código final no arquivo Input.js deve se parecer com isso.

```jsx
import React, { useState } from 'react';
import firebase from '../Firebase';

function Input() {
  const [tarefa, setTarefa] = useState('');

  function handleChange(e) {
    setTarefa(e.target.value);
  }
  function handleClick() {
    const tarefaRef = firebase.database().ref('tarefa');
    const novaTarefaRef = tarefaRef.push();
    const afazer = {
      tarefa,
      feita: false,
    };
    novaTarefaRef.set(afazer);
    setTarefa('');
  }

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={tarefa}
        onChange={handleChange}
      />
      <button className="add-btn" onClick={handleClick}>
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
        <span id="btn-text">Adicionar Tarefa</span>
      </button>
    </div>
  );
}

export default Input;
```

Agora importe o `Input.js` no `App.js` e cheque a saída adicionando um pouco de dados.

```jsx
import React from 'react';
import Input from './components/Input'; // <—— importando o Input.js
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>App de Tarefas</h1>
      <Input />
    </div>
  );
}

export default App;
```

![Saída com texto](https://cdn.hackclub.com/rescue?url=https://cloud-792qf1oid.vercel.app/0input.js.png)

Parece que funciona, não é?

![Banco de dados](https://cdn.hackclub.com/rescue?url=https://cloud-792qf1oid.vercel.app/1input_to_database.png)

Os dados que você adicionou por meio de `input` serão adicionados à nossa Firebase Database! Sensacional!

## Criando listas de tarefas

Crie um novo componente, `ListaDeTarefas.js`, na pasta de componentes. Importe `React`, `Firebase`, crie e exporte um componente funcional.

```jsx
import React, { useState, useEffect } from 'react';
import firebase from '../Firebase';

function ListaDeTarefas() {
  {
    /*código vai aqui*/
  }
  return <div className="todo-list"></div>;
}

export default ListaDeTarefas;
```

## Operação Ler

Vamos então ler os dados no banco de dados, buscá-los em um array e exibi-los na tela.

Crie uma variável de estado `listaDeTarefas`. Este será o array vazio ao qual adicionamos os dados buscados no banco de dados.

```jsx
const [listaDeTarefas, setListaDeTarefas] = useState([]); // <—— variável de estado
```

Leremos os dados apenas uma vez depois que o componente for renderizado. Para fazer isso, usaremos o hook `useEffect`.

```jsx
useEffect(() => {
  // código vai aqui
}, []);
```

Temos nossos dados armazenados em uma referência especificada(local).

Para ler os dados em um caminho e ouvir as alterações, usaremos o método `on()` do `firebase.database().ref()` para observar os eventos. O método `on()` é usado para sincronizar dados em tempo real.

```jsx
useEffect(() => {
  const tarefaRef = firebase.database().ref('tarefa');
  // Sincronizando
  tarefaRef.on();
}, []);
```

O método `on()` recebe dois parâmetros:

1. O tipo de evento -> como você controla o nível de sincronização do banco de dados em tempo real.

2. A função de retorno da chamada -> o tipo de evento acima controla a função de retorno da chamada.

Aqui, vamos usar o evento `value`.

| Evento  | Uso típico                                                  |
| ------- | ----------------------------------------------------------- |
| `value` | Lê e escuta as alterações em todo o conteúdo de um caminho. |

A função de retorno da chamada é chamada sempre que houver uma alteração no local especificado no banco de dados. O retorno de chamada do evento passa um `snapshot` contendo todos os dados naquele local, incluindo dados dos filhos. Se não houver dados, o snapshot retornará `null` quando você chamar `val()` nele.

```jsx
tarefaRef.on('value', (snapshot) => {
  const tarefas = snapshot.val(); // <—— valor dos dados do snapshot
});
```

⭐ **Importante**: O evento `value` é chamado toda vez que os dados são alterados na referência de banco de dados especificada, incluindo alterações nos filhos. Para limitar o tamanho de seus snapshots, adicione o ouvinte de evento apenas no nível mais baixo necessário para observar as mudanças. Por exemplo, adicionar o ouvinte à raiz do seu banco de dados não é recomendado.

Agora precisamos dos dados como um array para colocá-los no estado. Declare um array vazio e adicione o `id` e a `tarefa` no array.

```jsx
tarefaRef.on('value', (snapshot) => {
  const tarefas = snapshot.val();
  const listaDeTarefas = [];
  for (let id in tarefas) {
    listaDeTarefas.push({ id, ...tarefas[id] }); // <—— adicionando tarefas à listaDeTarefas
  }
  setListaDeTarefas(listaDeTarefas); // <—— setando o estado
});
```

Agora que temos os dados na `listaDeTarefas`, podemos mapeá-los para exibi-los.

Inicialmente, vai ser um array vazio. Portanto, temos que verificar se está vazio ou não e mapear ele.

Por enquanto, vamos exibir nossa lista usando a tag `<h1>`, mas mais tarde, vamos criar um componente separado para renderizá-la.

```jsx
return (
  <div className="todo-list">
    {listaDeTarefas
      ? listaDeTarefas.map((afazer) => <h1> {afazer.tarefa} </h1>)
      : null}
  </div>
);
```

Isso exibirá os dados que são recuperados do banco de dados. Certifique-se de importar e renderizar o componente `ListaDeTarefas` no `App.js`.

![Dados recuperados](https://cdn.hackclub.com/rescue?url=https://cloud-792qf1oid.vercel.app/2reading_database.png)

Até agora, realizamos as operações **Create** e **Read**. Meio caminho feito!!!🙌

![Metade do caminho](https://cdn.hackclub.com/rescue?url=https://cloud-792qf1oid.vercel.app/7half_way_done_.gif)

Vamos continuar a trabalhar com as operações **Update** e **Delete**.

## Criando Item Tarefa

Crie outro arquivo, `Tarefa.js`, na pasta `components`. Importe React e Firebase. Além disso, crie um componente funcional que tenha um prop `tarefa`.

```jsx
import React from 'react';
import firebase from '../Firebase';

function Tarefa({ tarefa }) {
  return <div classsName="todo-item"></div>;
}

export default Tarefa;
```

Atualize a `ListaDeTarefas` importando `Tarefa` e renderizando-a.

```jsx
return (
  <div className="todo-list">
    {listaDeTarefas ? listaDeTarefas.map((tarefa, i) => <Tarefa tarefa={ tarefa } key={ i } />) : null}
  </div>
)
```

Aqui, 👆 estamos renderizando um componente `Tarefa` para cada tarefa e também passando os dados para esse componente como prop, usando o método `map()`. Saiba mais sobre `map()` [aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Se você quiser saber mais sobre a renderização de vários componentes, cheque [aqui](https://reactjs.org/docs/lists-and-keys.html#rendering-multiple-components).

Seu componente final ListaDeTarefas deve se parecer com este:

```jsx
import React, { useState, useEffect } from 'react';
import Tarefa from './Tarefa';
import firebase from '../Firebase';

function ListaDeTarefas() {
  const [listaDeTarefas, setListaDeTarefas] = useState([]);
  useEffect(() => {
    const tarefaRef = firebase.database().ref('tarefa');
    tarefaRef.on('value', (snapshot) => {
      const tarefas = snapshot.val();
      const listaDeTarefas = [];
      for (let id in tarefas) {
        listaDeTarefas.push({ id, ...tarefas[id] });
      }
      setListaDeTarefas(listaDeTarefas);
    });
  }, []);
  return (
    <div className="todo-list">
      {listaDeTarefas
        ? listaDeTarefas.map((tarefa, i) => <Tarefa tarefa={tarefa} key={i} />)
        : null}
    </div>
  );
}

export default ListaDeTarefas;
```

Vá para o componente `Tarefa` e vamos exibir os dados.

```jsx
function Tarefa({ tarefa }) {
  return (
    <div className="todo-item">
      <div className="task">
        <input type="checkbox" />
        <p>{tarefa.tarefa}</p>
      </div>
      <div className="buttons">
        <button className="del-btn"><i className="fa fa-trash" aria-hidden="true"></i></button>
      </div>
    </div>
  )
}
```

Isso vai exibir as tarefas com um botão `caixa de seleção` e `deletar`.

Vamos adicionar funcionalidade aos botões.

## Operação Atualizar

Quando a `caixa de seleção` é marcada, a tarefa é concluída. Vamos atualizar o valor de `feita` para `true`.

Adicione o atributo `onClick` à caixa de seleção que invoca a função `completarTarefa`. Se a `caixa de seleção` está marcada ou não depende do valor `feita`.

```jsx
<input type="checkbox" onClick={ completarTarefa } checked={ tarefa.feita }/>
```

Para escrever simultaneamente para filhos específicos de um nó sem sobrescrever outros filhos, podemos usar o método `update()`. Quando chamamos `update()`, ele atualiza os valores filhos de nível inferior especificando um caminho para a chave.

```jsx
function completarTarefa() {
  const tarefaRef = firebase.database().ref('tarefa')
  tarefaRef.child(tarefa.id).update({ // <—— atualiza o objeto com a chave tarefa.id
    feita: !tarefa.feita
  })
}
```

O código acima atualiza o `feita` no banco de dados.

Clique em `Run` e verifique se está funcionando.

![tarefa concluída](https://cdn.hackclub.com/rescue?url=https://cloud-792qf1oid.vercel.app/3updating_database.png)

Além disso, vamos adicionar um estilo para as tarefas feitas antes de nossa função `completarTarefa()`.

```jsx
const feitaEstilo = { // <—— estilo para tarefa feita
    fontStyle: "italic",
    opacity: 0.4,
    textDecoration: "line-through"
}
```

E aplicar esse estilo ao parágrafo que contém nossa tarefa.

```jsx
<p style={tarefa.feita ? feitaEstilo : null} >{tarefa.tarefa}</p>
```

Nosso código até agora:

```jsx
import React from 'react'
import firebase from '../Firebase'

function Tarefa({ tarefa }) {
  const feitaEstilo = { // <—— estilo para tarefa feita
    fontStyle: "italic",
    opacity: 0.4,
    textDecoration: "line-through"
  }
  function completarTarefa() {
    const tarefaRef = firebase.database().ref('tarefa')
    tarefaRef.child(tarefa.id).update({
      feita: !tarefa.feita
    })
  }
  return (
    <div className="todo-item">
      <div className="task">
        <input type="checkbox" onClick={completarTarefa} checked={tarefa.feita} />
        <p style={tarefa.feita ? feitaEstilo : null} >{tarefa.tarefa}</p>
      </div>
      <div className="buttons">
        <button className="del-btn"><i className="fa fa-trash" aria-hidden="true"></i></button>
      </div>
    </div>
  )
}

export default Tarefa
```

Agora, nossas tarefas concluídas serão estilizadas devidamente.

![riscadas](https://cdn.hackclub.com/rescue?url=https://cloud-792qf1oid.vercel.app/5struckoff.png)

Vamos adicionar funcionalidade ao nosso botão `deletar`.

## Operação Deletar

Adicione o atributo `onClick` ao botão com a função `deletarTarefa`.

```jsx
<button className="del-btn" onClick={ deletarTarefa }>
  <i className="fa fa-trash" aria-hidden="true"></i>
</button>
```

A maneira mais simples de deletar dados é chamar `remove()` fazendo referência à um local de dados.

```jsx
function deletarTarefa() {
  const tarefaRef = firebase.database().ref('tarefa')
  tarefaRef.child(tarefa.id).remove()
}
```

Nosso componente Tarefa vai ficar assim:

```jsx
import React from 'react'
import firebase from '../Firebase'

function Tarefa({ tarefa }) {
  const feitaEstilo = {
    fontStyle: "italic",
    opacity: 0.4,
    textDecoration: "line-through"
  }
  function completarTarefa() {
    const tarefaRef = firebase.database().ref('tarefa')
    tarefaRef.child(tarefa.id).update({
      feita: !tarefa.feita
    })
  }
  function deletarTarefa() {
    const tarefaRef = firebase.database().ref('tarefa')
    tarefaRef.child(tarefa.id).remove()
  }
  return (
    <div className="todo-item">
      <div className="task">
        <input type="checkbox" onClick={completarTarefa} checked={tarefa.feita} />
        <p style={tarefa.feita ? feitaEstilo : null} >{tarefa.tarefa}</p>
      </div>
      <div className="buttons">
        <button className="del-btn" onClick={deletarTarefa}><i className="fa fa-trash" aria-hidden="true"></i></button>
      </div>
    </div>
  )
}

export default Tarefa
```

![Excluir tarefa](https://cdn.hackclub.com/rescue?url=https://cloud-792qf1oid.vercel.app/4deleting_database.png)

É isso aí, pessoal! Concluímos nosso App de Tarefas. Verifique o código final [aqui](https://repl.it/@VitorVavolizza/app-de-tarefas-final#src/App.js). ✌

![Concluído](https://cdn.hackclub.com/rescue?url=https://cloud-792qf1oid.vercel.app/6you_did_it_.gif)

## Hackeando

Agora é sua vez de personalizar.

* Enlouqueça com os estilos. Crie seu aplicativo de tarefas totalmente customizado.
* Adicione mais funcionalidades. Por exemplo: - alertar antes de excluir qualquer tarefa, etc.
* Filtre as tarefas como concluídas e à fazer.

Estes são alguns exemplos para inspirar seu projeto.

* **Exemplo-1**: Um App de Tarefas onde você pode editar a tarefa adicionada, usando [Material UI](https://material-ui.com/) para componentes de estilo.

     [Demo](https://todo-list-app.hcbjcentro.repl.co/). [Código-fonte](https://repl.it/@hcbjcentro/Todo-List-App#src/App.js).
    
* **Exemplo-2**: Formulário de contato usando React e Firebase.

     [Demo](https://contact-form.hcbjcentro.repl.co/). [Código-fonte](https://repl.it/@hcbjcentro/Contact-form#src/App.js).

* **Exemplo-3**: aplicativo de Lista telefônica (mais entradas para o banco de dados)

     [Demo](https://phonebook.hcbjcentro.repl.co/). [Código-fonte](https://repl.it/@hcbjcentro/phonebook#build/index.html).

Agora que você terminou de construir este maravilhoso projeto, compartilhe sua bela criação com outras pessoas! Lembre-se, é só mandar a URL do seu projeto!