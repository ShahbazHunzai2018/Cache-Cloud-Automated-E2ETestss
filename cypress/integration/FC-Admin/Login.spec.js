//@automation code for the Bigteams Fan Central Site. Here we go. Module #1   
/// <reference types="cypress" />

describe('Login', () => {
    //Before Hook to fetch the URL before script 
    beforeEach(() => {
      // should go to the Bigteams Fan Central Dev Admin Site / Fetching the data from URL
      cy.visit('https://dev.bigteams.com/auth/new')
        //Putting assertion on URL to check the URL text. 
        .url().should('include', 'dev.bigteams.com')
        .wait(5000)
        .get('.close > span').click()
        .wait(2000)

})
// Positive Test Case ==> Demo Run 
it('Should go to the Login Page and Login for the new User', () => {
  cy.wait(1000)
    .get('.mobile-header__login > [href="/auth/login"]').click()
    .wait(2000)
    .get('#username').click().type('bedrock@bigteams.com')
    .wait(2000)
    .get('#password').click().type('Bedrock123')
    .wait(2000)
    .get('#loginButton').click()

 })
 // 1. Positive Test Case ==> Providing the valid password but not email should show the field error on email address or username
 it('Should check the valid password and email fields', () => {
    cy.wait(1000)
      .get('.mobile-header__login > [href="/auth/login"]').click()
      .wait(2000)
      .get('#username').click().type('1234567879')
      .wait(2000)
      .get('#password').click().type('Bedrock1234524354235243524352435')
      .wait(2000)
      .get('#loginButton').click()
      // .wait(2000)
      // .get('#myFirstName').click().type('Shahbaz Automation Test') 
})
 // 2. Negative Test Case ==> Providing the invalid email address or username and invalid password should show the login error message 
 it('Should provide the invalid User Name, Email and Password', () => {
  cy.wait(1000)
    .get('.mobile-header__login > [href="/auth/login"]').click()
    .wait(2000)
    .get('#username').click().type('********')
    .wait(2000)
    .get('#password').click().type('Bedrock1234524354235243524352435')
    .wait(2000)
    .get('#loginButton').click()
    // .wait(2000)
    // .get('#myFirstName').click().type('Shahbaz Automation Test') 
 })
// 3. Negative Test Case ==> Providing the invalid email address or username and valid password should show the login error message
it('Should provide invalid Email Address and Valid Password', () => {
  cy.wait(1000)
    .get('.mobile-header__login > [href="/auth/login"]').click()
    .wait(2000)
    .get('#username').click().type('1234567879')
    .wait(2000)
    .get('#password').click().type('Neelambano2016')
    .wait(2000)
    .get('#loginButton').click()
    // .wait(2000)
    // .get('#myFirstName').click().type('Shahbaz Automation Test') 
 })

 // 4. Negative Test Case ==> Providing the valid email or username and invalid password should show the login error message
it('Should go to the Login Page and Login for the new User', () => {
  cy.wait(1000)
    .get('.mobile-header__login > [href="/auth/login"]').click()
    .wait(2000)
    .get('#username').click().type('shahbaz.khan@cache-cloud.com')
    .wait(2000)
    .get('#password').click().type('@@@@12345678987654321')
    .wait(2000)
    .get('#loginButton').click()
    // .wait(2000)
    // .get('#myFirstName').click().type('Shahbaz Automation Test') 
 })

 // 5. Positive Test Case ==> Verify that password text should be hidden
it('Should go to the Login Page and Login for the new User', () => {
  cy.wait(1000)
    .get('.mobile-header__login > [href="/auth/login"]').click()
    .wait(2000)
    .get('#username').click().type('1234567879')
    .wait(2000)
    .get('#password').click().type('Neelambano2016')
    .wait(2000)
    .get('#loginButton').click()
    // .wait(2000)
    // .get('#myFirstName').click().type('Shahbaz Automation Test') 
 })

 // 6. Positive Test Case ==> Provides the valid email and password should login to the user successfully
it('Should go to the Login Page and Login for the new User', () => {
  cy.wait(1000)
    .get('.mobile-header__login > [href="/auth/login"]').click()
    .wait(2000)
    .get('#username').click().type('shahbaz.khan@cache-cloud.com')
    .wait(2000)
    .get('#password').click().type('Neelambano2016')
    .wait(2000)
    .get('#loginButton').click()
 })

 // 7. Positive Test Case ==> Click on "forgot your password?"  should take user to the reset password page
it('Should go to the Login Page and Login for the new User', () => {
  cy.wait(1000)
    .get('.mobile-header__login > [href="/auth/login"]').click()
    .wait(2000)
    .get('#username').click().type('888Test')
    .wait(2000)
    .get('#password').click().type('Bedrock1234524354235243524352435')
    .wait(2000)
    .get('#loginButton').click()
 })

 // 8. Positive Test Case ==> Click on "Create New Fan Account" takes user to the Sign Up page
it('Should go to the Login Page and Login for the new User', () => {
  cy.wait(1000)
    .get('.mobile-header__login > [href="/auth/login"]').click()
    .wait(2000)
    .get('#loginButton').click()
 })
})
