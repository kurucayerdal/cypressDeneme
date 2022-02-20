/// <reference types = "Cypress"/>

context("trigger",()=>{


it("trigger test",()=>{
    cy.visit("http://the-internet.herokuapp.com/horizontal_slider")

    for(let i=0.5;i<=5;i+=0.5){
        cy.get("input[type='range']").invoke("val",""+i).trigger("change")
        cy.get('span[id=range]').should('contain.text',''+i)
    }
})


})