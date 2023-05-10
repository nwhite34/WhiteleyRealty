/*
Script3.js is used for the contact page.
Using DOM to reference the form and elements of the form.
*/
const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");


/*
Giving field elements a field value to check for validation.
*/

nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
messageInput.isValid = () => !!messageInput.value;
const inputFields = [nameInput, emailInput, messageInput];

/*
Checking to see if the email is using valid characters
*/
const isValidEmail = (email) => {
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
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

form.addEventListener("submit", (e) => {
e.preventDefault();
shouldValidate = true;
validateInputs();
if (isFormValid) {
window.location.reload();
}
});

/**
 * When the user clicks the reset button, reload the page.
 */
form.addEventListener("reset", (e) => {
window.location.reload();
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));

/**
 * When the user submits the form successfully, an alert will appear with their name in a messgage.
 */

function myfun(){
var x1=document.getElementById('text1').value;
alert("“Dear  " +x1 + " , Thank you for your inquiry. One of our team members will be in touch with you shortly."

);
}

/**
 * resetForm is called when the form is being reset, and alerts
 * the user that the input values will be reset.
 */
function resetPage() {
alert("All input values will be reset.");
window.location.reload();
}

/**
 * Generating random maths equation out of 10.
 */
var a001 = Math.floor(Math.random() * 10);
var a002 = Math.floor(Math.random() * 10);
var a003 = a001 + a002;

/**
 * Declaring z & y variables for maths questions.
 */

var z = 0;
z++;
var y = 0;
y++;


/**
 * When the next button is clicked create random maths quiz
 */

function begin001() {
number001.innerHTML = y++;
disappear001.innerHTML = "";
message001.innerHTML = a001 + "<br />" + "+" + "<br />" + a002 + "<br />" + "__________";
message002.innerHTML = "<input type=text id=input001 /> <button onclick=submit001()>Next</button>";
}

/**
 * myfun(); function to create a custom message for the user when they successfully submit the form.
 */

function myfun(){
var x1=document.getElementById('text1').value;
alert("Dear  " +x1 + " , Thank you for your inquiry. One of our team members will be in touch with you shortly!"
);
}

/**
 * If the value is correct then show the submit button and text saying "Correct! Click to Submit your Form!";.
 * If user passes the test then show the submit button.
 */

function submit001() {
var answer001 = input001.value;
show001.innerHTML = answer001;
if (answer001 == a003) {
z++;
message003.innerHTML = "Correct! Click to Submit your Form!";
message002.innerHTML = "";
message004.innerHTML = "<button onclick=question003()>Submit</button>";           
form.addEventListener("submit", (e) => {
e.preventDefault();


/**
 * Checking to see if user passes the Human Validation test.
 * If user clicks submit  call the myfun(); function to display alert.
 * If user fails the test then show the alert message and reset the page.
 */

shouldValidate = true;
validateInputs();
if (isFormValid) {
    myfun();
}
});
}
else {
    window.location.reload();
alert("Human Verification Test Failed... Please try again later...");
 } }

