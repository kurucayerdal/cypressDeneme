/// <reference types = "Cypress"/>

context("Alert", () =>{

    const url = "https://test.iyikisordun.com/pages/UI/modals.html"
    
    it("Alert üzerindeki text'i doğrulama", () =>{
        cy.visit(url)
        cy.contains("Default Alert").click
        cy.on("window:alert",(str)=>{
            expect(str).to.equal("Cypress alert kontrol.")
        })

        cy.on("window:confirm",()=>true)  //alert te "ok" butonuna basar 
        cy.on("window:confirm",()=>false) //alert te "cancel" butonuna basar//dismiss    
    })

        
    it("Alert dismiss", () =>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Confirm").click
        cy.on("window:confirm",()=>false) //alert te "cancel" butonuna basar//dismiss    
    })
    
    it("alert text",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //cy.contains("Click for JS Prompt").click()
  
        cy.window().then(($win) => {
          cy.stub($win, 'prompt').returns('MERHABA')
          cy.contains('Click for JS Prompt').click()
          //cy.get(':nth-child(3) > button').click()  //2.yol
      })
          cy.get('#result').should('have.text','You entered: MERHABA')
        
      })
              ///jQuery, JavaScript kodu ve HTML öğeleri arasındaki etkileşimleri 
              //basitleştirmeye ve standartlaştırmaya yardımcı olan bir JavaScript kitaplığıdır.
              // JavaScript, web sitelerinin etkileşimli ve dinamik olmasını sağlar 
              //ve jQuery, bu süreci kolaylaştırmaya yardımcı olan bir araçtır.
  
              //Cypress otomatik olarak jQuery'yi içerir ve onu Cypress.$ olarak sunar.
  
               //stup:Bir işlevi değiştirin, kullanımını kaydedin ve davranışını kontrol edin.
    
    })