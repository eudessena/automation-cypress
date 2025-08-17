# encoding: utf-8
# language: pt

Funcionalidade: Cadastro sem sucesso no portal demoqa
Como usuário do portal DemoQA
Quero tentar realizar cadastros inválidos
Para que o sistema valide corretamente os dados e impeça registros incorretos

Contexto:
Dado que o usuario esta na página de cadastro

Cenário: Cadastro sem sucesso por alguns campos vazios
Quando adiciono um cadastro deixando alguns campos em branco
Então devo permanecer no formulário de cadastro

Cenário: Cadastro sem sucesso por todos campos vazios
Quando adiciono um cadastro deixando todos os campos em branco
Então devo permanecer no formulário de cadastro

Cenário: Cadastro com email inválido
Quando adiciono um cadastro usando um email com formato inválido
Então devo permanecer no formulário de cadastro

Cenário: Cadastro com valor não numérico em campo numérico
Quando adiciono um cadastro preenchendo um campo numérico com texto
Então devo permanecer no formulário de cadastro
