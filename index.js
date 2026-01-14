const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


let myLeads = []; 
let oldLeads = [];

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}

function render(leads){
let listItems= ""
for(let i=0;i<leads.length;i++){
    listItems+= `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
`
}
ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function(){
    let lead = inputEl.value;
    myLeads.push(lead);
    render(myLeads);
    inputEl.value="";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        let lead = tabs[0].url
        myLeads.push(lead)
        render(myLeads)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
    })
    
})
