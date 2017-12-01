const brandLogo = '.BrandLogo-img'
/*const mSearchButton = '/html/body/div/div/div[2]/div[2]/div/div[1]/button[2]'*/

//const mSearchButton = '.SearchBar-button'
const searchButton = '#btn_search_go' 
const mSearchButton = '.Header-searchButton'
const searchTermInput = '#searchTermInput' 
const confirmSearchButton = ".SearchBar-button"
const searchTextBox = "#inp_search_text"  

/*var pageUrl = browser.getUrl();
console.log(pageUrl);

var pageTitle = browser.getTitle();
console.log(pageTitle);
//pageUrl.includes("m.top")*/

var pageUrl; /*= browser.getUrl();
console.log(pageUrl);

var pageTitle = browser.getTitle();
console.log(pageTitle);*/

var version;

export const setTimeOutValues = () => {

    	browser.timeouts({
        "script": 5000,
        "pageLoad": 10000,
        "implicit": 10000
    });
}

export const goToPage = () => {
    browser.url('/')

pageUrl = browser.getUrl();
console.log(pageUrl);

if(pageUrl.includes("m.top"))
{

version =  "mobile";


}
else
{
version =  "other"; 
}

console.log(version);

}

export const hasLogo = () => browser.isVisible(brandLogo)

export const searchForProduct = () => {

	browser.timeouts({
        "script": 5000,
        "pageLoad": 20000,
        "implicit": 10000
    });

		
if(version === "other")
	{
	browser.click(searchButton);
	browser.setValue(searchTextBox, "jeans");
	browser.click(searchButton);
}

if(version === "mobile")
	{
//console.log(browser.getText('=Clothing'));
	browser.click(mSearchButton);
	browser.setValue(searchTermInput, "jeans");
	browser.click(confirmSearchButton);
}
	


}
