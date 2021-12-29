///<reference types="Cypress"/>

context("Cypress selector", () => {

    const email = "cypress_test_1@gmail.com"
    const pass = "admin_123"
    const eMailXpath = "//input[@name='username' or @type='email']"
    const passwordXpath = "//input[@name='password']"
    const submitButtonXpath = "//input[@name='submit']"

    it.skip("Path kullanimi", () => {
        cy.visit(Cypress.config("baseUrl"))
        cy.get("input[name='username']").type(email)
        cy.get("input[name='password']").type(pass)
        cy.get("input[name='submit']").click()
        cy.get(".m-0.text-dark").should("have.text", "Dashboard")
    })

    it("xpath kullanimi", () => {
        cy.visit(Cypress.config("baseUrl"))
        cy.xpath(eMailXpath).type(email)
        cy.xpath(passwordXpath).type(pass)
        cy.xpath(submitButtonXpath).click()
        cy.get(".m-0.text-dark").should("have.text", "Dashboard")
    })    
})
