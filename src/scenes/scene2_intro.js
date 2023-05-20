class Scene2Intro extends Phaser.Scene {
    constructor() {
        super('Scene2Intro');
    }

    create() {
        this.add.text(400, 300, 'Level 2', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);
        this.add.text(400, 350, 'Press ENTER to continue', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5);

        this.input.keyboard.once('keydown-ENTER', () => {
            this.scene.start('Scene2');
        });
    }
}