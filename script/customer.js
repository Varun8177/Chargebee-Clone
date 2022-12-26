//! navbar buttons to navigate to diffenrent pages

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


let loginBtn = document.getElementById("login")
loginBtn.addEventListener("click", function () {

    window.location.href = "../pages/login.html"
})

let demoBtn = document.getElementById("demoBtn")
demoBtn.addEventListener("click", function () {
    window.location.href = "../pages/demo.html"
})