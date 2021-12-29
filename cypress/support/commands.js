// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload'

//elementi her zman resim dosyaisna cevirir
Cypress.Commands.add('UploadImage', (elementPath,imagePath,logoName)=>{
    cy.fixture(imagePath).as('logo') 
    cy.get(elementPath).then(function (el) {
    // convert the logo base64 string to a blob (logo base64 dizesini bir bloba dönüştürün)
    const blob=Cypress.Blob.base64StringToBlob(this.logo,'image/png')
    const file=new File([blob],logoName +'.png', {type:'image/png'})
    const list=new DataTransfer()
    list.items.add(file)
    const myFileList=list.files
    el[0].files=myFileList
    el[0].dispatchEvent(new Event('change',{bubbles:true }))

    })
})