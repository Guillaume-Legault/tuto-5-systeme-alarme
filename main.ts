input.onButtonPressed(Button.A, function () {
    etatactuel = 0
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
})
let etatactuel = 0
etatactuel = 0
let etatpasse = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    etatactuel = pins.digitalReadPin(DigitalPin.P16)
    if (etatactuel != etatpasse) {
        if (etatactuel == 1) {
            basic.showIcon(IconNames.No)
        }
    }
})
