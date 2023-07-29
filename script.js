let butn = document.getElementById('btn');
let detailAll = document.querySelectorAll("#fullForm input");
console.log(detailAll);

//name checking

function myFunction() {


    let fName = document.getElementById("myText").value;
    console.log(fName);

    let CName = fName.toUpperCase();
    console.log(CName);
    if (CName == fName) {

    } else {
        alert("please capitalize")
    }
}
function myFunction1() {


    let LName = document.getElementById("LName").value;
    console.log(LName);

    let BName = LName.toUpperCase();
    console.log(BName);
    if (BName == LName) {

    } else {
        alert("please capitalize1")
    }
}


//error age checking

let ageError = document.getElementById("error");
let userDate = document.getElementById("date");
// Disable future date selection
userDate.max = new Date().toISOString().split("T")[0];
console.log(userDate.max);
let d = new Date()
let b = d.getFullYear();
console.log(b)
function calcAge() {
    let birthDate = new Date(userDate.value);
    console.log(birthDate);
    let c = birthDate.getFullYear();
    console.log(c)
    let actualAge = (b - c);
    console.log(actualAge);
    if (actualAge <= 18) {
        ageError.innerText = `*you are not eligible`;
    }


}

//ID checking
let formSelect = document.querySelector(".form-select");
let result = document.getElementById("idMessage");

formSelect.addEventListener("change", (event) => {
    result.textContent = `*enter ${event.target.value} number`;
})

//pin codec validation
function postcode() {
    let inputCode = document.getElementById("inputZip").value;
    let postError = document.getElementById("pinError");
    if (inputCode == "") {
        postError.innerText = "*enter post code";
        return false;
    }
    if (inputCode.length > 6) {
        postError.innerText = "*enter valid post code";
        return false;
    }
}









// mobile checking


function mobile() {
    let x = document.getElementById("inputNumber").value;
    let spanM = document.getElementById("idMessage1");
    if (x == "") {
        spanM.innerText = "*enter mobile number";
        return false;
    }
    if (isNaN(x) || x.indexOf(" ") != -1) {
        spanM.innerText = "*Enter numeric value";
        return false;

    }
    if (x.length < 8) {
        spanM.innerText = "*enter 8 characters";
        return false;
    }
    if (x.charAt(0) != "9") {
        spanM.innerText = "*it should start with 9 or 8 ";
        return false
    }

}




//addresss checking

//check.addEventListener("click", address);
function address() {
    let inputAddress = document.getElementById("inputAddress").value;

    let permanentAddress = document.getElementById("inputAddress2");
    //let check = document.getElementById('Check1');
    permanentAddress.innerHTML = `${inputAddress}`;
    //alert('haii')
}

//email checking

function emailCode() {



    let inputMail = document.getElementById("inputEmail").value;
    let emailError = document.getElementById("email-error");
    let regex = /^([a-z A-Z 0-9 \.-]+)[@]([a-z 0-9]+).([a-z]{2,8})$/;
    if (inputMail == "") {
        emailError.innerText = "*enter email address";
        return false;
    } if (regex.test(inputMail)) {
        emailError.innerText = "";
    } else {
        emailError.innerText = "*enter valid email address";
    }
    console.log(inputMail);
}




butn.addEventListener("click", detailFun);

function detailFun() {
    detailAll.forEach(input => {
        if (input.value != "") {
            let fullCheck = document.getElementById("full-check");
            fullCheck.innerText = 'please full fill form';
        }
    })
    myFunction();
    myFunction1();
    calcAge();
    postcode();
    mobile();
    emailCode();
}