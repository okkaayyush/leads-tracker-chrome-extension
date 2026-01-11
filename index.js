const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = [];

inputBtn.addEventListener("click", function(){
    let lead = inputEl.value;
    myLeads.push(lead);
    renderLead();
    inputEl.value="";
})

function renderLead(){
let listItem= `
        <li>
            <a target='_blank' href='${inputEl.value}'>
                ${inputEl.value}
            </a> </li>
`
ulEl.innerHTML += listItem
}