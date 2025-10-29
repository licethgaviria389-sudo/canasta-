input.onButtonPressed(Button.A, function () {
    game.setScore(0)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        game.addScore(1)
        game.addLife(0)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
        basic.pause(5000)
        music.play(music.stringPlayable("C D E - - - - - ", 100), music.PlaybackMode.UntilDone)
    } else {
    	
    }
})
basic.forever(function () {
    basic.showNumber(game.score())
})
