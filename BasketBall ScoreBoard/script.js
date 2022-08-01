let $playerHomeEl = document.getElementById("player-home")
let $playerGuestEl = document.getElementById("player-guest")
let $incrementPointsHome = document.getElementsByClassName("home-points")
let $incrementPointsGuest = document.getElementsByClassName("guest-points")
let $resetBtnEl = document.getElementById("resetBtn")
let playerHomeScore = 0
let playerGuestScore = 0
for (let incrementPointsH of $incrementPointsHome) {
  incrementPointsH.addEventListener("click", (e) => {
    let incrementValueHome = Number(e.target.innerHTML)
    playerHomeScore += incrementValueHome
    $playerHomeEl.textContent = playerHomeScore
  })
}
for (let incrementPointsG of $incrementPointsGuest) {
  incrementPointsG.addEventListener("click", (e) => {
    let incrementValueGuest = Number(e.target.innerHTML)
    playerGuestScore += incrementValueGuest
    $playerGuestEl.textContent = playerGuestScore
  })
}
$resetBtnEl.addEventListener("click", () => {
  playerHomeScore = 0
  playerGuestScore = 0
  $playerHomeEl.textContent = playerHomeScore
  $playerGuestEl.textContent = playerGuestScore
})
