
const pImage = '.product_image'
const product = '.product' 
const productInfo = '#productInfo'
var quantityBox = $('#product_quantity_full'); 
const addToCart = '#btn_add_2_shop_cart'
const productSizeButtons = '.product_size_buttons' 
const sizebutton = '#size_button_30347836' 
const addToBagResponse = '.add_to_bag_response' 
const sizeSelect = "[for='size_button_30347836']"


const pImageMVersion = '.ProductList'
const productLinkMVersion = '.Product-link'
const productSizeButtonsMVersion = '.ProductSizes-list' 
var quantityBoxMVersion = $('#productQuantity');
const addToCartMVersion = '.AddToBag'
const addToBagResponseMVersion = '.is-shown'
const addToBagConfirmMVersion = '.AddToBagConfirm-viewBag'
const productInfoMVersion = '.Carousel--productDetail' 
const sizeSelectMVersion = "[aria-label='Select size W2834']"
const removeOptionMVerson = '.OrderProducts-deleteText'
const confirmDelete = '.OrderProducts-deleteButton'



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

export const quantity = () => {

    quantityBox.selectByAttribute('value', '1');

} 


export const quantityMVersion = () => {

    //quantityBoxMVersion.selectByAttribute('value', '3');
quantityBoxMVersion.selectByValue('3');

}


export const addProductToBasket = () => {

	selectSize();
	browser.click(addToCart);
	browser.waitForExist(addToBagResponse, 10000);

} 

export const addProductToBasketMVersion = () => {

	selectSizeMVersion();
	quantityMVersion();
	browser.click(addToCartMVersion);

} 

export const confirmAddToBagMVersion = () => {

	browser.click(addToBagConfirmMVersion);

}

export const cartVisibleMVersion = () => browser.isVisible(addToBagResponseMVersion)

export const selectSize = () => {
	if(browser.isVisible(productSizeButtons))
	{

		browser.click(sizeSelect);

	} 
} 

export const quantityVisible = () => browser.isVisible(".OrderProducts-label")


export const selectSizeMVersion = () => {

browser.click(".Select-container");
browser.click("[value='W2532']");


} 

export const removeProductMVersion = () => {

browser.click("[class='OrderProducts-deleteText']");
browser.click(confirmDelete);


}
