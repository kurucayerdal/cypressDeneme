///<reference types="cypress"/>

var formElementValues = {  //bu degerleri asagida sirayla dolduracagiz.
    email: "",
    pass: "",
    carName: ""
}
context("Random Select", () => {
    it("Select Box'ta random secilen elemanin alinmasi", () => {
        cy.visit("http://test.iyikisordun.com/pages/UI/ribbons.html")
        cy.get("#exampleInputEmail1").type('cypress_test_1@gmail.com')
        cy.get("#exampleInputPassword1").type('admin_123')
        cy.get(".select-selected").click()

        //dropdown daki eleman sayisini bulalim
        cy.get(".select-items>div").then((dropDownElement) => {
            dropDownElement = dropDownElement.length
            cy.log(dropDownElement) //12
            //Bu 12 secenekten birini random olarak secebilmek icin 
            //Math.floor -> sayinin ondalik degeri ne olursa olsun asagi yuvarlama islemini yapar let d=Math.floor(5.1);
            //Returns e random integer from 0 to 10 : Math.flor(Math.random()*11)

            //random sayi olusturma yontemi:
            let randomSelect = Math.floor(Math.random() * (dropDownElement)) + 1
            cy.log(randomSelect)

            //:nth-child(n) ust ogesinin turunden bagimsiz olarak n'inci cocugu olan ogeyi secmek icin secicisidir.
            //ORN: li index degeri cift olanlar: li:nth-child(even),  li index degeri tek olanlar: li:nth-child(odd)
            //:nth-child(5n+3) gibi bir kullanimla ucuncu index degerinden basla beser beser atlayarak uygula demektir.

            /*Random sayiyi istedigimiz path'in icinde kullanarak rastgele bir isim seciyoruz
            NOT: Mudahale etmek istedigimiz path'i  ters tirnak icine alarak yaziyoruz           
            */
            cy.get(`.select-items > div:nth-child(${randomSelect})`)  // ters tirnaga dikkat!!
                .invoke('text').then((carNameText) => {
                    formElementValues.carName = carNameText
                    cy.log(carNameText)
                })

            cy.get(`.select-items > div:nth-child(${randomSelect})`).click()
            cy.window().scrollTo('top')

            cy.get(`.select-items > div:nth-child(${randomSelect})`)
                .invoke('text').then((secilenAraba) => {
                    assert.equal(secilenAraba, formElementValues.carName, 'car name dogrulama')
                })
            cy.get("#exampleInputEmail1").invoke('val').then((emailAdresText) => {
                cy.log(emailAdresText)
                formElementValues.email = emailAdresText
            })

            cy.get("#exampleInputPassword1").invoke('val').then((passText) => {
                formElementValues.pass = passText
                cy.log(passText)
            })
        })
    })
})