// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
// Import commands.js using ES2015 syntax:
import './commands';

require('cypress-downloadfile/lib/downloadFileCommand')

//elementi her zaman resim dosyaisna ceviren bir metod.Bu metodu projenin her yerinde kullanabiliriz.
//Bu şekilde kullanıyoruz -->  cy.UploadImage("#exampleInputFile", "kus_resmi.jpg", "kus")
Cypress.Commands.add('UploadImage', (elementPath, imagePath, logoName) => {
    cy.fixture(imagePath).as('logo')
    cy.get(elementPath).then(function (el) {
        // convert the logo base64 string to a blob (logo base64 dizesini bir bloba dönüştürün)
        const blob = Cypress.Blob.base64StringToBlob(this.logo, 'image/png')
        const file = new File([blob], logoName + '.png', { type: 'image/png' })
        const list = new DataTransfer()
        list.items.add(file)
        const myFileList = list.files
        el[0].files = myFileList
        el[0].dispatchEvent(new Event('change', { bubbles: true }))
    })
})

Cypress.Commands.add("getIframe", (iframe) => {
    return cy.get(iframe)
        .its("0.contentDocument.body")
        .should("be.visible")
        .then(cy.wrap)
})

Cypress.Commands.add("clearAndSendKeys", (element, text) => {
    cy.get(element).should('be.visible').clear().type(text)
})

Cypress.Commands.add("clickFunction", (element) => {
    cy.get(element).should('be.visible').click({force:true})
})

Cypress.Commands.add("login", (email = Cypress.env('username'), password = Cypress.env('pass')) => {
    const emailPath = "input[name='username']"
    const passwordPath = "input[name='password']"
    const submitBtnPath = "input[name='submit']"

    cy.visit(Cypress.config('baseUrl'))
    cy.clearAndSendKeys(emailPath, email)
    cy.clearAndSendKeys(passwordPath, password)
    cy.clickFunction(submitBtnPath)
})

require('cy-verify-downloads').addCustomCommand();

import 'cypress-wait-until';

require('@4tw/cypress-drag-drop')
import '@4tw/cypress-drag-drop'