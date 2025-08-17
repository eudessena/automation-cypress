import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given('que o usuario esta na página de cadastro', () => {
    cy.visit('/');
})

When('Adiciona um registro com dados válidos', () => {
    cy.adicionarRegistro()
})

Then('o registro do usuário deve constar na tabela', () => {
    cy.validarDadosCadastro()
})

