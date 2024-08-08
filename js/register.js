var checkPasswords = function() {
    if (document.getElementById('password').value ==
        document.getElementById('psw-repeat').value) {
        document.getElementById('error-message').style.color = 'green';
        document.getElementById('error-message').innerHTML = 'password matched';
    } else {
        document.getElementById('error-message').style.color = 'red';
        document.getElementById('error-message').innerHTML = 'password does not matched';
    }
}
