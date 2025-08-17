import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('realizo uma requisição para criar um usuário na API da GoRest', () => {
    cy.criarUsuario()
})

Then('valido o usuário registrado com sucesso', () => {
    cy.validaCriarUsuario()
})