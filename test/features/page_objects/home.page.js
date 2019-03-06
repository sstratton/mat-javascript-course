var HomePage = function() {

    /**
     * Add Product Button
     */
    this.addProduct = $('.mat-flat-button', '.mat-primary');

    this.productInTableFn = function(product) {

        return element(by.cssContainingText('[role="gridcell"]', product.name))
    }

};

module.exports = new HomePage();