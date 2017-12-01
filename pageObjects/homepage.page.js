const brandLogo = '.BrandLogo-img'

const searchButton = '#btn_search_go' 
const mSearchButton = '.Header-searchButton'
const searchTermInput = '#searchTermInput' 
const confirmSearchButton = ".SearchBar-button"
const searchTextBox = "#inp_search_text"  


export var version;

export const setTimeOutValues = () => {

    	browser.timeouts({
        "script": 5000,
        "pageLoad": 10000,
        "implicit": 10000
    });
}

export const goToPage = () => {
    browser.url('/')


if(browser.getUrl().includes("m.top"))
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
	browser.click(mSearchButton);
	browser.setValue(searchTermInput, "jeans");
	browser.click(confirmSearchButton);
}
	


}
