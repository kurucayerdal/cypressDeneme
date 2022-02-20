/// <reference types ="Cypress"/>

context("Fixture data ekleme ve oradan kullanma", () => {
    /*
    cypress klasörünün altındaki fixtures klasörünün içine LoginScenario isimli bir json dosyası oluşturduk.
    Bu dosyanın içine json formatında username ve password tanımladık ve o dataları burada 
     cy.fixture("LoginScenario").then((user)=>{}) metodu ile çektik ve user isimli değişkene atadık ve user 
     isimli değişken vasıtası ile LoginScenario.json dosyasının içindeki tüm datalara ulaşabildik.
    */
    it("Fixture Login senaryosu", () => {
        cy.visit("https://test.iyikisordun.com/login.php")
        cy.fixture("LoginScenario").then((user) => {
            cy.get("input[name='username']").type(user.username)
            cy.get("input[name='password']").type(user.password)
            cy.get("input[name='submit']").click()
        })
    })
})

