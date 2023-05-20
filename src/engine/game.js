let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
    // for debugging
    //scene: [Scene1, Scene2, Scene3]

    scene: [TitleScene, IntroScene, Scene1Intro, Scene1, Scene2Intro, Scene2, Scene3Intro, Scene3, OutroScene]
};

let game = new Phaser.Game(config);
