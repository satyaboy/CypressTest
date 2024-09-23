// Writing Login Page
/// <reference types ="cypress"/>

describe('My Second test suit',function()
{
    it('My Second Test case',function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('input[type="search"]').type('ca')
        // Parent child 
        // Here the "find()" method will find the element inside that products
        cy.get('.products').as('productlocator') 
        cy.get('@productlocator').find('.product')
        .each(($el, index, $list) =>
            {
                const vegtext=$el.find('h4.product-name').text()
                if(vegtext.includes('Cashews'))
                {
                   cy.wrap($el).find('button').click()
                }
            })
        
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click() 
    })   
    
    
})
