class OutroScene extends Phaser.Scene {
    constructor() {
        super('OutroScene');
    }

    create() {
        this.add.text(400, 300, 'The End', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);
        this.add.text(400, 350, 'Credits:', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5);
        this.add.text(400, 380, 'Created by Brendan Wang', { fontSize: '18px', fill: '#ffffff' }).setOrigin(0.5);
        this.add.text(400, 420, 'Press ENTER to restart', { fontSize: '18px', fill: '#ffffff' }).setOrigin(0.5);

        this.input.keyboard.once('keydown-ENTER', () => {
            this.scene.start('Scene1');
        });
    }
}
