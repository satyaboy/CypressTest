describe('Handling Web Controls',function()
{
   it('My Third test case',function()
   {
      //ALerts
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      //The cypress is auto accepting the alert and pop-up.
      //Cypress have capability for listening the browser events.
      cy.get('#alertbtn').click() 
      cy.get('[value="Confirm"]').click()

      cy.on('window.alert',(str)=>
         {
            expart(str).to.equal('Hello , share this practice page and share your knowledge')
         })

      cy.on('window.confirm',(str)=>
         {
            expart(str).to.equal('Hello , Are you sure you want to confirm?')
         })

      
   })

})