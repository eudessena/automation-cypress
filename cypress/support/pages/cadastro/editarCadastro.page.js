const INPUT_PRIMEIRO_NOME = '#firstName'
const INPUT_ULTIMO_NOME = '#lastName'
const BTN_ENVIAR = '#submit'

Cypress.Commands.add('editarCadastro', () => {

  cy.contains('div.rt-td', Cypress.env('email'), { timeout: 10000 })
    .should('be.visible')
    .parent()
    .find('span[title="Edit"]')
    .click()

  cy.get(INPUT_PRIMEIRO_NOME, { log: false }, { timeout: 10000 })
    .should('be.visible')
    .clear()
    .type(Cypress.env('primeiro-nome-editado'))
    .should('have.value', Cypress.env('primeiro-nome-editado'))

  cy.get(INPUT_ULTIMO_NOME, { log: false }, { timeout: 10000 })
    .should('be.visible')
    .clear()
    .type(Cypress.env('ultimo-nome-editado'))
    .should('have.value', Cypress.env('ultimo-nome-editado'))

  cy.get(BTN_ENVIAR, { timeout: 10000 }).should('be.visible').click()

})

Cypress.Commands.add('validarEdicaoCadastro', () => {

  cy.get('.rt-tbody .rt-tr:not(.-padRow)').last().then(($row) => {

    expect($row.find('.rt-td').eq(0).text()).to.equal(Cypress.env('primeiro-nome-editado'))
    expect($row.find('.rt-td').eq(1).text()).to.equal(Cypress.env('ultimo-nome-editado'))
    expect($row.find('.rt-td').eq(2).text()).to.equal(Cypress.env('idade'))
    expect($row.find('.rt-td').eq(3).text()).to.equal(Cypress.env('email'))
    expect($row.find('.rt-td').eq(4).text()).to.equal(Cypress.env('salario'))
    expect($row.find('.rt-td').eq(5).text()).to.equal(Cypress.env('departamento'))
  })

})