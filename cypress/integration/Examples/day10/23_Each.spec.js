/// <reference types="cypress"/>

const urls = {
    "General": "https://test.iyikisordun.com/pages/UI/general.html",
    "Icons": "https://test.iyikisordun.com/pages/UI/icons.html",
    "Buttons": "https://test.iyikisordun.com/pages/UI/buttons.html",
    "Sliders": "https://test.iyikisordun.com/pages/UI/sliders.html",
    "Modals & Alerts": "https://test.iyikisordun.com/pages/UI/modals.html",
    "Navbar & Tabs": "https://test.iyikisordun.com/pages/UI/navbar.html",
    "Timeline": "https://test.iyikisordun.com/pages/UI/timeline.html",
    "Ribbons": "https://test.iyikisordun.com/pages/UI/ribbons.html"
}

context("Each", () => {

    it("Each Test", () => {
        let buttonName, url
        const baseUrl='https://test.iyikisordun.com/'

        cy.login()
        cy.get("ul[role='menu'] > li:nth-of-type(5) > .nav-link").click()
        cy.get("li:nth-of-type(5) > .nav.nav-treeview a").each((element, index, list) => {
            cy.log("Element name = " + element.text(), "index = " + index, "eleman sayisi = " + list.length)
            cy.wrap(element).should('have.attr', 'href').then((href) => { //should ile elementin href degeri oldugunu dogruladik 
                                                                          //sonra href degerlerini href isimli bir degiskene attik  
                cy.log("href= " + href)  // href degerlerinin hepsini ekrana yazdirdik
                buttonName =element.children('p').text().trim() //children('p') komutuelementin altindaki childlarindan p tagi olanlari getirir. 
                url = urls[buttonName]                       //text() komut ile de textini aliriz
                assert.equal(url, (baseUrl+href),"href dogrulamasi ")
                /*27.satirdaki url, testin basinda olusturdugumuz bos bir degisken.
                 26.satirda internet sayfasindan aldigimiz elementin(buttonName ismli degiskene atildi)
                 textini urls isimli yukarda tanimlanmis listenin key degeri ile ayni oldugu icin degeri 
                 cekmek icin kullandik. Bu degeri de url degiskenine esitledik. Bu sekilde url degiskeni bize her seferinde 
                 yukarida value olarak tanimlanmis olan urls listesindeki url adresini verecek. 
                assert kisminda ise baseUrl+href element listesindeki url degeri ile esit olacak.
                Boylelikle karsilastirma ve dogrulama da yapilmis olacak.
                */
            })
        })
    })
})
//each() yapisi uclu bir yapi. icine element, index ve list degiskenleri aliyor.
//cypress documantasyondaki ornek:
/*
cy.get('ul>li').each(($el, index, $list) => {
  // $el is a wrapped jQuery element
  if ($el.someMethod() === 'something') {
    // wrap this element so we can
    // use cypress commands on it
    cy.wrap($el).click()
  } else {
    // do something else
  }
}) 
*/