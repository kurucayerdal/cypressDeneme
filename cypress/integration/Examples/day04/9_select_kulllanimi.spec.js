context("select kullanımı", () => {

    it("select test", () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
        cy.xpath("(//select[@class='custom-select'])[1]").select("option 2").should("have.value", "option 2")
        //önce select'in locator'ını yazdık sonra ise select metodu ile option'ı seçtik
    })

    it("multiple select test", () => {
        cy.xpath("(//select[@class='custom-select'])[3]").select(["option 3", "option 4", "option 5"]).
            invoke("val").should("deep.equal", ["option 3", "option 4", "option 5"])
        //birden fazla option'u seçtik ve hepsini birden assert etmek için invoke ile select içindeki
        // option'ları aldık ve deep.equal metodu ile tümü için bir eşitlik karşılaştırması yaptık
        //birden fazla değer karşılaştırması için köşeli parantez kullanmayı unutmamalıyız!    
    })
})