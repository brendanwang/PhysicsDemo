class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }

    preload() {
        // load images
        this.load.image("logo", "assets/images/logo.png");
    }

    create() {

        // fade in effect
        this.cameras.main.fadeIn(500,0,0,0)

        // load logo
        // this.logo = this.add.image(config.width/2, config.height/2-100, "logo")

        // game studio text
        this.add.text(config.width/2-135, config.height/2-30, "BLACKWATER INTERACTIVE", {
            font: "20px Arial", 
            fill: "white"});

        // instructions to move to next scene
        this.add.text(config.width/2-157, config.height/2+20, "press SPACE to move to the next scene", {
            font: "18px Arial", 
            fill: "white"});

        //this.add.text(centerX, game.config.height, 'S for next Scene').setOrigin(0.5);

        this.input.keyboard.once('keydown-SPACE', () => {
            this.cameras.main.fadeOut(500,0,0,0)
        })

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('menu')
        })
    }
}