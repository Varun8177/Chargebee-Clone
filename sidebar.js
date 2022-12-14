
//  &#9654; 
let email = "vaerunsdasd@gmail.com"
email = email.substring(1, 12) + "..."
document.querySelector("#details").innerHTML = `
    <p id="name">AB_company</p>
    <p id="email">${email}</p>
    <button id="select_butt">select plan &#8594;</button>
    `
function change_size() {

    let side_butt = document.querySelector("#open-sideBar")

    if (side_butt.innerText == "<") {
        document.querySelector("#side-bar-tools").innerHTML = `
        <img id="flag" src="./images/flag.png"></img>
        <img id="flag" src="./images/home.png"></img>
        <img id="flag" src="./images/customers.png"></img>
        <img id="flag" src="./images/subscription.png"></img>
        <img id="flag" src="./images/invoice.png"></img>
        <img id="flag" src="./images/product.png"></img>
        <img id="flag" src="./images/features.png"></img>
        <img id="flag" src="./images/transaction.png"></img>
        <img id="flag" src="./images/dashboard.png"></img>
        <img id="flag" src="./images/reports.png"></img>
        <img id="flag" src="./images/app.png"></img>
        <img id="flag" src="./images/settings.png"></img>
        `
        document.querySelector("#details").innerHTML = null
        document.querySelector("#logo").style.height = "50px"
        document.querySelector("#logo").style.marginLeft = "20px"
        document.querySelector("#side-bar").style.backgroundColor = "rgb(44,0,105)"
        side_butt.style.backgroundColor = "rgb(44,0,105)"
        side_butt.style.color = "white"
        document.querySelector("#side-bar").style.width = "50px"
        side_butt.innerText = ">"
        return
    }

    if (side_butt.innerText == ">") {
        document.querySelector("#details").innerHTML = `
                                                          <p id="name">AB_company</p>
                                                          <p id="email">${email}</p>
                                                          <button id="select_butt">select plan &#8594;</button>
                                                                                         `
        document.querySelector("#side-bar-tools").innerHTML = `
            <h4>Quick Start Guide</h4>
            <h4>Home</h4>
            <h4>Customer</h4>
            <h4>Subscriptions</h4>
            <div onclick="invoice()" class="invoice">
                <h3 id="invoice">Invoices & Credit Notes</h3>
                <button id="invoice_button">+</button>
            </div>
            <div id="invoice_empty"></div>

            <div onclick="catalog()" class="catalog">
                <h3 id="prod_catalog">Product Catalog</h3>
                <button id="prod_button">+</button>
            </div>
            <div id="prod_empty"></div>

            <div onclick="entitle()" class="entitle">
                <h3 id="entitle">Entitlements</h3>
                <button id="entitle_button">+</button>
            </div>
            <div id="entitle_empty"></div>

            <div onclick="logs()" class="logs">
                <h3 id="logs">Logs</h3>
                <button id="logs_button">+</button>
            </div>
            <div id="logs_empty"></div>

            <div onclick="rev()" class="rev">
                <h3 id="rev">RevenueStory</h3>
                <button id="rev_button">+</button>
            </div>
            <div id="rev_empty"></div>
            <h4>Classic Reports</h4>
            <h4>Apps</h4>
            <div onclick="set()" class="set">
                <h3 id="set">Settings</h3>
                <button id="set_button">+</button>
            </div>
            <div id="set_empty"></div>
        `
        side_butt.style.backgroundColor = "white"
        side_butt.style.color = "black"
        document.querySelector("#side-bar").style.backgroundColor = "white"
        document.querySelector("#side-bar").style.width = "300px"
        side_butt.innerText = "<"
        return
    }

}




function invoice() {
    let but = document.querySelector("#invoice_button")
    console.log(but.innerText)
    if (but.innerText == "+") {
        but.innerText = "-"
        document.querySelector("#invoice_empty").innerHTML = `
    <li>Invoices</li>
    <li>Credit Notes</li>
    `
        return
    }
    if (but.innerText == "-") {
        document.querySelector("#invoice_empty").innerHTML = ""
        but.innerText = "+"
        return
    }

}
function catalog() {
    let but = document.querySelector("#prod_button")
    console.log(but.innerText)
    if (but.innerText == "+") {
        but.innerText = "-"
        document.querySelector("#prod_empty").innerHTML = `
    <li>Product Families</li>
    <li>Plans</li>
    <li>Adddons</li>
    <li>Plans</li>
    <li>Charges</li>
    <li>Coupons</li>
    <li>Coupon Sets</li>
    `
        return
    }
    if (but.innerText == "-") {
        document.querySelector("#prod_empty").innerHTML = ""
        but.innerText = "+"
        return
    }

}
function entitle() {
    let but = document.querySelector("#entitle_button")
    console.log(but.innerText)
    if (but.innerText == "+") {
        but.innerText = "-"
        document.querySelector("#entitle_empty").innerHTML = `
    <li>Features</li>   
    `
        return
    }
    if (but.innerText == "-") {
        document.querySelector("#entitle_empty").innerHTML = ""
        but.innerText = "+"
        return
    }

}
function logs() {
    let but = document.querySelector("#logs_button")
    console.log(but.innerText)
    if (but.innerText == "+") {
        but.innerText = "-"
        document.querySelector("#logs_empty").innerHTML = `
    <li>Transactions</li>
    <li>Email Logs</li>
    <li>Events</li>
    `
        return
    }
    if (but.innerText == "-") {
        document.querySelector("#logs_empty").innerHTML = ""
        but.innerText = "+"
        return
    }

}

function rev() {
    let but = document.querySelector("#rev_button")
    console.log(but.innerText)
    if (but.innerText == "+") {
        but.innerText = "-"
        document.querySelector("#rev_empty").innerHTML = `
    <li>Dashboards</li>
    <li>Metric Explorer</li>
    <li>Customer Insights</li>
    <li>Accounting Reports</li>
    <li>Alerts and Goals</li>
    <li>Report Builder</li>
    `
        return
    }
    if (but.innerText == "-") {
        document.querySelector("#rev_empty").innerHTML = ""
        but.innerText = "+"
        return
    }

}

function set() {
    let but = document.querySelector("#set_button")
    console.log(but.innerText)
    if (but.innerText == "+") {
        but.innerText = "-"
        document.querySelector("#set_empty").innerHTML = `
    <li>Configure Chargebee</li>
    <li>Import & Export Data</li>
    <li>Team Members</li>
    <li>Chargebee Notifications</li>
    <li>Security</li>
    `
        return
    }
    if (but.innerText == "-") {
        document.querySelector("#set_empty").innerHTML = ""
        but.innerText = "+"
        return
    }

}

