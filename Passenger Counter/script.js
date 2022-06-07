const countEl = document.getElementById("count")
const incrementBtn = document.getElementById("increment")
const saveBtn = document.getElementById("save")
const enteriesEl = document.getElementById("enteries")
const calcBtn = document.getElementById("calc")
let count = 0;
// increment functionality
incrementBtn.addEventListener("click", () => {
    count ++;
    countEl.innerHTML = count
})
// save functionality
saveBtn.addEventListener("click", () => {
    if (count == 0) {
        alert("Count should be more than '0'")
    } else {
        enteriesEl.innerHTML += `${count} - `
        count = 0
        countEl.innerHTML = count
    }
    
})
