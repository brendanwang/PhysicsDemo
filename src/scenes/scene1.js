class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
    }

    preload() {
        this.load.image('sky', 'assets/images/sky.png');
        this.load.image('platform', 'assets/images/platform.png');
        this.load.image('player', 'assets/images/player.png');
        this.load.image('door', 'assets/images/portal.png');
    }

    create() {
        this.cameras.main.setBackgroundColor('#2f3575');

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'platform').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'platform');
        this.platforms.create(50, 250, 'platform');
        this.platforms.create(750, 220, 'platform');

        this.player = this.physics.add.sprite(100, 450, 'player');
        this.player.setBounce(0.5);
        this.player.setCollideWorldBounds(true);
        this.player.body.setGravityY(300);

        this.physics.add.collider(this.player, this.platforms);

        this.door = this.physics.add.sprite(750, 180, 'door');
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
        this.scene.start('Scene2Intro');
    }
}
