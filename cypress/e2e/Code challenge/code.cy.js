it('David Perlera', () => {
cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
cy.get('#radio-btn-example legend')
.should('have.text', 'Radio Button Example')
})

it('Select DropDown', () => {
cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
cy.get('#dropdown-class-example').select('option2')
cy.get('#dropdown-class-example').select('option3')
})

it('Click boton signup', () => {
cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
cy.contains('Signup').should('be.visible').click()
cy.get('header button.btn-primary').eq(3).should('be.visible').click()
})

it('Click button Practice', () => {
cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
cy.contains('Practice').should('be.visible').click()
cy.get('header button.btn-primary').eq(1).should('be.visible').click()
})

it('Click button Signup', () => {
cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
cy.get('header button.btn-primary').contains('Signup').should('be.visible').click()
})

it('Get button Home', () => {
cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
cy.get('header button.btn-primary').contains('Home').should('be.visible')
})

it('Enter your Name', () => {
cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
cy.get('#name').type("David Perlera")
})







