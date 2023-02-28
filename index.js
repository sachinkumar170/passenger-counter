let count = 0
let entBtn = document.getElementById("ent-btn")
let countEl = document.getElementById("count-el")
function increment() {
    count = count + 1
    countEl.innerText = count
   
}

function save() {
    let countStr = count
    
    entBtn.textContent += " -" + countStr
}