Cypress.Commands.add('criarComentario', () => {

    const userId = Cypress.env('userId')
    const postId = Cypress.env('postId')

    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/comments`,
        headers: {

            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cypress.env('token')}`
        },
        body: {

            user_id: userId,
            post_id: postId,
            name: "meu titulo",
            email: "testes2@testes.com",
            body: "Este é um comentário de teste no post."
        }
    }).as('criarComentarioResponse')
})

Cypress.Commands.add('validaCriarComentario', () => {

    cy.get('@criarComentarioResponse').then(response => {

        const { status, body } = response

        expect(status).to.eq(201)
        expect(body).to.have.property('name', 'meu titulo')
        expect(body).to.have.property('email', 'testes2@testes.com')
        expect(body).to.have.property('body', 'Este é um comentário de teste no post.')

    })
})