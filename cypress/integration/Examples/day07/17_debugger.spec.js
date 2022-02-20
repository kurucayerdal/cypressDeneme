/// <reference types="Cypress"/>

context("debugger", () => {

    it("debug test", () => {
        cy.login()
        cy.get("#todoCheck1").check({ force: true }).should('be.checked')
        cy.xpath("(//li[@class='done'])[1]").should('have.class', 'done')
        cy.xpath("(//span[.='Let theme shine like a star'])[2]").invoke("text").then((myText) => {
            myText = myText.trim()
            cy.log(myText).debug() //debug komutunun çalışması için test sayfasında inspect bölümünün 
            //açık olması gerekir, aksi halde çalışmaz!
        })
    })

    it("debugger test", () => {
        cy.login()
        cy.get("#todoCheck1").check({ force: true }).should('be.checked')
        cy.xpath("(//li[@class='done'])[1]").should('have.class', 'done')
        cy.xpath("(//span[.='Let theme shine like a star'])[2]").invoke("text").then((myText) => {
            myText = myText.trim()
            cy.log(myText) //debug komutunun çalışması için test sayfasında inspect bölümünün 
            //açık olması gerekir, aksi halde çalışmaz!
            debugger  //debugger js kodudur ve metodun dışında kullanılırsa ekranı direk durdurur,metodun
            //içinde olursa geldiği satırda durur.
        })
    })
    //debugger  -- bu debugger sayfayı direkt durduruyor, test hiç çalışmıyor!
})