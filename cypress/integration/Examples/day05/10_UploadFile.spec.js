/// <reference types = "Cypress"/>

context("Upload", () => {

    const url = "https://test.iyikisordun.com/pages/forms/general.html"

    it("File Upload", () => {
        cy.visit(url)
        //cy.get("#exampleInputFile").attachFile("kus_resmi.jpg")  // bu komut ile dosya eklenebilir
        //cy.xpath("(//label[@class='custom-file-label'])[1]").should("have.text","kus_resmi.jpg")
        //cy.xpath("(//label[@class='custom-file-label'])[1]").should("include.text","kus")

        // 2.yol metod ile  (bu metodda 3 tane parametre istiyor ve yüklenen resmi png formatında yüklüyor)
        //Bu metod support'un altında command.js dosyasının içinde!
        //1==>element locate  //2=> elementin uzantisiz path'i //3=>>yuklenecek dosya ismi
        cy.UploadImage("#exampleInputFile", "kus_resmi.jpg", "kus")
    })
})