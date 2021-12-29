context("as kullanimi", () => {

    const url = "https://test.iyikisordun.com/pages/forms/advanced.html"

    it("as", () => {
        cy.visit(url)
        cy.get("[type='checkbox']").check(["dg2","sc2"],{force:true}).should("be.checked")
    })

    it("as", () => {
        cy.get("[type='checkbox']").as("erdal")
        cy.get("@erdal").uncheck(["dg2","sc2"],{force:true}).should("not.be.checked")
        //11.satırda 'as' ile locator'a bir isim verdik ve alt satırında bu isimle(başına @ koyarak) 
        //değişkeni çağırdık!
    })











})