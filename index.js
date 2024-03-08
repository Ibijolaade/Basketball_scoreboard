let home_scoreEl = document.getElementById("home_scoreel")
let guest_scoreEl = document.getElementById("guest_scoreel")

let home_sum = 0
let guest_sum = 0

function home_score(score){
    home_sum = home_sum + score
    home_scoreEl.textContent = home_sum
}

function guest_score(score){
    guest_sum = guest_sum + score
    guest_scoreEl.textContent = guest_sum
}

function clear_home_score(){
    home_scoreEl.textContent = 0
    home_sum = 0
}

function clear_guest_score(){
    guest_scoreEl.textContent = 0
    guest_sum = 0
}