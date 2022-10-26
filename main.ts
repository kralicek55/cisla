input.onButtonPressed(Button.A, function () {
    if (Cislo >= 1) {
        Cislo += -1
        basic.showNumber(Cislo)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (Cislo <= 8) {
        Cislo += 1
        basic.showNumber(Cislo)
    } else {
    	
    }
})
let Cislo = 0
Cislo = 5
basic.showNumber(Cislo)
basic.forever(function () {
	
})
