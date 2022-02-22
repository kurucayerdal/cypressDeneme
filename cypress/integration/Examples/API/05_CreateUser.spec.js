///<reference types="cypress"/>

describe('POST User REQUEST', () => {

    let accessToken = '8d8afdfa33ad24a229f2ead8b98cfde7a0d5a188462d34df136fd27299045354'
    let myUrl = 'https://gorest.co.in/public/v2/users'
    let gender = 'male'
    let testName = ''
    let testMail = ''

    it('create a user', () => {

        var pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        for (var i = 0; i < 6; i++) {
            testName += pattern.charAt(Math.floor(Math.random() * pattern.length))
            testMail = testName + "@gmail.com"
        }
        cy.log(testMail + " " + testName)

        cy.request({
            method: 'POST',
            url: myUrl,
            headers: {
                'authorization': "Bearer " + accessToken
            },
            body: {
                'name': testName + ' ' + testName,
                'email': testMail,
                'gender': gender,
                'status': 'inactive'
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).has.property('email', testMail)
            expect(response.body).has.property('name', testName + ' ' + testName)
            expect(response.body).has.property('gender', gender)
        })
    })
})