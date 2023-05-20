class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }

    preload() {
        this.load.image('sky', 'assets/images/sky.png');
        this.load.image('platform', 'assets/images/platform.png');
        this.load.spritesheet('player', 'assets/images/player.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('door', 'assets/images/player.png');
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

        this.player = this.physics.add.sprite(100, 450, 'player');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.body.setGravityY(300);

        this.physics.add.collider(this.player, this.platforms);

        this.door = this.physics.add.sprite(650, 100, 'door');
        this.door.body.setAllowGravity(false);

        this.physics.add.collider(this.player, this.door, this.enterDoor, null, this);

        // keyboard inputs
        this.cursors = this.input.keyboard.createCursorKeys();

        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.jump = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.drop = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.charge = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
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
        if (this.drop.isDown) {
            this.player.setVelocityY(700);
        }
    }

    enterDoor() {
        this.scene.start('Scene3Intro');
    }
}
