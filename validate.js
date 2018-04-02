var reqField = document.querySelectorAll('.required');
var reqErrMsg = document.querySelectorAll('.reqErrMsg');
var max8 = document.querySelector('.max8');
var max8Err = document.querySelector('.max8Err');
var min10Max25 = document.querySelector('.min10Max25');
var reqMin10Max25 = document.querySelector('.reqMin10Max25');
var minMaxErr = document.querySelector('.minMaxErr');
var reqMinMaxErr = document.querySelector('.reqMinMaxErr');
var lettersField = document.querySelector('#lettersOnly');
var lettersOnlyMsg = document.querySelector('.lettersOnlyMsg');
var numbersField = document.querySelector('#numbersOnly');
var numbersOnlyMsg = document.querySelector('.numbersOnlyMsg');
var radioYes = document.querySelector('#yes');
var reqIfRadioChkdErrMsg = document.querySelector('.reqIfRadioChkdErrMsg');
var email = document.querySelector('.email');
var invalidEmailMsg = document.querySelector('.invalidEmailMsg');

/**
 * Applies focus to a field that isn't valid
 *
 * @param inputElement String HTML input field
 */
function fieldFocus(inputElement) {
    inputElement.focus();
}
/**
 * Validates if no input entered
 *
 * @return error message if field value is empty
 */
function requiredFields() {
    reqField.forEach(function (field) {
        if (field.value === "") {
            reqErrMsg.forEach(function (el) {
                el.textContent = "A value is required for this field";
            })
        }
    })
}
/**
 * Validates field input length
 *
 * @param inputTxt String length to be checked
 * @param maxLength Int maximum accepted string length
 * @param minLength Int minimum accepted string length
 * @param element String HTML of element to insert error message
 * @param required Bool value determines if field is required
 *
 * @return error message if string length greater or less than specified
 */
function validateLength(inputField, maxLength, minLength, element, required, callback) {

    var errMsg = "";

    if (required === true) {
        if (inputField.value.length > maxLength)
            errMsg += "Maximum " + maxLength + " characters allowed";
        if (inputField.value.length < minLength)
            errMsg += "Minimum " + minLength + " characters required";
    } else {
        if (inputField.value.length > 0 && inputField.value.length < minLength)
            errMsg += "Minimum " + minLength + " characters required";
        if (inputField.value.length > maxLength)
            errMsg += "Maximum " + maxLength + " characters allowed.";
    }
    element.textContent = errMsg;
    callback(inputField);
}
/**
 * Checks if field only contains letters
 *
 * @param inputElement String HTML input field
 * @param callback Function to be passed fieldFocus function
 *
 * @return error message if field contains any non-alphabetic characters
 */
function onlyLetters(inputElement, callback) {
    var letters = /^[A-Za-z]+$/;
    if(!inputElement.value.match(letters)) {
        lettersOnlyMsg.textContent = "This field must only contain letters";
        callback(inputElement);
    }
}
/**
 * Checks if field only contains numbers
 *
 * @param inputElement String HTML input field
 * @param callback Function to be passed fieldFocus function
 *
 * @return error message if field contains any non-numeric characters
 */
function onlyNumbers(inputElement, callback) {
    var numbers = /^[0-9]+$/;
    if(!inputElement.value.match(numbers)) {
        numbersOnlyMsg.textContent = "This field must only contain numbers";
        callback(inputElement);
    }
}
/**
 * Displays error message on field if radio btn checked
 *
 * @return error message if radio btn checked
 */
function reqIfRadioChecked() {
    if(radioYes.checked) {
        console.log('checked');
        reqIfRadioChkdErrMsg.textContent = "A value is required for this field";
    }
}
/**
 * Checks if email is valid
 *
 * @param inputElement String HTML input field
 * @param msgElement String HTML message display field
 * @param callback Function to be passed fieldFocus function
 *
 * @return error message if email doesn't match regEx
 */
function validateEmail(inputElement, msgElement, callback) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!inputElement.value.match(mailFormat)) {
        msgElement.textContent = "You have entered an invalid email address!";
        callback(inputElement);
    }
}
/**
 * Prevents form submission until all fields validated
 *
 * @return error message if field(s) not valid
 */
document.querySelector("form").addEventListener('submit', function(e) {
    e.preventDefault();

    requiredFields();
    reqIfRadioChecked();

    validateLength(max8, 8, 0, max8Err, false, fieldFocus);
    validateLength(reqMin10Max25, 25, 10, reqMinMaxErr, true, fieldFocus);
    if(min10Max25.value)
        validateLength(min10Max25, 25, 10, minMaxErr, false, fieldFocus);

    if(lettersField.value)
        onlyLetters(lettersField, fieldFocus);
    if(numbersField.value)
        onlyNumbers(numbersField, fieldFocus);

    validateEmail(email, invalidEmailMsg, fieldFocus);
});

/* put event listeners on each field? And then pass the appropriate named function to it.
* Could then maybe make the error message appear when the user clicked out out the field...
* using focus / blur?

* if no error message(s) submit form
* or only if no error messages on required fields?

*/

// change color of field headings from black to green if entered correctly.
// change from black to red if not entered correctly.
// use css to make field background red if entered incorrectly.
