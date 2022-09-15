input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
})
input.onGesture(Gesture.Shake, function () {
    num = 0
    basic.showNumber(num)
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
let num = 0
basic.showIcon(IconNames.Heart)
num = 1
sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
