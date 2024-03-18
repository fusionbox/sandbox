const Util = {
    /**
     * Generate a random number within a closed range
     * @param  {Integer} min Minimum of range
     * @param  {Integer} max Maximum of range
     * @return {Integer}     random number generated
     */
    randomInt: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomIntExclusionRange: function(min, max, exLow, exHigh) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        while (num > exLow && num < exHigh) {
          num = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return num;
    },
    pad: function(num, size) {
      num = num.toString();
      while (num.length < size) num = "0" + num;
      return num;
    },
    /**
     * Calculate distance between two points
     * @param  {Number} x1 first point
     * @param  {Number} y1 first point
     * @param  {Number} x2 second point
     * @param  {Number} y2 second point
     */
    distanceFormula: function(x1, y1, x2, y2) {
        var withinRoot = Math.pow(x1-x2,2) + Math.pow(y1-y2,2);
        var dist = Math.pow(withinRoot,0.5);
        return dist;
    },
    animate: function(options) {

      var start = performance.now();

      requestAnimationFrame(function animate(time) {
        // timeFraction 0 to 1
        var timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;

        var progress = options.timing(timeFraction)

        options.draw(progress);

        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }

      });
    },
    makeEaseOut: function(timing) {
      return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
      }
    },
    bounce: function(timeFraction) {
      for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    },
    drift: function(timeFraction) {
      for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    },
    quad: function(timeFraction) {
      return Math.pow(timeFraction, 2);
    },
    dropBounce: function(object,whichY = "y") {
      var y0;
      if (whichY == "y") {
        y0 = object.y;
      } else if (whichY == "cameraOffset") {
        y0 = object.cameraOffset.y;
      }
      var bounceScale = 50;

      Util.animate({
        duration: Util.randomInt(500,1500),
        timing: Util.makeEaseOut(Util.bounce),
        draw(progress) {
          if (whichY == "y") {
            object.y = y0 + Math.abs( bounceScale * progress )
          } else if (whichY == "cameraOffset") {
            object.cameraOffset.y = y0 + Math.abs( bounceScale * progress )
          }
        }
      });
    },
    driftUpAndFade: function(object, duration = 800, type = "cameraOffset") {
      var dur = duration;
      var driftScale = 40;
      var alphaScale = 100;

      if (type == "cameraOffset") {

        var y0 = object.cameraOffset.y;

        Util.animate({
          duration: dur,
          timing: Util.makeEaseOut(Util.quad),
          draw(progress) {
            object.alpha = 1 - progress;
            object.cameraOffset.y = y0 - Math.abs( driftScale * progress )
          }
        });

      } else {

        var y0 = object.y;
        object.alpha = 0.7;

        Util.animate({
          duration: dur,
          timing: Util.makeEaseOut(Util.quad),
          draw(progress) {
            object.alpha = 1 - progress;
            object.y = y0 - Math.abs( driftScale * progress )
          }
        });

      }
    }
};
