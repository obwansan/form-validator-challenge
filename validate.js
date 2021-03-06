var reqField = document.querySelectorAll('.required');
var reqErr = document.querySelectorAll('.reqErrMsg');
var max8 = document.querySelector('.max8');
var max8Err = document.querySelector('.max8Err');
var min10Max25 = document.querySelector('.min10Max25');
var reqMin10Max25 = document.querySelector('.reqMin10Max25');
var minMaxErr = document.querySelector('.minMaxErr');
var reqMinMaxErr = document.querySelector('.reqMinMaxErr');
var lettersField = document.querySelector('#lettersOnly');
var lettersOnlyErr = document.querySelector('.lettersOnlyMsg');
var numbersField = document.querySelector('#numbersOnly');
var numbersOnlyErr = document.querySelector('.numbersOnlyMsg');
var radioYes = document.querySelector('#yes');
var reqIfRadioChkd = document.querySelector('#reqIfRadioChkd');
var reqIfRadioChkdErr = document.querySelector('.reqIfRadioChkdErr');
var emailField = document.querySelector('.email');
var invalidEmailErr = document.querySelector('.invalidEmailMsg');

/**
 * Applies focus to a field that isn't valid
 *
 * @param inputElement String HTML input field
 */
function fieldFocus(inputElement) {
    inputElement.focus();
    inputElement.classList.add('invalidField');
}
/**
 * Validates if no input entered
 *
 * @return error message if field value is empty
 */
function requiredFields(inputElement, errMsgField, callback) {
    inputElement.forEach(function (field) {
        if (field.value === "") {
            errMsgField.forEach(function (el) {
                el.textContent = "A value is required for this field";
            });
            callback(field);
        }
    })
}
/**
 * Validates field input length
 *
 * @param inputElement String length to be checked
 * @param maxLength Int maximum accepted string length
 * @param minLength Int minimum accepted string length
 * @param errElement String HTML of element to insert error message
 * @param required Bool value determines if field is required
 * @param callback Function applies passed in fieldFocus()
 *
 * @return error message if string length greater or less than specified
 */

//validateLength(min10Max25, 25, 10, minMaxErr, false, fieldFocus);

function validateLength(inputElement, maxLength, minLength, errElement, required, callback) {

    var errMsg = "";

    if (inputElement.value.length > maxLength) {
        errMsg += "Maximum " + maxLength + " characters allowed";
        callback(inputElement);
    }
    if (required === false && inputElement.value) {
        if (inputElement.value.length < minLength) {
            errMsg += "If value entered, minimum " + minLength + " characters required";
            callback(inputElement);
        }
    }
    if (required === true && inputElement.value.length < minLength) {
        errMsg += "A value is required for this field";
        callback(inputElement);
    }
    errElement.textContent = errMsg;
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
        lettersOnlyErr.textContent = "This field must only contain letters";
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
        numbersOnlyErr.textContent = "This field must only contain numbers";
        callback(inputElement);
    }
}
/**
 * Displays error message on field if radio btn checked
 *
 * @return error message if radio btn checked
 */
function reqIfRadioChecked(radioBtn, radioBtnErrField, reqField, callback) {
    if(radioBtn.checked && !reqField.value ) {
        radioBtnErrField.textContent = "A value is required for this field";
        callback(reqField);
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

    requiredFields(reqField, reqErr, fieldFocus);
    validateLength(max8, 8, 0, max8Err, false, fieldFocus);
    validateLength(reqMin10Max25, 25, 10, reqMinMaxErr, true, fieldFocus);

    if(min10Max25.value) {
        validateLength(min10Max25, 25, 10, minMaxErr, false, fieldFocus);
    }
    if(lettersField.value) {
        onlyLetters(lettersField, fieldFocus);
    }
    if(numbersField.value) {
        onlyNumbers(numbersField, fieldFocus);
    }
    reqIfRadioChecked(radioYes, reqIfRadioChkdErr, reqIfRadioChkd, fieldFocus);

    if(emailField.value) {
        validateEmail(emailField, invalidEmailErr, fieldFocus);
    }
});

