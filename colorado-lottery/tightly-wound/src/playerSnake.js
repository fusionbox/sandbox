/**
 * Player of the core snake for controls
 * @param  {Phaser.Game} game      game object
 * @param  {String} spriteKey Phaser sprite key
 * @param  {Number} x         coordinate
 * @param  {Number} y         coordinate
 */
PlayerSnake = function(game, headSpriteKey, spriteKey, x, y) {
    Snake.call(this, game, headSpriteKey, spriteKey, x, y);
    this.cursors = game.input.keyboard.createCursorKeys();

    this.keyboardControl = true;
    this.mouseScreenX = this.game.input.activePointer.x;
    this.mouseScreenY = this.game.input.activePointer.y;

    /*
    //handle the space key so that the player's snake can speed up
    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    var self = this;
    spaceKey.onDown.add(this.spaceKeyDown, this);
    spaceKey.onUp.add(this.spaceKeyUp, this);
    this.addDestroyedCallback(function() {
        spaceKey.onDown.remove(this.spaceKeyDown, this);
        spaceKey.onUp.remove(this.spaceKeyUp, this);
    }, this);
    */
}

PlayerSnake.prototype = Object.create(Snake.prototype);
PlayerSnake.prototype.constructor = PlayerSnake;

/*
//make this snake light up and speed up when the space key is down
PlayerSnake.prototype.spaceKeyDown = function() {
    this.speed = this.fastSpeed;
    this.shadow.isLightingUp = true;
}
//make the snake slow down when the space key is up again
PlayerSnake.prototype.spaceKeyUp = function() {
    this.speed = this.slowSpeed;
    this.shadow.isLightingUp = false;
}
*/

/**
 * Add functionality to the original snake update method so that the player
 * can control where this snake goes
 */
PlayerSnake.prototype.tempUpdate = PlayerSnake.prototype.update;
PlayerSnake.prototype.update = function() {
    //find the angle that the head needs to rotate
    //through in order to face the mouse
    var mousePosX = this.game.input.activePointer.worldX;
    var mousePosY = this.game.input.activePointer.worldY;
    var mouseScreenX = this.game.input.activePointer.x;
    var mouseScreenY = this.game.input.activePointer.y;
    var headX = this.head.body.x;
    var headY = this.head.body.y;
    var angle = (180*Math.atan2(mousePosX-headX,mousePosY-headY)/Math.PI);
    if (angle > 0) {
        angle = 180-angle;
    }
    else {
        angle = -180-angle;
    }

    var dif = parseInt(this.head.body.angle - angle);
    this.head.body.setZeroRotation();

    if (this.cursors.left.isDown || this.cursors.right.isDown) {
      // if the keyboard is pressed, switch to keyboard mode (ignore mouse movement)
      this.keyboardControl = true;
    } else if (mouseScreenX != this.mouseScreenX || mouseScreenY != this.mouseScreenY) {
      // if the mouse is moved, switch to mouse mode (follow mouse), update mouse tracker
      this.keyboardControl = false;
      this.mouseScreenX = mouseScreenX;
      this.mouseScreenY = mouseScreenY;
    }

    //allow arrow keys to be used
    if (this.keyboardControl) {
      if (this.cursors.left.isDown) {
          this.head.body.rotateLeft(this.rotationSpeed);
      }
      else if (this.cursors.right.isDown) {
          this.head.body.rotateRight(this.rotationSpeed);
      }
    } else {
      //decide whether rotating left or right will angle the head towards
      //the mouse faster, if arrow keys are not used
      if (dif < 0 && dif > -180 || dif > 180) {
          this.head.body.rotateRight(this.rotationSpeed);
      }
      else if (dif > 0 && dif < 180 || dif < -180) {
          this.head.body.rotateLeft(this.rotationSpeed);
      }
    }

    //call the original snake update method
    this.tempUpdate();
}
