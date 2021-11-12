///<reference types="Cypress"/>

context("Ilk Test",()=>{
    const url="https://test.iyikisordun.com/login.php"
    it("visit 1",()=>{
        cy.visit("https://test.iyikisordun.com/login.php")
    })

    it("visit 2",()=>{
        cy.visit(Cypress.config("baseUrl"))
    })

     it("visit 3",()=>{
        cy.visit(url)
    })

    it("url doğrulama",()=>{
        cy.visit(Cypress.config("baseUrl"))
        cy.url().should("include",Cypress.config("baseUrl"))
        cy.location("protocol").should("eq", "https:")
    })




})