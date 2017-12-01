import * as homePage from '../../pageObjects/homepage.page'
const assert = require('assert');

const homepage = function () {

    this.When(/^I am on the landing page$/, () => {
        homePage.goToPage()
    });

    this.Then(/^I can see logo in navigation bar$/, () => {
        assert.ok(homePage.hasLogo())
    });

    this.When(/^I search for a random product$/, () => {
        homePage.searchForProduct()
    });


};

module.exports = homepage;
