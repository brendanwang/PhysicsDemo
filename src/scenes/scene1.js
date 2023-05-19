class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
    }

    preload() {
        this.load.image('sky', 'assets/images/sky.png');
        this.load.image('platform', 'assets/images/platform.png');
        this.load.spritesheet('player', 'assets/images/player.png', { frameWidth: 32, frameHeight: 48 });
    }

    create() {
        this.add.image(400, 300, 'sky');

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'platform').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'platform');
        this.platforms.create(50, 250, 'platform');
        this.platforms.create(750, 220, 'platform');

        this.player = this.physics.add.sprite(100, 350, 'player');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.body.setGravityY(300);

        this.physics.add.collider(this.player, this.platforms);

        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.jump = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.drop = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.charge = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    }

    update() {
        // left
        if (this.left.isDown) {
            this.player.setVelocityX(-200);
        
        // right
        } else if (this.right.isDown) {
            this.player.setVelocityX(200);
        
        // don't move
        } else {
            this.player.setVelocityX(0);
        }

        // jump

        // && this.player.body.touching.down)
        if (this.jump.isDown) {
            this.player.setVelocityY(-500);
        }

        // drop
        if (this.drop.isDown) {
            this.player.setVelocityY(500);
        }
    }
}
