/// <reference types = "Cypress"/>

context("Form Elemanlari", () =>{

const url = "https://test.iyikisordun.com/pages/forms/general.html"
const email = "exemple87@gmail.com"

it("Input Box Editleme", () =>{
    cy.visit(url)
    cy.get("#exampleInputEmail1").clear().type(email) // önce alanı temizle sonra email'i yaz
    cy.get("#exampleInputEmail1").should("have.value",email)
  })

  it("Radio Button", () => {
    cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
    cy.get("[type=radio]").check("radio_11",{force:true})  //cy.get("[type=radio]") kısmı sabit check kısımda 
                                                          //radio button'un value'si yazılıyor ve force:true 
                                                          //zorunlu şekilde yazılıyor.yoksa hata veriyor.
    cy.get("#customRadio2").click({force:true}) //force:true kullanarak click ile de seçebildik
    cy.get("[type=radio]").check("radio_11",{force:true}).should("be.checked")
  })



  
})