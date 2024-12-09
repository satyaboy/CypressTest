import Homepage from '../../support/PageObjects/HomePage'

describe('End to End ecommerce test', function () {

    before(function () {
        //Run once before all tests in this block
        cy.fixture('userdata').then(function (data) {
            this.data = data
            this.homepage = new Homepage()
        })
    })

    it('submit order', function () {

        const productname = this.data.productname

        this.homepage.goTo("https://rahulshettyacademy.com/loginpagePractise/")
        const productpage = this.homepage.login(this.data.username, this.data.password)

        productpage.pageValidation()
        productpage.getCardCount().should('have.length', 4)
        productpage.selectProduct(productname)
        productpage.selectFirstProduct()
        const cartpage = productpage.goToCart()
        cartpage.sumOfProduct().then(function (sum) {
            expect(sum).to.be.lessThan(200000)
        })
        const confirmationpage = cartpage.checkoutItems()
        confirmationpage.submitFromDetails()
        confirmationpage.getAlertMessage().should('contain', 'Success')
    })
})