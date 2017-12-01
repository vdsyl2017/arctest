const resultsText = 'results'
const countClass = 'count'
const pImage = '.product_image'
const product = '.product' 
const productInfo = '#productInfo'
var quantityBox = $('#product_quantity_full'); 
const addToCart = '#btn_add_2_shop_cart'
const productSizeButtons = '.product_size_buttons' 
const sizebutton = '#size_button_30347836' 
//var quantityBox = '#product_quantity_full';
const addToBagResponse = '.add_to_bag_response' 
var addToBagItemString = 'none'  

const pImageMVersion = '.ProductList'
const productLinkMVersion = '.Product-link'
const productSizeButtonsMVersion = '.ProductSizes-list' 
var quantityBoxMVersion = $('#productQuantity');
const addToCartMVersion = '.AddToBag'
const addToBagResponseMVersion = '.is-shown'
const addToBagConfirmMVersion = '.AddToBagConfirm-viewBag'
const productInfoMVersion = '.Carousel--productDetail'  



export const hasProductsMVersion = () => browser.isVisible(pImageMVersion);

export const hasProducts = () => browser.isVisible(pImage);

export const selectProduct = () => {
	
	browser.click(product);

}

export const selectProductMVersion = () => {

	browser.click(productLinkMVersion);

}

export const productAddedToCart = () =>
{	
	
	browser.isVisible(addToBagResponse);

}

export const productAddedToCartMVersion = () => browser.isVisible(addToBagResponseMVersion);


export const isProductDetailPage = () => browser.isVisible(productInfo);

export const isProductDetailPageMVersion = () => browser.isVisible(productInfoMVersion);

export const getQuantity = () => {

    quantityBox.selectByAttribute('value', '1');

    var value = quantityBox.getValue();
    console.log(value); 

} 


export const getQuantityMVersion = () => {

    quantityBoxMVersion.selectByAttribute('value', '3');

    var value = quantityBoxMVersion.getValue();
    console.log(value); 

}


export const addProductToBasket = () => {

	selectSize();
	browser.click(addToCart);
	browser.waitForExist(addToBagResponse, 10000);

} 

export const addProductToBasketMVersion = () => {

	selectSizeMVersion();
	browser.click(addToCartMVersion);
	//browser.waitForExist(addToBagResponse, 10000);

} 

export const confirmAddToBagMVersion = () => {

	//selectSizeMVersion();
	browser.click(addToBagConfirmMVersion);
	//browser.waitForExist(addToBagResponse, 10000);


}

export const cartVisibleMVersion = () => browser.isVisible(addToBagResponseMVersion)

export const selectSize = () => {
if(browser.isVisible(productSizeButtons))
{

	//browser.click(sizebutton);
browser.click("[for='size_button_30347836']");
var item = browser.elementActive();
console.log(item);
} 
} 


export const selectSizeMVersion = () => {
if(browser.isVisible(productSizeButtonsMVersion))
{

	//browser.click(sizebutton);
browser.click("[aria-label='Select size W2834']");
var item = browser.elementActive();
console.log(item);
} 
} 
