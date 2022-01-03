context("Alert Class",()=>{

    const url = "https://test.iyikisordun.com/pages/UI/modals.html"

    it("Alert Test",()=>{
        cy.visit(url)
        cy.contains("Default Alert").click()  // contains() locator'ı text'ine göre seçiyor.
        cy.on("window:alert",(str)=>{
            expect(str).to.equal("Cypress alert kontrol.")
        })
        cy.on("window:confirm",()=> true)
        //cy.on("window:confirm",()=>false)
    })

    it("Alert Dismiss",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Confirm").click()
        cy.on("window:confirm",()=>false)
    })

    it("Alert text",()=>{
        cy.window().then(($fenetre)=> {
        cy.stub($fenetre,'prompt').returns('Hi guys')
        cy.contains("Click for JS Prompt").click()    
        })

        cy.get('#result').should("have.text","You entered: Hi guys")
    })


    it("Iframe",()=>{
        cy.visit("https://test.iyikisordun.com/pages/UI/ribbons.html")
        //cy.get("#FileFrame").its("0.contentDocument.body").find("#name_").should("have.text","Cypress_")
       cy.getIframe("#FileFrame").find("#name_").should("have.text","Cypress_")
       cy.getIframe("#FileFrame").find("#surname_").should("have.text","Test")
    })

    it.only("Iframe Yazı Yazma",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe("#mce_0_ifr").clear().type("erdal")
    })







     
})