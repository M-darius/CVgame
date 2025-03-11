import Phaser from "phaser";

class CVGame extends Phaser.Scene {
    constructor() {
        super("CVGame");
    }

    preload() {
        this.load.image("background", "https://yourimageurl.com/background.png");
        this.load.spritesheet("player", "https://yourimageurl.com/player.png", { frameWidth: 32, frameHeight: 48 });
    }

    create() {
        this.add.image(400, 300, "background");

        this.player = this.physics.add.sprite(400, 500, "player");
        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.add.text(20, 20, "Bienvenue dans mon CV interactif!", { fontSize: "20px", fill: "#fff" });

        this.createInteractiveElements();
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
        } else {
            this.player.setVelocityX(0);
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }

    createInteractiveElements() {
        let skillBox = this.add.rectangle(200, 300, 100, 50, 0x00ff00).setInteractive();
        this.add.text(180, 290, "Skills", { fontSize: "16px", fill: "#000" });
        skillBox.on("pointerdown", () => {
            alert("Mes compétences: JavaScript, Phaser.js, HTML/CSS, Unreal Engine 5, Unity");
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: { default: "arcade", arcade: { gravity: { y: 300 }, debug: false } },
    scene: CVGame
};

new Phaser.Game(config);
