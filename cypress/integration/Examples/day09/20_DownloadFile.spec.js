/// <reference types="Cypress"/>  
/// <reference types="cypress-downloadfile"/>  
//üstteki satır her zamank,inden farklı.Bu şekilde yazmadan önce sürekli hata veriyordu

context('downloadFile', () => {
    it('downlaod file in mentioned dir', () => {
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'mydownloads', 'example.jpg')
    })
    /* Projenin içinde mydownloads isimli bir klasör açıp indirmek istediğimiz öğeyi bizim verdiğimiz
    example.jpg ismiyle kaydetti. */
})
