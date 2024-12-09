import Cartpage from "./CartPage"

class ProductPage {


    pageValidation() {
        cy.contains("Shop Name").should('be.visible')
    }

    getCardCount() {
        return cy.get('app-card')
    }

    selectProduct(productname) {
        cy.get('app-card').filter(`:contains("${productname}")`)
            .then($element => {
                cy.wrap($element).should('have.length', 1)
                cy.wrap($element).contains('button', 'Add').click()
            })
    }

    selectFirstProduct() {
        cy.get('app-card').eq(0).contains('button', 'Add').click()
    }

    goToCart() {
        cy.contains('a', 'Checkout').click()
        return new Cartpage()
    }

}
export default ProductPage;