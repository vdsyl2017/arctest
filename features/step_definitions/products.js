import * as productsPage from '../../pageObjects/productspage.page'
const assert = require('assert');

const productspage = function () {


if(!browser.getUrl().includes("m.top"))
//if(1 === -1)
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
        productsPage.getQuantity();
    });

    this.When(/^I add the selected product to the basket$/, () => {
        productsPage.addProductToBasket();
    });

    this.Then(/^I should see the product added to the basket$/, () => {
        assert.ok(productsPage.productAddedToCart(), "Product has not been added");
    }); 

}
else{

    this.Then(/^the product listing page should display a list of products$/, () => {
        assert.ok(productsPage.hasProductsMVersion(), "Not the products page");
    });

    this.When(/^I select a random product from the returned list$/, () => {
        productsPage.selectProductMVersion();
    });

    this.When(/^I add a random product to the basket$/, () => {
        productsPage.selectProductMVersion();
    });


    this.Then(/^I should be taken to the product detail page$/, () => {
        assert.ok(productsPage.isProductDetailPageMVersion(), "Not the product detail page");
    });

/*
    this.Then(/^the product listing page should display a list of products$/, () => {
        assert.ok(productsPage.hasResultsMVersion(), "Not the results page");
    });
*/
    this.When(/^I change the product quantity$/, () => {
	//productsPage.selectSize();
        productsPage.getQuantityMVersion();
    });

    this.When(/^I add the selected product to the basket$/, () => {
        productsPage.addProductToBasketMVersion();
    });

    this.Then(/^I should see the product added to the basket$/, () => {
        assert.ok(productsPage.productAddedToCartMVersion(), "Product has not been added");
productsPage.confirmAddToBagMVersion();

});

    this.When(/^I open the basket$/, () => {
        //productsPage.confirmAddToBagMVersion();
assert.ok(productsPage.cartVisibleMVersion(), "Product cart not visible");
    });


}
/*else
{



    this.When(/^I select a random product from the returned list$/, () => {
        //productsPage.selectProduct();
    });









}*/
//browser.getText(selector);


};

module.exports = productspage;
