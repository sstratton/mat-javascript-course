const { Given, When, Then, Before } = require("cucumber");
const {setWorldConstructor} = require('cucumber')
const CustomWorld = require('../support/world').World

const actions = require('../support/actions')
const homePage = require('../page_objects/home.page')
const viewProductPage = require('../page_objects/view-product.page')
const addProductPage = require('../page_objects/add-product.page')

// Assertion library
const chai = require('chai')
const expect = chai.expect
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

setWorldConstructor(CustomWorld)

Before(function(){
    this.openWebsite()
})

Given("a product doesn't exist", function(dataTable) {
  // Convert our data table into an object
  var data = dataTable.hashes();
  debugger;

  // store our object into 
  this.product = data[0];

  // return statement tells cucumber that this step has finished
  return expect(actions.isElementOnPage(homePage.productInTableFn(this.product))).to.eventually.be.false;

});

When("I add the product", function() {

  // break point
  debugger;
  // run 'npm run debug' open 'chrome://inspect/#devices' and click 'inspect'.

  actions.click(homePage.addProduct)
  actions.type(addProductPage.productName, this.product.name)
  actions.type(addProductPage.productDescription, this.product.description)
  actions.type(addProductPage.productPrice, this.product.price)

  return actions.click(addProductPage.submitButton)
  
});

Then("the product is added", function() {
  
  return expect(actions.waitForElement(viewProductPage.productName(this.product))).to.eventually.be.true

});
