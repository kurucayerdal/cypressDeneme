///<reference types="cypress"/>

/*
1. it=>> DataTable'in sutun islemlerinin gorunurlugunu ve isimlerini dogrulayallim.
2. it=>> Datatable'daki sutun genisliklerini cekip dogrulayalim.

NOT:  :nth-of-type() secicisi sadece ayni tip elemanlari secer.
th:nth-of-type($name$) orneginde th elemani ile ayni seviyedeki tum th'lari secmemizi saglar.
 */

var sutunGenislikleri = {  // inspect'ten cekerek olusturuyoruz.
    'Name': '150',
    'Age': '50',
    'Address': '200',
    'Country': '100',
    'Is Married': '100'
}

context('Data Table', () => {

    const sutunSayisiPath = "tr[class='jsgrid-header-row']>th"
    const sutunIslemleriPath = "tr[class='jsgrid-header-row']>th:nth-of-type(number)"

    it('Data table test', () => {
        cy.visit('https://test.iyikisordun.com/pages/tables/jsgrid.html')
        cy.get(sutunSayisiPath).then((sutunSayisi) => { //burada tablodaki her sutunun basligini aldik
            sutunSayisi = sutunSayisi.length
            cy.log(sutunSayisi)

            //1.Yol sutunlarin ismini yazdiralim
            for (let i = 1; i <= sutunSayisi; i++) {
                cy.get(`tr[class='jsgrid-header-row']>th:nth-of-type(${i})`).invoke('text').then((sutunName) => {
                    cy.log(sutunName)
                })
            }

            for (let i = 1; i <= sutunSayisi; i++) {
                let temp = sutunIslemleriPath.replace("number", i)
                cy.get(temp).should('be.visible').invoke('text').then((sutunName) => {
                    cy.log(sutunName)
                })
            }
        })
    })
    it('Sutun genisligi dogrulama test', () => {
        cy.visit('https://test.iyikisordun.com/pages/tables/jsgrid.html')
        cy.get(sutunSayisiPath).then((sutunSayisi) => {
            sutunSayisi = sutunSayisi.length
            for (let i = 1; i <= sutunSayisi; i++) {
                let temp = sutunIslemleriPath.replace('number', i)
                cy.get(temp).invoke('text').then((sutunName) => {
                    cy.get(temp).should('have.attr', 'style', 'width: ' + sutunGenislikleri[sutunName] + 'px;')
                    //sutun genisliklerini yukaridaki degiskenimizde yazmistik         
                })
            }
        })
    })
})