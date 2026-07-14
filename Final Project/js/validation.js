function validateForm() {

    var name = document.forms["contactForm"]["fullname"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var destination = document.forms["contactForm"]["destination"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name == "") {
        alert("Please enter your full name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone == "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (isNaN(phone)) {
        alert("Phone number must contain only numbers.");
        return false;
    }

    if (destination == "") {
        alert("Please enter your destination.");
        return false;
    }

    if (message == "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Thank you! Your message has been sent successfully.");

    return true;
}