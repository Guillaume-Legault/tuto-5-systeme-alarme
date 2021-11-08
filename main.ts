let nombre = 0
let etatactuel = 0
let etatpasse = 0
basic.forever(function () {
    etatactuel = pins.digitalReadPin(DigitalPin.P16)
    if (etatactuel != etatpasse) {
        if (etatactuel == 1) {
            nombre += 1
        }
    }
    etatpasse = etatactuel
    basic.showNumber(nombre)
})
