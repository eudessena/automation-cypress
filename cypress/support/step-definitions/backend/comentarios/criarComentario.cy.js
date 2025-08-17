import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('realizo uma requisição para criar um comentário na API da GoRest', () => {
    cy.criarUsuario()
    cy.validaCriarUsuario()
    cy.criarPostagem()
    cy.validaCriarPostagem()
    cy.criarComentario()
})

Then('o comentário deve ser registrado com sucesso na API', () => {
    cy.validaCriarComentario()
})