import { faker } from '@faker-js/faker'
const email = faker.internet.email()

Cypress.Commands.add('criarUsuario', () => {

    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/users`,
        headers: {

            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cypress.env('token')}`
        },
        body: {
            name: "user",
            email: email,
            gender: "male",
            status: "active"
        }
    }).as('criarUsuarioResponse')
})


Cypress.Commands.add('validaCriarUsuario', () => {

    cy.get('@criarUsuarioResponse').then(response => {

        const { status, body } = response

        expect(status).to.eq(201)
        expect(body).to.have.property('email', email)
        expect(body).to.have.property('name', 'user')
        expect(body).to.have.property('gender', 'male')
        expect(body).to.have.property('status', 'active')

        Cypress.env('userId', response.body.id)

    })
})

