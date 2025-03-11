import BootScene from "./scenes/BootScene.js";
import MenuScene from "./scenes/MenuScene.js";
import CVGameScene from "./scenes/CVGameScene.js";

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: { gravity: { y: 300 }, debug: false }
    },
    scene: [BootScene, MenuScene, CVGameScene]
};

new Phaser.Game(config);
