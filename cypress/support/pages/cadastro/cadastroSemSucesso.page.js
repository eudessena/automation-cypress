const BTN_ADICIONAR = '#addNewRecordButton'
const INPUT_PRIMEIRO_NOME = '#firstName'
const INPUT_ULTIMO_NOME = '#lastName'
const INPUT_EMAIL = '#userEmail'
const INPUT_IDADE = '#age'
const INPUT_SALARIO = '#salary'
const INPUT_DEPARTAMENTO = '#department'
const BTN_ENVIAR = '#submit'

const FORM_CADASTRO = '#registration-form-modal'


Cypress.Commands.add('adicionarCadastroAlgunsCamposVazios', () => {

    cy.get(BTN_ADICIONAR, { timeout: 10000 }).should('be.visible').click()

    cy.get(INPUT_PRIMEIRO_NOME, { log: false }, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('primeiro-nome'))
        .should('have.value', Cypress.env('primeiro-nome'))

    cy.get(INPUT_ULTIMO_NOME, { log: false }, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('ultimo-nome'))
        .should('have.value', Cypress.env('ultimo-nome'))

    cy.get(INPUT_SALARIO, { log: false }, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('salario'))
        .should('have.value', Cypress.env('salario'))

    cy.get(INPUT_DEPARTAMENTO, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('departamento'))
        .should('have.value', Cypress.env('departamento'))


    cy.get(BTN_ENVIAR, { timeout: 10000 }).should('be.visible').click()
    cy.screenshot()

})


Cypress.Commands.add('adicionarCadastroTodosCamposVazios', () => {

    cy.get(BTN_ADICIONAR, { timeout: 10000 }).should('be.visible').click()
    cy.get(BTN_ENVIAR, { timeout: 10000 }).should('be.visible').click()
    cy.screenshot()
})


Cypress.Commands.add('adicionarCadastroEmailInvalido', () => {

    cy.get(BTN_ADICIONAR, { timeout: 10000 }).should('be.visible').click()

    cy.get(INPUT_PRIMEIRO_NOME, { log: false }, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('primeiro-nome'))
        .should('have.value', Cypress.env('primeiro-nome'))

    cy.get(INPUT_ULTIMO_NOME, { log: false }, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('ultimo-nome'))
        .should('have.value', Cypress.env('ultimo-nome'))

    cy.get(INPUT_EMAIL, { log: false }, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('email-invalido'))
        .should('have.value', Cypress.env('email-invalido'))

    cy.get(INPUT_IDADE, { log: false }, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('idade'))
        .should('have.value', Cypress.env('idade'))

    cy.get(INPUT_SALARIO, { log: false }, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('salario'))
        .should('have.value', Cypress.env('salario'))

    cy.get(INPUT_DEPARTAMENTO, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('departamento'))
        .should('have.value', Cypress.env('departamento'))


    cy.get(BTN_ENVIAR, { timeout: 10000 }).should('be.visible').click()

    cy.screenshot()

})

Cypress.Commands.add('adicionarCadastroComTextoEmCampoNumerico', () => {

    cy.get(BTN_ADICIONAR, { timeout: 10000 }).should('be.visible').click()

    cy.get(INPUT_PRIMEIRO_NOME, { log: false }, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('primeiro-nome'))
        .should('have.value', Cypress.env('primeiro-nome'))

    cy.get(INPUT_ULTIMO_NOME, { log: false }, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('ultimo-nome'))
        .should('have.value', Cypress.env('ultimo-nome'))

    cy.get(INPUT_EMAIL, { log: false }, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('email'))
        .should('have.value', Cypress.env('email'))

    cy.get(INPUT_IDADE, { log: false }, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('idade-invalida'))
        .should('have.value', Cypress.env('idade-invalida'))

    cy.get(INPUT_SALARIO, { log: false }, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('salario-invalido'))
        .should('have.value', Cypress.env('salario-invalido'))

    cy.get(INPUT_DEPARTAMENTO, { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(Cypress.env('departamento'))
        .should('have.value', Cypress.env('departamento'))


    cy.get(BTN_ENVIAR, { timeout: 10000 }).should('be.visible').click()

    cy.screenshot()

})


Cypress.Commands.add('validarFormularioCadastro', () => {

    cy.get(FORM_CADASTRO, { timeout: 10000 }).should('exist').and('be.visible')
})