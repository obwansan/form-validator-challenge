var requiredField = document.querySelectorAll('.required');
var reqErrMsg = document.querySelectorAll('.reqErrMsg');
var max8 = document.querySelector('.max8');
var max8Err = document.querySelector('.max8Err');
var min10Max25 = document.querySelector('.min10Max25');
var minMaxErr = document.querySelector('.minMaxErr');
var errMsg = "";

console.log('hello')

/**
 * Validates if no input entered
 *
 * @return error message if field value is empty
 */
function requiredFields() {
    requiredField.forEach(function (field) {
        if (field.value === "") {
            reqErrMsg.forEach(function (el) {
                el.textContent = "This field must be completed";
                console.log(el)
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
 * @param el String HTML of element to insert error message into
 *
 * @return error message if string length greater or less than specified
 */
function validateLength(inputTxt, maxLength, minLength, el) {

    var errMsg = "";

    if (inputTxt.length > maxLength)
        errMsg += "Maximum " + maxLength + " characters allowed";

    if (inputTxt.length < minLength)
        errMsg += "Minimum " + minLength + " characters required";

    el.textContent = errMsg;
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
    validateLength(max8.value, 8, 0, max8Err)
    validateLength(min10Max25.value, 25, 10, minMaxErr)


    // if no error message(s) submit form
    // or only if no error messages on required fields?


});


// validate string lengths

// prevent letters in number fields

// prevent numbers in letter fields

// change other field required state depending on radio button required state
