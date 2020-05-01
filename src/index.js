const Phaser = require('phaser');

const { MainScene } = require('./scenes/mainScene');
const { BootScene } = require('./scenes/bootScene');

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: MainScene
};
console.log('index.js');
const game = new Phaser.Game(config);