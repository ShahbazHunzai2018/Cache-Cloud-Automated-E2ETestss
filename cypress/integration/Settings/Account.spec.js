/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
      // should go to the Login URL on Bigteams Shedule Star Student Central  
      cy.visit('https://www.test.planeths.com/index.php?keyword=/user/settings/account')
        .wait(2000)
        .get('#user-email-mobile').click().type('testone@yopmail.com')
        .wait(2000)
        .get('#user-password').click().type('abc12345')
        .wait(2000)
        .get('.buttons > .action-btn-group-btn').click()
  })

  it('Should go to account section and update the users account', () => {
      
      cy.get(':nth-child(2) > .col-xs-12 > .validate-group > .form-group > :nth-child(2) > label').click().type('test')
        .wait(2000)
        .get('#user-first-name').type('test')
        .wait(2000)
        .get('#user-last-name').type('test')
        .wait(2000)
        .get(':nth-child(7) > .col-xs-12 > .validate-group > .form-group > :nth-child(2) > label').click()
        .wait(2000)
        .get('#user-last-name').type('test')
        .wait(2000)
        .get('#user-home-phone').type('6734575478')
        .wait(2000)
        .get('#user-mobile').type('5456565789')
        .wait(2000)
        .get('#user-alternate-phone').type('2342343899')
        .wait(2000)
        .get('#user-ethnicity').select('Asian')
        //.get('#user-ethnicity').should('have.value', 'Asian')
        .wait(3000)
        .get('#schoolSelect_1808957_txt').type('Test School')
        .wait(2000)
        .get('#user-address1').type('66-4 Parkhurst Rd, Chelmsford MA 1824')
        .wait(2000)
        .get('#user-address2').type('591 Memorial Dr, Chicopee MA 1020')
        .wait(2000)
        .get('#user-city').type('Chicopee')
        .wait(2000)
        .get('#user-state').select('Massachusetts')
        .wait(2000)
        .get('#user-zip').type('18245')
        .wait(2000)
        .get('#user-student-id').type('1234')
        .wait(2000)
        .get('#action-btn-group > div.buttons > button').click()
        .wait(2000)
    })
     // cy.logout()

    })

  