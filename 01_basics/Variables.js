// Declaration of let, Const and Var
const accountId = 123; 
let accountEmail = "shukla@abc.com";
var accountPassword ="9889"
// Variable declaration without var,let aur const
 accountCity = "Noida";
 accountCity = "Ghaziabad";
 console.log(accountCity);


// Updating the values of let, Const and Var
// accountId = 12; is not allowed
accountEmail = "shukla@abcd.com";
accountPassword ="989"

// Printing the Values 
// 1) One-by-one
console.log(accountId);
// 2) Together as a Table 
console.table([accountId, accountEmail, accountPassword, accountCity]);
// Variable output without assigning any value to it or Empty Variable output 
let accountState ;
console.log(accountState);