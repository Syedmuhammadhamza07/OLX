function signin() {
    const inputElement = document.getElementsByTagName('input')
    const firstname = inputElement[0]
    const lastname = inputElement[1]
    const email = inputElement[2]
    const password = inputElement[3]
    const confirmPassword = inputElement[4]
    const addressIsLegal = true;
    var regex = "/^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/";

    if (!firstname.value || !lastname.value || !email.value || !password.value || !confirmPassword.value) {
        alert('Please fill all the inputs!')
        return
    }

    if (firstname.value.length === 1) {
        alert('Please enter your First Name with minimum of 2 letters')
        return
    }

    if (lastname.value.length === 1) {
        alert('Please enter your First Name with minimum of 2 letters')
        return
    }

    if (lastname.value.length === 1) {
        alert('Please enter your First Name with minimum of 2 letters')
        return
    }

    if (email.value.indexOf(" ") !== -1) {
        alert("No spaces allowed in address");
        return;
    }

    if (email.value.indexOf(" ") !== -1) {
        alert("No spaces allowed in address");
        return;
    }

    if (email.value.indexOf(" ") !== -1) {
        addressIsLegal = false;
    }
    if (email.value.indexOf("@") < 1 || email.value.indexOf("@") > email.value.length - 5) {
        addressIsLegal = false;
    }
    if (addressIsLegal === false) {
        alert("Please correct email address");
        return;
    }
    if (!(email.value.match(emailCorrectPattern))) {
        alert("Please correct email address");
        return false;
    }

    if (password.value.length === '') {
        alert("Enter your Password")
    }

    if (password.value.length < 8) {
        alert("Your Password is not Strong Enough")
    }

    if (password.value !== confirmPassword.value) {
        alert('Password is not matchable with confirm password!')
        return
    }

}


