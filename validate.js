var requiredField = document.querySelectorAll('.required');
var reqErrMsg = document.querySelectorAll('.reqErrMsg');
var maxLength8Input = document.querySelector('.maxLength8');
var maxLength8Err = document.querySelector('.maxLength8Err');

/**
 * Validates if no input entered
 *
 * @return error message if field value is empty
 */
function requiredFields() {
    requiredField.forEach(function (field) {
        if (field.value === "") {
            reqErrMsg.forEach(function (value) {
                value.textContent = "This field must be completed";
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
 *
 * @return error message if string length greater or less than specified
 */
function validateLength(inputTxt, maxLength, minLength) {

    // if input text is greater than 8, throw error
    if (inputTxt.length > maxLength) {
        maxLength8Err.textContent = "Maximum " + maxLength + " characters allowed";
    }
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
    validateLength(maxLength8Input.value, 8)

    // console.log(maxLength8Input.value);

});


// validate string lengths

// prevent letters in number fields

// prevent numbers in letter fields

// change other field required state depending on radio button required state
