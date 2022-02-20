/// <reference types = "Cypress"/>

import LoginPage from "../../../cypress/PageObjectModel/LoginPage"

context("Login Page", () => {

    const loginPageObj = new LoginPage()

    it("Login Page Object Model Test", () => {
        loginPageObj.visit()
        loginPageObj.inputEmailType()
        loginPageObj.inputPasswordType()
        loginPageObj.submitButtonClick()
    })
})