
context("Scroll To", () => {

    it("Scroll To Bottom", () => {
        cy.visit("https://test.iyikisordun.com/pages/tables/simple.html")
        cy.window().scrollTo("bottom")
        cy.wait(2000)
    })

    it("Scroll To Center", () => {
        cy.visit("https://test.iyikisordun.com/pages/tables/simple.html")
        cy.window().scrollTo("center")
        cy.wait(2000)
    })

    it("Scroll To Coordinate", () => {
        cy.visit("https://test.iyikisordun.com/pages/tables/simple.html")
        cy.window().scrollTo(0, 200)
        cy.wait(2000)
    })

    it.only("Scroll To Data Table", () => {
        cy.visit("https://test.iyikisordun.com/pages/tables/simple.html")
        cy.window().scrollTo("bottom")
        cy.wait(2000)
        cy.get("div:nth-of-type(3)>.col-12>.card>.card-body.p-0.table-responsive").scrollTo("bottom")
        cy.wait(3000)
        //Bu testte önce sayfanın aşağısıına indik, sonrasında tablo şeklinde olan elementimizin kendi içinde 
        //scroll yaptık ve tablonun en aşağıısına indik
    })

    it("Scroll To Element", () => {
        cy.visit("https://test.iyikisordun.com/pages/tables/simple.html")
        cy.xpath("(//h3[@class='card-title'])[3]").scrollIntoView()
        //elementin olduğu alana gidiyor
    })
})