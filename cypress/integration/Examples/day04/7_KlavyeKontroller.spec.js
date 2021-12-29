context("Klavye Kontrolleri", ()=>{


it("Klavye Test", ()=>{
cy.visit("https://test.iyikisordun.com/pages/forms/advanced.html")
cy.xpath("(//span[@class='select2-selection select2-selection--single'])[1]").click()
cy.xpath("(//li[@class='select2-results__option'])[1]").click()
cy.xpath("(//span[@class='select2-selection select2-selection--single'])[1]").click()
cy.xpath("(//input[@class='select2-search__field'])[4]").type("Alaska").type('{enter}')
//!!  type('{enter}')  selenium'daki actions class'taki keys.enter gibi yani enter tuşuna basıyor!!
})

it("check box",()=>{
    //cy.visit("https://test.iyikisordun.com/pages/forms/advanced.html")
    cy.get("[type='checkbox']").check("pr2",{force:true}).should("be.checked")
    cy.get("[type='checkbox']").check(["dg2","sc2"],{force:true}).should("be.checked")
    //16.satırda 2 tane checkbox'ı aynı check komutu ile seçebildik ve tek should ile ikisini birden assert edebildik.
})

it("uncheck box",()=>{
    cy.get("[type='checkbox']").uncheck("pr2",{force:true}).should("not.be.checked")
    cy.get("[type='checkbox']").uncheck(["dg2","sc2"],{force:true}).should("not.be.checked")
    //16.satırda 2 tane checkbox'ı aynı uncheck komutu ile seçebildik ve tek should ile ikisini birden assert edebildik.
})











})