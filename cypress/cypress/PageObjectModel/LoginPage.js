
class LoginPage {

    visit() {
        cy.visit(Cypress.config("baseUrl"))
        return this
    }

    inputEmailType() {
        const email = cy.get("input[name='username']")
        email.should('be.visible').type('cypress_test_1@gmail.com')
        return this
    }

    inputPasswordType() {
        const password = cy.get("input[name='password']")
        password.should('be.visible').type("admin_123")
        return this
    }

    submitButtonClick() {
        const clickBtn = cy.get("input[name='submit']")
        clickBtn.should('be.visible').click()
        return this
    }
}
export default LoginPage