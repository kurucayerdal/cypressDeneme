/// <reference types = "Cypress"/>

const { wrap } = require("lodash")

context("iframe",()=>{

const url="https://test.iyikisordun.com/pages/UI/ribbons.html"

it("iframe test",()=>{

cy.visit(url)
cy.get("#FileFrame").its("0.contentDocument.body").find("#name_").should("have.text","Cypress_")
//cy.get("#FileFrame") ile iframe'in locator'ını verdik, its("0.contentDocument.body") ile 0 numaralı iframe'e
//gir dedik, iframe'in içindeki locator'ı almak için get metodu yerine find metodu kullanılıypr.
cy.get("#FileFrame").its("0.contentDocument.body").then(cy.wrap).find("#surname_").should("have.text","Test")
})
//cy.wrap öğeyi sarmak manasına geliyor

it.only("Iframe Yazı Silme ve Yazma",()=>{
    cy.visit("https://the-internet.herokuapp.com/iframe")
    cy.getIframe("#mce_0_ifr").clear().type("erdal")
})







})