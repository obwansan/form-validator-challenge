var reqField = document.querySelector('.required');
var reqErr = document.querySelector('.reqErrMsg');
var reqFieldLabel = document.querySelector('#reqFieldLabel');

var max8 = document.querySelector('.max8');
var max8Err = document.querySelector('.max8Err');
var max8Label = document.querySelector('#max8Label');

var reqMin10Max25 = document.querySelector('.reqMin10Max25');
var reqMinMaxErr = document.querySelector('.reqMinMaxErr');
var reqMinMaxLabel = document.querySelector('#reqMinMaxLabel');

var min10Max25 = document.querySelector('.min10Max25');
var minMaxErr = document.querySelector('.minMaxErr');
var minMaxLabel = document.querySelector('#minMaxLabel');

var lettersField = document.querySelector('#lettersOnly');
var lettersOnlyErr = document.querySelector('.lettersOnlyMsg');
var lettersOnlyLabel = document.querySelector('#lettersOnlyLabel');

var numbersField = document.querySelector('#numbersOnly');
var numbersOnlyErr = document.querySelector('.numbersOnlyMsg');
var numbersOnlyLabel = document.querySelector('#numbersOnlyLabel');

var radioYes = document.querySelector('#yes');
var reqIfRadioChkd = document.querySelector('#reqIfRadioChkd');
var reqIfRadioChkdErr = document.querySelector('.reqIfRadioChkdErr');
var reqIfRadioChkdLabel = document.querySelector('#reqIfRadioChkdLabel');

var emailField = document.querySelector('.email');
var invalidEmailErr = document.querySelector('.invalidEmailMsg');
var invalidEmailLabel = document.querySelector('#invalidEmailLabel');

/**
 * Applies focus to a field that isn't valid
 *
 * @param inputElement String HTML input field
 */
function fieldFocus(inputElement) {
    inputElement.focus();
    inputElement.classList.remove('validField');
    inputElement.classList.add('invalidField');
}

function fieldClear(inputElement) {
    inputElement.classList.remove('invalidField');
    inputElement.classList.add('validField');
}

function greenLabel(label) {
    label.style.color = "green";
}

/**
 * Validates if no input entered
 *
 * @return error message if field value is empty
 */
function requiredField(inputElement, errMsgField, callback) {
    if (inputElement.value === "") {
        errMsgField.textContent = "A value is required for this field";
    }
    callback(inputElement);
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
        errMsg += "Minimum " + minLength + " characters allowed";
        callback(inputElement);
    }
    errElement.textContent = errMsg;
}

reqField.addEventListener('blur', function() {
    if (!reqField.value) {
        reqErr.textContent = "A value is required for this field";
        fieldFocus(reqField);
    } else {
        reqErr.textContent = "";
        fieldClear(reqField);
        greenLabel(reqFieldLabel);
    }
});

max8.addEventListener('blur', function() {
    if (max8.value.length > 8) {
        max8Err.textContent = "Maximum 8 characters allowed";
        fieldFocus(max8);
    } else {
        if(max8.value) {
            fieldClear(max8);
            max8Err.textContent = "";
            greenLabel(max8Label);
        }
    }
});

reqMin10Max25.addEventListener('blur', function() {
    if (!reqMin10Max25.value) {
        reqMinMaxErr.textContent = "A value is required for this field";
        fieldFocus(reqMin10Max25);
    } else if (reqMin10Max25.value.length < 10 || reqMin10Max25.value.length > 25) {
        validateLength(reqMin10Max25, 25, 10, reqMinMaxErr, true, fieldFocus);
    } else {
        fieldClear(reqMin10Max25);
        reqMinMaxErr.textContent = "";
        greenLabel(reqMinMaxLabel);
    }
});

min10Max25.addEventListener('blur', function() {
    if (min10Max25.value.length < 10 || min10Max25.value.length > 25) {
        validateLength(min10Max25, 25, 10, minMaxErr, false, fieldFocus);
    } else {
        fieldClear(min10Max25);
        minMaxErr.textContent = "";
        greenLabel(minMaxLabel);
    }
});

lettersField.addEventListener('blur', function() {
    var letters = /^[A-Za-z]+$/;
    if(lettersField.value && !lettersField.value.match(letters)) {
        lettersOnlyErr.textContent = "This field must only contain letters";
        fieldFocus(lettersField);
    } else {
        if (lettersField.value) {
            lettersOnlyErr.textContent = "";
            fieldClear(lettersField);
            greenLabel(lettersOnlyLabel);
        }
    }
});

numbersField.addEventListener('blur', function() {
    var numbers = /^[0-9]+$/;
    if(numbersField.value && !numbersField.value.match(numbers)) {
        numbersOnlyErr.textContent = "This field must only contain numbers";
        fieldFocus(numbersField);
    } else {
        if (numbersField.value) {
            numbersOnlyErr.textContent = "";
            fieldClear(numbersField);
            greenLabel(numbersOnlyLabel);
        }
    }
});

reqIfRadioChkd.addEventListener('blur', function() {
    if(radioYes.checked && !reqIfRadioChkd.value ) {
        reqIfRadioChkdErr.textContent = "A value is required for this field";
        fieldFocus(reqIfRadioChkd);
    } else {
        if (reqIfRadioChkd.value) {
            reqIfRadioChkdErr.textContent = "";
            fieldClear(reqIfRadioChkd);
            greenLabel(reqIfRadioChkdLabel);
        }
    }
});

emailField.addEventListener('blur', function() {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailField.value && !emailField.value.match(mailFormat)) {
        invalidEmailErr.textContent = "You have entered an invalid email address!";
        fieldFocus(emailField);
    } else {
        if (emailField.value) {
            invalidEmailErr.textContent = "";
            fieldClear(emailField);
            greenLabel(invalidEmailLabel);
        }
    }
});

document.querySelector("form").addEventListener('submit', function(e) {
    e.preventDefault();

    requiredField(reqField, reqErr, fieldFocus);
    requiredField(reqMin10Max25, reqMinMaxErr, fieldFocus);

});
