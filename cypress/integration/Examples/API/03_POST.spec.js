///<reference types="cypress"/>

context("Post request", () => {

    const requestUrl = 'https://jsonplaceholder.cypress.io/posts'
    let postBody = "test body"
    let postTitle = "test title"
    let id = 1

    it('XHR Example 2-POST', () => {
        cy.request('POST', requestUrl, {
            "userId": id,
            "title": postTitle,
            "body": postBody
        }).then((response) => {
            console.log(response);
            expect(response.status).to.equal(201)
            expect(response.statusText).to.equal('Created')
            expect(response.body.body).to.equal(postBody)
            expect(response).property('body').to.contain({ 'title': postTitle })
            expect(response).property('body').to.contain({ 'title': postTitle }, { 'userId': id }, { 'body': postBody })
            expect(response.body.title).to.equal(postTitle)
            expect(response.body.userId).to.equal(1)
            expect(response.body).property('userId').to.be.a('number')
            expect(response.body).property('title').to.be.a('String')
        })
    })


    it('take response as a variable with await and async', async () => { //tum response'u bir degiskene attik ve islemleri 
        var response = await cy.request('POST', requestUrl, {            //bu sekilde yaptik
            "userId": id,
            "title": postTitle,
            "body": postBody
        })
        console.log(response);
        expect(response.status).to.equal(201)
        expect(response.statusText).to.equal('Created')
        expect(response.body.body).to.equal(postBody)
        expect(response).property('body').to.contain({ 'title': postTitle })
        expect(response).property('body').to.contain({ 'title': postTitle }, { 'userId': id }, { 'body': postBody })
        expect(response.body.title).to.equal(postTitle)
        expect(response.body.userId).to.equal(1)
        expect(response.body).property('userId').to.be.a('number')
        expect(response.body).property('title').to.be.a('String')
    })









})