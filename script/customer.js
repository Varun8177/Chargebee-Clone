//! navbar buttons to navigate to diffenrent pages

let pricingBtn = document.getElementById("pricingBtn")
pricingBtn.addEventListener("click", function(){
    window.location.href="../pages/Pricing.html"
})


let customerBtn = document.getElementById("customerBtn")
customerBtn.addEventListener("click", function(){
    window.location.href="../pages/customers.html"
})
let partnerBtn = document.getElementById("partnerBtn")
partnerBtn.addEventListener("click", function(){
    window.location.href="../pages/partners.html"
})
