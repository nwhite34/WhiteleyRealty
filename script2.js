/*
Script2.js is used for the expression of interest page.
Using DOM to reference the form and elements of the form.
*/
const form = document.querySelector("form[name='form']");
const nameInput = document.querySelector("input[name='name']");
const phoneInput = document.querySelector("input[name='phone']");
const addressInput = document.querySelector("input[name='address']");
const offerInput = document.querySelector("input[name='offer']");


/*
Giving field elements a field value to check for validation.
Declaring input elements.
*/
nameInput.isValid = () => !!nameInput.value;
phoneInput.isValid = () => isValidPhone(phoneInput.value);
addressInput.isValid = () => isValidAdress(addressInput.value);
offerInput.isValid = () => isValidOffer(offerInput.value);
addressInput.isValid = () => !!addressInput.value;
offerInput.isValid = () => !!offerInput.value;

/*
Declaring input fields as input names.
*/
const inputFields = [nameInput, phoneInput, addressInput, offerInput];

/*
Checking to see if the phone is a numerical value.
*/
const isValidPhone = (phone) => {
const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
return re.test(String(phone).toLowerCase());
};

/*
Declaring should validate to false.
Declaring form valid to false.
*/
let shouldValidate = false;
let isFormValid = false;


/*
Declaring validate inputs as the user inputs.
Checking to see if inputs are valid using an if statement.
If form = true then remove and hide class invalid messages.
If form = false then remove and hide class invalid messages.
*/
const validateInputs = () => {
if (!shouldValidate) return;
isFormValid = true;
inputFields.forEach((input) => {
input.classList.remove("invalid");
input.nextElementSibling.classList.add("hide");

if (!input.isValid()) {
    input.classList.add("invalid");
    isFormValid = false;
    input.nextElementSibling.classList.remove("hide");
    }
});
};


/*
When the user clicks the submit button, an if statement is run to check to see if all fields are valid.
If forms are all valid then alert user and reset the field.
*/

form.addEventListener("submit", (e) => {
e.preventDefault();
shouldValidate = true;
validateInputs();
if (isFormValid) {
alert(
"Form Successfuly submitted!"     
);
form.reset();
}
});

/*
For each user input, see if input is valid.
*/

inputFields.forEach((input) => input.addEventListener("input", validateInputs));

/**
 * resetForm is called when the form is being reset, and alerts
 * the user that the input values will be reset.
 */
function resetForm() {
alert("All input values will be reset.");
}