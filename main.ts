function Face_Recognition () {
    huskylens.initI2c()
    huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
    while (초기화 == "0") {
        huskylens.request()
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Heart)
            music.ringTone(262)
            music.ringTone(294)
            music.ringTone(330)
            basic.pause(1000)
            basic.clearScreen()
            초기화 = 1
        }
    }
    basic.showString("HI!")
    basic.pause(100)
    기분 = 0
}
input.onButtonPressed(Button.A, function () {
    Tag_Recognition()
})
function Tag_Recognition () {
    huskylens.initI2c()
    huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
    while (기분 < 100) {
        huskylens.request()
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Happy)
            basic.pause(2000)
            basic.clearScreen()
            기분 += 1
        }
        if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showLeds(`
                . # . # .
                # . # . #
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.pause(2000)
            basic.clearScreen()
            기분 += 1
        }
        if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showLeds(`
                . . . . .
                # . . . #
                . . . . .
                . # # # .
                . # # # .
                `)
            basic.pause(2000)
            basic.clearScreen()
            기분 += 1
        }
    }
}
let 기분 = 0
let 초기화 = ""
Face_Recognition()
