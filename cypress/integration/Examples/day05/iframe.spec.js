/// <reference types = "Cypress"/>

const { wrap } = require("lodash")

context("iframe",()=>{

const url="https://test.iyikisordun.com/pages/UI/ribbons.html"

it("iframe test",()=>{

cy.visit(url)
cy.get("#FileFrame").its("0.contentDocument.body").find("#name_").should("have.text","Cypress_")
cy.get("#FileFrame").its("0.contentDocument.body").then(cy.wrap).find("#surname_").should("have.text","Test")
})








})