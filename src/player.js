const Phaser = require('phaser');

export class Dude extends Phaser.Physics.Arcade.Sprite {
    constructor(scene) {
        super(scene, 200, 350, 'dude');
        console.log('the dude');
        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        this.setCollideWorldBounds(true);


        scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });
    
        scene.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
    
        scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }

   
    move(cursors) {
        if (cursors.left.isDown){
            this.setVelocityX(-160);
            this.anims.play('left', true);
        } else if (cursors.right.isDown) {
            this.setVelocityX(160);
            this.anims.play('right', true);
        } else {
            this.setVelocityX(0);
            this.anims.play('turn');
        }
    
        if (cursors.up.isDown && this.body.touching.down) {
            this.setVelocityY(-330);
        }
    }
}