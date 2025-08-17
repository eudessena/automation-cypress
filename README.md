# automation-cypress

## Descrição

Este repositório contém testes de ponta a ponta (E2E) automatizados usando Cypress para APIs e aplicações web. Ele fornece um framework para escrever e executar testes para garantir a qualidade e confiabilidade de seus projetos.

## Sumário

- [Descrição](#descrição)
- [Instalação](#instalação)
- [Uso](#uso)
- [Configuração](#configuração)
- [Funcionalidades](#funcionalidades)
- [Contribuição](#contribuição)

## Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/eudessena/automation-cypress.git
    cd automation-cypress
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

## Uso

1.  **Abra o Cypress:**

    ```bash
    npx cypress open
    ```

    Este comando abre o Cypress Test Runner, permitindo que você visualize e execute os testes disponíveis.

2.  **Execute os testes via linha de comando:**

    Para executar todos os testes de forma headless (sem a interface gráfica), use:

    ```bash
    npx cypress run
    ```

## Configuração

### Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configuração. Estas são definidas em `cypress.env.json`.

Exemplo de `cypress.env.json`:

```json
{
  "baseUrl": "https://example.com",
  "apiBaseUrl": "https://api.example.com",
  "username": "testuser",
  "password": "testpassword"
}
```

Você pode acessar estas variáveis em seus testes usando `Cypress.env('variableName')`.

### Configuração do Cypress

A configuração principal do Cypress está localizada em `cypress.config.js`. Aqui está a configuração padrão:

```javascript
const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/e2e/features/*.feature',
    baseUrl: 'http://localhost:3000'
  },
});
```

Configurações chave:

-   `specPattern`: Define onde o Cypress procura pelos arquivos de teste (arquivos de feature neste caso).
-   `baseUrl`: A URL base para sua aplicação em teste.

## Funcionalidades

1. Testes E2E - https://demoqa.com/webtables
- Criar e validar registro 
- Editar e validar registro 
- Excluir e validar registro 
- Criar registro deixando todos campos vazios
- Criar registro deixando alguns campos vazios
- Criar registro usando email inválido
- Criar registro usando texto em campo numérico

2. Testes de backend - https://gorest.co.in/
- Criar usuário e validar reposta da API
- Criar Postagem e validar reposta da API
- Criar comentário e validar reposta da API

## Contribuição

Contribuições são bem-vindas! Aqui está como você pode contribuir:

1.  Faça um fork do repositório.
2.  Crie uma nova branch para sua feature ou correção de bug.
3.  Escreva seu código e testes.
4.  Garanta que todos os testes passem.
5.  Envie um pull request com uma descrição clara de suas mudanças.
