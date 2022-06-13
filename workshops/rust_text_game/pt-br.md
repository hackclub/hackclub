---
name: "Aventura de Texto com Rust"
description: "Construa uma aventura de texto como seu primeiro programa em Rust"
author: "@panos, @cfanoulis, @vitorvavolizza"
img: "https://hackropolis.is-ne.at/0oMCQ5.png"
locales: 'pt-br'
---

# Faça um jogo de aventura baseado em texto com Rust!

A programação em Rust te intriga, porém você não tem ideia de onde começar?

Então, nesse caso, esse workshop é para você! Não importa se você é um iniciante ou já está familiarizado com o Rust - Todo o processo será escrito com o máximo de detalhes possíveis, e eu me certifiquei de incluir muitos recursos adicionais durante todo o workshop!

**Nota:** Este workshop foi elaborado com todos os tipos de níveis de habilidade em mente e pode levar de 30 minutos a uma hora e meia, dependendo do nível de familiaridade com Rust.

- Se você está familiarizado com programação, sinta-se à vontade para pular para a primeira parte da _Parte 3_.
- Se você também estiver familiarizado com o básico do Rust e com a criação de um novo projeto em Rust, pule para a _Parte 4_.
- Se você for trabalhar com outras pessoas neste workshop, certifique-se de que esteja familiarizado com o nível de habilidade delas. Esta oficina explica tudo o que está sendo feito com detalhes para acomodar a todos.

## Demo

Você pode ver uma demonstração de um exemplo que preparamos no [asciinema.org](https://asciinema.org/a/8ZB2tvI4NlNkCpKdkY7Wrn8KC).

O código completo pode ser visto [no GitHub](https://github.com/hackropolis/stickerquest) e no [repl.it](https://repl.it/@hackropolis/stickerquest).

## Parte 1: Configuração 🔰

A fim de agilizar o processo, utilizaremos o [repl.it](https://repl.it).

### Preparando seu projeto

Usar o repl.it é vantajoso no sentido de que você não precisa de nada além de um navegador para usá-lo. Você pode criar uma conta [aqui](https://repl.it/signup) e criar um novo projeto Rust indo para [https://repl.it/languages/rust](https://repl.it/languages/rust).

Depois de fazer isso, execute `cargo init --name app-texto-rust` na aba do Shell.

## Parte 2: Estrutura de arquivos e o gerente de pacotes de carga 🏗

Seu projeto no Rust, no mínimo, deve ter este aspecto:

```
Cargo.toml
main.rs
```

[**Cargo**](https://doc.rust-lang.org/cargo/) é o [gestor de pacotes](https://pt.wikipedia.org/wiki/Sistema_gestor_de_pacotes) que é usado entre a grande maioria dos desenvolvedores do Rust (também conhecida como "Rustaceanos"). É uma ferramenta conveniente que lida com muitas coisas, incluindo, mas não se limitando às seguintes:

- **Construir**: O processo que usamos para descrever o processo onde o [compilador](https://pt.wikipedia.org/wiki/Compilador) (neste caso, o **cargo**) traduz o código que você pode escrever e ler para um formato que seu computador possa entender.

- **Instalar bibliotecas de software ("caixas") e dependências**: O software depende de outras bibliotecas de software. O Cargo permite que você baixe bibliotecas de software que você encontrou na internet para seus projetos. Por exemplo, o Hack Clubber [@anirudhb](https://github.com/anirudhb) usou a biblioteca [Serenity](https://crates.io/crates/serenity) para interagir com o Discord de uma maneira muito mais fácil.

- **Distribuir seus programas**: Compartilhar é cuidar! O **Cargo** também pode ajudá-lo a publicar seu código no [crates.io](https://crates.io) junto com alguns detalhes adicionais que explicarei daqui a pouco. É particularmente útil em situações em que você deseja ser creditado por seu trabalho ou se você quiser usar [versões](https://pt.wikipedia.org/wiki/Versionamento_de_software). Todos estes detalhes estão incluídos no arquivo `Cargo.toml`, que explicarei em pouco tempo.

### Parte 2.1: O Manifesto (Cargo.toml)

O arquivo `cargo.toml` é o manifesto do seu projeto, que descreve seu projeto e suas dependências. Eis como seria um exemplo do arquivo `Cargo.toml`:

`Cargo.toml`:

```toml
[package]
name = "app-texto-rust"
version = "0.1.0"
authors = ["João Silva <joao.silva@exemplo.com>"]
edition = "2018"
```

- `name` define como seu programa é chamado.
- `version` define a versão de seu programa. É particularmente útil se você quiser emitir atualizações para as pessoas que estão utilizando seu programa!
- `authors` é onde você coloca os nomes das pessoas que escreveram o programa.
- `edition` descreve a versão de Rust que você quer que este projeto utilize. Você deve mantê-la como `2018` para ter certeza de utilizar os recursos mais recentes.

Se você quiser adicionar mais de um autor, você deve separar cada autor com uma vírgula e usar aspas:

```toml
authors = ["João Silva <joao.silva@exemplo.com>", "Maria Silva <maria.silva@exemplo.com>"]
```

Há também alguns items adicionais como _tables_ e _keys_ que você deve dar uma olhada, tais como `license` ou `[[bin]]`. Você pode ler mais sobre o manifesto aqui: [https://doc.rust-lang.org/cargo/reference/manifest.html](https://doc.rust-lang.org/cargo/reference/manifest.html)

## Parte 3: Começando com o Rust 💫

Viva! Agora que a burocracia está fora do caminho, podemos finalmente chegar à parte divertida: Escrever código!

Para começar, vamos começar com algo simples para nos aconchegar escrevendo um programa ["Olá, Mundo!"](https://pt.wikipedia.org/wiki/Programa_Ol%C3%A1_Mundo).

Se você está familiarizado com o essencial da programação e do Rust, sinta-se à vontade para pular esta seção.

- Abra o arquivo `main.rs`. Você verá o seguinte (ou algo semelhante):

```rust
fn main() {
  println!("Hello World!");
}
```

Vamos fazer um rápido resumo do que está acontecendo aqui:

- `fn main()` define uma nova "função" chamada **_main()_**.

Esta é uma função muito importante! Quando os programas são executados, eles geralmente fazem o que a função main() lhes diz para fazer.

- `println!()` é uma função diferente que se destina a "imprimir" informações na tela do jogador.

Essa operação é chamada de "imprimir" porque executar um programa nem sempre envolvia telas - ao invés disso, impressoras reais estavam envolvidas!

- _Ponto-e-vírgula_ significa que a instrução termina aí. Eles estão lá para dar ordem e coerência ao nosso código.

A fim de entender a importância dos ponto-e-vírgula, farei com que o computador imprima duas coisas diferentes em uma linha:

`main.rs`:

```rust
fn main() {
  println!("Olá, Mundo");
  println!("Está um dia lindo lá fora!");
}
```

É possível perceber duas coisas a a partir daqui;

- Os espaços não importam. (Mas eles fazem tudo parecer muito mais agradável, não é mesmo?)

- Usar ponto-e-vírgula é como dividir as instruções que você está dando ao computador.

---

Agora, vamos executar o código que você escreveu. Abra um terminal na pasta em que seu projeto reside e execute os seguintes comandos:

```bash
cargo build
./target/debug/app-texto-rust
```

Se você tiver sorte o suficiente, agora você deve ver um pedaço de texto alegre dizendo `Hello World!`

**Lembrete:** Se você estiver usando o repl.it, você também pode simplesmente clicar no botão "Run" (Executar)!

## Parte 4: Escrevendo o jogo ✍

Muito bem, nosso objetivo é escrever um programa que essencialmente narrará uma história ao jogador, dando-lhe instruções específicas. O jogador será capaz de afetar o curso da história com as decisões que ele entrará no programa.

Vamos começar!

### Parte 4.1: Criando um pouco de texto

Neste momento, nosso código se parece com isso.

```rust
fn main() {
  println!("Hello World!");
}
```

Porém, `Hello World!` não se parece como algo que se veria em um jogo, certo? Então, vamos mudar isso. Mude o texto dentro das citações para algo mais apropriado. Vamos mudá-lo para `Olá corajoso explorador! Quer embarcar em uma aventura?`.

Agora execute seu programa novamente. Em vez de `Hello World!`, coloque o que você escreveu acima.

### Parte 4.2: Entrada do usuário

Um jogo precisa dar a possibilidade de interagir com ele e modificar a aventura.

Assim, vamos escrever uma nova função que aceitará ler a resposta do jogador e reagir de acordo.

Para simplificar, o jogador só deverá responder com uma palavra começando com "S", que inclui palavras como "Sim", "Si", "SimSim", ou "Sanduíche" (como uma consequência engraçada não intencional), da mesma forma com a letra "N". Para isso, vamos criar um novo arquivo com o nome de `prompts.rs` e vamos escrever o seguinte nele:

`main.rs`:

```rust
use std::io;

fn prompt() -> bool {
  let mut entrada = String::new();
  io::stdin().read_line(&mut entrada).unwrap();

  return entrada.to_ascii_lowercase().starts_with("s");
}

fn main() {...}
```

Eu sei que isto é bastante para absorver, mas não se preocupe! Vamos passar pelo que está acontecendo aqui mais uma vez, linha por linha:

- `use std::io;`

  A importação de bibliotecas nos permite utilizar código instalado pelo cargo, ou empacotado no Rust (biblioteca padrão). Ao importar `std::io` (onde `std` significa biblioteca padrão, também conhecida como Rust), ganhamos acesso a mais funções que nos permitem realizar operações de "entrada/saída" (como `println!()`, mas mais avançadas!).

- `fn prompt() -> bool {`

  Todas as funções destinam-se a devolver alguma saída, que é visível para o jogador, para outros programas ou partes do mesmo programa. Neste caso, definimos uma nova função chamada `prompt()`, que retornará um valor conhecido como `bool`, que significa "boolean" (booleano). Os tipos de dados booleanos só podem aceitar dois valores, que são denotados com as palavras `true` (verdadeiro) ou `false` (falso) na linguagem de programação Rust. Eles recebem o nome do matemático George Boole e são possivelmente a instância mais simples da [álgebra booliana](https://pt.wikipedia.org/wiki/%C3%81lgebra_booliana) no campo da ciência da computação.

- `let mut entrada = String::new();`

  Aqui, criamos um 'String' _mutável_. **Mutabilidade** define se você pode alterar o valor de uma variável. Já que estamos _inicializando_ uma nova string (o que significa que declaramos que a variável `entrada` existe e é uma `String`, mas ainda não houve nenhum valor que tenha sido _declarado_ a ela).

- `io::stdin().read_line(&mut entrada).unwrap();`

  Aqui, utilizando o módulo std `io` novamente, capturamos o que quer que o jogador esteja digitando até que ele aperte `Enter` dentro da variável `entrada`. A `&mut entrada` que você vê é a sintaxe de Rust para criar uma _referência_ mutável para uma variável. Neste caso, é assim que o método `read_line` é capaz de ler a partir de seu buffer de entrada padrão; ele coloca os bytes na memória referenciada pela referência mutável que é passada. Neste caso, você está passando uma referência mutável para `entrada`, então a linha resultante será colocada _diretamente_ naquela `String` sem que nenhuma nova "string" seja criada. Note que tivemos que adicionar explicitamente o especificador `mut` à nossa referência; as referências e variáveis no Rust são instanciadas como imutáveis, a menos que especifiquemos o contrário. Em nosso caso, estamos especificando-a como mutável para que possa ser, bem, mutada pelo método `read_line`.

- `return entrada.to_ascii_lowercase().starts_with("s");`

  E finalmente, verificamos se a `entrada` com todas as letras minúsculas começa com `s`. Se isso acontecer, significa que a entrada foi sim (ou similar), e retorna `true` (verdadeiro). Se não, é seguro assumir que o jogador respondeu negativamente. Portanto, devolvemos o valor `false` (falso).

### Parte 4.3: Verificando a resposta!

A fim de escrever uma história, faremos nosso programa reagir com base nas respostas que o jogador der. Em outras palavras, esta é a parte em que você escreve a lógica de seu próprio jogo! Dentro da função `main`, e em cima da macro `println!` (= uma função cujo nome termina com `!`), adicione o seguinte:

```rust
let resposta = prompt();
```

Agora você tem uma variável (imutável) chamada `resposta`, cujo tipo é um `bool`eano ( `verdadeiro` ou `falso`). Agora podemos verificar a resposta do jogador e tomar um curso de ação dependendo da situação:

Vamos avaliar a resposta que o jogador nos deu!

```rust
// Se a resposta do jogador for sim, imprima a mensagem
if resposta == true {
  println!("Êêê! Suas aspirações irão trazer coisas boas em sua vida.");
// caso contrário, se a respota for não (ou qualquer outra coisa!)
// imprima uma mensagem diferente, menos amigável
} else {
  println!("Nãão, acho que deu ruim!");
}
```

Agora você pode criar um jogo adicionando, de forma semelhante, mais prompts, depois utilizando-os nos blocos `if... else` do prompt anterior e conectá-los.

### Parte 4.4: Módulos do Rust

Uau... já são muitas linhas escritas. Se acrescentássemos somente mais uma, isso já ficaria muito confuso! Já que estamos prestes a escrever muitas linhas diferentes que aparecerão dependendo das escolhas que o jogador fizer, pode valer a pena dividir nosso jogo em arquivos diferentes, em vez de apenas colocar tudo no `main.rs`!

Então, vamos criar um novo arquivo chamado `prompts.rs`! A estrutura de nosso diretório deve se parecer com esta:

```
Cargo.toml
main.rs
prompts.rs
```

A fim de importar as funções que vamos escrever no `prompts.rs`, devemos acrescentar `mod prompts` na nossa primeira linha, para informar o compilador sobre a existência de nosso novo arquivo. Seu código deve agora estar assim:

`main.rs`:

```rust
use std::io;
mod prompts;

fn prompt() -> bool {
  let mut entrada = String::new();
  io::stdin().read_line(&mut entrada).unwrap();

  return entrada.to_ascii_lowercase().starts_with("s");
}

fn main() {
  let resposta = prompt();
  // Se a resposta do jogador for sim, imprima a mensagem
  if resposta == true {
    println!("Êêê! Suas aspirações irão trazer coisas boas em sua vida.");
  // caso contrário, se a respota for não (ou qualquer outra coisa!)
  // imprima uma mensagem diferente, menos amigável
  } else {
    println!("Nãão, acho que deu ruim!");
  }
}
```

Você pode ler mais sobre os módulos Rust aqui: [https://doc.rust-lang.org/rust-by-example/mod.html](https://doc.rust-lang.org/rust-by-example/mod.html)

O Rust é instruído a executar a função chamada `intro`, que é exportada do `prompts`. Esta é uma função **associada**. Mas, atualmente, ela não existe. Vamos implementá-la agora?

Abra o arquivo `prompts.rs`, e cole o seguinte:

`prompts.rs`:

```rust
use std::io;

fn prompt() -> bool {
  let mut entrada = String::new();
  io::stdin().read_line(&mut entrada).unwrap();

  return entrada.to_ascii_lowercase().starts_with("s");
}

pub fn intro() {
  let resposta = prompt();
  // Se a resposta do jogador for sim, imprima a mensagem
  if resposta == true {
    println!("Êêê! Suas aspirações irão trazer coisas boas em sua vida.");
  // caso contrário, se a respota for não (ou qualquer outra coisa!)
  // imprima uma mensagem diferente, menos amigável
  } else {
    println!("Nãão, acho que deu ruim!");
  }
}
```

Você notará que o código é semelhante, mas ele tem algumas pequenas mudanças:

- Antes de mais nada, removemos `mod prompts;`. Não queremos utilizar o arquivo com o qual estamos trabalhando.
- Renomeamos a função `main` para `intro`. Como a função `main` têm um nome especial para Rust, tivemos que mudar seu nome.
- Também acrescentamos o modificador `pub` à nossa função, o que nos permite chamar essa função de outros arquivos (que importam `prompt.rs`).

Vamos agora utilizar a função que escrevemos no `main.rs`. Substitua todo o código na função `main.rs` por apenas uma chamada para a função intro, como abaixo:

`main.rs`:

```rust
mod prompts;

fn main() {
  prompts::intro();
}
```

### Parte 4.4: Escrevendo um jogo completo

A fim de tornar o jogo mais satisfatório, divertido e cativante, é preciso haver mais diálogo!

`main.rs`:

```rust
mod prompts;

fn main() {
  prompts::intro();
}
```

`prompts.rs`:

```rust
use std::io;

// retorna um bool, aceitando texto como entrada
fn prompt() -> bool {
  let mut entrada = String::new();
  io::stdin().read_line(&mut entrada).unwrap();
  return entrada.to_ascii_lowercase().starts_with("s");
}

// primeiro prompt
pub fn intro() -> () {
  println!("Alguém está te ligando, você atende?");

  // se prompt() retorna true (verdadeiro), é suficiente para o rust continuar!
  // algumas outras expressões que também são verdadeiras são 2 == 2,
  // 1 > 0, ou apenas a palvara true.
  if prompt() {
    telefone_atendido();
  } else {
    println!("Você desligou o celular. Você não descobriu do que se tratava. Quem sabe um dia você descubra...");
  }
}

// segundo prompt
pub fn telefone_atendido() -> () {
  println! ("Você ouve uma voz do outro lado da linha: 'Já faz muito tempo, vamos se encontrar?'");
  println!("Sua voz parece vagamente familiar, e ela soa um pouco angustiada. Você aceita?");

  if prompt() {
    desafio_aceito();
  }
  else {
    println!("Você desligou o celular. Você não descobriu do que se tratava. Quem sabe um dia você descubra..");
    println!("VOCÊ GANHOU! Continua...");
  }
}

// terceiro prompt
pub fn desafio_aceito() -> () {
  println!("Você se encontra com um velho amigo e ele lhe entrega uma bolsa cheia de dinheiro");
  println!("Seu amigo diz: 'Pegue a bolsa, não faça perguntas.");
  println!("Parabéns! Você agora é rico e já cobriu o suficiente suas necessidades materiais, mas será que isso representa a verdadeira felicidade? Você pode ter ganho o jogo, mas não ganhou na vida.");
  println!("GAME OVER!");
}
```

O que está acontecendo aqui é bastante simples: Se o jogador atender seu telefone (`telefone_atendido()`), ele prossegue. Se não atender, ele perde. Depois de ouvir o que o chamador tem a dizer, ele perderá se aceitar a proposta do chamador (`desafio_aceito()`), mas ele ganhará se não o fizer.

Não apenas enganamos o jogador tomando as decisões mais óbvias, e depois jogando esta bomba nuclear moral na cara dele, mas também podemos preparar o terreno para uma sequência, caso eles decidam que receber muito dinheiro de graça é _muito bom para ser verdade!_

Além dos comentários no próprio código, há alguns detalhes importantes a serem observados:

- Neste exemplo, temos duas respostas possíveis, portanto, a história segue sempre dois caminhos totalmente diferentes. A maioria dos videogames acaba dando ao jogador a ilusão de escolha, fazendo-o passar por consequências de curto prazo e depois distorcendo a história de tal forma que tudo funciona da mesma maneira ou de uma maneira ligeiramente diferente, e eles acabam dando-lhe um final diferente. Títulos aclamados pela crítica, como **The Last of Us**, **The Witcher**, **Night in the Woods**, **Mass Effect** ou **Assassin's Creed** fazem isso.
- No entanto, ainda assim, acabamos dando ao jogador um diálogo diferente a cada vez. Em nosso caso, é que quase todas as decisões erradas expulsam o jogador do jogo.
- Você pode querer lidar com todas as cláusulas `if... else` e a lógica do jogo em uma função, em vez de lidar com a lógica por todo o lado. No entanto, acreditamos que a maneira como escrevemos deixa espaço para mais flexibilidade.
- Também movemos todas as respostas corretas para sua própria função, para manter nosso código mais claro

Parabéns! Você acaba de escrever seu primeiro jogo em Rust. 🎉

![GIF de um personagem de cinema dizendo "Bem-vindo ao clube!" dentro de um clube, do filme "Scott Pilgrim vs. O Mundo"](https://hack.af/welcome)

### Parte 5: Ideias! 💡

Aqui estão um monte de ideias que o ajudarão a dar um passo além:

- Você pode fazer um jogo de dados onde o jogador pode lançar um dado se eles entrarem com a palavra "lançar"?
- Você pode incluir mais opções em seu jogo para que o jogador possa escolher? (**Dica**: Booleanos aceitam apenas dois valores. Poderia retornar outro tipo de valor que lhe permita inserir mais respostas, e depois avaliar a resposta no próprio prompt?)
- Você pode fazer um jogo em que seu programa tenha um número aleatório, o jogador tenta adivinhá-lo e se ele acertar, o jogo parabeniza o jogador? (**Dica:** Em vez de um booleano, a função `prompt()` deve retornar um número em vez disso)
- Você pode fazer um jogo baseado na sorte, onde você escolhe tamanhos de dados e tem que lançar um número mais alto do que o computador?
- E se você pudesse construir jogos completos **_com gráficos_**?

Aqui estão algumas dicas (em inglês):

- [The Rust Programming Language - Data Types](https://doc.rust-lang.org/book/ch03-02-data-types.html)
- [The Rust Programming Language - Patterns and Matching](https://doc.rust-lang.org/book/ch18-00-patterns.html)
- [Are we game yet?](https://arewegameyet.rs)

Você também pode conferir [este remix](https://repl.it/@hcbjcentro/StickerQuest-PT-BR) do código fonte deste workshop caso você fique preso, que implementa algumas das ideias apresentadas:

### Parte 6: Leitura adicional 📖

- [The Rust Programming Language - an in-depth guide to Rust. Este workshop foi inspirado no Capítulo 2 do livro](https://doc.rust-lang.org/book)
- [Rust By Example - Para aqueles que preferem exemplos de código em vez de páginas de documentação](https://doc.rust-lang.org/stable/rust-by-example/)
- [Rust's learning resources page - incluindo guias para cursos avançados sobre outros tópicos](https://www.rust-lang.org/learn)

Agora que você terminou de construir este maravilhoso projeto, compartilhe sua bela criação com outras pessoas! Lembre-se, é só mandar a URL do seu projeto!
