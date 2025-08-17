Cypress.Commands.add('excluirCadastro', () => {

  cy.contains('div.rt-td', Cypress.env('email'), { timeout: 10000 })
    .should('be.visible')
    .parent()
    .find('span[title="Delete"]')
    .click()

})


Cypress.Commands.add('validarExclusaoCadastro', () => {

  cy.get('.rt-tbody .rt-tr:not(.-padRow)').last().then(($row) => {

    expect($row.find('.rt-td').eq(0).text()).to.not.equal(Cypress.env('primeiro-nome'))
    expect($row.find('.rt-td').eq(1).text()).to.not.equal(Cypress.env('ultimo-nome'))
    expect($row.find('.rt-td').eq(2).text()).to.not.equal(Cypress.env('idade'))
    expect($row.find('.rt-td').eq(3).text()).to.not.equal(Cypress.env('email'))
    expect($row.find('.rt-td').eq(4).text()).to.not.equal(Cypress.env('salario'))
    expect($row.find('.rt-td').eq(5).text()).to.not.equal(Cypress.env('departamento'))
  })

}) 