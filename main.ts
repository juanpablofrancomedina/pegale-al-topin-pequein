controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    sprites.moveToRandomHoleOnGrid(myMole)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    sprites.moveToRandomHoleOnGrid(myMole)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.moveToRandomHoleOnGrid(myMole)
    music.bigCrash.play()
    animation.runImageAnimation(
    myHammer,
    assets.animation`hammerAnimation`,
    50,
    false
    )
})
let myHammer: Sprite = null
let myMole: Sprite = null
game.showLongText("Jugador 1: Usa las flechas para mover el martillo tamo? . Jugador 2: toca AWSD para mover el mole. SAPEEEEEEEEEEE", DialogLayout.Center)
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(myHammer, controller.Speeds.Fast)
carnival.startCountdownGame(30, carnival.WinTypes.Score)
carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Bottom)
carnival.startCountdownGame(30, carnival.WinTypes.Multi)
game.onUpdateInterval(1000, function () {
    simplified.checkMoleEscape()
})
