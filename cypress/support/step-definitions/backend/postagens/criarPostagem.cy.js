import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('realizo uma requisição para criar uma postagem na API da GoRest', () => {
    cy.criarUsuario()
    cy.validaCriarUsuario()
    cy.criarPostagem()
})

Then('a postagem deve ser registrada com sucesso na API', () => {
    cy.validaCriarPostagem()
})