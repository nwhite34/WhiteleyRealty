/* 
This script is to be used on the homepage.
Alert user about a message. When the user clicks ok, do nothing i.e. Display the Homepage.
If user clicks on cancel message, alert user with a new message. If user clicks ok on new alert,do nothing i.e. Display the Homepage.
*/
let userResult = confirm("Do you agree to adhere to Whiteley Realty's COVID policies when visiting our properties?");
if (userResult == true) {
} else {
alert(
"Sorry, you will be unable to visit any of Whiteley Realty's properties unless you adhere to the COVID policies."
);
window.location.replace(index.html);
}


 
  


