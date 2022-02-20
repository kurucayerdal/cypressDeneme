/// <reference types = "Cypress"/>

context("Login Scenarios", () => {
//Burada  Cypress.env('username') yazdık buradaki env'yi cypress.json'un içinde oluşturduk ve burada 
//çağırdık. Bir ortam değişkeni gibi oldu.
    it("özel komut oluşturmadan login işlemleri", () => {
        cy.visit(Cypress.config("baseUrl"))
        cy.get("input[name='username']").type(Cypress.env('username')) 
        cy.get("input[name='password']").type(Cypress.env('pass'))
        cy.get("input[name='submit']").click()
    })

    it.only("login command.js'ten login metodunu kullanarak",()=>{
        cy.login()
    })
})