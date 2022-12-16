
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
        <img id="home" src="./images/home.png"></img>
        <img id="customers" src="./images/customers.png"></img>
        <img id="subs" src="./images/subscription.png"></img>
        <img id="invoice" src="./images/invoice.png"></img>
        <img id="products" src="./images/product.png"></img>
        <img id="features" src="./images/features.png"></img>
        <img id="transaction" src="./images/transaction.png"></img>
        <img id="dashboard" src="./images/dashboard.png"></img>
        <img id="reports" src="./images/reports.png"></img>
        <img id="app" src="./images/app.png"></img>
        <img id="settings" src="./images/settings.png"></img>
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
        <h4 id="sidebar_quickguide">Quick Start Guide</h4>
        <h4 id="sidebar_home" onclick="sidebar_home()">Home</h4>
        <h4 id="sidebar_customer">Customer</h4>
        <h4 id="sidebar_subs" onclick="sidebar_subs()">Subscriptions</h4>
        <div onclick="invoice()" class="invoice">
            <h3 id="invoice_Credit">Invoices & Credit Notes</h3>
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
        <h4 id="sidebar_report">Classic Reports</h4>
        <h4 id="sidebar_app">Apps</h4>
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
    <li id="bottom">Credit Notes</li>
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
    <li id="bottom">Coupon Sets</li>
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
    <li id="bottom">Features</li>   
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
    <li id="bottom">Events</li>
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
    <li id="bottom">Report Builder</li>
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
    <li id="bottom">Security</li>
    `
        return
    }
    if (but.innerText == "-") {
        document.querySelector("#set_empty").innerHTML = ""
        but.innerText = "+"
        return
    }
   
}

function month_3(){
    let x=document.querySelector("#month_3")
    x.style.backgroundColor="rgb(44, 0, 105)"
    document.querySelector("#month_6").style.backgroundColor="white"
    document.querySelector("#month_6").style.color="grey"
    document.querySelector("#month_12").style.backgroundColor="white"
    document.querySelector("#daily").style.backgroundColor="white"
    document.querySelector("#daily").style.color="grey"
    document.querySelector("#month_12").style.color="grey"
    // document.querySelector("#month_3")
}
function month_6(){
    let x=document.querySelector("#month_6")
    x.style.backgroundColor="rgb(44, 0, 105)"
    document.querySelector("#month_3").style.backgroundColor="white"
    document.querySelector("#month_3").style.color="grey"
    document.querySelector("#month_12").style.color="grey"
    document.querySelector("#daily").style.color="grey"
    document.querySelector("#daily").style.backgroundColor="white"
    document.querySelector("#month_12").style.backgroundColor="white"
    // document.querySelector("#month_3")
}
function month_12(){
    let x=document.querySelector("#month_12")
    x.style.backgroundColor="rgb(44, 0, 105)"
    document.querySelector("#month_3").style.backgroundColor="white"
    document.querySelector("#month_3").style.color="grey"
    document.querySelector("#month_6").style.color="grey"
    document.querySelector("#daily").style.color="grey"
    document.querySelector("#daily").style.backgroundColor="white"
    document.querySelector("#month_6").style.backgroundColor="white"
    // document.querySelector("#month_3")
}

function daily(){
    let x=document.querySelector("#daily")
    x.style.backgroundColor="rgb(44, 0, 105)"
    document.querySelector("#month_3").style.backgroundColor="white"
    document.querySelector("#month_3").style.color="grey"
    document.querySelector("#month_6").style.color="grey"
    document.querySelector("#month_12").style.color="grey"
    document.querySelector("#month_12").style.backgroundColor="white"
    document.querySelector("#month_6").style.backgroundColor="white"
}
let subs=[{
    "SubscriptionInfo":"Advanced INR Yearly",
    "CustomerInfo":"Iselectrics",
    "NextRenewal":"29 Dec 2022",
    "MRR":"Rs 3000 INR",
    "Createdon":"10/12/1"
},
{
    "SubscriptionInfo":"Advanced INR Yearly",
    "CustomerInfo":"Iselectrics",
    "NextRenewal":"29 Dec 2022",
    "MRR":"Rs 3000 INR",
    "Createdon":"10/12/1"
},
{
    "SubscriptionInfo":"Advanced INR Yearly",
    "CustomerInfo":"Iselectrics",
    "NextRenewal":"29 Dec 2022",
    "MRR":"Rs 3000 INR",
    "Createdon":"10/12/1"
},
{
    "SubscriptionInfo":"Advanced INR Yearly",
    "CustomerInfo":"Iselectrics",
    "NextRenewal":"29 Dec 2022",
    "MRR":"Rs 3000 INR",
    "Createdon":"10/12/1"
}]


function sidebar_subs(){
    document.querySelector("#main").innerHTML=`
    <div id="sb_subs_1">
    <h3>All Subscriptions</h3>
    <div>
     <button>Import Subscriptions</button>
     <button style="background-color:#6200ea;color:white;border:0;">Create Subscriptions</button>
    </div>
    </div>

    <div id="sb_subs_2">
    <h3>${subs.length} Subscriptions Available</h3>
    <input id="subs_input" type="text" placeholder="search for id/ company / name">
    <div>
    <select name="filter" id="sub_filter">
      <option value="filter">Filter</option>
      <option value="customerInfo">Customer Info</option>
    <option value="name">name</option>
    </select>
    <select name="Sort" id="sub_sort">
    <option value="Sort">Sort</option>
    <option value="A-Z">company A-Z</option>
  <option value="Z-A">company Z-A</option>
  </select>
    </div>
    </div>
    `
}

function sidebar_home(){
    document.querySelector("#main").innerHTML=`
    <div id="sub-main-1">
        <iframe width="200" height="125" style="margin-left: 20px;"
            src="https://www.youtube.com/embed/QCxXJMhQNZQ">
        </iframe>

        <div style="margin-left:20px ; ">
            <h3>What can Chargify do for you?</h3>
            Launch and automate your subscription business with Chargebee’s <br> invoicing, payment
            recovery, pricing management, and more. Focus on the growth, <br> and we'll handle the rest.
        </div>
    </div>

    <div id="sub-main-2">
        <div style="margin-left:20px ; ">
            <h3>Explore Chargebee</h3>
            <div style="display: flex;">
                <button
                    style="border-radius: 50px;background-color: rgb(107, 48, 188);margin-right: 5px;border: 0;">.</button>
                <button
                    style="border-radius: 50px;background-color: rgb(107, 107, 107);margin-right: 5px;border: 0">.</button>
                <button
                    style="border-radius: 50px;background-color: rgb(107, 107, 107);margin-right: 5px;border: 0">.</button>
                <button
                    style="border-radius: 50px;background-color: rgb(107, 107, 107);margin-right: 5px;border: 0">.</button>
                <button
                    style="border-radius: 50px;background-color: rgb(107, 107, 107);margin-right: 5px;border: 0">.</button>
            </div>
            <h3>Give it a try!</h3>
            <p>Welcome to your test site. This is a space for you to play <br> around and get an idea of how
                Chargebee can work for you.</p>
            <p>Interact with the essential elements of Chargebee and see how <br> they come together to make
                subscription magic happen. Experiment <br> away, everything is flexible here.</p>
            <button onclick="submain2()"
                style="background-color: rgb(107, 48, 188);color: white;padding: 5px 10px 5px 10px;border: 0; border-radius: 5px;cursor: pointer;">Lets
                Go!</button>
        </div>
        <img id="imagery" height="400px"
            src="https://dgkxwewtzsnml.cloudfront.net/static/app-static-assets/cb-vue/cb-vue-2022.12.15-11.40/images/cb-aha-moment-intro.png"
            alt="">
    </div>
    <div id="sub-main-3">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div id="buttons_home">
        <button id="daily" onclick="daily()" >Daily</button>
        <button id="month_3" onclick="month_3()">3 Months</button>
        <button id="month_6" onclick="month_6()">6 Months</button>
        <button id="month_12" onclick="month_12()">12 Months</button>
    </div>
`
}