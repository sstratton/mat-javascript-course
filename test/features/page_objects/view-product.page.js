var ViewProductPage = function(){

this.productName = function(product){
    return Element(by.cssContainingText('h2', product.name))
}

}
module.exports = new ViewProductPage();