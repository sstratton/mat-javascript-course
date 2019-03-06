/**
 * Module for any actions performed on the website
 * @constructor
 */
var Actions = function() {
  this.EC = protractor.ExpectedConditions;

  /**
   * Used to wait for an element if we know it should be there
   * @param {ElementFinder} element on the webpage
   * @return {Promise} true if found
   */
  this.waitForElement = async function(element) {
    return await browser.wait(this.EC.visibilityOf(element), 4000);
  };

  /**
   * @param  {ElementFinder} element
   */
  this.isElementClickable = async function(element) {
    return await browser.wait(this.EC.elementToBeClickable(element), 4000);
  };

  /**
   * @param {ElementFinder} element
   * @return {Promise} void
   *
   */
  this.click = async function(element) {
    await this.isElementClickable(element);
    return await element.click();
  };

  /**
   * @param  {ElementFinder} element
   * @param  {String} text
   */
  this.type = async function(element, text) {
    await this.waitForElement(element);
    return await element.sendKeys(text);
  };
  /**
   * @param  {ElementFinder} element
   * @return {Promise} true if present
   */
  this.isElementOnPage = async function(element) { 
    return await browser.isElementPresent(element);
  };
};
module.exports = new Actions();
