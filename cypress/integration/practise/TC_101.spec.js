///<reference types="Cypress"/>  

context("Verify url", () => {

    const url = "https://testautomationpractice.blogspot.com/"
    const title="div#Wikipedia1 > .title"


    it("Navigate to site", () => {

        cy.visit(Cypress.config("baseUrl2"))
        cy.url().should("include", Cypress.config("baseUrl2"))
        cy.location("protocol").should("eq","https:")
    })

    it("title control",()=>{

        cy.visit(Cypress.config("baseUrl2"))
        cy.get(title).should("have.text","New Windows")
    })














})