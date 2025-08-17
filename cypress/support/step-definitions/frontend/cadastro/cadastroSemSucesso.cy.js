import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('adiciono um cadastro deixando alguns campos em branco', () => {

    cy.adicionarCadastroAlgunsCamposVazios()
})

When('adiciono um cadastro deixando todos os campos em branco', () => {

    cy.adicionarCadastroTodosCamposVazios()
})

When('adiciono um cadastro usando um email com formato inválido', () => {

    cy.adicionarCadastroEmailInvalido()
})

When('adiciono um cadastro preenchendo um campo numérico com texto', () => {

    cy.adicionarCadastroComTextoEmCampoNumerico()
})

Then('devo permanecer no formulário de cadastro', () => {

    cy.validarFormularioCadastro()
})


