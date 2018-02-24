var switchFarScore = 0
var switchNearScore = 0
var scaleScore = 0
var vaultScore = 0

function appendText() {
    var scores = document.getElementById("scores")
    scores.value = "Switch near: " + switchNearScore + "\nSwitch far: " + switchFarScore + "\nScale: " + scaleScore + "\nVault: " + vaultScore
}

function switchFar() {
    switchFarScore ++
    appendText()
}

function switchNear() {
    switchNearScore ++
    appendText()
}

function scale() {
    scaleScore ++
    appendText()
}

function vault() {
    vaultScore ++
    appendText()
}
