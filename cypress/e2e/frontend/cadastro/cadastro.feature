# encoding: utf-8
# language: pt

Funcionalidade: Cadastro no portal demoqa
Como usuário do portal DemoQA
Quero realizar meu cadastro
Para que meus dados sejam registrados corretamente e eu possa acessar o sistema

Cenário: cadastro com sucesso
Dado que o usuario esta na página de cadastro
Quando Adiciona um registro com dados válidos
Então o registro do usuário deve constar na tabela

