class IntroScene extends Phaser.Scene {
    constructor() {
      super('IntroScene');
    }
  
    create() {
      // Create the menu options
      const playOption = this.add.text(400, 250, 'Play', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
      const creditsOption = this.add.text(400, 300, 'Credits', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);

      this.add.text(400, 400, 'Use arrow keys to navigate', { fontSize: '20px', fill: '#fff' }).setOrigin(0.5);
      this.add.text(400, 430, 'Press ENTER to select', { fontSize: '20px', fill: '#fff' }).setOrigin(0.5);
  
      const menuOptions = [playOption, creditsOption];
      let currentOptionIndex = 0;
  
      // Set initial color for the first option
      menuOptions[currentOptionIndex].setColor('#f00');
  
      // Enable keyboard input
      const enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
      const cursors = this.input.keyboard.createCursorKeys();
  
      // Navigation using arrow keys
      cursors.down.on('down', () => {
        const selectedOption = menuOptions[currentOptionIndex];
        selectedOption.setColor('#fff');
        currentOptionIndex = (currentOptionIndex + 1) % menuOptions.length;
        menuOptions[currentOptionIndex].setColor('#f00');
      });
  
      cursors.up.on('down', () => {
        const selectedOption = menuOptions[currentOptionIndex];
        selectedOption.setColor('#fff');
        currentOptionIndex = (currentOptionIndex - 1 + menuOptions.length) % menuOptions.length;
        menuOptions[currentOptionIndex].setColor('#f00');
      });
  
      // Select option on pressing Enter key
      enterKey.on('down', () => {
        const selectedOption = menuOptions[currentOptionIndex];
        selectedOption.setColor('#fff');
  
        if (selectedOption === playOption) {
          this.scene.start('Scene1Intro');
        } else if (selectedOption === creditsOption) {
          this.scene.start('OutroScene');
        }
      });
    }
  }
  