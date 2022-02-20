/// <reference types="Cypress"/>

context("iframe and debugger", () => {

    const url = "https://test.iyikisordun.com/pages/UI/ribbons.html"

    Cypress.Commands.add("getIframeBody", (iframeLocator) => {
        return cy.get(iframeLocator).its("0.contentDocument.body").should("not.be.undefined").then(cy.wrap)
    })

    it("iframe", () => {
        cy.visit(url)
        cy.getIframeBody("#FileFrame").find("#name_").should("have.text", "Cypress_")
        cy.getIframeBody("#FileFrame").find("#surname_").should("have.text","Test")

    })

    it("iframe", () => {

    })




})