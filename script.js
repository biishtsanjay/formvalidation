function validation() {
    var username = document.getElementById('username').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var bio = document.getElementById('bio').value;
    var dob = document.getElementById('dob').value;

    // regex for various fields
    var usercheck = /^[A-Za-z. ]{3,20}$/;
    var phonecheck = /^[6789][0-9]{9}$/;
    var emailcheck = /^[A-Za-z0-9_.]{1,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var biocheck = /^\W*(\w+\b\W*){0,60}$/;

    //  validate username
    if (usercheck.test(username)) {
        document.getElementById('usererror').innerHTML = " ";
    } else {
        document.getElementById('usererror').innerHTML = "* Username is invalid";
        return false;
    }

    // validate phone no
    if (phonecheck.test(phone)) {
        document.getElementById('phoneerror').innerHTML = " ";
    } else {
        document.getElementById('phoneerror').innerHTML = "* Phone no. is invalid";
        return false;
    }

    // validate email
    if (emailcheck.test(email)) {
        document.getElementById('emailerror').innerHTML = " ";
    } else {
        document.getElementById('emailerror').innerHTML = "* Email is invalid";
        return false;
    }

    // validate bio
    if (biocheck.test(bio)) {
        document.getElementById('bioerror').innerHTML = " ";
    } else {
        document.getElementById('bioerror').innerHTML = "* Bio cannot be of more than 60 words";
        return false;
    }

    // validate gender
    if (document.getElementById("male").checked || document.getElementById("female").checked || document.getElementById("other").checked) {
        document.getElementById('gendererror').innerHTML = " ";
    } else {
        document.getElementById('gendererror').innerHTML = "* This is a required field";
        return false;
    }

}


// connecting spreadsheet with registration form
const scriptURL =
    "https://script.google.com/macros/s/AKfycbzQ9ryuongh_es8X0je__tZcX_DsWoQ7175oriY4yo0vDR6nMmYzrq3FqPcnK-0nNDC/exec";
const form = document.forms["googlespreadsheet"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
});
