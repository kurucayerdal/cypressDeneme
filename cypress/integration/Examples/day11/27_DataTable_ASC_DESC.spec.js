///<reference types="cypress"/>

//DataTable'in sutun islemlerinin gorunurlugunu ve islemlerini isimlerini dogrulayalim
//ASC artan , DESC azalan
context('Data Table 2',()=>{

    it('Data Table test ASC',()=>{
        cy.visit("https://test.iyikisordun.com/pages/tables/data.html")
        cy.get("#example2 > thead > tr > th:nth-child(2)").click()
        let list=[] // bos bir array  tanimladik
        cy.get("#example2 > tbody > tr").then((satirSayisi)=>{
            satirSayisi=satirSayisi.length;
            for(let i=1;i<=satirSayisi;i++){
                cy.get(`#example2 > tbody > tr:nth-child(${i}) > td:nth-child(2)`)
                .invoke('text').then((names)=>{
                    list.push(names)
                    cy.log(names)
                })
                cy.wrap(list).as('liste') //listeyi wrap ile disari aldik              
            }
        })
        cy.get("@liste").then((liste)=>{
            let sortListe=[...liste] //listeyi klonluyoruz
            sortListe.sort(new Intl.Collator('en').compare) // Intl.Collator nesnesi dile duyarli dizi sortlamasi yapar
            assert.equal(JSON.stringify(liste),JSON.stringify(sortListe),'Siralama Dogrulama')
            //JSON.stringify()yontemi bir JS nesnesini veya degerini bir JSON dizesine donusturur. stringify=dizmek
        })
    })

    it('Data Table test DESC',()=>{
        let browserButton='#example2 > thead > tr > th:nth-child(2)'
        cy.visit("https://test.iyikisordun.com/pages/tables/data.html")
        cy.get(browserButton).click() //sitedeki browser sekmesine 2 kere tikladik ve desc siralama yaptirdik
        cy.get(browserButton).click()
        let list=[] // bos bir array  tanimladik
        cy.get("#example2 > tbody > tr").then((satirSayisi)=>{
            satirSayisi=satirSayisi.length;
            for(let i=1;i<=satirSayisi;i++){
                cy.get(`#example2 > tbody > tr:nth-child(${i}) > td:nth-child(2)`)
                .invoke('text').then((names)=>{
                    list.push(names)
                })
                cy.wrap(list).as('liste') //listeyi wrap ile disari aldik              
            }
        })
        cy.get("@liste").then((liste)=>{
            let sortListe=[...liste] //listeyi klonluyoruz
            sortListe.sort(new Intl.Collator('en').compare) // Intl.Collator nesnesi dile duyarli dizi sortlamasi yapar
            sortListe.reverse() //reverse metodu ile listeyi desc ile siralatmis olduk.
            assert.equal(JSON.stringify(liste),JSON.stringify(sortListe),'Siralama Dogrulama')
        })
    })
})
/*
Intl.Collator Examples

console.log(['Z', 'a', 'z', 'ä'].sort(new Intl.Collator('de').compare));
// expected output: ["a", "ä", "z", "Z"]

console.log(['Z', 'a', 'z', 'ä'].sort(new Intl.Collator('sv').compare));
// expected output: ["a", "z", "Z", "ä"]

console.log(['Z', 'a', 'z', 'ä'].sort(new Intl.Collator('de', { caseFirst: 'upper' } ).compare));
// expected output: ["a", "ä", "Z", "z"]
 */