const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = ["aayush.com","bhoj.com"];

inputBtn.addEventListener("click", function(){
    let lead = inputEl.value;
    myLeads.push(lead);
    console.log(myLeads)
})

for(let i=0;i<myLeads.length;i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li"

    // We can also use
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}
