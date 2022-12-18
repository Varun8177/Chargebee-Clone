//* button to navigate to pricing
let pricingBtn = document.getElementById("pricingBtn")
pricingBtn.addEventListener("click", function(){
    window.location.href="../pages/Pricing.html"
})

// **FAQ section
var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
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