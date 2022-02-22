///<reference types="cypress"/>

describe('Get API Users Test', () => {
    let accessToken = '636144d160083b1ed3acb97f4192dc601314b4d4ebd93a270c328bd3b61cebdf'
    let url = 'https://gorest.co.in/public-api/users'
    it('GET Users', () => {
        cy.request({
            method: 'GET',
            url: url,
            headers: {
                'authorization': accessToken //Bu kisma baska bilgiler de yazabiliriz.
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    })


    it('GET Users by ID', () => {
        cy.request({
            method: 'GET',  //method olarak bisey belirtmezsek default olarak get metodunu uygular
            url: url,
            headers: {
                'authorization': accessToken,
                'accept': 'application/json'
            },
            body: { //username ve password ile giris yapilmasi istenirse body icinde gondeririz.
                username: 'jane.lane',
                password: 'password123'
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            console.log(response.duration) //response suresini ogrenmek icin

            expect(response.body.data[0].name).to.equal('Devak Trivedi') //data'daki 1.name'e ulasmak istiyoruz o yuzden
            //0.indexi aldik
            expect(response.body.meta.pagination.total).to.equal(2702)
            expect(response.body.meta.pagination.limit).to.equal(20)
            expect(response.body.code).to.equal(200)
            cy.log(response.headers.date) //Tue, 22 Feb 2022 10:43:38 GMT    tarihi konsola bastik        
        })
    })
})