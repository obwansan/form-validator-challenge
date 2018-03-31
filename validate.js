var reqField = document.querySelectorAll('.required');
var reqErrMsg = document.querySelectorAll('.reqErrMsg');
var max8 = document.querySelector('.max8');
var max8Err = document.querySelector('.max8Err');
var min10Max25 = document.querySelector('.min10Max25');
var reqMin10Max25 = document.querySelector('.reqMin10Max25');
var minMaxErr = document.querySelector('.minMaxErr');
var reqMinMaxErr = document.querySelector('.reqMinMaxErr');
var lettersOnly = document.querySelector('.lettersOnly');
var lettersOnlyMsg = document.querySelector('.lettersOnlyMsg');

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
 * @param element String HTML of element to insert error message into
 *
 * @return error message if string length greater or less than specified
 */
function validateLength(inputTxt, maxLength, minLength, element, required) {

    var errMsg = "";

    if (inputTxt.value.length > maxLength && required === true) {
        errMsg += "Maximum " + maxLength + " characters allowed";
    } else if (inputTxt.value.length > maxLength && required !== true) {
        errMsg += "Optional field. If filled, number of characters must be " + maxLength + " or less.";
    }
    if (inputTxt.value.length < minLength && required === true) {
        errMsg += "Minimum " + minLength + " characters required";
    } else if (inputTxt.length < minLength && required !== true) {
        errMsg += "Optional field. If filled, number of characters must be " + minLength + " or more.";
    }
    element.textContent = errMsg;
}


function allLetters(inputTxt) {
    var letters = /^[A-Za-z]+$/;
    if(!inputTxt.value.match(letters))
        lettersOnlyMsg.textContent = "This field must only contain letters";
}


/**
 * Prevents form submission until all fields validated
 *
 * @return error message if field value is empty
 */
document.querySelector("form").addEventListener('submit', function(e) {
    e.preventDefault();

    // validate required fields (i.e. can’t be left blank)
    requiredFields();

    // validate string lengths
    validateLength(max8, 8, 0, max8Err, false);
    validateLength(reqMin10Max25, 25, 10, reqMinMaxErr, true);

    if (min10Max25.value)
        validateLength(min10Max25, 25, 10, minMaxErr, false);

    allLetters(lettersOnly);

    // if no error message(s) submit form
    // or only if no error messages on required fields?


});

// prevent letters in number fields

// prevent numbers in letter fields

// change other field required state depending on radio button required state
