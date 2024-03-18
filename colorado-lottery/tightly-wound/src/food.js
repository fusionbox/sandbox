/**
 * Food that snakes eat - it is pulled towards the center of a snake head after
 * it is first touched
 * @param  {Phaser.Game} game game object
 * @param  {Number} x    coordinate
 * @param  {Number} y    coordinate
 */
Food = function(game, x, y, foodSprite) {
    this.game = game;
    this.debug = false;

    this.sprite = this.game.add.sprite(x, y, foodSprite);

    this.sprite.anchor.setTo(0.5, 0.5);

    this.game.physics.p2.enable(this.sprite, this.debug);
    this.sprite.body.clearShapes();
    this.sprite.body.addCircle(this.sprite.width * 0.75);
    this.sprite.body.mass = 0.01;
    //set callback for when something hits the food
    this.sprite.body.onBeginContact.add(this.onBeginContact, this);

    this.sprite.food = this;

    this.head = null;
    this.constraint = null;
}

Food.prototype = {
    onBeginContact: function(phaserBody, p2Body) {
        if (phaserBody && phaserBody.sprite.name == "head" && this.constraint === null) {
            this.sprite.body.collides([]);
            //Create constraint between the food and the snake head that
            //it collided with. The food is then brought to the center of
            //the head sprite
            this.constraint = this.game.physics.p2.createRevoluteConstraint(
                this.sprite.body, [0,0], phaserBody, [0,0]
            );
            this.head = phaserBody.sprite;
            this.head.snake.food.push(this);

            if (!this.game.mute) {
              if (this.sprite.key == "food-cat-1") {
                this.game.sound.play("eat",0.1);
                this.game.sound.play("meow-1",0.1);
              }
              else if (this.sprite.key == "food-cat-2") {
                this.game.sound.play("eat",0.1);
                this.game.sound.play("meow-2",0.1);
              }
              else if (this.sprite.key == "food-gift") {
                this.game.sound.play("eat",0.1);
                this.game.sound.play("gift",0.1);
              }
              else if (this.sprite.key == "food-cousin-eddie") {
                this.game.sound.play("eat",0.1);
                this.game.sound.play("ouch",0.1);
              }
              else {
                this.game.sound.play("eat",0.1);
              }
            }
        }
    },
    /**
     * Call from main update loop
     */
    update: function(scoreBoard, lightCount, catCount, giftCount, eddieCount) {
        this.score = scoreBoard;
        this.lightCount = lightCount;
        this.catCount = catCount;
        this.giftCount = giftCount;
        this.eddieCount = eddieCount;
        //once the food reaches the center of the snake head, destroy it and
        //increment the size of the snake
        if (this.head && Math.round(this.head.body.x) == Math.round(this.sprite.body.x) &&
        Math.round(this.head.body.y) == Math.round(this.sprite.body.y)) {

            // Update score
            this.value = 20;
            if (this.sprite.key == "food-cat-1" || this.sprite.key == "food-cat-2") {
              this.value = 100;
              this.catCount.setText(++this.catCount._text);
            }
            else if (this.sprite.key == "food-gift") {
              this.value = 250;
              this.giftCount.setText(++this.giftCount._text);
            }
            else if (this.sprite.key == "food-cousin-eddie") {
              this.value = 500;
              this.eddieCount.setText(++this.eddieCount._text);
            }
            else {
              this.lightCount.setText(++this.lightCount._text);
            }

            // clone scoreboard
            this.scoreClone = game.add.text(166, 20, this.value, {font: "FSEmericWeb", fontSize: "18px", fontWeight: "bold", fill: "#ffffff", align: "right"});
            this.scoreClone.anchor.setTo(1, 0.5);
            this.scoreClone.fixedToCamera = true;

            // animate the clone score
            Util.driftUpAndFade(this.scoreClone, 800, "cameraOffset");

            this.newScore = Util.pad((parseInt(this.score._text) + this.value), 6);
            this.score.setText(this.newScore);

            // grow progress bar (160 width)
            // Current% = (this.score._text + this.value) - this.game.lastLevelScore
            // Goal% = this.game.scoreThreshold - this.game.lastLevelScore
            // Current% / Goal% = Progress% (out of 100)
            // BarWidth = Progress% * 1.2 (120 width)
            var currentP = parseInt(this.score._text) - this.game.lastLevelScore;
            var goalP = this.game.scoreThreshold - this.game.lastLevelScore;
            var progressP = 100 * currentP / goalP;
            var barWidth = parseInt(progressP * 1.2);
            this.game.progressInner.width = Math.min(barWidth,120);

            // show eaten food score where food was removed
            this.foodScore = this.game.add.text(this.sprite.body.x, this.sprite.body.y - 40, this.value, {font: "FSEmericWeb", fontSize: "18px", fontWeight: "bold", fill: "#FFFFFF", align: "center"});
            this.foodScore.alpha = 1;
            this.foodScore.anchor.setTo(0.5, 0.5);
            Util.driftUpAndFade(this.foodScore, 1200, "y");

            this.head.snake.incrementSize(this.sprite.key);
            this.destroy();
        }
    },
    /**
     * Destroy this food and its constraints
     */
    destroy: function() {
        if (this.head) {
            this.game.physics.p2.removeConstraint(this.constraint);
            this.sprite.destroy();
            this.head.snake.food.splice(this.head.snake.food.indexOf(this), 1);
            this.head = null;
        }
    }
};
