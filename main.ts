let hang = 0
input.onButtonPressed(Button.A, function () {
    hang += 1
})
input.onButtonPressed(Button.B, function () {
    hang += -1
})
basic.forever(function () {
    if (hang < 0) {
        hang = 0
    }
    if (hang > 5) {
        hang = 5
    }
    if (hang == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hang == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    }
    if (hang == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # # . . .
            `)
    }
    if (hang == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # . .
            # # # . .
            `)
    }
    if (hang == 4) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # # .
            . # # # .
            # # # # .
            `)
    }
    if (hang == 5) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            `)
    }
})
