/// <reference types ="Cypress"/>

context("Read and Write File", () => {

    it("Read File", () => {
        cy.readFile("cypress/fixtures/text1.txt").should('eq', 'Hello')
        cy.readFile("cypress/fixtures/text1.txt").should('include', 'Hel')
        cy.readFile('cypress/fixtures/text2.json').its('email').should('eq', 'erdal@gmail.com')
    })
    /*
    cypress klasörünün altındaki fixtures klasörünün içine text1 isimli bir txt dosyası oluşturduk
    cy.readFile metodu'nun içine okumak istediğimiz dosyaının relative path'ini verdik ve should ile
    dosyanınn içinde Hello yazısının olup olmadığını hem eq ile hem de include ile doğruladık.
    Datayı bir json dosyasından alıyorsak bu durumda its() metodunu kullanmamız lazım. readFile 
    metodundaki parantez içine json dosyasının relative pathini veriyoruz. json formatında
    key ve value şeklinde bir yazım var, bu yüzden hangi datayı çekmek istiyorsak ona ait key değerini
    yazıyoruz ve dataya ulaşıyoruz. Örneğimizde email key'ine ait datayı çekmek için its('email') yazdık ve
    erdal@gmail.com datasına ulaştık. 
    */
    it("Read and Send a data in a File", () => {
        cy.visit('https://test.iyikisordun.com/pages/forms/general.html')
        cy.readFile("cypress/fixtures/email.txt").then((emailAdress) => {
            cy.clearAndSendKeys("#exampleInputEmail1", emailAdress)
        })
        /* Bu metodda ise dosyadaki veriyi okuduk ve onu web sitesine inputa yazmak için kullandık */
    })

    it("Write File json", () => {
        cy.visit('https://test.iyikisordun.com/pages/forms/general.html')
        cy.get("#exampleInputEmail1").invoke('val').then((emailText) => {
            cy.writeFile('cypress/fixtures/dosyaYazma.json', { email: emailText })
        })
        /** Bu metodda sayfadan aldığımız value değerini bir json dosyası oluşturup onun içine yazdırdık
            invoke ile sayfadaki elemanın value'sini çektik, sonrasında then() metodu ile bir değişken
            oluşturduk ve buna emailText ismini verdik. Daha sonra, cy.writeFile metodu ile dosyanın 
            oluşmasını istediğimiz yerin pathini verdik. json yapısında olması için ikili değer olması
            gerekiyor. Bu nedenle süslü parantez açıp içine ilk olarak key değerini yazdık, emailText 
            isimli değişkenimiz de sayfadaki elemandan geldi ve value olarak json dosyasına yazılmış oldu.
            Aşağıdaki metodda farklı olan şeyler: locator'ın text'ini alıyoruz ve jsondan farklı olarak
            path verip yazılacak değeri giriyoruz. 2 farklı değer girmiyoruz.
         */
    })

    it('Write File txt', () => {
        cy.visit('https://test.iyikisordun.com/pages/UI/navbar.html')
        cy.get('#vert-tabs-right-home').invoke('text').then((text) => {
            cy.writeFile('cypress/fixtures/txtDosyaYazma.txt', text)
        })
    })

    it('Write File txt', () => {
        cy.visit('https://test.iyikisordun.com/pages/UI/navbar.html')
        cy.get('#vert-tabs-right-home').invoke('text').then((text) => {
            cy.writeFile('cypress/fixtures/txtDosyaYazma.txt', text.trim()) //textteki boşlukları aldık
        })
    })
})