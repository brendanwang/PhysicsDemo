/* // Second Scene
class Level2 extends Phaser.Scene {
    constructor() {
      super('Level2');
    }
  
    preload() {
        this.load.image("brick", "assets/images/brick.png");
        this.load.image("ball", "assets/images/ball.png");
        this.load.image("paddle", "assets/images/paddle.png");
    }
  
    create() {
      // Create the paddle
      this.paddle = this.physics.add.image(400, 550, 'paddle').setScale(0.5);
      this.paddle.setCollideWorldBounds(true);
      this.paddle.setImmovable();
  
      // Create the ball
      this.ball = this.physics.add.image(400, 500, 'ball').setScale(0.5);
      this.ball.setCollideWorldBounds(true);
      this.ball.setBounce(1, 1);
      this.ball.setVelocity(300, -300);
  
      // Create bricks
      this.bricks = this.physics.add.staticGroup();
      for (let y = 100; y <= 300; y += 50) {
        for (let x = 100; x <= 700; x += 100) {
          this.bricks.create(x, y, 'brick');
        }
      }
  
      // Set collisions
      this.physics.add.collider(this.ball, this.paddle);
      this.physics.add.collider(this.ball, this.bricks, hitBrick, null, this);
    }
  
    update() {
      // Move the paddle
      this.paddle.x = this.input.x;
  
      // Check game over condition
      if (this.ball.y > 600) {
        this.scene.start('Credits');
      }
    }
  
    hitBrick(ball, brick) {
      brick.disableBody(true, true);
      if (this.bricks.countActive() === 0) {
        this.scene.start('Scene3');
      }
    }
  } */
  
class Level2 extends Phaser.Scene {
    constructor() {
        super('Level2');
    }

    preload() {
        this.load.image("brick", "assets/images/brick.png");
        this.load.image("ball", "assets/images/ball.png");
        this.load.image("paddle", "assets/images/paddle.png");
    }
    
    create() {
        this.paddle = this.physics.add.image(400, 550, 'paddle').setScale(1);
    }
}

  // ...
  