function register() {
    document.querySelectorAll('.errormsg').forEach(element => element.textContent = "");
 
    let firstName = document.getElementById("first").value.trim();
    let lastName = document.getElementById("last").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let email = document.getElementById("mail").value.trim();
    let password = document.getElementById("pass").value.trim();
    let confirmPassword = document.getElementById("confirmpass").value.trim();
    let isValid = true;
 
    
    if (!firstName) {
        showError('first-name-message', 'First name cannot be empty');
        isValid = false;
    } else if (firstName.length < 3) {
        showError('first-name-message', 'First name must be at least 3 characters long');
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(firstName)) {
        showError('first-name-message', 'First name can only contain letters');
        isValid = false;
    }
 
    
    if (!lastName) {
        showError('last-name-message', 'Last name cannot be empty');
        isValid = false;
    } else if (lastName.length < 3) {
        showError('last-name-message', 'Last name must be at least 3 characters long');
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
        showError('last-name-message', 'Last name can only contain letters');
        isValid = false;
    }
 
    
    if (!contact) {
        showError('contact-message', 'Contact cannot be empty');
        isValid = false;
    } else if (contact.length !== 10) {
        showError('contact-message', 'Contact must contain 10 digits');
        isValid = false;
    }
 
    
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email) {
        showError('email-message', 'Email cannot be empty');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('email-message', 'Please enter a valid email');
        isValid = false;
    }
 
    
    if (!password) {
        showError('password-message', 'Password cannot be empty');
        isValid = false;
    } else if (password.length < 8) {
        showError('password-message', 'Password must contain at least 8 characters');
        isValid = false;
    }
 
    
    if (!confirmPassword) {
        showError('confirm-password-message', 'Confirm password cannot be empty');
        isValid = false;
    } else if (confirmPassword !== password) {
        showError('confirm-password-message', 'Passwords do not match');
        isValid = false;
    }
    let radiobtn1 = document.getElementById('male');
    let radiobtn2 = document.getElementById('female');
    if (!radiobtn1.checked && !radiobtn2.checked) {
        document.getElementById('checkbox-message').textContent = 'Please select a gender';
        isValid = false;
    }
 
    const country = document.getElementById('drop').value;
    if (country === "Select a Country") {
        document.getElementById('option-message').textContent = 'Please select a country';
        isValid = false;
    }
 
    const checkBox = document.getElementById('check').checked;
    if (!checkBox) {
        document.getElementById('tick-checkbox').textContent = 'Please accept the terms and conditions';
        isValid = false;
    }
 
 
    if (isValid) {
        alert('Registration successful!');
        document.querySelector('form').reset();
    }

    return isValid;
}
 
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}
  
function hideErrorOnInput(element, errorElementId, validationFn) {
    element.addEventListener('input', function () {
        if (validationFn(this.value)) {
            document.getElementById(errorElementId).textContent = '';
        }
    });
}
 
hideErrorOnInput(document.getElementById('first'), 'first-name-message', value => value.length >= 3 && /^[a-zA-Z]+$/.test(value));
hideErrorOnInput(document.getElementById('last'), 'last-name-message', value => value.length >= 3 && /^[a-zA-Z]+$/.test(value));
hideErrorOnInput(document.getElementById('contact'), 'contact-message', value => value.length === 10 && /^\d+$/.test(value));
hideErrorOnInput(document.getElementById('mail'), 'email-message', value => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value));
hideErrorOnInput(document.getElementById('pass'), 'password-message', value => value.length >= 8);
hideErrorOnInput(document.getElementById('confirmpass'), 'confirm-password-message', value => value === document.getElementById('pass').value);
hideErrorOnInput(document.getElementById('radio-btn'), 'checkbox-message', value => value === radiobtn1.checked && radiobtn2.checked);
hideErrorOnInput(document.getElementById('country'),'option-message', value => value === country );
hideErrorOnInput(document.getElementById('check-btn'),'tick-checkbox', value => value === checkBox);