/**
 * Phaser snake
 * @param  {Phaser.Game} game      game object
 * @param  {String} spriteKey Phaser sprite key
 * @param  {Number} x         coordinate
 * @param  {Number} y         coordinate
 */
Snake = function(game, headSpriteKey, bodySpriteKey, lastSpriteKey, x, y) {
    this.game = game;
    //create an array of snakes in the game object and add this snake
    if (!this.game.snakes) {
        this.game.snakes = [];
    }
    this.game.snakes.push(this);
    this.debug = false;
    this.snakeLength = 0;
    this.headSpriteKey = headSpriteKey;
    this.bodySpriteKey = bodySpriteKey;
    this.lastSpriteKey = lastSpriteKey;

    //various quantities that can be changed
    this.scale = 0.75;
    this.fastSpeed = this.game.playerSpeed + 100;
    this.slowSpeed = this.game.playerSpeed;
    this.speed = this.slowSpeed;
    this.rotationSpeed = this.game.playerRotation;

    //initialize groups and arrays
    this.collisionGroup = this.game.physics.p2.createCollisionGroup();
    this.sections = [];
    //the head path is an array of points that the head of the snake has
    //traveled through
    this.headPath = [];
    this.headAngle = [];
    this.food = [];
    this.obstacle = [];

    this.preferredDistance = 75 * this.scale;
    this.queuedSections = [];

    //initialize the shadow
    this.sectionGroup = this.game.add.group();
    //add the head of the snake
    this.head = this.addSectionAtPosition(x,y,this.headSpriteKey);
    this.head.name = "head";
    this.head.snake = this;

    this.lastHeadPosition = new Phaser.Point(this.head.body.x, this.head.body.y);
    //add sections behind the head
    this.initSections(2);

    //initialize the eyes
    this.eyes = new EyePair(this.game, this.head, this.scale);

    this.onDestroyedCallbacks = [];
    this.onDestroyedContexts = [];
}

Snake.prototype = {
    /**
     * Give the snake starting segments
     * @param  {Number} num number of snake sections to create
     */
    initSections: function(num) {
        //create a certain number of sections behind the head
        //only use this once
        for (var i = 2 ; i <= num ; i++) {
            var x = this.head.body.x;
            var y = this.head.body.y + i * this.preferredDistance;
            var r = this.head.body.angle;
            this.addSectionAtPosition(x, y, this.lastSpriteKey);
            //add a point to the head path so that the section stays there
            this.headPath.push(new Phaser.Point(x,y));
            this.headAngle.push(r);
        }

    },
    /**
     * Add a section to the snake at a given position
     * @param  {Number} x coordinate
     * @param  {Number} y coordinate
     * @return {Phaser.Sprite}   new section
     */
    addSectionAtPosition: function(x, y, newSpriteKey) {
        //initialize a new section
        var sec = this.game.add.sprite(x, y, newSpriteKey);
        this.game.physics.p2.enable(sec, this.debug);

        this.snakeLength++;
        this.sectionGroup.add(sec);
        sec.sendToBack();
        sec.scale.setTo(this.scale);

        this.sections.splice(1, 0, sec);

        //add a circle body to this section
        //sec.body.addCircle(sec.width*0.5);
        sec.body.clearShapes();
        var boxOffset = sec.width * 0.70;
        var headPos = boxOffset/4;
        var headOffset = 20;

        if (newSpriteKey == this.headSpriteKey) {
          // NW - BOTTOM - NE - TOP
          sec.width = sec.width/2; sec.height = sec.height / 2;
          sec.body.addPolygon({},[[-headPos, -headPos - headOffset + 5],[0, headPos - headOffset + 10],[headPos, -headPos - headOffset + 5],[0, -headPos - headOffset - headOffset/2]]);
          sec.body.mass = 10;
          sec.body.dynamic = true;
        } else {
          sec.body.addCircle(boxOffset/2);
        }

        //sec.body.setCollisionGroup(this.collisionGroup);
        sec.body.collides([]);
        //sec.body.kinematic = true;

        return sec;
    },
    /**
     * Add to the queue of new sections
     * @param  {Integer} amount Number of sections to add to queue
     */
    addSectionsAfterLast: function(amount, segmentBasedOnFood) {
      var toPush = {};
      toPush["amount"] = amount;
      toPush["food"] = segmentBasedOnFood;
      this.queuedSections.push(toPush);
    },
    /**
     * Call from the main update loop
     */
    update: function() {
        this.slowSpeed = this.game.playerSpeed;
        this.fastSpeed = this.game.playerSpeed + 100;
        this.rotationSpeed = this.game.playerRotation;
        this.head.body.moveForward(this.slowSpeed);

        //remove the last element of an array that contains points which
        //the head traveled through
        //then move this point to the front of the array and change its value
        //to be where the head is located
        var point = this.headPath.pop();
        point.setTo(this.head.body.x, this.head.body.y);
        this.headPath.unshift(point);

        var angle = this.headAngle.pop();
        angle = this.head.body.angle;
        this.headAngle.unshift(angle);

        //place each section of the snake on the path of the snake head,
        //a certain distance from the section before it
        var index = 0;
        var lastIndex = null;
        for (var i = 0 ; i < this.snakeLength ; i++) {

            this.sections[i].body.x = this.headPath[index].x;
            this.sections[i].body.y = this.headPath[index].y;
            this.sections[i].body.angle = this.headAngle[index];

            //hide sections if they are at the same position
            if (lastIndex && index == lastIndex) {
                this.sections[i].alpha = 0;
            }
            else {
                this.sections[i].alpha = 1;
            }

            lastIndex = index;
            //this finds the index in the head path array that the next point
            //should be at
            index = this.findNextPointIndex(index);
        }

        //continuously adjust the size of the head path array so that we
        //keep only an array of points that we need
        if (index >= this.headPath.length - 1) {
            var lastPos = this.headPath[this.headPath.length - 1];
            this.headPath.push(new Phaser.Point(lastPos.x, lastPos.y));
        }
        else {
            this.headPath.pop();
        }

        if (index >= this.headAngle.length - 1) {
            var lastAngle = this.headAngle[this.headAngle.length - 1];
            this.headAngle.push(lastAngle.angle);
        }
        else {
            this.headAngle.pop();
        }

        //this calls onCycleComplete every time a cycle is completed
        //a cycle is the time it takes the second section of a snake to reach
        //where the head of the snake was at the end of the last cycle
        var i = 0;
        var found = false;
        while (this.headPath[i].x != this.sections[1].body.x &&
        this.headPath[i].y != this.sections[1].body.y) {
            if (this.headPath[i].x == this.lastHeadPosition.x &&
            this.headPath[i].y == this.lastHeadPosition.y) {
                found = true;
                break;
            }
            i++;
        }
        if (!found) {
            this.lastHeadPosition = new Phaser.Point(this.head.body.x, this.head.body.y);
            this.onCycleComplete();
        }

        //update the eyes
        this.eyes.update();
    },
    /**
     * Find in the headPath array which point the next section of the snake
     * should be placed at, based on the distance between points
     * @param  {Integer} currentIndex Index of the previous snake section
     * @return {Integer}              new index
     */
    findNextPointIndex: function(currentIndex) {
        var pt = this.headPath[currentIndex];
        //we are trying to find a point at approximately this distance away
        //from the point before it, where the distance is the total length of
        //all the lines connecting the two points
        var prefDist = this.preferredDistance;
        var len = 0;
        var dif = len - prefDist;
        var i = currentIndex;
        var prevDif = null;
        //this loop sums the distances between points on the path of the head
        //starting from the given index of the function and continues until
        //this sum nears the preferred distance between two snake sections
        while (i+1 < this.headPath.length && (dif === null || dif < 0)) {
            //get distance between next two points
            var dist = Util.distanceFormula(
                this.headPath[i].x, this.headPath[i].y,
                this.headPath[i+1].x, this.headPath[i+1].y
            );
            len += dist;
            prevDif = dif;
            //we are trying to get the difference between the current sum and
            //the preferred distance close to zero
            dif = len - prefDist;
            i++;
        }

        //choose the index that makes the difference closer to zero
        //once the loop is complete
        if (prevDif === null || Math.abs(prevDif) > Math.abs(dif)) {
            return i;
        }
        else {
            return i-1;
        }
    },
    /**
     * Called each time the snake's second section reaches where the
     * first section was at the last call (completed a single cycle)
     */
    onCycleComplete: function() {
        while (this.queuedSections.length > 0) {
          var newSection = this.queuedSections.pop();
          var lastSec = this.sections[this.sections.length - 1];
          var newSegment;
          if (
            newSection["food"] == "food-light-yellow-1" ||
            newSection["food"] == "food-light-yellow-2" ||
            newSection["food"] == "food-light-purple-1" ||
            newSection["food"] == "food-light-purple-2"
          ) {
            newSegment = "segment-lights-yellow-purple";
          }
          else if (
            newSection["food"] == "food-light-blue-1" ||
            newSection["food"] == "food-light-blue-2" ||
            newSection["food"] == "food-light-teal-1" ||
            newSection["food"] == "food-light-teal-2" ||
            newSection["food"] == "food-light-green-1" ||
            newSection["food"] == "food-light-green-2"
          ) {
            newSegment = "segment-lights-green-blue";
          }
          else if (
            newSection["food"] == "food-light-red-1" ||
            newSection["food"] == "food-light-red-2" ||
            newSection["food"] == "food-light-orange-1" ||
            newSection["food"] == "food-light-orange-2"
          ) {
            newSegment = "segment-lights-red-orange";
          }
          else if (newSection["food"] == "food-cat-1" || newSection["food"] == "food-cat-2" ) {
            newSegment = "segment-cat";
          }
          else if (newSection["food"] == "food-gift") {
            newSegment = "segment-bow";
          }
          else if (newSection["food"] == "food-cousin-eddie") {
            newSegment = "segment-cousin-eddie";
          }
          else {
            newSegment = "segment-lights-green-blue";
          }
          this.addSectionAtPosition(lastSec.body.x, lastSec.body.y, newSegment);
        }
    },
    /**
     * Set snake scale
     * @param  {Number} scale Scale
     */
    setScale: function(scale) {
        this.scale = scale;
        this.preferredDistance = 75 * this.scale;

        //scale sections and their bodies
        for (var i = 0 ; i < this.sections.length ; i++) {
            var sec = this.sections[i];
            sec.scale.setTo(this.scale);
            sec.body.data.shapes[0].radius = this.game.physics.p2.pxm(sec.width*0.5);
        }

        //scale eyes
        this.eyes.setScale(scale);
    },
    /**
     * Increment length and scale
     */
    incrementSize: function(whatDidIJustEat) {
        this.addSectionsAfterLast(1, whatDidIJustEat);
        //this.setScale(this.scale * 1.01);
        //this.setScale(this.scale);
    },
    /**
     * Destroy the snake
     */
    destroy: function() {
        this.game.snakes.splice(this.game.snakes.indexOf(this), 1);
        //destroy food that is constrained to the snake head
        for (var i = this.food.length - 1 ; i >= 0 ; i--) {
            this.food[i].destroy();
        }
        //destroy everything else
        this.sections.forEach(function(sec, index) {
            if (index > 0) { sec.destroy(); }
            else { sec.body.clearShapes(); }
        });
        this.eyes.destroy();

        //call this snake's destruction callbacks
        for (var i = 0 ; i < this.onDestroyedCallbacks.length ; i++) {
            if (typeof this.onDestroyedCallbacks[i] == "function") {
                this.onDestroyedCallbacks[i].apply(
                    this.onDestroyedContexts[i], [this]);
            }
        }
    },
    /**
     * Add callback for when snake is destroyed
     * @param  {Function} callback Callback function
     * @param  {Object}   context  context of callback
     */
    addDestroyedCallback: function(callback, context) {
        this.onDestroyedCallbacks.push(callback);
        this.onDestroyedContexts.push(context);
    }
};
