
beforeEach(function () {
    //Run once before all tests in this block
    cy.fixture('userdata').then(function (data) {
        this.data = data
    })
})