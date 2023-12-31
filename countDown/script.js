const countDown = document.getElementById("countDown")
const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
let count = 0

increaseBtn.onclick = function() {
    count++
    countDown.textContent = count
}

resetBtn.onclick = function() {
    count = 0
    countDown.textContent = count
}

decreaseBtn.onclick = function() {
    count--
    countDown.textContent = count
}