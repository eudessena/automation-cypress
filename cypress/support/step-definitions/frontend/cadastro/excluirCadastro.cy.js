import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('exclui o cadastro', () => {
    cy.adicionarRegistro()
    cy.excluirCadastro()
})

Then('o registro do usuário não deve constar na tabela', () => {
    cy.validarExclusaoCadastro()
})