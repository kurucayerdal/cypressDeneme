///<reference types="cypress"/>

context('Data Table 2', () => {

    it('Data Table pagination sayfa gecisleri testi', () => {
        const paginationPath = '#example2_paginate > ul>li';
        const rowNumPath = '#example2>tbody>tr'
        const tableInfoPath = '#example2_info'
        let temp, toplamSatir = 0;
        const regex1 = RegExp('[0-9]+', 'gm')

        cy.visit('https://test.iyikisordun.com/pages/tables/data.html');
        cy.get(paginationPath).then((buttonList) => {
            for (let i = 2; i < buttonList.length; i++) {
                temp = paginationPath + `:nth-of-type(${i})`
                cy.get(temp).click({ force: true }).wait(500)

                cy.get(rowNumPath).then((rowNum) => {  //her sayfanin toplam satir sayisini aliyoruz(hala for dongusnun icindeyiz)
                    toplamSatir += rowNum.length
                })
            }
        });
        //2.Task==>> Gorulen sayfa sayilarini gosteren texti alip sayi kisimlarini cekelim
        let numberArray = [], tempArray = []
        cy.get(tableInfoPath).invoke('text').then((tableInfoText) => {
            cy.log(tableInfoText)
            while ((tempArray = regex1.exec(tableInfoText)) !== null) //belirledigimiz regex kuralini burdaki string uzerinde uygula
                numberArray.push(tempArray[0]) //while dongusu her donmede rakamlari sayi olarak bitisik sekilde alacak
                //(yukardaki regex kuralimizdan dolayi)
                //sitedeki yazi: Showing 51 to 57 of 57 entries
                //burada once 51'i alacak tempArrayin 0.indexine atacak ve bunu da numberArray'in icine atacak
                //while dongusu icinde tempArray = regex1.exec(tableInfoText) oldugundan tempArray her seferinde sifirlanacak 
                //dolayisiyla numberArray.push(tempArray[0]) ile her seferinde numberArray'in icine 1 eleman atmis oluyoruz!
                //sonra 57'yi alacak ve tempArrayin 0.indexine atacak ve bunu da numberArray'in icine atacak(2.eleman oldu)
                //sonra 57'yi alacak ve tempArrayin 0.indexine atacak ve bunu da numberArray'in icine atacak(3.eleman oldu)

            const totalCount = numberArray[2] //2.index numberArray'in 3.elemani
            cy.log(totalCount)
            assert.equal(totalCount, toplamSatir, 'total count control')
            assert.equal(numberArray[2],numberArray[1])
        })
    })
})
