---
name: 'Jogo da Velha'
description: 'Crie o clássico jogo da velha com Python'
author: '@Prithul0218, @vitorvavolizza '
img: 'https://cloud-48w32714h.vercel.app/0image.png'
locales: 'pt-br'
---

O Jogo da Velha é um jogo que a maioria de nós já jogou quando estávamos entediados na aula. É também um desafio clássico de programação quando se aprende uma nova linguagem. Por mais complicado que possa parecer no início, na verdade é bastante fácil de codificar e leva menos de 80 linhas.

![GIF mostrando o jogo Jogo da Velha rodando em um terminal](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/jogo-da-velha/img//jogando.gif)

Neste workshop, faremos o Jogo da Velha em Python, e você poderá jogar com um amigo usando o terminal.

## Começando

Vamos usar o [repl.it](http://repl.it) para este projeto. Basta ir para [https://repl.it/languages/python3](https://repl.it/languages/python3) para iniciar o ambiente. É muito fácil! Criar uma conta garantirá que você não perca seu código, mas você pode fazer isso depois que terminarmos este projeto. Vamos começar a programar!

## Imprimindo o tabuleiro

Primeiro, precisamos de um tabuleiro para jogar o jogo, é claro. Vamos continuar no terminal! Mas espere, você não pode realmente desenhar no terminal. O que podemos fazer é imprimir linhas horizontais com `--` e linhas verticais com `|`.

```python
   |   |   
---|---|---
   |   |   
---|---|---
   |   |   
```

Vamos começar definindo nossa função principal. Vamos dar-lhe o nome de JogoDaVelha. Você pode ir em frente e desenhar um tabuleiro com `print`. Não se esqueça de executar a função principal no final.

```python
def JogoDaVelha():
  print("   |   |   ")
  print("---|---|---")
  print("   |   |   ")
  print("---|---|---")
  print("   |   |   ")

JogoDaVelha();
```

Ótimo! Imprimimos nosso tabuleiro no terminal. Agora podemos salvar os dados dele em uma variável `tabuleiro`. Quando um jogador escolhe um número no tabuleiro, mudaremos o número correspondente no `tabuleiro` com o sinal dos jogadores - `"X"` ou `"O"`.

```python
tabuleiro = [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Agora vá em frente e imprima o número da caixa com os valores do `tabuleiro` . Vamos também colocá-lo em uma função. Isto facilitará a impressão do tabuleiro mais tarde.

```python
def JogoDaVelha():
  tabuleiro = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  def ImprimirTabuleiro():
    print()
    print('', tabuleiro[0], "|", tabuleiro[1], "|", tabuleiro[2])
    print("---|---|---")
    print('', tabuleiro[3], "|", tabuleiro[4], "|", tabuleiro[5])
    print("---|---|---")
    print('', tabuleiro[6], "|", tabuleiro[7], "|", tabuleiro[8])
    print()

  ImprimirTabuleiro()

JogoDaVelha()
```

Você deve obter algo assim quando você executar o código:

![Mostrando a placa impressa em um terminal](https://cloud-hztfs3uyy.vercel.app/untitled.png)

Fantástico! Agora temos nossa placa impressa no terminal. Chegou a hora de receber os dados reais dos jogadores!

## Obtendo informações do usuário

Temos que receber a informação dos jogadores e mantê-la o mais simples possível. Os jogadores podem digitar qualquer número de 1 a 9 para colocar seu sinal correspondente, `X` ou `O` nas caixas. Vamos imprimir uma mensagem pedindo uma entrada mais tarde no laço de repetição principal. Por enquanto, vamos apenas criar uma função para obter um número válido do usuário. 

Qualquer número fora de 1 a 9 não está no tabuleiro. Podemos simplesmente verificar e converter a entrada para um `inteiro` e checar se ele está dentro de um intervalo de 1 a 10. O intervalo pode ser um pouco confuso, ele consiste em números começando pelo primeiro número, até o número antes do segundo número. Assim, `range(1, 5)` nos dá 1 a 4, `range(50, 100)` nos dá 50 a 99 e assim por diante.

```python
numero = input()

if numero not in range(1, 10):
  print("\nNúmero não está no tabuleiro.")
```

Qualquer entrada que não seja um número também é inaceitável. Portanto, você pode utilizar `try... except` para ver se houve algum problema ao converter o `numero` para um `inteiro`. Se o programa não conseguir convertê-lo para um `inteiro`, provavelmente não é um número e podemos imprimir um erro. 

Dessa forma:

```python
numero = input()
try:
  numero  = int(numero)
  if numero not in range(1, 10):
    print("\nNúmero não está no tabuleiro.")
    return
except ValueError:
    print("\nIsso não é um número. Tente novamente.")
```

Vamos agora colocar tudo isso em uma função. Também vamos precisar de um loop para que possamos pedir novamente uma entrada caso a anterior for inválida. Portanto, faça um `loop while` e mantenha-o funcionando até obter uma entrada válida do usuário. Alem disso, passe a checar se o número **está** na faixa ao invés de checar se ele **não** está na faixa. Finalmente, `retorne` o número válido. Vai parecer com isso:

```python
def PegarNumero():
  while True:
    numero = input()
    try:
      numero  = int(numero)
      if numero in range(1, 10):
        return numero
      else:
        print("\nNúmero não está no tabuleiro.")
    except ValueError:
      print("\nIsso não é um número. Tente novamente.")
      continue
```
Agora você pode ir em frente e executar a função para ver se ela filtra corretamente as entradas inválidas.

![Código pegando números entre 1 e 9](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/jogo-da-velha/img//testando-input.PNG)

## O loop principal

Agora chegou a hora divertida! Vamos rodar o jogo.

```python
acabou = False

while not acabou:
  ImprimirTabuleiro()
  print("Jogador X, escolha um espaço.")
  n = PegarNumero()
  tabuleiro[n - 1] = "X"
	

  ImprimirTabuleiro()
  print("Jogador O, escolha um espaço.")
  n = PegarNumero()
  tabuleiro[n - 1] = "O"
```

Precisamos de um loop para executar o jogo, pois haverá até 9 rodadas (uma para cada espaço). Portanto, vamos fazer um loop de tempo, desde que uma variável seja verdadeira. Dê para ela um nome como `acabou`. O laço funcionará desde que `acabou` seja `False` (falso). Podemos mais tarde mudar o `acabou` para `True` (verdadeiro) quando um jogador ganhar ou a partida for um empate. Em nosso loop, primeiro imprimimos o tabuleiro e pedimos uma entrada ao Jogador 1 ou simplesmente ao Jogador `X`. Depois imprimimos novamente o tabuleiro, mas desta vez com o sinal colocado no tabuleiro. Note que temos que reduzir o `PegarNumero()` em um para o índice de `tabuleiro[]`. Então, fazemos a mesma coisa para o Jogador `O`.

Ambos os jogadores devem agora ser capazes de colocar um sinal em seus turnos. 

![Código recebendo entrada de ambos os jogadores](https://raw.githubusercontent.com/hack-club-brasil/v1/main/docs/workshops/jogo-da-velha/img//turnos.PNG)

Mas, nunca verificamos se um jogador ganhou ou se os jogadores ficaram sem jogadas. Vamos agora fazer isso a seguir.

## Checando pela vitória: Quadrado Mágico

Esta é a parte mais emocionante do jogo, vamos descobrir qual jogador ganha. Há 8 maneiras de um jogador ganhar neste jogo, que são as linhas retas em 3 linhas verticais, 3 colunas ou 2 combinações diagonais. 

Há algumas maneiras possíveis de verificar se ganhamos. Um dos truques mais comuns é ter uma matriz de possíveis combinações vencedoras, que como você provavelmente já pode adivinhar, seria uma longa lista de matriz com 8 combinações. Em seguida, cruzá-la com nosso tabuleiro para encontrar uma combinação. Enquanto isso funciona, não é nem eficiente nem divertido. 
O que vamos usar é um [quadrado mágico](https://pt.wikipedia.org/wiki/Quadrado_m%C3%A1gico) ✨. É uma grade quadrada de números que quando somados em linhas ou colunas ou na diagonal, sempre somam um número mágico. Que, em nosso caso, será 15. Esta foto da Wikipedia ilustra bem:

![https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Magicsquareexample.svg/1280px-Magicsquareexample.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Magicsquareexample.svg/1280px-Magicsquareexample.svg.png)

Podemos colocar todos os números inteiros no quadrado sequencialmente em uma matriz, e somar os valores de `X` e `O` no `tabuleiro` para ver se eles soma 15. Quem conseguir 15 primeiro é o vencedor. 

Mais sobre o algoritmo do quadrado mágico é bem explicado aqui: [https://qastack.com.br/programming/1056316/algorithm-for-determining-tic-tac-toe-game-over](https://qastack.com.br/programming/1056316/algorithm-for-determining-tic-tac-toe-game-over)

## Verificando a vitória: O código

Portanto, vamos escrever o código para isso. É muito mais fácil do que você imagina. Primeiro precisaremos adicionar os números do quadrado mágico em uma variável. 

```python
QuadradoMagico = [4, 9, 2, 3, 5, 7, 8, 1, 6]
```

Agora nós podemos fazer uma função para verificar a vitória que usará o jogador (`"X"` ou `"O"`) como entrada e retorna verdadeiro se o jogador ganhar o jogo. 

```python
for x in range(9):
    for y in range(9):
      for z in range(9):
        if x != y and y != z and z != x:
          if tabuleiro[x] == jogador and tabuleiro[y] == jogador and tabuleiro[z] == jogador:
            if QuadradoMagico[x] + QuadradoMagico[y] + QuadradoMagico[z] == 15:
              print("Jogador", jogador ,"ganhou!\n")
              return True
```

Enquanto isso, podemos também fazer uma simples verificação para ver se a partida é um empate, contando o número de `X` ou de `O` colocados no tabuleiro. 

```python
for a in range(9):
    if tabuleiro[a] == "X" or tabuleiro[a] == "O":
      jogadas += 1

    # Se todas as caixas forem ocupadas por jogadores, é um empate.
    if jogadas == 9:
      print("O jogo acabou em um empate\n")
      return True
```

Vamos agora colocar esse código em uma função para que possamos facilmente chamá-la em nosso loop. Como o código é bastante longo, você pode copiar e colar se você tiver entendido como funciona.

```python
def ChecaVitoria(jogador):
  jogadas = 0

  for x in range(9):
    for y in range(9):
      for z in range(9):
        if x != y and y != z and z != x:
          if tabuleiro[x] == jogador and tabuleiro[y] == jogador and tabuleiro[z] == jogador:
            if QuadradoMagico[x] + QuadradoMagico[y] + QuadradoMagico[z] == 15:
              print("Jogador", jogador ,"ganhou!\n")
              return True

  for a in range(9):
    if tabuleiro[a] == "X" or tabuleiro[a] == "O":
      jogadas += 1
    if jogadas == 9:
      print("O jogo acabou em um empate\n")
      return True
```

Estamos quase terminando. Mas ainda temos uma pequena mudança. Se você tentar colocar um sinal em um espaço que já está ocupado, nosso código irá apenas sobrepor o sinal anterior com o novo. Isto não é permitido no jogo, então vamos consertar esse problema. 
É interessante ter uma função que podemos simplesmente chamar quando for a vez de um jogador, em vez de escrever o mesmo código duas vezes em um loop. Portanto, vamos fazer uma função para isso.

```python
def Turno(jogador):
  espaco_colocado = PegarNumero() - 1
  if tabuleiro[espaco_colocado] == "X" or tabuleiro[espaco_colocado] == "O":
    print("\nEspaço já ocupado. Tente colocar em outro.")
    Turno(jogador)
  else:
    tabuleiro[espaco_colocado] = jogador
```

Aqui pegamos um `jogador` como entrada, que pode ser `X` ou `O`. Uma vez que obtemos o número do jogador, verificamos se esse número já está ocupado no tabuleiro. Caso contrário, colocamos o número no tabuleiro, ou mostramos uma mensagem de erro.

Nosso loop principal deve agora parecer muito mais limpo. 

```python
while not acabou:
  ImprimirTabuleiro()
  acabou = ChecaVitoria("O")
  if acabou == True:
    break
  print("Jogador X, escolha um espaço.")
  Turno("X")
  
  ImprimirTabuleiro()
  acabou = ChecaVitoria("X")
  if acabou == True:
    break
  print("Jogador O, escolha um espaço.")
  Turno("O")
```
***Acabaamos!!*** Seu código deve ter ficado assim:

```python
def JogoDaVelha():
  tabuleiro = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  acabou = False
  QuadradoMagico = [4, 9, 2, 3, 5, 7, 8, 1, 6]

  def ImprimirTabuleiro():
    print()
    print('', tabuleiro[0], "|", tabuleiro[1], "|", tabuleiro[2])
    print("---|---|---")
    print('', tabuleiro[3], "|", tabuleiro[4], "|", tabuleiro[5])
    print("---|---|---")
    print('', tabuleiro[6], "|", tabuleiro[7], "|", tabuleiro[8])
    print()

  def PegarNumero():
    while True:
      numero = input()
      try:
        numero  = int(numero)
        if numero in range(1, 10):
          return numero
        else:
          print("\nNúmero não está no tabuleiro.")
      except ValueError:
        print("\nIsso não é um número. Tente novamente.")
        continue

  def Turno(jogador):
    espaco_colocado = PegarNumero() - 1
    if tabuleiro[espaco_colocado] == "X" or tabuleiro[espaco_colocado] == "O":
      print("\nEspaço já ocupado. Tente colocar em outro.")
      Turno(jogador)
    else:
      tabuleiro[espaco_colocado] = jogador

  def ChecaVitoria(jogador):
    jogadas = 0

    for x in range(9):
      for y in range(9):
        for z in range(9):
          if x != y and y != z and z != x:
            if tabuleiro[x] == jogador and tabuleiro[y] == jogador and tabuleiro[z] == jogador:
              if QuadradoMagico[x] + QuadradoMagico[y] + QuadradoMagico[z] == 15:
                print("Jogador", jogador ,"ganhou!\n")
                return True

    for a in range(9):
      if tabuleiro[a] == "X" or tabuleiro[a] == "O":
        jogadas += 1
      if jogadas == 9:
        print("O jogo acabou em um empate\n")
        return True

  while not acabou:
    ImprimirTabuleiro()
    acabou = ChecaVitoria("O")
    if acabou == True:
      break
    print("Jogador X, escolha um espaço.")
    Turno("X")
    
    ImprimirTabuleiro()
    acabou = ChecaVitoria("X")
    if acabou == True:
      break
    print("Jogador O, escolha um espaço.")
    Turno("O")


JogoDaVelha()
```

Agora você pode jogar Jogo da Velha com um amigo no terminal! Você pode executar meu código [aqui](https://repl.it/@VitorVavolizza/jogo-da-velha).

## Hackeando

Agora você tem o controle total sobre este código. Vá em frente e mexa com ele para ver se você pode encontrar maneiras de torná-lo mais divertido. Aqui estão algumas ideias:

- Alterne o primeiro jogador entre X e O cada vez que o jogador optar por jogar novamente.
- Adicione uma opção de jogar de novo. *(dica: use [recursão](https://pt.wikipedia.org/wiki/Recursividade_(ci%C3%AAncia_da_computa%C3%A7%C3%A3o)#:~:text=Em%20ci%C3%AAncia%20da%20computa%C3%A7%C3%A3o%2C%20a,recursivos%20para%20linguagens%20de%20programa%C3%A7%C3%A3o.))* [demo](https://repl.it/@VitorVavolizza/Jogo-da-Velha-Jogue-Novamente).
- Adicione um recurso de pontuação para registrar a pontuação de cada jogador em vários jogos. [demo](https://repl.it/@VitorVavolizza/Jogo-da-Velha-Pontuacao).
- Programe um jogador de IA com o algoritmo do minimax. @Prithul0218 e @A.N.M. Noor fizeram isso [aqui](https://repl.it/@VitorVavolizza/Jogo-da-Velha-Minimax)

Embora possa parecer um jogo minúsculo com apenas 9 jogadas, há 255.168 jogos possíveis no Jogo da Velha, excluindo resultados iguais. O primeiro jogador ganha em 131.184 destes, o segundo jogador ganha 77.904 jogos e os 46.080 restantes são empates. São muitas formas de ganhar. Certifique-se de ser o primeiro jogador para ter uma chance extra de ganhar ;)

Agora que você terminou de construir este maravilhoso projeto, compartilhe sua bela criação com outras pessoas! Lembre-se, é só mandar a URL do seu projeto!