import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('edita o cadastro com dados válidos', () => {
    cy.adicionarRegistro()
    cy.editarCadastro()
})

Then('o registro do usuário deve ser atualizado na tabela', () => {

    cy.validarEdicaoCadastro()
})