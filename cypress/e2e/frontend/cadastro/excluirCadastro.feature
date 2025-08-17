# encoding: utf-8
# language: pt

Funcionalidade: Excluir cadastro no portal demoqa
Como usuário do portal DemoQA
Quero excluir meu cadastro
Para que meus dados sejam removidos corretamente do sistema

Cenário: excluir cadastro com sucesso
Dado que o usuario esta na página de cadastro
Quando exclui o cadastro
Então o registro do usuário não deve constar na tabela