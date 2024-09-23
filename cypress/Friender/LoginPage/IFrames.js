/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('Handling Iframe in Cypress',function()
{
    it("Iframe Handling",function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")
       // it will focus to iframe
        cy.iframe().find("a[href*='mentorship']").eq(0).click() //
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

    })
})