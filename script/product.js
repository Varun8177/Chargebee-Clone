//* button to navigate to pricing
let pricingBtn = document.getElementById("pricingBtn")
pricingBtn.addEventListener("click", function () {
    window.location.href = "../pages/Pricing.html"
})
let customerBtn = document.getElementById("customerBtn")
customerBtn.addEventListener("click", function () {
    window.location.href = "../pages/customers.html"
})
let partnerBtn = document.getElementById("partnerBtn")
partnerBtn.addEventListener("click", function () {
    window.location.href = "../pages/partners.html"
})


// **FAQ section
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


console.log("hello world!");


let loginBtn = document.getElementById("login")
loginBtn.addEventListener("click", function () {

    window.location.href = "../pages/login.html"
})

let demoBtn = document.getElementById("demoBtn")
demoBtn.addEventListener("click", function () {
    window.location.href = "../pages/demo.html"
})

let demoBtn2 = document.getElementById("demo_btn")
demoBtn2.addEventListener("click", function () {
    window.location.href = "../pages/demo.html"
})

let signUpBtn = document.getElementById("sign_up_2")
signUpBtn.addEventListener("click", function () {
    window.location.href = "../pages/signup.html"
})

let sub_demoBtn = document.getElementById("sub_demo")
sub_demoBtn.addEventListener("click", function () {
    window.location.href = "../pages/demo.html"
})