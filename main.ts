let ball1 = game.createSprite(0, 0)
let ball2 = game.createSprite(1, 1)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        ball1.move(1)
        basic.pause(100)
    }
    ball1.turn(Direction.Right, 45)
})
basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        ball2.move(1)
        basic.pause(100)
    }
    ball2.turn(Direction.Right, 90)
})
