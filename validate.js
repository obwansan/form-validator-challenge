var requiredField = document.querySelectorAll('.required');
var reqErrMsg = document.querySelectorAll('.reqErrMsg');
var maxLength8Input = document.querySelector('.maxLength8');
var maxLength8Err = document.querySelector('.maxLength8Err');


// function - validate required fields
function requiredFields() {
    requiredField.forEach(function (field) {
        if (field.value === "") {
            // display appropriate error messages
            reqErrMsg.forEach(function (value) {
                value.textContent = "This field must be completed";
            })
        }
    })
}

// function - validate field input length
function validateLength(inputTxt, maxLength, minLength) {

    // if input text is greater than 8, throw error
    if (inputTxt.length > maxLength) {
        maxLength8Err.textContent = "Maximum " + maxLength + " characters allowed";
    }
}

// prevent form submission until all fields validated
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
