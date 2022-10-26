input.onButtonPressed(Button.A, function () {
    if (Patro >= NejnizsiPatro + 1) {
        Patro += -1
        basic.showNumber(Patro)
    } else {
        Blikej()
    }
})
input.onButtonPressed(Button.B, function () {
    if (Patro <= NejvyssiPatro - 1) {
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
let NejvyssiPatro = 0
let NejnizsiPatro = 0
basic.showString("Vytah")
NejnizsiPatro = 0
NejvyssiPatro = 9
Patro = 5
basic.showNumber(Patro)
basic.forever(function () {
	
})
