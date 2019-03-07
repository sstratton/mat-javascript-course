var ViewProductPage = function(){

this.productName = function(product){
    return element(by.cssContainingText('h2', product.name))
}

}
module.exports = new ViewProductPage();