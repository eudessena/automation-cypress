// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/cadastro/cadastro.page'
import './pages/cadastro/editarCadastro.page'
import './pages/cadastro/excluirCadastro.page'
import './pages/cadastro/cadastroSemSucesso.page'
import './api/usuarios/UsuarioGoRest.api'
import './api/postagens/PostagemGoRest.api'
import './api/comentarios/comentarioGoRest.api'


// bloqueio de anuncios no site

beforeEach(() => {
  const blockedPatterns = [
 
    /\/pagead(\/|2\/)/,
    /securepubads\.g\.doubleclick\.net\//,
    /pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js/,
    /\/ads\//,
    /\/gampad\//,
    /googlesyndication\.com\//,
    /doubleclick\.net\//,
    /google-analytics\.com\//,
    /googletagmanager\.com\//,
    /adservice\.google\.(com|com\.br)\//,
    /googletagservices\.com\//,
    /partner\.googleadservices\.com\//,
    /static\.doubleclick\.net\//,
    /adclick\.g\.doubleclick\.net\//,
    /tpc\.googlesyndication\.com\//,
    /googleads[0-9]?\.g\.doubleclick\.net\//,
    /ad\.doubleclick\.net\//
  ];

  ['GET', 'POST'].forEach((method) => {
    blockedPatterns.forEach((pattern) => {
      cy.intercept(method, pattern, { statusCode: 204, body: '' });
    });
  });
});

Cypress.on('uncaught:exception', (err) => {
  if (/Script error/i.test(err.message)) {
    return false;
  }
});