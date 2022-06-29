let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const delBtn = document.getElementById("delete-btn");
const saveTabBtn = document.getElementById("saveTab-btn");

//getting leads from local storage
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
//funcationality to render only if something saved in local storage
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads(myLeads);
}
//saving the url
saveTabBtn.addEventListener("click", () => {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      renderLeads(myLeads);
    });
  });
});
//function for saving input value
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads(myLeads);
});
//delete functionality
delBtn.addEventListener("click", () => {
  localStorage.clear();
  myLeads = [];
  renderLeads(myLeads);
});
//rendering links as list in page
function renderLeads(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
          <li>
              <a target='_blank' href='${leads[i]}'>
                  ${leads[i]}
              </a>
          </li>
      `;
  }
  ulEl.innerHTML = listItems;
}
