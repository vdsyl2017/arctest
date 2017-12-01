import * as productsPage from '../../pageObjects/productspage.page'

import * as homePage from '../../pageObjects/homepage.page'

const assert = require('assert');

const productspage = function () {


if(homePage.version === "other")
{

    this.Then(/^the product listing page should display a list of products$/, () => {
        assert.ok(productsPage.hasProducts(), "Not the products page");
    });

    this.When(/^I select a random product from the returned list$/, () => {
        productsPage.selectProduct();
    });

    this.Then(/^I should be taken to the product detail page$/, () => {
        assert.ok(productsPage.isProductDetailPage(), "Not the product detail page");
    });

    this.When(/^I change the product quantity$/, () => {
	productsPage.selectSize();
        productsPage.quantity();
    });

    this.When(/^I add the selected product to the basket$/, () => {
        productsPage.addProductToBasket();
    });

    this.Then(/^I should see the product added to the basket$/, () => {
        assert.ok(productsPage.productAddedToCart(), "Product has not been added");
    }); 

}
else{

    this.When(/^I select a random product from the returned list$/, () => {
        productsPage.selectProductMVersion();
    });

    this.When(/^I add a random product to the basket$/, () => {
        productsPage.selectProductMVersion();
	productsPage.selectSizeMVersion();
        productsPage.quantityMVersion();
        productsPage.addProductToBasketMVersion();
    });


    this.Then(/^I should be taken to the product detail page$/, () => {
        assert.ok(productsPage.isProductDetailPageMVersion(), "Not the product detail page");
    });

    this.Then(/^the product listing page should display a list of products$/, () => {
        assert.ok(productsPage.hasProductsMVersion(), "Not the products page");
    });


    this.When(/^I change the product quantity$/, () => {
	productsPage.selectSizeMVersion();
        productsPage.quantityMVersion();
    });

    this.When(/^I add the selected product to the basket$/, () => {
        productsPage.addProductToBasketMVersion();
    });

    this.Then(/^I should see the product added to the basket$/, () => {
        assert.ok(productsPage.productAddedToCartMVersion(), "Product has not been added");
productsPage.confirmAddToBagMVersion();

});


    this.Then(/^I should see the selected quantity for the product$/, () => {

        assert.ok(productsPage.quantityVisible(), "Quantity not visible");


});

    this.When(/^I open the basket$/, () => {
assert.ok(productsPage.cartVisibleMVersion(), "Product cart not visible");
productsPage.confirmAddToBagMVersion();
    });


    this.When(/^remove the added product$/, () => {

productsPage.removeProductMVersion();
    });



}


};

module.exports = productspage;
