// ***********************************************************
// This example support/index.js is processed and
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

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')



//Aşağıdaki before-after vs metodları buranın altında tanımlarsak her class'tan önce aşağısı çalışır!
// before(() => {
//     spec dosyasındaki bütün testler koşmadan önce 1 kez çalıştırılır.
// })

// beforeEach(() => {
//     her bir testten önce çalıştırılır.
//     const email = "cypress_test_1@gmail.com"
//     const pass = "admin_123"
//     const eMailXpath = "//input[@name='username' or @type='email']"
//     const passwordXpath = "//input[@name='password']"
//     const submitButtonXpath = "//input[@name='submit']"

//     cy.visit(Cypress.config("baseUrl"))
//     cy.get("input[name='username']").type(email)
//     cy.get("input[name='password']").type(pass)
//     cy.get("input[name='submit']").click()
// })

// after(() => {
//     //spec dosyasındaki bütün testler koşmtuktan sonra 1 kez çalıştırılır.
// })

// afterEach(() => {
//     //her bir testten sonra çalıştırılır.
// })


//Gereksiz kırmızılıkları görmemek için
const app = window.top;

if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

import "cypress-real-events/support";
import 'cypress-mochawesome-reporter/register';
