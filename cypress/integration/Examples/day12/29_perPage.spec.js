///<reference types="cypress"/>

context('Per Page', () => {
    it('Data table per page kontrol', () => {
        let perPage = '10'
        const numberOfItemsPath = '#example1_info'
        const numberOfPagePath = '#example1_paginate>ul>li'

        cy.visit('https://test.iyikisordun.com/pages/tables/data.html')
        //cy.get("select[name='example1_length']").select(2) //index ile de secilebilir
        cy.get("select[name='example1_length']").select(perPage) //value ile secilebilir
        cy.get(numberOfItemsPath).invoke('text').then((totalCount) => {  //Showing 1 to 10 of 57 entries-> bu yaziyi cektik
            totalCount = totalCount.trim()
            cy.log('numberOfItems= ' + totalCount)
            totalCount = totalCount.split(' ') //numberOfItems artik bir array oldu
            cy.log('numberOfItems= ' + totalCount)  //asagidaki gibi bir array cikiyor
            cy.log('numberOfItems 6.eleman= '+totalCount[totalCount.length - 2]) //57
            totalCount = totalCount[totalCount.length - 2]  //57
            // Array(7) 0: "Showing" 1: "1" 2: "to" 3: "10" 4: "of" 5: "57" 6: "entries" length: 7

            let lastPage = totalCount % parseInt(perPage) //mod 10 ile sayfadaki toplam eleman sayisinin kalanini bulup 
            //son sayfada gosterilecek eleman sayisini tespit ettik. Burada 57 eleman vardi ve 57% ile 7 rakamini elde ettik
            //yani son sayfada gosterilecek eleman sayisini bulduk.
            cy.wrap(lastPage).as('lastPage')
            cy.log('last page= ' + lastPage) // 7
        })
        //dogrulamak icin her sayfadaki sayfalari sayip perPage ya da lastPage ile karsilastiralim

        cy.get(numberOfPagePath).then((numberOfPage) => {  //sayfa sayisinin path'i
            numberOfPage = numberOfPage.length  //gosterilen 6 sayfa var
            cy.log('numberOfPage= '+numberOfPage)  // 8
            for (let i = 2; i < numberOfPage; i++) {  //eleman odakli  gittigimiz icin for'a 1'den baslariz ama burada ilk 
                                                      //eleman previous page old icin onu atlayip for'u 2'den baslattik
                cy.get(`#example1_paginate > ul > li:nth-of-type(${i})`).click()

                if (numberOfPage - 1 == i)  //yani i=7 ise  yani son sayfada isek
                    cy.get('@lastPage').then((lastPage) => {  //@lastPage ile yukarda int'e cevirdigimiz 7 degerini aldik 
                        cy.get('#example1>tbody').find('tr').should('have.length', lastPage)
                        //bu kisim son sayfada isek yani 6.sayfadaysak calisacak, aksi halde asagidaki else blogu calisacak
                        //#example1>tbody tum tabloyu aliyor, find ile onun icindeki tr'leri aliyoruz ve have.length ile
                        //tr'lerin sayisinin lastPage ile ayni oldugunu dogruluyoruz.su an icin 7 idi.
                    })
                else {
                    cy.get('#example1>tbody').find('tr').should('have.length', parseInt(perPage))
                    //bu kisim son sayfada degilsek yani 6.sayfada degilsek calisacak, aksi halde yukardaki if blogu calisacak
                    //#example1>tbody tum tabloyu aliyor, find ile onun icindeki tr'leri aliyoruz ve have.length ile
                    //tr'lerin sayisinin lastPage ile ayni oldugunu dogruluyoruz. let perPage = '10' icin length=10 olmali.
                    // su an icin 10 idi. Eger perPage'i 50 secersek length=50 olmali.
                    //Eger perPage'i 100 secersek length=57 olmali cunku eleman sayisi(tr tag) 57 tane yani gosterilen oge 57 tane.
                }
            }
        })
    })
})