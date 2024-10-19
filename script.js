//Product to Track
// mandatory - a unique code for the product, like its SKU
var itemCode = 'COW-T-SHIRT';
// mandatory - the price of this product
var itemPrice = 12.02;
// mandatory - the url to get to the relevant product page
var itemUrl = 'https://cdn.glitch.global/f49a4216-33d9-4de7-829a-85c979283cd0/mootshirt.png?v=1682437724251';
// mandatory
var itemQuantity = 2;
// mandatory - the total price for purchasing the given quantity of this product
var itemTotalPrice = 24.04;
// mandatory - the name / title of this product
var itemName = 'Cow T-Shirt'; // mandatory
// mandatory - the image url of this product
var itemImage = 'https://cdn.glitch.global/f49a4216-33d9-4de7-829a-85c979283cd0/mootshirt.png?v=1682437724251';
// optional - the category of this product
var itemCategory = 'T-Shirts';
// optional - the manufacturer, brand name or company / owner of this product (if any)
var itemManufacturer = 'Acme Co';


var itemCode2 = 'plane1';
// mandatory - the price of this product
var itemPrice2 = 2999.02;
// mandatory - the url to get to the relevant product page
var itemUrl2 = 'https://cdn.pixabay.com/photo/2023/03/16/10/56/airplane-7856455_1280.png';
// mandatory
var itemQuantity2 = 1;
// mandatory - the total price for purchasing the given quantity of this product
var itemTotalPrice2 = 2999.02;
// mandatory - the name / title of this product
var itemName2 = 'ticket'; // mandatory
// mandatory - the image url of this product
var itemImage2 = 'https://cdn.pixabay.com/photo/2023/03/16/10/56/airplane-7856455_1280.png';
// optional - the category of this product
var itemCategory2 = 'Flight';
// optional - the manufacturer, brand name or company / owner of this product (if any)
var itemManufacturer2 = 'Acme Co';


function purchaseOne(){
  //Order Completed
  // send order completed events
  var loggedOrder = "nothing";
  var product1 = {
      // mandatory - a unique code for the product, like its SKU
      itemCode: 'plane1',
      // mandatory - the name / title of this product
      itemName: 'ticket',
      // mandatory - the image url of this product
      itemImage: 'https://cdn.pixabay.com/photo/2023/03/16/10/56/airplane-7856455_1280.png',
      // mandatory - the price of this product
      itemPrice: 2999.02,
      // mandatory - the url to get to the relevant product page
      itemUrl: 'https://cdn.pixabay.com/photo/2023/03/16/10/56/airplane-7856455_1280.png',
      // mandatory
      itemQuantity: 1,
      // mandatory - the total price for purchasing the given quantity of this product
      itemTotalPrice: 2999.02,
      // optional - the category of this product
      itemCategory: 'Flight',
      // optional - the manufacturer, brand name or company / owner of this product (if any)
      itemManufacturer: 'Acme Co',
      // optional - the supplier of this product (if any)
      itemSupplier: 'Supplier Co',
      // you can add custom properies and later use them in segmentations or automations
      flightNo: 'GF 0074', 
      FlightDeparture: 'Bahrain International Airport'
      
  }
// Products should be an array with an object like product.
var products = [product1];
mootrack('trackOrderCompleted', products);
document.getElementById('log').value += '[' + new Date().toUTCString() + ']' + ' Item: ' + product1.itemCode + ' has been added submitted to Moosend as "ORDERED" event.'+ "\n";
}


function emptyCookies(){
	// retrieve all cookies
	var Cookies = document.cookie.split(';');
	 // set past expiry to all cookies
	for (var i = 0; i < Cookies.length; i++) {
	   document.cookie = Cookies[i] + "=; expires="+ new Date(0).toUTCString();
	}
  console.log("cookies cleared.");
  alert("cookies cleared.");
}

//This is the initialise script
function mooInit(){
  var websiteCode = document.getElementById('websitecode').value;
  //the value in website code must be the given website ID from Moosend "Websites" section
  mootrack('init', websiteCode);
  console.log(websiteCode);
  if(document.cookie.indexOf('uid=') == -1){
    document.getElementById('log').value += 'Error, no session was created' + '\n'
  } else{
    document.getElementById('log').value += '[' + new Date().toUTCString() + ']' + ' website tracking ID: ' + websiteCode + ' initialized.  Please Identify'+ "\n";
  }
  
}

//This is Identify script
function identifyVisitor(){
  var emailAddress = document.getElementById('emailaddy').value;
  mootrack('identify', emailAddress);
  mootrack('Video Played', { "Video length": 123, "id": "h17gQr0" });
  console.log(emailAddress);
  if(document.cookie.indexOf('email=') == -1){ document.getElementById('log').value += 'Error, no session was created, nothing to track.  Please Initialize sesion with a "Website Tracking ID" above' + '\n'
  }else{
  document.getElementById('log').value += '[' + new Date().toUTCString() + ']' + ' Email Address: ' + emailAddress + ' Identified, We are now tracking, please create an event'+ "\n";
  }
}

//This is page view
function pageView(){

    mootrack('trackPageView');
    document.getElementById('log').value += '[' + new Date().toUTCString() + ']' + ' Page has been tracked...' + "\n";  
}

// This is Add to Cart script
function addtoCart(){
  mootrack('trackAddToOrder', itemCode, itemPrice, itemUrl, itemQuantity);
  document.getElementById('log').value += '[' + new Date().toUTCString() + ']' + ' Item: ' + itemCode + ' has been added submitted to Moosend as "Added to Cart" event.'+ "\n";
}
function addtoCart2(){
  mootrack('trackAddToOrder', itemCode2, itemPrice2, itemUrl2, itemQuantity2);
  document.getElementById('log').value += '[' + new Date().toUTCString() + ']' + ' Item: ' + itemCode2 + ' has been added submitted to Moosend as "Added to Cart" event.'+ "\n";
}

function cookieCheck(){
  let x = document.cookie;
  console.log(x);
  document.getElementById('log').value += '[' + new Date().toUTCString() + ']' + ' the following cookie(s) exist: ' + x;
}

