///<reference types="Cypress"/>  

context("Snack Bar Message",()=>{

    const email= "cypress_test_1@gmail.com"
    const pass= "admin_123"

    it("Login scenario", () => {

        cy.visit(Cypress.config("baseUrl"))
        cy.get("input[name='username']").type(email)

        cy.get("input[name='password']").type(pass)
        cy.get("input[name='submit']").click()
    })

    it("Snackbar message verification",()=>{
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
        cy.get("div:nth-child(3)>button").click()
        cy.get("#snackbar").should("be.visible")  // selenium'daki is display gibi
        cy.get("#snackbar").should("include.text","kısa süre sonra kaybolacaktır.") // contains gibi
        cy.get("#snackbar").should("have.text","\n    \n        Bu element kısa süre sonra kaybolacaktır.\n    ")
        //! have.text=equals gibi
        cy.get("#snackbar").should("not.be.visible")
    })
})