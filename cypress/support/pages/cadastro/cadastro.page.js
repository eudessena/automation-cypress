const BTN_ADICIONAR = '#addNewRecordButton'
const INPUT_PRIMEIRO_NOME = '#firstName'
const INPUT_ULTIMO_NOME = '#lastName'
const INPUT_EMAIL = '#userEmail'
const INPUT_IDADE = '#age'
const INPUT_SALARIO = '#salary'
const INPUT_DEPARTAMENTO = '#department'
const BTN_ENVIAR = '#submit'


Cypress.Commands.add('adicionarRegistro', () => {

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

})

Cypress.Commands.add('validarDadosCadastro', () => {

    cy.get('.rt-tbody .rt-tr:not(.-padRow)').last().then(($row) => {

        expect($row.find('.rt-td').eq(0).text()).to.equal(Cypress.env('primeiro-nome'))
        expect($row.find('.rt-td').eq(1).text()).to.equal(Cypress.env('ultimo-nome'))
        expect($row.find('.rt-td').eq(2).text()).to.equal(Cypress.env('idade'))
        expect($row.find('.rt-td').eq(3).text()).to.equal(Cypress.env('email'))
        expect($row.find('.rt-td').eq(4).text()).to.equal(Cypress.env('salario'))
        expect($row.find('.rt-td').eq(5).text()).to.equal(Cypress.env('departamento'))
    })

})






