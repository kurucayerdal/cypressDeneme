///<reference types="Cypress"/>

context("Timeouts", () => {

    Cypress.config("defaultCommandTimeout", 3000) //sadece bu spec dosyası için 3 sn bekler
    //böylece cypress'in default olarak öngördüğü süreyi değiştirmiş oluruz
    //alt satırda yazan "defaultCommandTimeout":15000 komutunu cypress.json'a eklesek bile 
    //üstteki 3 sn geçerli olur

    it("Default Timeout Değiştirme", () => {
        cy.visit(Cypress.config('baseUrl'))
        cy.visit(Cypress.config("baseUrl"))
        cy.get("input[name='username']").type("cypress_test_1@gmail.com")
        cy.get("input[name='password']").type("admin_123")
        cy.get("input[name='submit']").click()
        cy.get(".m-0.text-dark",{timeout:10000}).should("have.text", "Dashboard")
        // {timeout:10000}  path'in yanına koyduğumuz bu bekleme pathin bulunmasını 10 sn bekler 

        //"defaultCommandTimeout":15000   bu kod cypress.json'a en üst satıra eklenirse tüm spec 
        //dosyaları için 15 sn bekler
        //"pageLoadTimeout":30000     bu kod cypress.json'a eklenirse tüm spec dosyaları için 30 sn bekler
    })
})