///<reference types="cypress"/>

/*
 wrap kullanmadan then fonksiyonu icindeki bir degiskeni baska bir yere tasiyamiyoruz.
 Once sar, sonra tasi
 */
/*
 invoke seleniumdaki getAttribute gibi calisiyor.
 invoke('attr', 'type')  ya da 
 invoke('attr', 'src')
 invoke('attr', 'href') gibi.
 */
/*
 Degiskeni testin icinde ama fonksiyonun disinda tanimlasak bile 
 cy.wrap(emailAdresse).as('newEmail') metodu ile sarmazsak
 degiskenin ici bos kaliyor yani atama yapilamiyor!
 */
context("Then Yapisi", () => {

    it("Wrap Kullanimi", () => {
        cy.visit('https://test.iyikisordun.com/pages/forms/general.html')
        cy.get('#exampleInputEmail1').invoke('val').then((emailAdresse) => {
            cy.wrap(emailAdresse).as('newEmail')
        })
        cy.get("@newEmail").then((mail) => {
            cy.log(mail)
        })
        cy.visit('https://test.iyikisordun.com/pages/forms/validation.html')
        cy.get("@newEmail").then((email) => {
            cy.get('input#exampleInputEmail1').type(email)
        })
    })

    it("Wrap Kullanimi 2", () => {
        cy.visit('https://test.iyikisordun.com/pages/forms/general.html')
        cy.get('#exampleInputEmail1').invoke('val').then((emailAdresse) => {
            cy.wrap(emailAdresse).as('newEmail')
        })
        cy.visit('https://test.iyikisordun.com/pages/forms/validation.html')
        cy.get("@newEmail").then((email) => {
            cy.get('input#exampleInputEmail1').type(email)
        })
    })
})