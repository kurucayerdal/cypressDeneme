///<reference types="Cypress"/>

context("Tarayıcı Fonksiyonları",()=>{

    const url1="https://test.iyikisordun.com/index2.html"
    const url2="https://test.iyikisordun.com/index3.html"

it("Geri gelme back ile",()=>{
    cy.visit(url1)
    cy.pause()
    cy.visit(url2)
    cy.pause()
    cy.go("back")
    cy.url().should("include","index2")
})

it("Geri gelme -1 ile",()=>{
    cy.visit(url1)
    cy.visit(url2)
    cy.go(-1)
})

it("İleri gitme forward ile",()=>{
    cy.visit(url1)
    cy.visit(url2)
    cy.go(-1)
    cy.go("forward")
    cy.url().should("include","index3")
})

it("Sayfa yenileme",()=>{
    cy.get('.form-control').type("hello cypress")
    cy.wait(2000)
    cy.reload()
})






})