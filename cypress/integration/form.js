// Tugas 5 (Cypress): Belajar Cypress
describe('automation-practice-form ', function () {
    it('automation-practice-form ', function () {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Mas')
        cy.get('#lastName').type('Misz')
        cy.get('#userEmail').type('m@mail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#userNumber').type('0822118872')
        cy.get('#dateOfBirthInput', {force: true}).click().type('{selectall}', '{backspace}').type('01 May 1990').type('{enter}')
        cy.get('.subjects-auto-complete__value-container').type('Wakanda', '{enter}')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#uploadPicture').attachFile('gmail.jpg')
        cy.get('#currentAddress').type('VDT Tangsel')
        cy.contains('Select State').click()
        cy.get('#react-select-3-option-0').click()
        cy.contains('Select City').click()
        cy.get('#react-select-4-option-0').click()
        cy.get('#submit').click()
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})