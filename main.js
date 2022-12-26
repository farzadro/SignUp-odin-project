document.addEventListener("DOMContentLoaded", function() {
    let password = document.getElementById("#password").value;
    let confirmPassword = document.getElementById("#confirm_password").value;

    let error = document.getElementById("#error");

    if(password == "" && confirmPassword == "") {
        error.innerHTML = "*password do not match"

    } else if( password === confirmPassword) {
        error.innerHTML = ""
    }

})
