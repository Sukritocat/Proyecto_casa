basic.showString("Hello!")
basic.forever(function () {
    input.calibrateCompass()
    if (input.buttonIsPressed(Button.A)) {
        music.ringTone(262)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})
