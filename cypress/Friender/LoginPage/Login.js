// Writing Login Page
/// <reference types ="cypress"/>

describe('My First test suit',function()
{
    it('My first Test case',function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('input[type="search"]').type('ca')
        cy.wait(2000)

        // In selenium we will use this method to hit the URL
        // But in the cypress it acts like to findelements of selenium
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        // we can see every step with screenshot and error message in sypress
        // Parent child 
        // Here the "find()" method will find the element inside that products
        cy.get('.products').as('productlocator') 
        // (as)we do aliesing here that if locator got change we no need to chnage everywhere
        cy.get('@productlocator').find('.product').should('have.length',4)
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()


        cy.get('@productlocator').find('.product')
        .each(($el, index, $list) =>
            {
                const vegtext=$el.find('h4.product-name').text()
                if(vegtext.includes('Cashews'))
                {
                   cy.wrap($el).find('button').click()
                }
            })
            
            //assert if logo is correctly displayed
            cy.get('.brand').should(have.text,'GREENKART')
             
            //This is to print in logs
            const logo= cy.get('.brand').then(function(logoelement)
            {
               // cy.log(logo.text())
               cy.log(logoelement.text())
               // text() is jquary method it's not a cypress method, cyprss also supprot jquary
            })
            
    })   
    
    
})
