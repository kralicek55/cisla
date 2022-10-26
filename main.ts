input.onButtonPressed(Button.A, function () {
    if (Patro >= 1) {
        Patro += -1
        basic.showNumber(Patro)
    } else {
        Blikej()
    }
})
input.onButtonPressed(Button.B, function () {
    if (Patro <= 8) {
        Patro += 1
        basic.showNumber(Patro)
    } else {
        Blikej()
    }
})
function Blikej () {
    for (let index = 0; index < 3; index++) {
        basic.clearScreen()
        basic.pause(300)
        basic.showNumber(Patro)
        basic.pause(200)
    }
}
let Patro = 0
basic.showString("Vytah")
Patro = 5
basic.showNumber(Patro)
basic.forever(function () {
	
})
