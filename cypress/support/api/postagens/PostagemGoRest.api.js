Cypress.Commands.add('criarPostagem', () => {

    const userId = Cypress.env('userId')

    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/posts`,
        headers: {

            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cypress.env('token')}`
        },
        body: {

            user_id: userId,
            title: "Titulo de exemplo",
            body: "Este é um exemplo de texto"
        }
    }).as('criarPostagemResponse')
})

Cypress.Commands.add('validaCriarPostagem', () => {

    cy.get('@criarPostagemResponse').then(response => {

        const { status, body } = response

        expect(status).to.eq(201)
        expect(body).to.have.property('title', 'Titulo de exemplo')
        expect(body).to.have.property('body', 'Este é um exemplo de texto')

        Cypress.env('postId', response.body.id)

    })
})