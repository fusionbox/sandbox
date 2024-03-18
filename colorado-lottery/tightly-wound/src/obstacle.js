/**
 * Obstacles that destroy the player snake when touched
 * @param  {Phaser.Game} game game object
 * @param  {Number} x    coordinate
 * @param  {Number} y    coordinate
 */
Obstacle = function(game, x, y, obstacleSprite, drift) {
    this.game = game;
    this.debug = false;
    this.stormScaleAdjustment = 0.5;
    this.treeScaleAdjustment = 0.3;
    this.sprite = this.game.add.sprite(x, y, obstacleSprite);
    var flicker = this.sprite.animations.add('flicker');
    this.sprite.animations.play('flicker', 12, true);
    this.sprite.animations.currentAnim.setFrame(Util.randomInt(0,11), true);

    this.drift = drift;
    this.driftRate = Util.randomInt(15,45) / 100;

    this.game.physics.p2.enable(this.sprite, this.debug);

    this.sprite.body.clearShapes();

    this.stormSpriteConstant = this.sprite.width * this.stormScaleAdjustment;

    if (this.sprite.key == 'wall') {
      // Wall
      // Use * 2 to make the wall appear in the game world (* 3 is just to prevent player from venturing off-screen forever)
      this.sprite.width = this.game.w * 3;
      this.sprite.height = this.game.h * 3;
      this.sprite.z = 50;

      this.sprite.body.addRectangle(this.sprite.width,this.game.wallthickness,0,-this.sprite.height/2 + this.game.wallthickness/2);
      this.sprite.body.addRectangle(this.sprite.width,this.game.wallthickness,0,this.sprite.height/2 - this.game.wallthickness/2);

      this.sprite.body.addRectangle(this.game.wallthickness,this.sprite.height,-this.sprite.width/2 + this.game.wallthickness/2,0);
      this.sprite.body.addRectangle(this.game.wallthickness,this.sprite.height,this.sprite.width/2 - this.game.wallthickness/2,0);
    }


    if (this.sprite.key == 'obstacle-a') {
      // Storm
      this.sprite.width = this.sprite.width * this.stormScaleAdjustment;
      this.sprite.height = this.sprite.height * this.stormScaleAdjustment;
      this.sprite.z = 20;

      this.sprite.body.addCircle(this.stormScaleAdjustment * 107, this.stormScaleAdjustment * -44, this.stormScaleAdjustment * -102, 0); /* big center */
      this.sprite.body.addCircle(this.stormScaleAdjustment * 64, this.stormScaleAdjustment * 35, this.stormScaleAdjustment * -115, 0); // right 1
      this.sprite.body.addCircle(this.stormScaleAdjustment * 64, this.stormScaleAdjustment * 65, this.stormScaleAdjustment * -70, 0); // right 1.5
      this.sprite.body.addCircle(this.stormScaleAdjustment * 47, this.stormScaleAdjustment * 135, this.stormScaleAdjustment * -115, 0); // right 2
      this.sprite.body.addCircle(this.stormScaleAdjustment * 35, this.stormScaleAdjustment * 177, this.stormScaleAdjustment * -92, 0); // right 3
      this.sprite.body.addCircle(this.stormScaleAdjustment * 43, this.stormScaleAdjustment * -158, this.stormScaleAdjustment * -30, 0); // left
    }
    if (this.sprite.key == 'obstacle-b') {
      // Storm
      this.sprite.width = this.sprite.width * this.stormScaleAdjustment;
      this.sprite.height = this.sprite.height * this.stormScaleAdjustment;
      this.sprite.z = 20;
      this.sprite.body.addCircle(this.stormScaleAdjustment * 105, this.stormScaleAdjustment * 43, this.stormScaleAdjustment * -105, 0); // big center
      this.sprite.body.addCircle(this.stormScaleAdjustment * 65, this.stormScaleAdjustment * -38, this.stormScaleAdjustment * -112, 0); // left 1
      this.sprite.body.addCircle(this.stormScaleAdjustment * 49, -this.stormScaleAdjustment * 137, this.stormScaleAdjustment * -112, 0); // left 2
      this.sprite.body.addCircle(this.stormScaleAdjustment * 43, this.stormScaleAdjustment * -171, this.stormScaleAdjustment * -90, 0); // left 3
      this.sprite.body.addCircle(this.stormScaleAdjustment * 54, this.stormScaleAdjustment * -70, this.stormScaleAdjustment * -60, 0); // left low
      this.sprite.body.addCircle(this.stormScaleAdjustment * 32, this.stormScaleAdjustment * 150, this.stormScaleAdjustment * -55, 0); // right 1
      this.sprite.body.addCircle(this.stormScaleAdjustment * 27, this.stormScaleAdjustment * 170, this.stormScaleAdjustment * -42, 0); // right 2
      this.sprite.body.addCircle(this.stormScaleAdjustment * 22, this.stormScaleAdjustment * 190, this.stormScaleAdjustment * -36, 0); // right 3
      this.sprite.body.addCircle(this.stormScaleAdjustment * 27, this.stormScaleAdjustment * 130, this.stormScaleAdjustment * -20, 0); // right low 4
      this.sprite.body.addCircle(this.stormScaleAdjustment * 27, this.stormScaleAdjustment * 160, this.stormScaleAdjustment * -15, 0); // right low 5
      this.sprite.body.addCircle(this.stormScaleAdjustment * 16, this.stormScaleAdjustment * 198, this.stormScaleAdjustment * -20, 0); // right low 6
    }
    if (this.sprite.key == 'obstacle-c') {
      // Tree
      this.sprite.width = this.sprite.width * this.treeScaleAdjustment;
      this.sprite.height = this.sprite.height * this.treeScaleAdjustment;
      this.sprite.z = 15;
      this.sprite.body.addPolygon({},[
        [0, this.treeScaleAdjustment * -325],
        [this.treeScaleAdjustment * 137, this.treeScaleAdjustment * 62],
        [this.treeScaleAdjustment * 45, this.treeScaleAdjustment * 100],
        [this.treeScaleAdjustment * -45, this.treeScaleAdjustment * 100],
        [this.treeScaleAdjustment * -137, this.treeScaleAdjustment * 62]
      ]);
      this.sprite.body.y = this.sprite.body.y * 2;
    }

    this.sprite.body.mass = 25;
    if (this.sprite.key == 'wall') {
      this.sprite.body.mass = 99999999999;
    }
    //set callback for when something hits the obstacle
    this.sprite.body.onBeginContact.add(this.onBeginContact, this);

    this.sprite.obstacle = this;

    this.head = null;
    this.constraint = null;
}

Obstacle.prototype = {
    onBeginContact: function(phaserBody, p2Body) {
        if (phaserBody && phaserBody.sprite.name == "head" && this.constraint === null) {
            this.sprite.body.collides([]);
            //Create constraint between the obstacle and the snake head that it collided with. The player snake is then destroyed and the game ends.
            this.head = phaserBody.sprite;
            this.head.snake.destroy();

            var finalObstacle;
            if (this.sprite.key == "obstacle-c") {
              if (lang == "es") {
                finalObstacle = "un árbol";
              } else {
                finalObstacle = "a tree";
              }
              if (!this.game.mute) { this.game.sound.play("boom",0.2); }
            } else if (this.sprite.key == "obstacle-a" || this.sprite.key == "obstacle-b"){
              if (lang == "es") {
                finalObstacle = "una nube de tormenta";
              } else {
                finalObstacle = "a storm cloud";
              }
              if (!this.game.mute) { this.game.sound.play("boom-cloud",0.4); }
            } else if (this.sprite.key == "wall") {
              if (lang == "es") {
                finalObstacle = "el abismo de la desolación";
              } else {
                finalObstacle = "the chasm of desolation";
              }
              if (!this.game.mute) { this.game.sound.play("boom-cloud",0.2); }
            }
            document.getElementById("finalObstacle").innerHTML = finalObstacle;
        }
    },
    /**
     * Call from main update loop
     */
    update: function() {
      /* Gently send obstacles down and to the left and respawn when they go off-edge */

      // check if Y position is below game world
      if (this.drift) {
        if (this.sprite.body.y > this.game.world.height + 200) {
          this.sprite.body.y = -this.game.world.height/2 - 200; // move Y position off top edge
        } else {
          this.sprite.body.y = this.sprite.body.y + this.driftRate; // advance Y drift
        }
      }

      // check if X position is outside of game world
      if (this.drift == "left") {
        if (this.sprite.body.x < this.game.world.width/-2 - 200) {
          this.sprite.body.x = this.game.world.width/2 + 200; // move X position off right-hand edge
        } else {
          this.sprite.body.x = this.sprite.body.x - this.driftRate;
        }
      }
      if (this.drift == "right") {
        if (this.sprite.body.x > this.game.world.width/2 + 200) {
          this.sprite.body.x = -this.game.world.width/2 - 200; // move X position off left-hand edge
        } else {
          this.sprite.body.x = this.sprite.body.x + this.driftRate;
        }
      }
    }
};
