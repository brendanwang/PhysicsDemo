class TitleScene extends Phaser.Scene {
    constructor() {
      super('TitleScene');
    }
  
    create() {
      const titleText = this.add.text(400, -100, 'Block Jump', { fontSize: '48px', fill: '#fff' }).setOrigin(0.5);
  
      this.tweens.add({
        targets: titleText,
        y: 300,
        duration: 2000,
        ease: 'Bounce',
        onComplete: () => {
          this.time.delayedCall(2000, () => {
            this.tweens.add({
              targets: titleText,
              y: 600,
              duration: 1000,
              ease: 'Linear',
              onComplete: () => {
                this.scene.start('IntroScene');
              }
            });
          });
        }
      });
    }
  }
  