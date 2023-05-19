class Scene3 extends Phaser.Scene {
    constructor() {
        super('Scene3');
    }

    preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('platform', 'assets/platform.png');
        this.load.spritesheet('player', 'assets/player.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('door', 'assets/door.png');
    }

    create() {
        this.add.image(400, 300, 'sky');

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'platform').setScale(2).refreshBody();
        this.platforms.create(150, 450, 'platform');
        this.platforms.create(600, 400, 'platform');
        this.platforms.create(300, 350, 'platform');
        this.platforms.create(750, 320, 'platform');
        this.platforms.create(50, 250, 'platform');
        this.platforms.create(500, 200, 'platform');
        this.platforms.create(200, 150, 'platform');
        this.platforms.create(650, 120, 'platform');
        this.platforms.create(350, 90, 'platform');
        this.platforms.create(700, 60, 'platform');

        this.player = this.physics.add.sprite(100, 450, 'player');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.body.setGravityY(300);

        this.physics.add.collider(this.player, this.platforms);

        this.door = this.physics.add.sprite(700, 30, 'door');
        this.door.body.setAllowGravity(false);

        this.physics.add.collider(this.player, this.door, this.enterDoor, null, this);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
        } else {
            this.player.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-500);
        }
    }

    enterDoor() {
        this.scene.start('OutroScene');
    }
}
