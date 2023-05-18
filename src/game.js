let config = {

    // dimensions of background.png
    width: 700,
    height: 800,
    // backgroundColor: 0xffffff,
    backgroundColor: 0x000000,
    scene: [ Intro, Level1, Level2, Level3, Credits ]
}

let game = new Phaser.Game(config);