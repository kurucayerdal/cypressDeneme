///<reference types="Cypress"/>      
// yukarıdaki kısmı yazarsak cypress e ait tüm metodları ctrl + space tuşuna bastığımızda görebiliriz. 
// o yoksa göremeyiz ama yine de her şey normal çalışır.

context("Ilk Test",()=>{
    const url="https://test.iyikisordun.com/login.php"
    it("visit 1",()=>{
        cy.visit("https://test.iyikisordun.com/login.php")
    })

    it("visit 2",()=>{
        cy.visit(Cypress.config("baseUrl"))
    })

     it("visit 3",()=>{
        cy.visit(url)
    })

    it("url doğrulama",()=>{
        cy.visit(Cypress.config("baseUrl"))
        cy.url().should("include",Cypress.config("baseUrl"))  // url in içinde baseUrl yer alıyor mu assert
        cy.location("protocol").should("eq", "https:") // bu komut ile https protokol doğrulama yapılıyor.
    })
    // var -> her yerden ulaşılabiliyor public gibi
    // const -> final gibi değişmeyen değer
    // let -> sadece o class ya da metod içinde kullanılabiliyor

})