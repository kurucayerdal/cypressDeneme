///<reference types="cypress"/>

describe('XML HTTP REQUEST- XHR',()=>{

    const url='https://example.cypress.io/commands/waiting'
    //io'ya kadar server url            /endpoint / query parametre 
it('intercept wait kullanimi',()=>{
    cy.visit(url)
    cy.get('.well>button').click()
    //intercept API cagrisini tanimlamak icin kullanildi. Soonra API'yi tetikliyoruz.
    cy.intercept('GET','**/comments/*').as('getComment')
    cy.wait('@getComment').its('response').then((response)=>{
        //intercept ile dinlemeye aldigimiz API'yi bekleyecek
        console.log(response)
    })
    



})




})