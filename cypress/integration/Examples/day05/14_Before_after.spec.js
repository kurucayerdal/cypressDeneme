///<reference types="Cypress"/>

before(() => {
    //spec dosyasındaki bütün testler koşmadan önce 1 kez çalıştırılır.
})

beforeEach(() => {
    //her bir testten önce çalıştırılır.
    const email = "cypress_test_1@gmail.com"
    const pass = "admin_123"
    const eMailXpath = "//input[@name='username' or @type='email']"
    const passwordXpath = "//input[@name='password']"
    const submitButtonXpath = "//input[@name='submit']"

    cy.visit(Cypress.config("baseUrl"))
    cy.get("input[name='username']").type(email)
    cy.get("input[name='password']").type(pass)
    cy.get("input[name='submit']").click()
})

after(() => {
    //spec dosyasındaki bütün testler koşmtuktan sonra 1 kez çalıştırılır.
})

afterEach(() => {
    //her bir testten sonra çalıştırılır.
})

context("Tests",()=>{

    it("T1",()=>{
        cy.xpath("(//h3)[4]").should("have.text","150")
    })
    it("T2",()=>{
        cy.xpath("(//h3)[5]").should("have.text","53%")
    })
    it("T3",()=>{
        cy.xpath("(//h3)[6]").should("have.text","44")
    })
    it("T4",()=>{
        cy.xpath("(//h3)[7]").should("have.text","65")
    })
})