
//  &#9654;

let mydetails = JSON.parse(localStorage.getItem("Company Details"))
let email = "vaerunsdasd@gmail.com"
let com = mydetails.company_name
console.log(mydetails)
let n = mydetails.name;
email = email.substring(1, 12) + "..."
document.querySelector("#details").innerHTML = `
    <p id="name">${n}</p>
    <p id="email">${com}</p>
    <button id="select_butt">select plan &#8594;</button>
    `
function change_size() {

    let side_butt = document.querySelector("#open-sideBar")

    if (side_butt.innerText == "<") {
        document.querySelector("#side-bar-tools").innerHTML = `
        <img id="flag" onclick="get_started()" src="./images/flag.png"></img>
        <img id="home" onclick="sidebar_home()" src="./images/home.png"></img>
        <img id="customers" onclick="sidebar_customer()" src="./images/customers.png"></img>
        <img id="subs" onclick="sidebar_subs()"  src="./images/subscription.png"></img>
        <img id="invoice" onclick="cred_Notes()" src="./images/invoice.png"></img>
        <img id="products" onclick="inv_Notes()" src="./images/product.png"></img>
        <img id="features" src="./images/features.png"></img>
        <img id="transaction" onclick="entitle()" src="./images/transaction.png"></img>
        <img id="dashboard"  onclick="logs()" src="./images/dashboard.png"></img>
        <img id="reports" onclick="rev()" src="./images/reports.png"></img>
        <img id="app" onclick="myapp()" src="./images/app.png"></img>
        <img id="settings" onclick="set()" src="./images/settings.png"></img>
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
        <div class="sidebar_quickguide" onclick="get_started()">
        <h3 >Quick Start Guide</h3>
    </div>
    <div class="sidebar_home" onclick="sidebar_home()">
        <h3>Home</h3>
    </div>
    <div class="sidebar_customer" onclick="sidebar_customer()">
        <h3>Customer</h3>
    </div>
    <div class="sidebar_subs" onclick="sidebar_subs()">
        <h3 >Subscriptions</h3>
    </div>
    
    
    <div onclick="invoice()" class="invoice">
        <h3 id="invoice_Credit">Invoices & Credit Notes</h3>
        <h3 id="invoice_button">+</h3>
    </div>
    <div id="invoice_empty"></div>

    <div onclick="catalog()" class="catalog">
        <h3 id="prod_catalog">Product Catalog</h3>
        <h3 id="prod_button">+</h3>
    </div>
    <div id="prod_empty"></div>

    <div onclick="entitle()" class="entitle">
        <h3 id="entitle">Entitlements</h3>
        <h3 id="entitle_button">+</h3>
    </div>
    <div id="entitle_empty"></div>

    <div onclick="logs()" class="logs">
        <h3 id="logs">Logs</h3>
        <h3 id="logs_button">+</h3>
    </div>
    <div id="logs_empty"></div>

    <div onclick="rev()" class="rev">
        <h3 id="rev">RevenueStory</h3>
        <h3 id="rev_button">+</h3>
    </div>
    <div id="rev_empty"></div>
    <div class="sidebar_report">
        <h3 >Classic Reports</h3>
    </div>
    <div class="sidebar_app" onclick="myapp()">
        <h3 >Apps</h3>
    </div>
    
    <div onclick="set()" class="set">
        <h3 id="set">Settings</h3>
       
    </div>
 
    
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
    <li id="bottom" onclick="inv_Notes()">Invoices</li>
    <li id="bottom" onclick="cred_Notes()">Credit Notes</li>
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
    <li id="bottom">Product Families</li>
    <li id="bottom">Plans</li>
    <li id="bottom">Adddons</li>
    <li id="bottom">Plans</li>
    <li id="bottom">Charges</li>
    <li id="bottom">Coupons</li>
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
    <li  id="bottom">Transactions</li>
    <li  id="bottom">Email Logs</li>
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
    <li  id="bottom">Dashboards</li>
    <li  id="bottom">Metric Explorer</li>
    <li id="bottom">Customer Insights</li>
    <li id="bottom">Accounting Reports</li>
    <li id="bottom">Alerts and Goals</li>
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
    <li id="bottom">Configure Chargebee</li>
    <li id="bottom">Import & Export Data</li>
    <li id="bottom">Team Members</li>
    <li id="bottom">Chargebee Notifications</li>
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

function month_3() {
    let x = document.querySelector("#month_3")
    x.style.backgroundColor = "rgb(44, 0, 105)"
    document.querySelector("#month_6").style.backgroundColor = "white"
    document.querySelector("#month_6").style.color = "grey"
    document.querySelector("#month_12").style.backgroundColor = "white"
    document.querySelector("#daily").style.backgroundColor = "white"
    document.querySelector("#daily").style.color = "grey"
    document.querySelector("#month_12").style.color = "grey"
    document.querySelector(".graph").innerHTML = `<img src="./images/graph_9.png" alt="">
    <img src="./images/graph_3.png" alt="">
    <img src="./images/graph_8.png" alt="">
    <img src="./images/graph_5.png" alt="">
    <img src="./images/graph_2.png" alt="">
    <img src="./images/graph_1.png" alt="">
    <img src="./images/graph_7.png" alt="">
    <img src="./images/graph_8.png" alt="">
    <img src="./images/graph_9.png" alt="">
    <img src="./images/graph_10.png" alt="">`
}
function month_6() {
    let x = document.querySelector("#month_6")
    x.style.backgroundColor = "rgb(44, 0, 105)"
    document.querySelector("#month_3").style.backgroundColor = "white"
    document.querySelector("#month_3").style.color = "grey"
    document.querySelector("#month_12").style.color = "grey"
    document.querySelector("#daily").style.color = "grey"
    document.querySelector("#daily").style.backgroundColor = "white"
    document.querySelector("#month_12").style.backgroundColor = "white"
    document.querySelector(".graph").innerHTML = `<img src="./images/graph_6_2.png" alt="">
    <img src="./images/graph_6_1.png" alt="">
    <img src="./images/graph_6_3.png" alt="">
    <img src="./images/graph_3.png" alt="">
    <img src="./images/graph_5.png" alt="">
    <img src="./images/graph_6_3.png" alt="">
    <img src="./images/graph_7.png" alt="">
    <img src="./images/graph_6_1.png" alt="">
    <img src="./images/graph_6_2.png" alt="">
    <img src="./images/graph_6_3.png" alt="">`
}
function month_12() {
    let x = document.querySelector("#month_12")
    x.style.backgroundColor = "rgb(44, 0, 105)"
    document.querySelector("#month_3").style.backgroundColor = "white"
    document.querySelector("#month_3").style.color = "grey"
    document.querySelector("#month_6").style.color = "grey"
    document.querySelector("#daily").style.color = "grey"
    document.querySelector("#daily").style.backgroundColor = "white"
    document.querySelector("#month_6").style.backgroundColor = "white"
    document.querySelector(".graph").innerHTML = `<img src="./images/graph_12_1.png" alt="">
    <img src="./images/graph_12_2.png" alt="">
    <img src="./images/graph_12_3.png" alt="">
    <img src="./images/graph_6_3.png" alt="">
    <img src="./images/graph_12_1.png" alt="">
    <img src="./images/graph_12_3.png" alt="">
    <img src="./images/graph_12_2.png" alt="">
    <img src="./images/graph_12_1.png" alt="">
    <img src="./images/graph_1.png" alt="">
    <img src="./images/graph_12_3.png" alt="">`
}

function daily() {
    let x = document.querySelector("#daily")
    x.style.backgroundColor = "rgb(44, 0, 105)"
    document.querySelector("#month_3").style.backgroundColor = "white"
    document.querySelector("#month_3").style.color = "grey"
    document.querySelector("#month_6").style.color = "grey"
    document.querySelector("#month_12").style.color = "grey"
    document.querySelector("#month_12").style.backgroundColor = "white"
    document.querySelector("#month_6").style.backgroundColor = "white"

    document.querySelector(".graph").innerHTML = `<img src="./images/graph_1.png" alt="">
    <img src="./images/graph_2.png" alt="">
    <img src="./images/graph_3.png" alt="">
    <img src="./images/graph_4.png" alt="">
    <img src="./images/graph_5.png" alt="">
    <img src="./images/graph_6.png" alt="">
    <img src="./images/graph_7.png" alt="">
    <img src="./images/graph_8.png" alt="">
    <img src="./images/graph_9.png" alt="">
    <img src="./images/graph_10.png" alt="">`
}
let subs = []
fetch("https://639ad06531877e43d6773285.mockapi.io/Subs/")
    .then((res) => res.json())
    .then((data) => {
        subs = data;
        console.log(data)
    })
    .catch((err) => console.log(err))

function sidebar_subs() {
    document.querySelector("#main").innerHTML = `
    <div id="sb_subs_1">
    <h3>All Subscriptions</h3>
    <div>
     <button onclick="edit_empty_user()">Edit Subscriptions</button>
     <button onclick="create_empty_user()" style="background-color:#6200ea;color:white;border:0;">Create Subscriptions</button>
    </div>
    </div>
    <div id="create_empty_user"></div>

    <div id="sb_subs_2">
    <h3>${subs.length} Subscriptions Available</h3>
    <input id="subs_input" oninput="subs_input1()" type="text" placeholder="search for company / name">
    <div>
    <select name="Sort" id="sub_sort" onchange="sort_subs()">
    <option value="Sort">Sort</option>
    <option value="L-H">MRP Low - High</option>
  <option value="H-L">MRP High - Low</option>
  </select>
    </div>
    </div>

   <div id="sb_subs_3">
   <div>  
   <div id="subs_info"><h4>Subscription Info</h4></div>
   <div id="cus_info"><h4>Customer Info</h4></div>  
   <div id="next_ren"><h4>Next Renewal</h4></div>
   <div id="mrp"><h4>MRP</h4></div>
   <div id="createon"><h4>Created On</h4></div>
   <div id="uid"><h4>UID</h4></div>
   <div id="cancel"><h4>CANCEL</h4></div>
    </div>

   </div>
    `

    for (let i = 0; i < subs.length; i++) {
        let div = document.createElement("div")

        let p1 = document.createElement("p")
        p1.innerText = subs[i].SubscriptionInfo
        let p2 = document.createElement("p")
        p2.innerText = subs[i].CustomerInfo
        let p3 = document.createElement("p")
        p3.innerText = subs[i].NextRenewal
        let p4 = document.createElement("p")
        p4.innerText = subs[i].MRP
        let p5 = document.createElement("p")
        p5.innerText = subs[i].Createdon
        let p6 = document.createElement("p")
        p6.innerText = subs[i].id
        let butt = document.createElement("button")
        butt.innerText = "CANCEL"
        butt.style.display = "block"
        butt.style.marginTop = "17px"
        butt.style.backgroundColor = "rgb(242, 54, 24)"
        butt.style.border = "0"
        butt.style.color = "white"
        butt.style.cursor = "pointer"
        butt.addEventListener("click", function () {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,

            };

            fetch(`https://639ad06531877e43d6773285.mockapi.io/Subs/${p6.innerText}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    alert("subscription Cancelled")
                    location.reload()
                    console.log(result)
                })
                .catch(error => console.log('error', error));
        })
        document.querySelector("#subs_info").append(p1)
        document.querySelector("#cus_info").append(p2)
        document.querySelector("#next_ren").append(p3)
        document.querySelector("#mrp").append(p4)
        document.querySelector("#createon").append(p5)
        document.querySelector("#uid").append(p6)
        document.querySelector("#cancel").append(butt)
    }

}

function sidebar_home() {
    document.querySelector("#main").innerHTML = `
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
    <div>
    <h4>Total MRP</h4>
    <h2>Rs.84,920</h2>
 </div>
 <div>
    <h4>Total Active Subscriptions</h4>
    <h2>1,702</h2>
 </div>
 <div>
    <h4>Net Billing</h4>
    <h2>Rs.198,805</h2>
 </div>
 <div>
    <h4>Net Payments</h4>
    <h2>Rs.194,800</h2>
 </div>
    </div>
    <div id="buttons_home">
        <button id="daily" onclick="daily()" >Daily</button>
        <button id="month_3" onclick="month_3()">3 Months</button>
        <button id="month_6" onclick="month_6()">6 Months</button>
        <button id="month_12" onclick="month_12()">12 Months</button>
    </div>
    <div class="graph">
    <img src="./images/graph_1.png" alt="">
    <img src="./images/graph_2.png" alt="">
    <img src="./images/graph_3.png" alt="">
    <img src="./images/graph_4.png" alt="">
    <img src="./images/graph_5.png" alt="">
    <img src="./images/graph_6.png" alt="">
    <img src="./images/graph_7.png" alt="">
    <img src="./images/graph_8.png" alt="">
    <img src="./images/graph_9.png" alt="">
    <img src="./images/graph_10.png" alt="">
</div>
`
}


function subs_input1() {
    let val = document.querySelector("#subs_input").value
    let inp = subs.filter((elem, i) => {
        return elem.CustomerInfo.toLowerCase().includes(val.toLowerCase())
    })
    document.querySelector("#sb_subs_3").innerHTML = ` <div>
    
    <div id="subs_info"><h4>Subscription Info</h4></div>
    <div id="cus_info"><h4>Customer Info</h4></div>  
    <div id="next_ren"><h4>Next Renewal</h4></div>
    <div id="mrp"><h4>MRP</h4></div>
    <div id="createon"><h4>Created On</h4></div>
    <div id="uid"><h4>UID</h4></div>
    <div id="cancel"><h4>CANCEL</h4></div>
     
     </div>
    `
    for (let i = 0; i < inp.length; i++) {
        let div = document.createElement("div")

        let p1 = document.createElement("p")
        p1.innerText = inp[i].SubscriptionInfo
        let p2 = document.createElement("p")
        p2.innerText = inp[i].CustomerInfo
        let p3 = document.createElement("p")
        p3.innerText = inp[i].NextRenewal
        let p4 = document.createElement("p")
        p4.innerText = inp[i].MRP
        let p5 = document.createElement("p")
        p5.innerText = inp[i].Createdon
        let p6 = document.createElement("p")
        p6.innerText = inp[i].id
        let butt = document.createElement("button")
        butt.innerText = "CANCEL"
        butt.style.display = "block"
        butt.style.marginTop = "17px"
        butt.style.backgroundColor = "rgb(242, 54, 24)"
        butt.style.border = "0"
        butt.style.color = "white"
        butt.style.cursor = "pointer"
        butt.addEventListener("click", function () {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,

            };

            fetch(`https://639ad06531877e43d6773285.mockapi.io/Subs/${p6.innerText}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    alert("subscription Cancelled")
                    location.reload()
                    console.log(result)
                })
                .catch(error => console.log('error', error));
        })

        document.querySelector("#subs_info").append(p1)
        document.querySelector("#cus_info").append(p2)
        document.querySelector("#next_ren").append(p3)
        document.querySelector("#mrp").append(p4)
        document.querySelector("#createon").append(p5)
        document.querySelector("#uid").append(p6)
        document.querySelector("#cancel").append(butt)
    }
    console.log(inp)
}
// function subs_select(){
//     document.querySelector("")
// }


function create_empty_user() {
    document.querySelector("#create_empty_user").style.height = "300px"
    document.querySelector("#create_empty_user").style.paddingLeft = "30px"
    document.querySelector("#create_empty_user").style.paddingTop = "10px";
    document.querySelector("#create_empty_user").style.paddingBottom = "30px";
    document.querySelector("#create_empty_user").innerHTML = `
    <button onclick="closing()">&#9747;</button>
    <div id="emp_user1">
      <div id="emp_h4"> 
      <h4>Subscription :</h4>
      <h4>Name :</h4>
      <h4>Renewal :</h4> 
      <h4>MRP :</h4> 
     </div>
     
     <div id="emp_input"> <select name="filter" style="height:20px;margin-top:38px" id="sub_name">
       <option value="Monthly INR Yearly">Monthly INR Yearly</option>
       <option value="Yearly INR Yearly">Yearly INR Yearly</option>
       <option value="Annual INR Yearly">Annual INR Yearly</option>
           </select> 
         <input id="user_name" placeholder="Company Name" style="height:20px; align-self:center" type="text"> 
          <input id="ren" placeholder="Renewal month" style="height:20px; align-self:center" type="text"> 
         <input id="user_mrp" placeholder="Price" style="height:20px; align-self:center" type="text"> 
     
        <button onclick="new_user()">CREATE</button>
        </div>
   </div>
    `
}

function edit_empty_user() {
    document.querySelector("#create_empty_user").style.height = "400px"
    document.querySelector("#create_empty_user").style.paddingLeft = "30px"
    document.querySelector("#create_empty_user").style.paddingTop = "10px";
    document.querySelector("#create_empty_user").style.paddingBottom = "30px";
    document.querySelector("#create_empty_user").innerHTML = `
    <button onclick="closing()">&#9747;</button>
    <div id="emp_user1">
      <div id="emp_h4">
      <h4>UID :</h4> 
      <h4>Subscription :</h4>
      <h4>Name :</h4>
      <h4>Renewal :</h4> 
      <h4>MRP :</h4> 
     </div>
     
     <div id="emp_input">
     <input id="uid" placeholder="UID" style="height:20px; align-self:center" type="text">
     <select name="filter" style="height:20px;margin-top:38px" id="sub_name">
       <option value="Monthly INR Yearly">Monthly INR Yearly</option>
       <option value="Yearly INR Yearly">Yearly INR Yearly</option>
       <option value="Annual INR Yearly">Annual INR Yearly</option>
           </select> 
         <input id="user_name" placeholder="Company Name" style="height:20px; align-self:center" type="text"> 
          <input id="ren" placeholder="Renewal month" style="height:20px; align-self:center" type="text"> 
         <input id="user_mrp" placeholder="Price" style="height:20px; align-self:center" type="text"> 
     
        <button onclick="edit_user()">EDIT</button>
        </div>
   </div>
    `
}
function closing() {
    document.querySelector("#create_empty_user").style.height = "0"
    document.querySelector("#create_empty_user").style.paddingTop = "0";
    document.querySelector("#create_empty_user").style.paddingBottom = "0";
    document.querySelector("#create_empty_user").innerHTML = ""
}
// new Date().getMonth()

function new_user() {
    let month = new Date().getMonth()
    let day = new Date().getDate()
    let year = new Date().getFullYear()
    console.log(day, month, year)
    let SubscriptionInfo = document.querySelector("#sub_name").value;
    let CustomerInfo = document.querySelector("#user_name").value;
    let NextRenewal = document.querySelector("#ren").value;
    let MRP = document.querySelector("#user_mrp").value + " INR";
    console.log(SubscriptionInfo)
    if (NextRenewal == "" || SubscriptionInfo == "" || CustomerInfo == "" || MRP == "") {
        alert("Please Fill details to create a new user")
        return
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "SubscriptionInfo": SubscriptionInfo,
        "CustomerInfo": CustomerInfo,
        "NextRenewal": NextRenewal,
        "MRP": MRP,
        "Createdon": `${day}/${month}/${year}`,
        "id": "2"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };

    fetch("https://639ad06531877e43d6773285.mockapi.io/Subs/", requestOptions)
        .then(response => response.json())
        .then(data => {
            alert("New subscription created")
            location.reload()
        })
        .catch(error => alert("Something went wrong"));
}

function edit_user() {
    let obj = {}

    let myUID = document.querySelector("#uid").value;
    let CustomerInfo = document.querySelector("#user_name").value;
    let NextRenewal = document.querySelector("#ren").value;
    let MRP = document.querySelector("#user_mrp").value
    if (CustomerInfo !== "") {
        obj["CustomerInfo"] = CustomerInfo
    }
    if (NextRenewal !== "") {
        obj["NextRenewal"] = NextRenewal
    }
    if (MRP !== "") {
        obj["MRP"] = MRP + " INR";
    }
    if (myUID === "") {
        alert("Please Enter UID to make Changes")
        return
    }
    console.log(obj)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(obj);

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw
    };

    fetch(`https://639ad06531877e43d6773285.mockapi.io/Subs/${myUID}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            alert("Subscription Edited")
            location.reload()
        })
        .catch(error => alert("Bad request"));
}

function sort_subs() {
    let x = document.querySelector("#sub_sort").value
    if (x == "L-H") {
        let lth = subs.sort((a, b) => {
            return parseInt(a.MRP) - parseInt(b.MRP)
        })
        document.querySelector("#sb_subs_3").innerHTML = ` <div>
    
    <div id="subs_info"><h4>Subscription Info</h4></div>
    <div id="cus_info"><h4>Customer Info</h4></div>  
    <div id="next_ren"><h4>Next Renewal</h4></div>
    <div id="mrp"><h4>MRP</h4></div>
    <div id="createon"><h4>Created On</h4></div>
    <div id="uid"><h4>UID</h4></div>
    <div id="cancel"><h4>CANCEL</h4></div>
     
     </div>
    `
        for (let i = 0; i < lth.length; i++) {
            let div = document.createElement("div")

            let p1 = document.createElement("p")
            p1.innerText = lth[i].SubscriptionInfo
            let p2 = document.createElement("p")
            p2.innerText = lth[i].CustomerInfo
            let p3 = document.createElement("p")
            p3.innerText = lth[i].NextRenewal
            let p4 = document.createElement("p")
            p4.innerText = lth[i].MRP
            let p5 = document.createElement("p")
            p5.innerText = lth[i].Createdon
            let p6 = document.createElement("p")
            p6.innerText = lth[i].id
            let butt = document.createElement("button")
            butt.innerText = "CANCEL"
            butt.style.display = "block"
            butt.style.marginTop = "17px"
            butt.style.backgroundColor = "rgb(242, 54, 24)"
            butt.style.border = "0"
            butt.style.color = "white"
            butt.style.cursor = "pointer"
            butt.addEventListener("click", function () {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var requestOptions = {
                    method: 'DELETE',
                    headers: myHeaders,

                };

                fetch(`https://639ad06531877e43d6773285.mockapi.io/Subs/${p6.innerText}`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        alert("subscription Cancelled")
                        location.reload()
                        console.log(result)
                    })
                    .catch(error => console.log('error', error));
            })

            document.querySelector("#subs_info").append(p1)
            document.querySelector("#cus_info").append(p2)
            document.querySelector("#next_ren").append(p3)
            document.querySelector("#mrp").append(p4)
            document.querySelector("#createon").append(p5)
            document.querySelector("#uid").append(p6)
            document.querySelector("#cancel").append(butt)
        }
        return
    }
    console.log(x)
    if (x == "H-L") {
        let htl = subs.sort((a, b) => {
            return parseInt(b.MRP) - parseInt(a.MRP)
        })
        console.log(x)
        document.querySelector("#sb_subs_3").innerHTML = ` <div>
    
    <div id="subs_info"><h4>Subscription Info</h4></div>
    <div id="cus_info"><h4>Customer Info</h4></div>  
    <div id="next_ren"><h4>Next Renewal</h4></div>
    <div id="mrp"><h4>MRP</h4></div>
    <div id="createon"><h4>Created On</h4></div>
    <div id="uid"><h4>UID</h4></div>
    <div id="cancel"><h4>CANCEL</h4></div>
     
     </div>
    `
        for (let i = 0; i < htl.length; i++) {
            let div = document.createElement("div")

            let p1 = document.createElement("p")
            p1.innerText = htl[i].SubscriptionInfo
            let p2 = document.createElement("p")
            p2.innerText = htl[i].CustomerInfo
            let p3 = document.createElement("p")
            p3.innerText = htl[i].NextRenewal
            let p4 = document.createElement("p")
            p4.innerText = htl[i].MRP
            let p5 = document.createElement("p")
            p5.innerText = htl[i].Createdon
            let p6 = document.createElement("p")
            p6.innerText = htl[i].id
            let butt = document.createElement("button")
            butt.innerText = "CANCEL"
            butt.style.display = "block"
            butt.style.marginTop = "17px"
            butt.style.backgroundColor = "rgb(242, 54, 24)"
            butt.style.border = "0"
            butt.style.color = "white"
            butt.style.cursor = "pointer"
            butt.addEventListener("click", function () {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var requestOptions = {
                    method: 'DELETE',
                    headers: myHeaders,

                };

                fetch(`https://639ad06531877e43d6773285.mockapi.io/Subs/${p6.innerText}`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        alert("subscription Cancelled")
                        location.reload()
                        console.log(result)
                    })
                    .catch(error => console.log('error', error));
            })

            document.querySelector("#subs_info").append(p1)
            document.querySelector("#cus_info").append(p2)
            document.querySelector("#next_ren").append(p3)
            document.querySelector("#mrp").append(p4)
            document.querySelector("#createon").append(p5)
            document.querySelector("#uid").append(p6)
            document.querySelector("#cancel").append(butt)
        }
        return
        // console.log(inp)
    }



}


function sidebar_customer() {
    document.querySelector("#main").innerHTML = `
    <div id="sb_subs_1">
    <h3>All Customers</h3>
    <div>
     <button onclick="edit_empty_user()">Edit Customers</button>
     <button onclick="create_empty_user()" style="background-color:#6200ea;color:white;border:0;">Create Customers</button>
    </div>
    </div>
    <div id="create_empty_user"></div>

    <div id="sb_subs_2">
    <h3>${subs.length} Customers Available</h3>
    <input id="subs_input" oninput="customer_input1()" type="text" placeholder="search for customer / name">
    <div>
    <select name="Sort" id="sub_sort" onchange="sort_customers()">
    <option value="Sort">Sort</option>
    <option value="L-H">MRP Low - High</option>
  <option value="H-L">MRP High - Low</option>
  </select>
    </div>
    </div>

   <div id="sb_subs_3">
   <div>  
   <div id="subs_info"><h4>Customer Info</h4></div>
   <div id="cus_info"><h4>Subscription Info</h4></div>  
   <div id="next_ren"><h4>Next Renewal</h4></div>
   <div id="mrp"><h4>MRP</h4></div>
   <div id="createon"><h4>Created On</h4></div>
   <div id="uid"><h4>UID</h4></div>
   <div id="cancel"><h4>CANCEL</h4></div>
    </div>

   </div>
    `

    for (let i = 0; i < subs.length; i++) {
        let div = document.createElement("div")

        let p1 = document.createElement("p")
        p1.innerText = subs[i].SubscriptionInfo
        let p2 = document.createElement("p")
        p2.innerText = subs[i].CustomerInfo
        let p3 = document.createElement("p")
        p3.innerText = subs[i].NextRenewal
        let p4 = document.createElement("p")
        p4.innerText = subs[i].MRP
        let p5 = document.createElement("p")
        p5.innerText = subs[i].Createdon
        let p6 = document.createElement("p")
        p6.innerText = subs[i].id
        let butt = document.createElement("button")
        butt.innerText = "CANCEL"
        butt.style.display = "block"
        butt.style.marginTop = "17px"
        butt.style.backgroundColor = "rgb(242, 54, 24)"
        butt.style.border = "0"
        butt.style.color = "white"
        butt.style.cursor = "pointer"
        butt.addEventListener("click", function () {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,

            };

            fetch(`https://639ad06531877e43d6773285.mockapi.io/Subs/${p6.innerText}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    alert("subscription Cancelled")
                    location.reload()
                    console.log(result)
                })
                .catch(error => console.log('error', error));
        })
        document.querySelector("#subs_info").append(p2)
        document.querySelector("#cus_info").append(p1)
        document.querySelector("#next_ren").append(p3)
        document.querySelector("#mrp").append(p4)
        document.querySelector("#createon").append(p5)
        document.querySelector("#uid").append(p6)
        document.querySelector("#cancel").append(butt)
    }
}


function customer_input1() {
    let val = document.querySelector("#subs_input").value
    let inp = subs.filter((elem, i) => {
        return elem.CustomerInfo.toLowerCase().includes(val.toLowerCase())
    })
    document.querySelector("#sb_subs_3").innerHTML = ` <div>  
    <div id="subs_info"><h4>Customer Info</h4></div>
    <div id="cus_info"><h4>Subscription Info</h4></div>  
    <div id="next_ren"><h4>Next Renewal</h4></div>
    <div id="mrp"><h4>MRP</h4></div>
    <div id="createon"><h4>Created On</h4></div>
    <div id="uid"><h4>UID</h4></div>
    <div id="cancel"><h4>CANCEL</h4></div>
     </div>
    `
    for (let i = 0; i < inp.length; i++) {
        let div = document.createElement("div")

        let p1 = document.createElement("p")
        p1.innerText = inp[i].SubscriptionInfo
        let p2 = document.createElement("p")
        p2.innerText = inp[i].CustomerInfo
        let p3 = document.createElement("p")
        p3.innerText = inp[i].NextRenewal
        let p4 = document.createElement("p")
        p4.innerText = inp[i].MRP
        let p5 = document.createElement("p")
        p5.innerText = inp[i].Createdon
        let p6 = document.createElement("p")
        p6.innerText = inp[i].id
        let butt = document.createElement("button")
        butt.innerText = "CANCEL"
        butt.style.display = "block"
        butt.style.marginTop = "17px"
        butt.style.backgroundColor = "rgb(242, 54, 24)"
        butt.style.border = "0"
        butt.style.color = "white"
        butt.style.cursor = "pointer"
        butt.addEventListener("click", function () {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,

            };

            fetch(`https://639ad06531877e43d6773285.mockapi.io/Subs/${p6.innerText}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    alert("subscription Cancelled")
                    location.reload()
                    console.log(result)
                })
                .catch(error => console.log('error', error));
        })

        document.querySelector("#subs_info").append(p2)
        document.querySelector("#cus_info").append(p1)
        document.querySelector("#next_ren").append(p3)
        document.querySelector("#mrp").append(p4)
        document.querySelector("#createon").append(p5)
        document.querySelector("#uid").append(p6)
        document.querySelector("#cancel").append(butt)
    }
    console.log(inp)
}


function sort_customers() {
    let x = document.querySelector("#sub_sort").value
    if (x == "L-H") {
        let lth = subs.sort((a, b) => {
            return parseInt(a.MRP) - parseInt(b.MRP)
        })
        document.querySelector("#sb_subs_3").innerHTML = `<div>  
    <div id="subs_info"><h4>Customer Info</h4></div>
    <div id="cus_info"><h4>Subscription Info</h4></div>  
    <div id="next_ren"><h4>Next Renewal</h4></div>
    <div id="mrp"><h4>MRP</h4></div>
    <div id="createon"><h4>Created On</h4></div>
    <div id="uid"><h4>UID</h4></div>
    <div id="cancel"><h4>CANCEL</h4></div>
     </div>
    `
        for (let i = 0; i < lth.length; i++) {
            let div = document.createElement("div")

            let p1 = document.createElement("p")
            p1.innerText = lth[i].SubscriptionInfo
            let p2 = document.createElement("p")
            p2.innerText = lth[i].CustomerInfo
            let p3 = document.createElement("p")
            p3.innerText = lth[i].NextRenewal
            let p4 = document.createElement("p")
            p4.innerText = lth[i].MRP
            let p5 = document.createElement("p")
            p5.innerText = lth[i].Createdon
            let p6 = document.createElement("p")
            p6.innerText = lth[i].id
            let butt = document.createElement("button")
            butt.innerText = "CANCEL"
            butt.style.display = "block"
            butt.style.marginTop = "17px"
            butt.style.backgroundColor = "rgb(242, 54, 24)"
            butt.style.border = "0"
            butt.style.color = "white"
            butt.style.cursor = "pointer"
            butt.addEventListener("click", function () {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var requestOptions = {
                    method: 'DELETE',
                    headers: myHeaders,

                };

                fetch(`https://639ad06531877e43d6773285.mockapi.io/Subs/${p6.innerText}`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        alert("subscription Cancelled")
                        location.reload()
                        console.log(result)
                    })
                    .catch(error => console.log('error', error));
            })

            document.querySelector("#subs_info").append(p2)
            document.querySelector("#cus_info").append(p1)
            document.querySelector("#next_ren").append(p3)
            document.querySelector("#mrp").append(p4)
            document.querySelector("#createon").append(p5)
            document.querySelector("#uid").append(p6)
            document.querySelector("#cancel").append(butt)
        }
        return
    }
    console.log(x)
    if (x == "H-L") {
        let htl = subs.sort((a, b) => {
            return parseInt(b.MRP) - parseInt(a.MRP)
        })
        console.log(x)
        document.querySelector("#sb_subs_3").innerHTML = `<div>  
    <div id="subs_info"><h4>Customer Info</h4></div>
    <div id="cus_info"><h4>Subscription Info</h4></div>  
    <div id="next_ren"><h4>Next Renewal</h4></div>
    <div id="mrp"><h4>MRP</h4></div>
    <div id="createon"><h4>Created On</h4></div>
    <div id="uid"><h4>UID</h4></div>
    <div id="cancel"><h4>CANCEL</h4></div>
     </div>
    `
        for (let i = 0; i < htl.length; i++) {
            let div = document.createElement("div")

            let p1 = document.createElement("p")
            p1.innerText = htl[i].SubscriptionInfo
            let p2 = document.createElement("p")
            p2.innerText = htl[i].CustomerInfo
            let p3 = document.createElement("p")
            p3.innerText = htl[i].NextRenewal
            let p4 = document.createElement("p")
            p4.innerText = htl[i].MRP
            let p5 = document.createElement("p")
            p5.innerText = htl[i].Createdon
            let p6 = document.createElement("p")
            p6.innerText = htl[i].id
            let butt = document.createElement("button")
            butt.innerText = "CANCEL"
            butt.style.display = "block"
            butt.style.marginTop = "17px"
            butt.style.backgroundColor = "rgb(242, 54, 24)"
            butt.style.border = "0"
            butt.style.color = "white"
            butt.style.cursor = "pointer"
            butt.addEventListener("click", function () {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var requestOptions = {
                    method: 'DELETE',
                    headers: myHeaders,

                };

                fetch(`https://639ad06531877e43d6773285.mockapi.io/Subs/${p6.innerText}`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        alert("subscription Cancelled")
                        location.reload()
                        console.log(result)
                    })
                    .catch(error => console.log('error', error));
            })

            document.querySelector("#subs_info").append(p2)
            document.querySelector("#cus_info").append(p1)
            document.querySelector("#next_ren").append(p3)
            document.querySelector("#mrp").append(p4)
            document.querySelector("#createon").append(p5)
            document.querySelector("#uid").append(p6)
            document.querySelector("#cancel").append(butt)
        }
        return
        // console.log(inp)
    }



}

function get_started() {
    document.querySelector("#main").innerHTML = `
    <div class="get_start_div">
    <div class="checklist-1">
    <h1 style="margin:auto;width:fit-content;margin-bottom:20px">Streamline your subscription business</h1>
    <p style="margin:auto;width:fit-content">This checklist can help you manage essential settings and start using Chargebee.</p>
    </div>
   
    

    <div class="checklist" onclick="open_first()">
    <button id="first_button">+</button>
    <h3>Set up your products & pricing </h3>
    </div>
    <div id="first"></div>
    <div class="checklist" onclick="open_sec()">
    <button id="sec_button">+</button>
    <h3>Integrate Chargebee with your website 
    </h3>
    </div>
    <div id="second"></div>
    <div class="checklist" onclick="open_third()">
    <button id="third_button">+</button>
    <h3>Streamline billing operation</h3>
    </div>
    <div id="third"></div>
    <div class="checklist" onclick="open_fourth()">
    <button id="fourth_button">+</button>
    <h3>Start charging customers</h3>
    </div>
    <div id="fourth"></div>
    </div>
    `
}

function open_first() {

    let x = document.querySelector("#first_button")
    if (x.innerText == "+") {
        x.innerText = "-"
        document.querySelector("#first").style.paddingTop = "10px"
        document.querySelector("#first").style.paddingTop = "10px"
        document.querySelector("#first").style.paddingBottom = "10px"
        document.querySelector("#first").innerHTML = `
    <h4><input type="checkbox"> Currencies </h4>
    <h4><input type="checkbox">Billing Frequency</h4>
    <h4><input type="checkbox">Product Catalog</h4>
    <h4><input type="checkbox">Taxes (Optional)</h4>
    `
        return
    } else {
        x.innerText = "+"
        document.querySelector("#first").innerHTML = ``
        document.querySelector("#first").style.paddingTop = "0"
        document.querySelector("#first").style.paddingTop = "0"
        document.querySelector("#first").style.paddingBottom = "0"
        return
    }

}
function open_sec() {

    let x = document.querySelector("#sec_button")
    if (x.innerText == "+") {
        x.innerText = "-"
        document.querySelector("#second").style.paddingTop = "10px"
        document.querySelector("#second").style.paddingTop = "10px"
        document.querySelector("#second").style.paddingBottom = "10px"
        document.querySelector("#second").innerHTML = `
        <h4><input type="checkbox">Brand Styles</h4>
        <h4><input type="checkbox">Checkout</h4>
        <h4><input type="checkbox">Self-Serve Portal</h4>
        <h4><input type="checkbox">Payment Gateway</h4>
        `
        return
    } else {
        x.innerText = "+"
        document.querySelector("#second").innerHTML = ``
        document.querySelector("#second").style.paddingTop = "0"
        document.querySelector("#second").style.paddingTop = "0"
        document.querySelector("#second").style.paddingBottom = "0"
        return
    }

}

function open_third() {

    let x = document.querySelector("#third_button")
    if (x.innerText == "+") {
        x.innerText = "-"
        document.querySelector("#third").style.paddingTop = "10px"
        document.querySelector("#third").style.paddingTop = "10px"
        document.querySelector("#third").style.paddingBottom = "10px"
        document.querySelector("#third").innerHTML = `
            <h4><input type="checkbox">Email Notifications</h4>
            <h4><input type="checkbox">Dunning </h4>
            <h4><input type="checkbox">Third-Party Integrations </h4>
            `
        return
    } else {
        x.innerText = "+"
        document.querySelector("#third").innerHTML = ``
        document.querySelector("#third").style.paddingTop = "0"
        document.querySelector("#third").style.paddingTop = "0"
        document.querySelector("#third").style.paddingBottom = "0"
        return
    }

}

function open_fourth() {

    let x = document.querySelector("#fourth_button")
    if (x.innerText == "+") {
        x.innerText = "-"
        document.querySelector("#fourth").style.paddingTop = "10px"
        document.querySelector("#fourth").style.paddingTop = "10px"
        document.querySelector("#fourth").style.paddingBottom = "10px"
        document.querySelector("#fourth").innerHTML = `
                <h4><input type="checkbox">Transfer Configurations</h4>
                <h4><input type="checkbox">Configure Taxes</h4>
                <h4><input type="checkbox">Connect Payment Gateway</h4>
                <h4><input type="checkbox">Test Transactions</h4>
                `
        return
    } else {
        x.innerText = "+"
        document.querySelector("#fourth").innerHTML = ``
        document.querySelector("#fourth").style.paddingTop = "0"
        document.querySelector("#fourth").style.paddingTop = "0"
        document.querySelector("#fourth").style.paddingBottom = "0"
        return
    }

}


let creditNotes = [{
    "SubscriptionInfo": "# TEST-CN-2",
    "CustomerInfo": "CustomerInfo 38",
    "NextRenewal": "Refundable",
    "MRP": "202",
    "Createdon": "2049-01-07",
    "id": "38"
},
{
    "SubscriptionInfo": "# TEST-CN-6",
    "CustomerInfo": "CustomerInfo 39",
    "NextRenewal": "Adjustment",
    "MRP": "336",
    "Createdon": "2072-03-11",
    "id": "39"
}]

function cred_Notes() {
    document.querySelector("#main").innerHTML = `
    <div id="sb_subs_1">
    <h3>All Credit Details</h3>
    <div>
     <button onclick="edit_empty_user()">Edit Credit Info</button>
     <button onclick="create_empty_user()" style="background-color:#6200ea;color:white;border:0;">Create Credit</button>
    </div>
    </div>
    <div id="create_empty_user"></div>

    <div id="sb_subs_2">
    <h3>${creditNotes.length} Credits Available</h3>
    <input id="subs_input" oninput="subs_input1()" type="text" placeholder="search for company / name">
    <div>
    <select name="Sort" id="sub_sort" onchange="sort_credit()">
    <option value="Sort">Sort</option>
    <option value="L-H">MRP Low - High</option>
  <option value="H-L">MRP High - Low</option>
  </select>
    </div>
    </div>

   <div id="sb_subs_3">
   <div>  
   <div id="subs_info"><h4>Credit Note</h4></div>
   <div id="cus_info"><h4>Customer Info</h4></div>  
   <div id="next_ren"><h4>Type</h4></div>
   <div id="mrp"><h4>Amount Refunded</h4></div>
   <div id="createon"><h4>Created On</h4></div>
   <div id="uid"><h4>UID</h4></div>
   <div id="cancel"><h4>CANCEL</h4></div>
    </div>

   </div>
    `

    for (let i = 0; i < creditNotes.length; i++) {
        let div = document.createElement("div")

        let p1 = document.createElement("p")
        p1.innerText = creditNotes[i].SubscriptionInfo
        p1.style.border = "2px solid orange"
        p1.style.borderRadius = "5px"
        p1.style.backgroundColor = "rgb(255, 247, 230)"
        let p2 = document.createElement("p")
        p2.innerText = creditNotes[i].CustomerInfo
        let p3 = document.createElement("p")
        p3.innerText = creditNotes[i].NextRenewal
        let p4 = document.createElement("p")
        p4.innerText = creditNotes[i].MRP
        let p5 = document.createElement("p")
        p5.innerText = creditNotes[i].Createdon
        let p6 = document.createElement("p")
        p6.innerText = creditNotes[i].id
        let butt = document.createElement("button")
        butt.innerText = "CANCEL"
        butt.style.display = "block"
        butt.style.marginTop = "17px"
        butt.style.backgroundColor = "rgb(242, 54, 24)"
        butt.style.border = "0"
        butt.style.color = "white"
        butt.style.cursor = "pointer"
        document.querySelector("#subs_info").append(p1)
        document.querySelector("#cus_info").append(p2)
        document.querySelector("#next_ren").append(p3)
        document.querySelector("#mrp").append(p4)
        document.querySelector("#createon").append(p5)
        document.querySelector("#uid").append(p6)
        document.querySelector("#cancel").append(butt)
    }

}


function sort_credit() {
    let x = document.querySelector("#sub_sort").value
    if (x == "L-H") {
        let lth = creditNotes.sort((a, b) => {
            return parseInt(a.MRP) - parseInt(b.MRP)
        })
        document.querySelector("#sb_subs_3").innerHTML = ` <div>  
        <div id="subs_info"><h4>Credit Note</h4></div>
        <div id="cus_info"><h4>Customer Info</h4></div>  
        <div id="next_ren"><h4>Type</h4></div>
        <div id="mrp"><h4>Amount Refunded</h4></div>
        <div id="createon"><h4>Created On</h4></div>
        <div id="uid"><h4>UID</h4></div>
        <div id="cancel"><h4>CANCEL</h4></div>
         </div>
    `
        for (let i = 0; i < lth.length; i++) {
            let div = document.createElement("div")

            let p1 = document.createElement("p")
            p1.innerText = lth[i].SubscriptionInfo
            p1.style.border = "2px solid orange"
            p1.style.borderRadius = "5px"
            p1.style.backgroundColor = "rgb(255, 247, 230)"
            let p2 = document.createElement("p")
            p2.innerText = lth[i].CustomerInfo
            let p3 = document.createElement("p")
            p3.innerText = lth[i].NextRenewal
            let p4 = document.createElement("p")
            p4.innerText = lth[i].MRP
            let p5 = document.createElement("p")
            p5.innerText = lth[i].Createdon
            let p6 = document.createElement("p")
            p6.innerText = lth[i].id
            let butt = document.createElement("button")
            butt.innerText = "CANCEL"
            butt.style.display = "block"
            butt.style.marginTop = "17px"
            butt.style.backgroundColor = "rgb(242, 54, 24)"
            butt.style.border = "0"
            butt.style.color = "white"
            butt.style.cursor = "pointer"

            document.querySelector("#subs_info").append(p1)
            document.querySelector("#cus_info").append(p2)
            document.querySelector("#next_ren").append(p3)
            document.querySelector("#mrp").append(p4)
            document.querySelector("#createon").append(p5)
            document.querySelector("#uid").append(p6)
            document.querySelector("#cancel").append(butt)
        }
        return
    }
    console.log(x)
    if (x == "H-L") {
        let htl = creditNotes.sort((a, b) => {
            return parseInt(b.MRP) - parseInt(a.MRP)
        })
        console.log(x)
        document.querySelector("#sb_subs_3").innerHTML = `<div>  
        <div id="subs_info"><h4>Credit Note</h4></div>
        <div id="cus_info"><h4>Customer Info</h4></div>  
        <div id="next_ren"><h4>Type</h4></div>
        <div id="mrp"><h4>Amount Refunded</h4></div>
        <div id="createon"><h4>Created On</h4></div>
        <div id="uid"><h4>UID</h4></div>
        <div id="cancel"><h4>CANCEL</h4></div>
         </div>
    `
        for (let i = 0; i < htl.length; i++) {
            let div = document.createElement("div")

            let p1 = document.createElement("p")
            p1.innerText = htl[i].SubscriptionInfo
            p1.style.border = "2px solid orange"
            p1.style.borderRadius = "5px"
            p1.style.backgroundColor = "rgb(255, 247, 230)"
            let p2 = document.createElement("p")
            p2.innerText = htl[i].CustomerInfo
            let p3 = document.createElement("p")
            p3.innerText = htl[i].NextRenewal
            let p4 = document.createElement("p")
            p4.innerText = htl[i].MRP
            let p5 = document.createElement("p")
            p5.innerText = htl[i].Createdon
            let p6 = document.createElement("p")
            p6.innerText = htl[i].id
            let butt = document.createElement("button")
            butt.innerText = "CANCEL"
            butt.style.display = "block"
            butt.style.marginTop = "17px"
            butt.style.backgroundColor = "rgb(242, 54, 24)"
            butt.style.border = "0"
            butt.style.color = "white"
            butt.style.cursor = "pointer"

            document.querySelector("#subs_info").append(p1)
            document.querySelector("#cus_info").append(p2)
            document.querySelector("#next_ren").append(p3)
            document.querySelector("#mrp").append(p4)
            document.querySelector("#createon").append(p5)
            document.querySelector("#uid").append(p6)
            document.querySelector("#cancel").append(butt)
        }
        return
        // console.log(inp)
    }



}

let invNotes = [{
    "SubscriptionInfo": "Pending",
    "CustomerInfo": "CustomerInfo 38",
    "NextRenewal": "Refundable",
    "MRP": "202.00",
    "Createdon": "2049-01-07T12:11:32.957Z",
    "id": "38"
},
{
    "SubscriptionInfo": "Paid",
    "CustomerInfo": "CustomerInfo 39",
    "NextRenewal": "Adjustment",
    "MRP": "336.00",
    "Createdon": "2072-03-11T13:10:13.679Z",
    "id": "39"
},
{
    "SubscriptionInfo": "Paid",
    "CustomerInfo": "CustomerInfo 39",
    "NextRenewal": "Adjustment",
    "MRP": "336.00",
    "Createdon": "2072-03-11T13:10:13.679Z",
    "id": "33"
},
{
    "SubscriptionInfo": "Pending",
    "CustomerInfo": "CustomerInfo 39",
    "NextRenewal": "Adjustment",
    "MRP": "336.00",
    "Createdon": "2072-03-11T13:10:13.679Z",
    "id": "36"
}

]


function inv_Notes() {
    document.querySelector("#main").innerHTML = `
    <div id="sb_subs_1">
    <h3>All Invoice Details</h3>
    <div>
     <button onclick="edit_empty_user()">Edit Invoice</button>
     <button onclick="create_empty_user()" style="background-color:#6200ea;color:white;border:0;">Create Invoice</button>
    </div>
    </div>
    <div id="create_empty_user"></div>

    <div id="sb_subs_2">
    <h3>${invNotes.length} Details Available</h3>
    <input id="subs_input" oninput="subs_input1()" type="text" placeholder="search for company / name">
    <div>
    <select name="Sort" id="sub_sort" onchange="sort_inv()">
    <option value="Sort">Sort</option>
    <option value="L-H">MRP Low - High</option>
  <option value="H-L">MRP High - Low</option>
  </select>
    </div>
    </div>

   <div id="sb_subs_3">
   <div>  
   <div id="subs_info"><h4>Invoice</h4></div>
   <div id="cus_info"><h4>Customer Info</h4></div>  
   <div id="next_ren"><h4>Type</h4></div>
   <div id="mrp"><h4>Amount Refunded</h4></div>
   <div id="createon"><h4>Created On</h4></div>
   <div id="uid"><h4>UID</h4></div>
   <div id="cancel"><h4>CANCEL</h4></div>
    </div>

   </div>
    `

    for (let i = 0; i < invNotes.length; i++) {
        let div = document.createElement("div")

        let p1 = document.createElement("p")
        p1.innerText = invNotes[i].SubscriptionInfo
        p1.style.border = "2px solid orange"
        p1.style.backgroundColor = "rgb(255, 117, 24)"


        if (p1.innerText == "Paid") {
            p1.style.border = "1px solid rgb(150, 212, 138)"
            p1.style.backgroundColor = "rgb(177, 250, 162)"
        }

        p1.style.borderRadius = "5px"

        let p2 = document.createElement("p")
        p2.innerText = invNotes[i].CustomerInfo
        let p3 = document.createElement("p")
        p3.innerText = invNotes[i].NextRenewal
        let p4 = document.createElement("p")
        p4.innerText = invNotes[i].MRP
        let p5 = document.createElement("p")
        p5.innerText = invNotes[i].Createdon
        let p6 = document.createElement("p")
        p6.innerText = invNotes[i].id
        let butt = document.createElement("button")
        butt.innerText = "CANCEL"
        butt.style.display = "block"
        butt.style.marginTop = "17px"
        butt.style.backgroundColor = "rgb(242, 54, 24)"
        butt.style.border = "0"
        butt.style.color = "white"
        butt.style.cursor = "pointer"
        document.querySelector("#subs_info").append(p1)
        document.querySelector("#cus_info").append(p2)
        document.querySelector("#next_ren").append(p3)
        document.querySelector("#mrp").append(p4)
        document.querySelector("#createon").append(p5)
        document.querySelector("#uid").append(p6)
        document.querySelector("#cancel").append(butt)
    }

}
function sort_inv() {
    let x = document.querySelector("#sub_sort").value
    if (x == "L-H") {
        let lth = invNotes.sort((a, b) => {
            return parseInt(a.MRP) - parseInt(b.MRP)
        })
        document.querySelector("#sb_subs_3").innerHTML = `<div>  
        <div id="subs_info"><h4>Invoice</h4></div>
        <div id="cus_info"><h4>Customer Info</h4></div>  
        <div id="next_ren"><h4>Type</h4></div>
        <div id="mrp"><h4>Amount Refunded</h4></div>
        <div id="createon"><h4>Created On</h4></div>
        <div id="uid"><h4>UID</h4></div>
        <div id="cancel"><h4>CANCEL</h4></div>
         </div>
     
        </div>
    `
        for (let i = 0; i < lth.length; i++) {
            let div = document.createElement("div")

            let p1 = document.createElement("p")
            p1.innerText = lth[i].SubscriptionInfo
            p1.style.border = "2px solid orange"
            p1.style.backgroundColor = "rgb(255, 117, 24)"
    
    
            if (p1.innerText == "Paid") {
                p1.style.border = "1px solid rgb(150, 212, 138)"
                p1.style.backgroundColor = "rgb(177, 250, 162)"
            }
    
            p1.style.borderRadius = "5px"
            let p2 = document.createElement("p")
            p2.innerText = lth[i].CustomerInfo
            let p3 = document.createElement("p")
            p3.innerText = lth[i].NextRenewal
            let p4 = document.createElement("p")
            p4.innerText = lth[i].MRP
            let p5 = document.createElement("p")
            p5.innerText = lth[i].Createdon
            let p6 = document.createElement("p")
            p6.innerText = lth[i].id
            let butt = document.createElement("button")
            butt.innerText = "CANCEL"
            butt.style.display = "block"
            butt.style.marginTop = "17px"
            butt.style.backgroundColor = "rgb(242, 54, 24)"
            butt.style.border = "0"
            butt.style.color = "white"
            butt.style.cursor = "pointer"

            document.querySelector("#subs_info").append(p1)
            document.querySelector("#cus_info").append(p2)
            document.querySelector("#next_ren").append(p3)
            document.querySelector("#mrp").append(p4)
            document.querySelector("#createon").append(p5)
            document.querySelector("#uid").append(p6)
            document.querySelector("#cancel").append(butt)
        }
        return
    }
    console.log(x)
    if (x == "H-L") {
        let htl = invNotes.sort((a, b) => {
            return parseInt(b.MRP) - parseInt(a.MRP)
        })
        console.log(x)
        document.querySelector("#sb_subs_3").innerHTML = `<div>  
        <div id="subs_info"><h4>Invoice</h4></div>
        <div id="cus_info"><h4>Customer Info</h4></div>  
        <div id="next_ren"><h4>Type</h4></div>
        <div id="mrp"><h4>Amount Refunded</h4></div>
        <div id="createon"><h4>Created On</h4></div>
        <div id="uid"><h4>UID</h4></div>
        <div id="cancel"><h4>CANCEL</h4></div>
         </div>
     
        </div>
    `
        for (let i = 0; i < htl.length; i++) {
            let div = document.createElement("div")

            let p1 = document.createElement("p")
            p1.innerText = htl[i].SubscriptionInfo
            p1.style.border = "2px solid orange"
            p1.style.backgroundColor = "rgb(255, 117, 24)"
    
    
            if (p1.innerText == "Paid") {
                p1.style.border = "1px solid rgb(150, 212, 138)"
                p1.style.backgroundColor = "rgb(177, 250, 162)"
            }
    
            p1.style.borderRadius = "5px"
            let p2 = document.createElement("p")
            p2.innerText = htl[i].CustomerInfo
            let p3 = document.createElement("p")
            p3.innerText = htl[i].NextRenewal
            let p4 = document.createElement("p")
            p4.innerText = htl[i].MRP
            let p5 = document.createElement("p")
            p5.innerText = htl[i].Createdon
            let p6 = document.createElement("p")
            p6.innerText = htl[i].id
            let butt = document.createElement("button")
            butt.innerText = "CANCEL"
            butt.style.display = "block"
            butt.style.marginTop = "17px"
            butt.style.backgroundColor = "rgb(242, 54, 24)"
            butt.style.border = "0"
            butt.style.color = "white"
            butt.style.cursor = "pointer"

            document.querySelector("#subs_info").append(p1)
            document.querySelector("#cus_info").append(p2)
            document.querySelector("#next_ren").append(p3)
            document.querySelector("#mrp").append(p4)
            document.querySelector("#createon").append(p5)
            document.querySelector("#uid").append(p6)
            document.querySelector("#cancel").append(butt)
        }
        return
        // console.log(inp)
    }



}
function myapp() {
    document.querySelector("#main").innerHTML = `
        <div id="app-1">
        <h3>Apps</h3>
        <button>Go to Market place &#8594;</button>
        </div>
        <div id="app-2">
        <div >
        <h1>Find the right apps to complement your growing business</h1>
        <p>Wish to build for us? <a>Become a Developer Partner</a></p>
        <button>Go to Market place &#8594;</button>
        </div>
        <img src="https://dgkxwewtzsnml.cloudfront.net/static/app-static-assets/cb-vue/cb-vue-2022.12.15-16.56/images/marketplace.png">
        </div>

        <div id="app-3">
        <h2>Apps connected (0)</h2>
        <p>You haven't installed any apps yet. Please visit Marketplace  to explore apps that complete your business workflows!</p>
        </div>
        `
}