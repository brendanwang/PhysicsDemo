# PhysicsDemo - Block Jump

## Credits
- All assets and art were created by me in the program Aseprite

## Inputs
- **Continuous**
    - How long has the player moved vertically or horizontally
- **Discrete**
    - If the player pressed the up arrow, they jump
    - If the player pressed the down arrow, they stomp

## Main Scenes
- The main scenes were composed of three levels.  These levels are included in the following files:
- scene1.js
- scene2.js
- scene3.js

## Progression
- The player can only proceed when they have successfully reached the portal in each level
- When the player's sprite collides with the portal/door sprite, they will automatically teleport to the next level
- The first level has very few platforms (less complex) while as you progress, each level gets increasingly more complex such as including more platforms

## Other Scenes
- Three other scenes were created to introduce the player to all three levels
- scene1_intro.js
- scene2_intro.js
- scene3_intro.js

- There are also supplementary scenes such as the following:
- title.js
- intro.js
- outro.js