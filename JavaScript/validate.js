function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);
        }
    }
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
    if(name === "") {
        printError("nameErr", "Please enter name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            printError("nameErr", "Enter valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    if(email === "") {
        printError("emailErr", "enter your email");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    if(mobile === "") {
        printError("mobileErr", "Please enter mobile number");
    } else {

            printError("mobileErr", "");
            mobileErr = false;
        }
        if(country === "Select") {
        printError("countryErr", "Please select country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    if(gender === "") {
        printError("genderErr", "Please select gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    if((nameErr || emailErr || mobileErr || countryErr || genderErr) === true) {
        return false;
    } else {
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Country: " + country + "\n" +
            "Gender: " + gender + "\n";
        if(hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }

    }
    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    localStorage.setItem('mobile',mobile)
    localStorage.setItem('country',country)
    localStorage.setItem('gender',gender)
    localStorage.setItem('hobbies',hobbies)

};



