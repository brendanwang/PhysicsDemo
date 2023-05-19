let gameConfig = {
    scale: {
       mode: Phaser.Scale.FIT,
       autoCenter: Phaser.Scale.CENTER_BOTH,
       width: 1920,
       height: 1080
    },
    physics: {
       default: 'arcade',
       arcade: {
          
       }
    },
    pixelArt: true,
    backgroundColor: '0x000000',
 
    // for debugging
    scene: [ Intro, Level1, Level2, Level3, Credits ],
    title: "Physics Demo"
 };
 
 const game = new Phaser.Game(gameConfig);