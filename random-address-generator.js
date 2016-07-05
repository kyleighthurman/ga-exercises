// Write a script that can generate random addresses
// As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
// Your script should randomly select one item from each of these arrays and then use them to construct a random address
// Each time you run the script, it should print a new randomly-generated address to the terminal

var streetNumber = ['231', '382', '12', '7674', '935903', '703', '57836', '53'];
var streetName = ['Mossy Lane', 'Pen Ave', 'North Grange', 'Greenway St.', 'Mekeyla Ave', 'South St.', 'Red Baron Road', 'Rock Way'];
var cityName = ['Austin,', 'Denver,', 'Boulder,', 'Boise,', 'Sacramento,', 'San Jose,', 'Chattanooga,', 'Burlington,', 'Park City,'];
var stateName = ['TX,', 'CO,', 'ID,', 'CA,', 'TN,', 'VT,', 'UT,', 'GA,'];
var zipCode = ['11267', '80301', '76513', '09891', '37402', '11237', '54671', '87653'];

var randomizeStreetNum = Math.floor(Math.random() * streetNumber.length);
var randomizeStreetName = Math.floor(Math.random() * streetName.length);
var randomizeCityName = Math.floor(Math.random() * cityName.length);
var randomizeStateName = Math.floor(Math.random() * stateName.length);
var randomizeZipCode = Math.floor(Math.random() * zipCode.length)

console.log(streetNumber[randomizeStreetNum], streetName[randomizeStreetName], cityName[randomizeCityName], stateName[randomizeStateName], zipCode[randomizeZipCode]);
