context("Form Elemanlar─▒", () => {

    const email = "exemple87@gmail.com"
    const emailInput = "#exampleInputEmail1"

    it("Form Elemanlar─▒ Test", () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
        cy.get(emailInput).clear().type(email)
        cy.get(emailInput).should("have.value", email)
    })
})