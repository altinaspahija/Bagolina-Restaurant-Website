// When the button "I am new here" is clicked, function openRegister is called to rotate the card of login-form to register-form
// When the button "I have an account" is clicked, function openLogin is called to rotate the card of register-form tp login-form
var card = document.getElementById("card");

function openRegister(){
    card.style.transform = "rotateY(-180deg)";
}
function openLogin(){
    card.style.transform = "rotateY(0deg)";
}

// Name and Password from the register-form
var signUpUser = document.getElementById('signUpUser');
var signUpPassword = document.getElementById('signUpPassword');

// storing input from register-form
function store() {
    localStorage.setItem('signUpUser', signUpUser.value);
    localStorage.setItem('signUpPassword', signUpPassword.value);
}

// Check if stored data from register-form is equal to entered data in the login-form
function check() {
    let form = document.querySelectorAll('form');
    // Stored data from the register-form
    var storedName = localStorage.getItem('signUpUser');
    var storedPassword = localStorage.getItem('signUpPassword');

    // Entered data from the login-form
    var userName = document.getElementById('username');
    var userPassword = document.getElementById('password');

    // Check if stored data from register-form is equal to data from login form
    if(userName.value !== storedName || userPassword.value !== storedPassword) {
        alert('Username/Password is not correct');
        return false;
    }else {
        alert('You are logged in.');
        return;
    }
}

