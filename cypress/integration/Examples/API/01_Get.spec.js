///<reference types="cypress"/>

context("XML HTTP REQUEST 6XHR", () => {

    const requestUrl = 'https://jsonplaceholder.cypress.io/comments'

    it("XHR Example", () => {

        cy.request(requestUrl).should((response) => {
            console.log(response)
            assert.equal(response.status, 200)  // statu kodu 200 mu
            assert.equal(response.statusText, 'OK') // statu texti OK mu

            expect(response.body).to.have.property('length').to.eq(500) //expect metodu ile response body nin icindeki listenin 
            //uzunlugunun 500 e esit olduguunu dogruuladik. 
            expect(response.body).to.have.property('length').and.be.oneOf([499, 501, 500]) // Icleinden hh biri benim degerime
            //yani 500 e esit mi?
            expect(response.body).to.have.length(500) // length in 500 oldugunu kontrol ettik

            expect(response).to.have.property('headers') //body'nin icinde degiliiz ve headers property var mi kontrol ediyoruz
            expect(response).to.have.property('duration') //body'nin icinde degiliiz ve duration property var mi kontrol ediyoruz
        })

    })
})