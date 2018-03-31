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
var radioBtn = document.querySelector('.radio');

var errMsg = "";

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

function fieldFocus(inputElement) {
    inputElement.focus();
}


function allLetters(inputElement, callback) {
    var letters = /^[A-Za-z]+$/;
    if(!inputElement.value.match(letters)) {
        lettersOnlyMsg.textContent = "This field must only contain letters";
        callback(inputElement);
    }
}

function allNumbers(inputElement, callback) {
    var numbers = /^[0-9]+$/;
    if(!inputElement.value.match(numbers)) {
        numbersOnlyMsg.textContent = "This field must only contain numbers";
        callback(inputElement);
    }
}

/**
 * Prevents form submission until all fields validated
 *
 * @return error message if field value is empty
 */
document.querySelector("form").addEventListener('submit', function(e) {
    e.preventDefault();

    // validate required fields
    requiredFields();

    // validate string lengths
    validateLength(max8, 8, 0, max8Err, false, fieldFocus);
    validateLength(reqMin10Max25, 25, 10, reqMinMaxErr, true, fieldFocus);
    if (min10Max25.value)
        validateLength(min10Max25, 25, 10, minMaxErr, false, fieldFocus);

    // validate only letters
    if (lettersField.value) {
        allLetters(lettersField, fieldFocus);
    }
    // validate only numbers
    if (numbersField.value) {
        allNumbers(numbersField, fieldFocus);
    }


    // if no error message(s) submit form
    // or only if no error messages on required fields?


});

// change other field required state depending on radio button required state
