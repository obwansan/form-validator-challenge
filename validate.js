var requiredField = document.querySelectorAll('.required');
var reqErrMsg = document.querySelectorAll('.reqErrMsg');
var maxLength8 = document.querySelectorAll('.maxLength8');
var minLength =
var maxLength =

    console.log(requiredField);

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

// function - validate required fields
function maxLength8(inputTxt, minLength, maxLength) {

}


// prevent form submission until all fields validated
document.querySelector("form").addEventListener('submit', function(e) {
    e.preventDefault();

    // validate required fields (i.e. can’t be left blank)
    requiredFields();

    // validate string lengths
    maxLength8();

})


// validate string lengths

// prevent letters in number fields

// prevent numbers in letter fields

// change other field required state depending on radio button required state


requestAnimationFrame()
browsers render at max 60 FPS
If your GPU doing other things, can slow down
makes everything run at the optimum FPS for someones computer
I.e. doesn’t look laggy