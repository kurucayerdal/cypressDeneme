/// <reference types="Cypress"/>
/// <reference types="cypress-downloadfile"/>  
828
describe("JQueryUI Menu", () => {

    it("JQueryUI Menu Test", () => {
        cy.visit("https://the-internet.herokuapp.com/jqueryui/menu")
        cy.get("#ui-id-1").should('not.be.enabled')
        cy.get("#ui-id-3").should('not.be.disabled').realHover()
        cy.get("#ui-id-4").should('be.visible').realHover()
        cy.get("#ui-id-5").click()
        cy.get("#ui-id-6").click() // test buraya kadar calisiyor!
        // cy.verifyDownload('menu.pdf')
        // cy.reload()
        // cy.get("#ui-id-4").should('be.visible').realHover()
        // cy.reload()
        // cy.get("#ui-id-4").should('be.visible').realHover()
        // cy.get("#ui-id-7").click()
        // cy.verifyDownload('menu.pdf')
        // cy.verifyDownload('menu.csv')
    })

    // it('test2',()=>{
    //     cy.downloadFile('https://the-internet.herokuapp.com/download/jqueryui/menu/menu.csv')
    //     cy.verifyDownload('example.jpg')
    // })

})

/**
  describe('file download', () => {
  it('verifies download', () => {
    cy.visit('/');
    cy.get('[data-cy=download-zip]').click();
    cy.verifyDownload('archive.zip');

  });
});
 */