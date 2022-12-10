<h1 align="center">Estacionamento Exclusivo</h1>

<div align="center">
  <img width="300" height="300" src="exercicios/para-casa/entregas/img/estacionamento.png" alt="logo estacionamento exclusivo"/>
</div>

# Proposta
Projeto Conclusão do Curso: Turma 21 - Imersão JavaScript {Reprograma} | Dezembro 202 | Autora: [Anna Maria Rodrigues](https://github.com/amrodrigues)

## Estacionamento

Otimizar vagas para carros de Aplicativo para buscar clientes em estacionamento.

### Objetivo

Desenvolver uma aplicação para gerenciar Carros de aplicativos que vão buscar clientes com suas compras.


#### Resumo
Ao acompanhar meu pai nas compras do mês tive muita dificuldade de conseguir um carro de aplicativo, pois não tinha vaga no estacionamento. Devido a lotação os carros de aplicativos estavam proibidos de buscar os passageiros, por não haver um local destinado à para pausas rápidas para realização do embarque. Em vista desse infortúnio, desenvolvi uma aplicação para gerenciar o fluxo de carros de aplicativo em estacionamentos,com vagas exclusivas para embarque e desembarque de passageiros com tempo limite de 15 min.



##### 💻 Informações Técnicas

 Para rodar este projeto, será necessário instalar:
 - [Visual Studio Code]("https://code.visualstudio.com/download"): editor de código para executar a aplicação. 
 - [Node]("https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"): uma tecnologia usada para executar código JavaScript fora do navegador.
 - [Jest]("https://jestjs.io/docs/getting-started"): para rodar os testes unitários.

## Classe Estacionamento
A classe Estacionamento é responsável por criar de forma genérica as informações básicas necessárias para a criação do estacionamento , recebendo como parâmetro: 
nome e quantidade vagas em geral.

## Classe Carro 
A classe Carro é responsável por criar de forma genérica as informações básicas necessárias para a criação do carro , recebendo como parâmetro: 
marca e carro. Nessa Classe possui um Classe Carro Aplicativo que extender de Carro
adicionando o atributo tela que concentra as informações do cliente que irá buscar.

## Classe Vaga
A Classe Vaga é responsável por criar de forma genérica as informações básicas necessárias para a criação da vagas, recebendo como parâmetro: 
vagasAplicativo : que delimita a quantidade de vagas para os carros de aplicativos.
vagasBloqueadas : que delimita a quantidade de vagas que estão bloqueadas.

## Melhorias do Projeto :
- fazer interligação com o sistema de carro de aplicativos.
- O carro de aplicativo ficar mais de 15 minutos na vaga é multado, pois está usando a vaga de má fé.
- o carro de aplicativo não pode voltar para o estacionamento rotativo em menos de 30 min.
 - colocar em Inglês.
- exporta a lista para os aplicativos de carros, para mostrar os carros que agiram de má fé e contemplar com pontos os carros que prestam o serviço.

