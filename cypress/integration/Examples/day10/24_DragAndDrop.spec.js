///<reference types="Cypress"/>

context("Drag and Drop", () => {

    it.only("drag and drop test", () => {
        /*
        1)Terminale: npm install --save-dev @4tw/cypress-drag-drop
        2)command.js klasorune require('@4tw/cypress-drag-drop') yapistir.
         */
        const dataTransfer = new DataTransfer

        cy.visit('http://the-internet.herokuapp.com/drag_and_drop')
        cy.get("#column-a").trigger('dragstart', { dataTransfer });
        cy.get('#column-b').trigger('drop', { dataTransfer });
    })

    it('b', () => { // bu sitede drag and drop yapmadi
        const dataTransfer = new DataTransfer

        cy.visit('https://material.angular.io/cdk/drag-drop/overview')
        cy.get("#cdk-drop-list-1 > div:nth-child(1)").trigger('dragstart', { dataTransfer });
        cy.get("#cdk-drop-list-2 > div:nth-child(1)").trigger('drop', { dataTransfer });
    })
})

        // cy.get("#gallery>li").each((element, index, list) => {
        //     cy.wrap(element).then((dragElement) => {
        //         dragElement.drag('#trash')
        //     })
        // })