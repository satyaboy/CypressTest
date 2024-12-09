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

//import cypress = require("cypress")

//
// Cypress.Commands.add('SelectProduct', (ProductName) => { 
//     cy.get('h4.card-title').each(($el,index,$list)=>
//         {
//             if($el.text().includes('Blackberry'))
//                 {
//                     cy.get('button.btn.btn-info').eq(index).click()
//                 }
//         })
// })

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
// cypress.Commands.add('submitFromDetails',()=>{

//     cy.get("#country").type("India")
//     cy.get(".suggestions ul li a").click()
//     cy.get(".btn-success").click()
// })