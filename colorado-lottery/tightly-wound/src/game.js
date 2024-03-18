var highContrast = false;
var lang = lang || 'en';

var Boot = {
  init: function() {
    this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE;
    this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    this.game.scale.refresh();
  },
  preload: function() {
    // preload loading screen images
  },
  create: function() {
    document.getElementById("gameReady").classList.add("fadeIn");
    this.game.stage.backgroundColor = "#182031";
    game.state.start('Preload');
  }
}

var Preload = {
  preload: function() {

    // preload all other game assets

    // load spritesheets
    this.game.load.spritesheet('obstacle-c', 'https://static.coloradolottery.com/media/filer_public/96/6b/966b0dad-0573-416a-baa8-0a3d647c6d93/tree-spritesheet.png', 281, 568);
    this.game.load.spritesheet('obstacle-b', 'https://static.coloradolottery.com/media/filer_public/69/af/69af2f08-4f6e-410f-8cd7-74499b3da464/storm-b-spritesheet.png', 432, 418);
    this.game.load.spritesheet('obstacle-a', 'https://static.coloradolottery.com/media/filer_public/02/1b/021b9052-f248-4d3b-9854-8cb2cb808cdd/storm-a-spritesheet.png', 432, 419);

    /*load assets*/
    this.game.load.image('test', 'https://static.coloradolottery.com/media/filer_public/39/f7/39f7abc8-742e-45c6-b5ac-810113319ceb/test-square.png');
    this.game.load.image('head','https://static.coloradolottery.com/media/filer_public/b3/cf/b3cf980a-9cdc-4ce7-93e5-182f787642bd/head-eye-balls.png');
  	this.game.load.image('background', 'https://static.coloradolottery.com/media/filer_public/e3/ed/e3edee74-8b83-4a0b-9c70-13e67730fec8/bg-neighborhood.png');
  	this.game.load.image('eye-white', 'https://static.coloradolottery.com/media/filer_public/eb/d0/ebd0088d-19e1-4655-bb9a-241e162de134/eye-white.svg');
  	this.game.load.image('eye-black', 'https://static.coloradolottery.com/media/filer_public/91/d8/91d8eb8a-a10f-4741-8fbc-998a1a741617/eye-black.svg');
  	this.game.load.image('eye-dead', 'https://static.coloradolottery.com/media/filer_public/52/41/5241f018-dad4-4b43-b7ae-ef642a362da1/eye-white-dead.png');
    this.game.load.image('food-cat-1', 'https://static.coloradolottery.com/media/filer_public/fb/03/fb03e7c5-aa6b-4994-a608-0d04bed8787b/food-cat-1.png');
    this.game.load.image('food-cat-2', 'https://static.coloradolottery.com/media/filer_public/86/b7/86b76f60-2eb5-4d9a-b7ed-a08d1596b051/food-cat-2.png');
    this.game.load.image('food-gift', 'https://static.coloradolottery.com/media/filer_public/4d/0d/4d0dbcec-e70c-4d87-b0b5-f9de6b4543c2/food-gift.png');
    this.game.load.image('food-light-blue-1', 'https://static.coloradolottery.com/media/filer_public/4d/2f/4d2f2c82-ea37-4aa5-aa16-4b94b94cb833/food-light-blue-1.png');
    this.game.load.image('food-light-blue-2', 'https://static.coloradolottery.com/media/filer_public/d2/af/d2af9e8e-40d7-4183-aa35-5058083d04bf/food-light-blue-2.png');
    this.game.load.image('food-light-teal-1', 'https://static.coloradolottery.com/media/filer_public/57/a7/57a7fca7-ecc6-40e0-a7fe-30192cffb093/food-light-teal-1.png');
    this.game.load.image('food-light-teal-2', 'https://static.coloradolottery.com/media/filer_public/f5/e9/f5e9c4ee-291e-4553-9887-481fa34dd33a/food-light-teal-2.png');
    this.game.load.image('food-light-green-1', 'https://static.coloradolottery.com/media/filer_public/9e/fe/9efe35d5-d891-49f9-81f7-3dbb9d0a97a9/food-light-green-1.png');
    this.game.load.image('food-light-green-2', 'https://static.coloradolottery.com/media/filer_public/f5/79/f5790837-1d85-4818-b2ec-27a3ac6a7949/food-light-green-2.png');
    this.game.load.image('food-light-purple-1', 'https://static.coloradolottery.com/media/filer_public/e4/11/e411b3ae-2414-4005-a48a-a5928cec813d/food-light-purple-1.png');
    this.game.load.image('food-light-purple-2', 'https://static.coloradolottery.com/media/filer_public/7b/48/7b48c54a-76e7-4e8c-9ac7-f6436922da47/food-light-purple-2.png');
    this.game.load.image('food-light-orange-1', 'https://static.coloradolottery.com/media/filer_public/12/f5/12f52665-b5c3-4f57-b482-ab822f6474ec/food-light-orange-1.png');
    this.game.load.image('food-light-orange-2', 'https://static.coloradolottery.com/media/filer_public/04/35/0435c2f1-ae87-49a1-b116-234489bf2214/food-light-orange-2.png');
    this.game.load.image('food-light-yellow-1', 'https://static.coloradolottery.com/media/filer_public/19/32/1932e1ab-0424-4dc4-b1a5-6a7ed337b677/food-light-yellow-1.png');
    this.game.load.image('food-light-yellow-2', 'https://static.coloradolottery.com/media/filer_public/0f/c8/0fc8d40f-5862-49b0-a11a-8e48f12bc861/food-light-yellow-2.png');
    this.game.load.image('food-light-red-1', 'https://static.coloradolottery.com/media/filer_public/d1/e7/d1e75f4c-02df-4d9c-9f18-4fc190880b1d/food-light-red-1.png');
    this.game.load.image('food-light-red-2', 'https://static.coloradolottery.com/media/filer_public/9d/2c/9d2cd464-a5ec-4eb8-b2d6-7cbc79374ee4/food-light-red-2.png');
    this.game.load.image('food-cousin-eddie', 'https://static.coloradolottery.com/media/filer_public/c8/fc/c8fceec9-8b24-4b5e-9c8b-626e9276c1a5/food-cousin-eddie.png');
    this.game.load.image('circle','https://static.coloradolottery.com/media/filer_public/80/d3/80d3fe3b-2dd3-4dcc-a0fd-810f07006490/body-plain.png');
    this.game.load.image('segment-lights-yellow-purple', 'https://static.coloradolottery.com/media/filer_public/e0/d4/e0d4db3a-085c-47ef-959a-319af096f3da/body-lights-yellow-purple.png');
    this.game.load.image('segment-lights-green-blue', 'https://static.coloradolottery.com/media/filer_public/a4/15/a4151507-6f82-4f0c-bf47-9beb7f243026/body-lights-green-blue.png');
    this.game.load.image('segment-lights-red-orange', 'https://static.coloradolottery.com/media/filer_public/4c/45/4c450f49-fc95-4094-93a2-29124ab33ec2/body-lights-red-orange.png');
    this.game.load.image('segment-cat', 'https://static.coloradolottery.com/media/filer_public/a4/f8/a4f8cd9d-767d-40d8-94e3-3597ef9ded4d/body-cat.png');
    this.game.load.image('segment-bow', 'https://static.coloradolottery.com/media/filer_public/4c/dd/4cdda7bf-e4df-4699-89d7-0dc9c076f382/body-bow.png');
    this.game.load.image('segment-last', 'https://static.coloradolottery.com/media/filer_public/55/a0/55a0747c-50ec-4105-a2ad-d076a0cfeaa4/body-last.png');
    this.game.load.image('segment-cousin-eddie', 'https://static.coloradolottery.com/media/filer_public/f9/68/f968b603-31d2-422f-a0eb-0f6da1e60eac/body-cousin-eddie.png');
    this.game.load.image('wall', 'https://static.coloradolottery.com/media/filer_public/25/95/25951660-5fa6-4403-ae45-f4726b97f59e/wall.png');
    this.game.load.image('progress-outer', 'https://static.coloradolottery.com/media/filer_public/aa/de/aade92cf-f853-4920-b2e1-8e74047486b9/progress-bar-outer.png');
    this.game.load.image('progress-inner', 'https://static.coloradolottery.com/media/filer_public/ac/87/ac87ff32-75df-4273-bbb0-2c3aaf1c397c/progress-bar-inner.png');
    this.game.load.image('audio-on', 'https://static.coloradolottery.com/media/filer_public/3f/9a/3f9a8510-6d58-4cc6-a09a-97b2815d7d3e/audio-on.png');
    this.game.load.image('audio-off', 'https://static.coloradolottery.com/media/filer_public/3b/f4/3bf405d5-f950-4d13-83a7-86690fbeaf5e/audio-off.png');
    this.game.load.image('stopwatch', 'https://static.coloradolottery.com/media/filer_public/3b/9c/3b9ce5c4-c33c-48b2-a01f-2216646e2586/stopwatch.png');
    this.game.load.image('counter-background', 'https://static.coloradolottery.com/media/filer_public/24/ab/24ab35e7-e5da-4140-bc74-9fe55383d73e/counter-background.png');

    /* load audio assets: LIVE
    this.game.load.audio('wind',
      ['https://static.coloradolottery.com/media/filer_public/6d/ec/6decba3a-ad65-4761-8e65-d8bd646905ad/wind-sound-effect_130bpm_c.wav',
       'https://static.coloradolottery.com/media/filer_public/1f/d7/1fd705db-9d2e-4a4b-8749-5f5f8476b248/wind-sound-effect_130bpm_c.m4a']);
    this.game.load.audio('music',
      ['https://static.coloradolottery.com/media/filer_public/a3/1b/a31b91fb-4fee-4dbe-9825-4454b219501a/magic.wav',
       'https://static.coloradolottery.com/media/filer_public/96/3b/963bc0b2-135a-494e-a3a3-4a07570494ab/magic.m4a'])
    this.game.load.audio('giddyup',
      ['https://static.coloradolottery.com/media/filer_public/93/05/9305ac50-3caa-4e36-bfb7-c71d4788bf5c/mixkit-casino-bling-achievement-2067.wav',
       'https://static.coloradolottery.com/media/filer_public/df/b8/dfb8a9a2-ce7e-429c-aedd-f102b989bbbb/mixkit-casino-bling-achievement-2067.m4a']);
    this.game.load.audio('eat',
      ['https://static.coloradolottery.com/media/filer_public/c1/50/c1507ffe-e219-42ba-8789-879375b77489/chime-pop.wav',
       'https://static.coloradolottery.com/media/filer_public/ac/7b/ac7bc8b1-b436-4dd3-86f8-a880a1f22e2f/chime-pop.m4a']);
    this.game.load.audio('level-up',
       ['https://static.coloradolottery.com/media/filer_public/c6/7d/c67dab90-f260-4980-bbd5-89d3ca128f9e/mixkit-game-bonus-reached-2065.wav',
        'https://static.coloradolottery.com/media/filer_public/29/04/29048c7d-065e-4890-ab1d-a8d19bf7145e/mixkit-game-bonus-reached-2065.m4a']);
    this.game.load.audio('meow-1',
      ['https://static.coloradolottery.com/media/filer_public/85/8b/858b1845-cb6e-4f9a-a4de-a295a4e374c4/meow-purr.wav',
       'https://static.coloradolottery.com/media/filer_public/70/7e/707ece0c-02be-407e-bc43-3c30327e2196/meow-purr.m4a']);
    this.game.load.audio('meow-2',
      ['https://static.coloradolottery.com/media/filer_public/88/ac/88ac3fef-0e62-4e0f-86d0-42d128652856/mixkit-little-cat-pain-meow-87.wav',
       'https://static.coloradolottery.com/media/filer_public/31/10/311047e7-b47f-4367-92f2-232481503510/mixkit-little-cat-pain-meow-87.m4a']);
    this.game.load.audio('gift',
      ['https://static.coloradolottery.com/media/filer_public/dd/d6/ddd6f965-b900-4546-9b43-f8831de95774/chime-sweep.wav',
       'https://static.coloradolottery.com/media/filer_public/4b/af/4bafee55-64af-4528-8443-675dfb929479/chime-sweep.m4a']);
    this.game.load.audio('ouch',
      ['https://static.coloradolottery.com/media/filer_public/81/27/8127df6d-dcb9-4829-bd31-825db0d1f2c1/hello.wav',
       'https://static.coloradolottery.com/media/filer_public/7d/7d/7d7d4559-747e-4194-8947-ef9cdcadffdc/hello.m4a']);
    this.game.load.audio('boom',
      ['https://static.coloradolottery.com/media/filer_public/7c/43/7c4327fb-dce4-4e88-9216-92fc3c9c8db6/impact-chimes.wav',
       'https://static.coloradolottery.com/media/filer_public/a9/01/a9016669-5138-4f58-89fd-7b8d41e09546/impact-chimes.m4a']);
    this.game.load.audio('boom-cloud',
      ['https://static.coloradolottery.com/media/filer_public/92/93/9293d61f-80a0-4576-9f31-464493b41a59/whoosh.wav',
       'https://static.coloradolottery.com/media/filer_public/f7/dd/f7dd0411-1353-4497-9f86-016ef4795152/whoosh.m4a']);
    this.game.load.audio('fin',
      ['https://static.coloradolottery.com/media/filer_public/26/7a/267ae2c1-0fd0-4c3e-a51b-c34ae17359db/mixkit-video-game-treasure-2066.wav',
       'https://static.coloradolottery.com/media/filer_public/b0/88/b088f031-d4b1-4a2d-b327-67cdcd6a68d1/mixkit-video-game-treasure-2066.m4a']);
    this.game.load.audio('click',
      ['https://static.coloradolottery.com/media/filer_public/a6/e4/a6e48f3b-481d-4770-91e9-52559fa316bc/mixkit-game-ball-tap-2073.wav',
       'https://static.coloradolottery.com/media/filer_public/13/4f/134f618f-8878-4906-88eb-0de1a13b14fa/mixkit-game-ball-tap-2073.m4a']);
    */

    /* load audio assets: STAGING
    this.game.load.audio('wind',
      ['https://staging-static.coloradolottery.com/media/filer_public/b6/b6/b6b61920-b27c-4366-85a5-15eea511125a/wind-sound-effect_130bpm_c.wav',
       'https://staging-static.coloradolottery.com/media/filer_public/a4/70/a470a0de-0203-411c-bf5a-d93b23b04684/wind-sound-effect_130bpm_c.m4a']);
    this.game.load.audio('music',
      ['https://staging-static.coloradolottery.com/media/filer_public/a3/6f/a36f8a1a-99cb-4cf0-9712-abe3f44073b0/magic.wav',
       'https://staging-static.coloradolottery.com/media/filer_public/91/50/91504e68-f8ca-4cf1-91cd-9e39d4d2d989/magic.m4a'])
    this.game.load.audio('giddyup',
      ['https://staging-static.coloradolottery.com/media/filer_public/9d/17/9d17e95d-87b7-436b-b04c-b1d060c29a24/mixkit-casino-bling-achievement-2067.wav',
       'https://staging-static.coloradolottery.com/media/filer_public/9b/a6/9ba6f2a6-5353-4e29-b334-26a9260b6e76/mixkit-casino-bling-achievement-2067.m4a']);
    this.game.load.audio('eat',
      ['https://staging-static.coloradolottery.com/media/filer_public/86/3e/863ee036-d867-48e7-9a57-eee55a705823/chime-pop.wav',
       'https://staging-static.coloradolottery.com/media/filer_public/8a/f6/8af64028-22cc-45ff-aa8c-408305bd1948/chime-pop.m4a']);
    this.game.load.audio('level-up',
       ['https://staging-static.coloradolottery.com/media/filer_public/7f/41/7f419f42-bd4f-4727-912a-aedc34cfe780/mixkit-game-bonus-reached-2065.wav',
        'https://staging-static.coloradolottery.com/media/filer_public/b7/4d/b74d36e2-0390-4963-a0eb-10847ebd5a83/mixkit-game-bonus-reached-2065.m4a']);
    this.game.load.audio('meow-1',
      ['https://staging-static.coloradolottery.com/media/filer_public/c1/45/c145d5e8-b186-4838-940b-2a56f9c4d6a2/meow-purr.wav',
       'https://staging-static.coloradolottery.com/media/filer_public/ef/d3/efd32d80-f9ab-4beb-908e-291f068b18f0/meow-purr.m4a']);
    this.game.load.audio('meow-2',
      ['https://staging-static.coloradolottery.com/media/filer_public/a2/3c/a23cac60-c3bb-462c-857b-2e6e440c309a/mixkit-little-cat-pain-meow-87.wav',
       'https://staging-static.coloradolottery.com/media/filer_public/54/f3/54f33d4a-c978-4d52-bfb2-97b538505a19/mixkit-little-cat-pain-meow-87.m4a']);
    this.game.load.audio('gift',
      ['https://staging-static.coloradolottery.com/media/filer_public/b6/5a/b65abf26-ec45-47a0-a4a7-c431c4402ea8/chime-sweep.wav',
       'https://staging-static.coloradolottery.com/media/filer_public/11/ad/11ad54d2-c78b-490e-b9d7-112213222629/chime-sweep.m4a']);
    this.game.load.audio('ouch',
      ['https://staging-static.coloradolottery.com/media/filer_public/2a/f4/2af4fe01-0ffc-42d6-be06-902d89861bfa/hello.wav',
       'https://staging-static.coloradolottery.com/media/filer_public/ba/83/ba832b32-a453-4cdf-b739-6c47fdc615b6/hello.m4a']);
    this.game.load.audio('boom',
      ['https://staging-static.coloradolottery.com/media/filer_public/4e/bc/4ebcce75-3b39-4a01-b56e-c468082ed04d/impact-chimes.wav',
       'https://staging-static.coloradolottery.com/media/filer_public/5f/be/5fbe926c-9b7c-4b01-82cd-2f30c346091a/impact-chimes.m4a']);
    this.game.load.audio('boom-cloud',
      ['https://staging-static.coloradolottery.com/media/filer_public/46/c6/46c6225e-9b5c-480e-baab-cf7961c50845/whoosh.wav',
       'https://staging-static.coloradolottery.com/media/filer_public/cf/76/cf76ecc1-7d8f-4e4b-a2bf-ad87d7204df0/whoosh.m4a']);
    this.game.load.audio('fin',
      ['https://staging-static.coloradolottery.com/media/filer_public/ce/dc/cedcae9a-cbdb-4456-b2ca-c3b022ac3181/mixkit-video-game-treasure-2066.wav',
       'https://staging-static.coloradolottery.com/media/filer_public/ff/de/ffdeefeb-34e4-4b13-9825-af765854f9e7/mixkit-video-game-treasure-2066.m4a']);
    this.game.load.audio('click',
      ['https://staging-static.coloradolottery.com/media/filer_public/3d/f9/3df92549-be5f-4610-b5a1-cbd08589f777/mixkit-game-ball-tap-2073.wav',
       'https://staging-static.coloradolottery.com/media/filer_public/9c/00/9c0063d5-56bb-4eaa-b943-6f2b5216d506/mixkit-game-ball-tap-2073.m4a']);
        */

     /* load audio assets: LOCAL*/
     this.game.load.audio('wind', ['asset/audio/wind-sound-effect_130bpm_C.wav', 'asset/audio/wind-sound-effect_130bpm_C.m4a']);
     this.game.load.audio('music', ['asset/audio/magic.wav', 'asset/audio/magic.m4a'])
     this.game.load.audio('giddyup', ['asset/audio/mixkit-casino-bling-achievement-2067.wav','asset/audio/mixkit-casino-bling-achievement-2067.m4a']);
     this.game.load.audio('eat', ['asset/audio/chime-pop.wav','asset/audio/chime-pop.m4a']);
     this.game.load.audio('level-up', ['asset/audio/mixkit-game-bonus-reached-2065.wav','asset/audio/mixkit-game-bonus-reached-2065.m4a']);
     this.game.load.audio('meow-1',['asset/audio/meow-purr.wav','asset/audio/meow-purr.m4a']);
     this.game.load.audio('meow-2',['asset/audio/mixkit-little-cat-pain-meow-87.wav','asset/audio/mixkit-little-cat-pain-meow-87.m4a']);
     this.game.load.audio('gift',['asset/audio/chime-sweep.wav','asset/audio/chime-sweep.m4a']);
     this.game.load.audio('ouch',['asset/audio/hello.wav','asset/audio/hello.m4a']);
     this.game.load.audio('boom',['asset/audio/impact-chimes.wav','asset/audio/impact-chimes.m4a']);
     this.game.load.audio('boom-cloud',['asset/audio/whoosh.wav','asset/audio/whoosh.m4a']);
     this.game.load.audio('fin',['asset/audio/mixkit-video-game-treasure-2066.wav','asset/audio/mixkit-video-game-treasure-2066.m4a']);
     this.game.load.audio('click',['asset/audio/mixkit-game-ball-tap-2073.wav','asset/audio/mixkit-game-ball-tap-2073.m4a']);


  },
  create: function() {
    document.getElementById('gameReadyLoading').classList.remove("fadeIn");
    document.getElementById('gameReadyLoaded').classList.add("fadeIn");
    if (skipToGame) {
      document.getElementById('gameReady').classList.remove("fadeIn");
      game.state.start('Game');
    } else {
        var timeleft = 2;
        document.getElementById('gameReadyCountdown').innerHTML = 3;
        var downloadTimer = setInterval(function(){

          document.getElementById('gameReadyCountdown').innerHTML = timeleft;

          if(timeleft <= 0){
            clearInterval(downloadTimer);
            game.state.start('Game');
          }

          timeleft -= 1;

        }, 1000);
    }
  }
}

var Game = {

    preload: function() {
    },
    create: function() {

      document.getElementById("gameReady").classList.remove("fadeIn");

      // Ensure game field isn't too small on mobile devices (obstacles crowd the player otherwise)
      var width = Math.max(this.game.width, 1600);
      var height = Math.max(this.game.height, 1600);

      this.game.w = width;
      this.game.h = height;

      this.game.world.setBounds(-width, -height, width*2, height*2);
  	  this.game.stage.backgroundColor = '#444';

      this.centerBottomX = this.game.scale.width / 2;
      this.centerBottomY = this.game.scale.height - 54;

      this.game.wallthickness = 75;

      this.obstacleSpacing = 125;

      //set base speed (adjust with each level)
      this.game.playerSpeed = 150;
      this.game.playerRotation = 60;

      //add tilesprite background
      var background = this.game.add.tileSprite(-width, -height, this.game.world.width, this.game.world.height, 'background');

      //initialize physics and groups
      this.game.physics.startSystem(Phaser.Physics.P2JS);
      this.foodGroup = this.game.add.group();
      this.obstacleGroup = this.game.add.group();
      this.snakeHeadCollisionGroup = this.game.physics.p2.createCollisionGroup();
      this.foodCollisionGroup = this.game.physics.p2.createCollisionGroup();
      this.obstacleCollisionGroup = this.game.physics.p2.createCollisionGroup();

      //add border obstacle wall
      var wall = this.initObstacle(0, 0, 'wall', false);
      wall.sprite.alpha = 1;

      //add static obstacles randomly (but not immediately where the player starts)
      for (var i = 0 ; i < 100 ; i++) {
        this.initObstacle(Util.randomIntExclusionRange(-this.game.w + 50, this.game.w - 50, -this.obstacleSpacing, this.obstacleSpacing), Util.randomIntExclusionRange(-this.game.h, this.game.h, -this.obstacleSpacing, this.obstacleSpacing), 'obstacle-c', false);
      }

      //add drifting obstacles randomly (but not immediately where the player starts)
      for (var i = 0 ; i < 16 ; i++) {
        // drifting storm B
        this.initObstacle(Util.randomIntExclusionRange(-this.game.w, this.game.w, -this.obstacleSpacing, this.obstacleSpacing), Util.randomIntExclusionRange(-this.game.h, this.game.h, -this.obstacleSpacing, this.obstacleSpacing), 'obstacle-b', "left");
        // drifting storm A
        this.initObstacle(Util.randomIntExclusionRange(-this.game.w, this.game.w, -this.obstacleSpacing, this.obstacleSpacing), Util.randomIntExclusionRange(-this.game.h, this.game.h, -this.obstacleSpacing, this.obstacleSpacing), 'obstacle-a', "right");
      }

      //add food randomly
      for (var i = 0 ; i < 250 ; i++) {
        this.initFood(Util.randomInt(-this.game.w, this.game.w), Util.randomInt(-this.game.h, this.game.h));
      }
      for (var i = 0 ; i < 40 ; i++) {
        this.initFoodBonus(Util.randomInt(-this.game.w, this.game.w), Util.randomInt(-this.game.h, this.game.h));
      }
      for (var i = 0 ; i < 3 ; i++) {
        this.initFoodSpecial(Util.randomInt(-this.game.w, this.game.w), Util.randomInt(-this.game.h, this.game.h));
      }

      this.game.snakes = [];

      //create player
      var snake = new PlayerSnake(this.game, 'head', 'circle', 'segment-last', 0, 0);
      this.game.camera.follow(snake.head);

      //initialize snake groups and collision
      for (var i = 0 ; i < this.game.snakes.length ; i++) {
        var snake = this.game.snakes[i];
        snake.head.body.setCollisionGroup(this.snakeHeadCollisionGroup);
        snake.head.body.collides([this.foodCollisionGroup]);
        snake.head.body.collides([this.obstacleCollisionGroup]);
        //callback for when a snake is destroyed
        snake.addDestroyedCallback(this.snakeDestroyed, this);
      }

      // add timer
      this.keepTime = true;
      this.timer = game.add.text(this.game.scale.width - 62, this.game.scale.height - 28, "00:00", {font: "FSEmericWeb", fontSize: "18px", fontWeight: "bold", fill: "#ffffff", align: 'right'});
      this.timer.fixedToCamera = true;
      this.stopwatch = game.add.sprite(this.game.scale.width - 82, this.game.scale.height - 28, 'stopwatch');
      this.stopwatch.fixedToCamera = true;

      // add powerup counters
      this.counterBackground1 = game.add.sprite(this.centerBottomX - 135, this.centerBottomY, 'counter-background');
      this.counterBackground2 = game.add.sprite(this.centerBottomX - 45, this.centerBottomY, 'counter-background');
      this.counterBackground3 = game.add.sprite(this.centerBottomX + 45, this.centerBottomY, 'counter-background');
      this.counterBackground4 = game.add.sprite(this.centerBottomX + 135, this.centerBottomY, 'counter-background');
      this.counterBackground1.anchor.setTo(0.5, 0.5);
      this.counterBackground2.anchor.setTo(0.5, 0.5);
      this.counterBackground3.anchor.setTo(0.5, 0.5);
      this.counterBackground4.anchor.setTo(0.5, 0.5);
      this.counterBackground1.fixedToCamera = true;
      this.counterBackground2.fixedToCamera = true;
      this.counterBackground3.fixedToCamera = true;
      this.counterBackground4.fixedToCamera = true;

      this.counterImage1 = this.game.add.sprite(this.centerBottomX - 135 - 15, this.centerBottomY - 2,'food-light-green-2');
      this.counterImage2 = this.game.add.sprite(this.centerBottomX - 45 - 17, this.centerBottomY,'food-cat-1');
      this.counterImage3 = this.game.add.sprite(this.centerBottomX + 45 - 17, this.centerBottomY,'food-gift');
      this.counterImage4 = this.game.add.sprite(this.centerBottomX + 135 - 20, this.centerBottomY + 2,'food-cousin-eddie');
      this.counterImage1.anchor.setTo(0.5, 0.5);
      this.counterImage2.anchor.setTo(0.5, 0.5);
      this.counterImage3.anchor.setTo(0.5, 0.5);
      this.counterImage4.anchor.setTo(0.5, 0.5);
      this.counterImage1.fixedToCamera = true;
      this.counterImage2.fixedToCamera = true;
      this.counterImage3.fixedToCamera = true;
      this.counterImage4.fixedToCamera = true;

      this.counterImage2.height = this.counterImage2.height * 0.75;
      this.counterImage2.width = this.counterImage2.width * 0.75;
      this.counterImage3.height = this.counterImage3.height * 0.7;
      this.counterImage3.width = this.counterImage3.width * 0.7;
      this.counterImage4.height = this.counterImage4.height * 0.65;
      this.counterImage4.width = this.counterImage4.width * 0.65;

      this.lightCount = game.add.text(this.centerBottomX - 135 + 15, this.centerBottomY + 3, "0", {font: "FSEmericWeb", fontSize: "18px", fontWeight: "bold", fill: "#ffffff", align: 'center'});
      this.catCount = game.add.text(this.centerBottomX - 45 + 15, this.centerBottomY + 3, "0", {font: "FSEmericWeb", fontSize: "18px", fontWeight: "bold", fill: "#ffffff", align: 'center'});
      this.giftCount = game.add.text(this.centerBottomX + 45 + 15, this.centerBottomY + 3, "0", {font: "FSEmericWeb", fontSize: "18px", fontWeight: "bold", fill: "#ffffff", align: 'center'});
      this.eddieCount = game.add.text(this.centerBottomX + 135 + 15, this.centerBottomY + 3, "0", {font: "FSEmericWeb", fontSize: "18px", fontWeight: "bold", fill: "#ffffff", align: 'center'});
      this.lightCount.anchor.setTo(0.5, 0.5);
      this.catCount.anchor.setTo(0.5, 0.5);
      this.giftCount.anchor.setTo(0.5, 0.5);
      this.eddieCount.anchor.setTo(0.5, 0.5);
      this.lightCount.fixedToCamera = true;
      this.catCount.fixedToCamera = true;
      this.giftCount.fixedToCamera = true;
      this.eddieCount.fixedToCamera = true;

      // add score
      this.game.lastLevelScore = 0;
      this.game.scoreThreshold = 1000;
      if (lang == "es") {
        this.scoreLabel = game.add.text(24, 25, "PUNTUACIÓN", {font: "FSEmericWeb", fontSize: "10px", fontWeight: "bold", fill: "#ffffff"});
      } else {
        this.scoreLabel = game.add.text(24, 20, "SCORE:", {font: "FSEmericWeb", fontSize: "18px", fontWeight: "bold", fill: "#ffffff"});
      }
      this.scoreLabel.fixedToCamera = true;
      this.score = game.add.text(166, 20, "000000", {font: "FSEmericWeb", fontSize: "18px", fontWeight: "bold", fill: "#ffffff", align: "right"});
      this.score.fixedToCamera = true;
      this.score.anchor.setTo(1, 0);

      // add level
      this.level = 1;
      if (lang == "es") {
        this.currentLevelLabel = game.add.text(316, 20, "NIVEL", {font: "FSEmericWeb", fontSize: "18px", fontWeight: "bold", fill: "#FFFFFF"});
      } else {
        this.currentLevelLabel = game.add.text(316, 20, "LEVEL", {font: "FSEmericWeb", fontSize: "18px", fontWeight: "bold", fill: "#FFFFFF"});
      }
      this.currentLevelLabel.fixedToCamera = true;
      this.currentLevel = game.add.text(376, 20, this.level, {font: "FSEmericWeb", fontSize: "18px", fontWeight: "bold", fill: "#FFFFFF"});
      this.currentLevel.fixedToCamera = true;

      // add level progress bar
      this.progressOuter = game.add.sprite(180, 22, 'progress-outer');
      this.progressOuter.fixedToCamera = true;
      this.game.progressInner = game.add.sprite(181, 23, 'progress-inner');
      this.game.progressInner.fixedToCamera = true;
      this.game.progressInner.width = 0;

      // start audio
      this.game.sound.play("giddyup",0.1);
      audioWind = this.game.add.audio("wind");
      audioWind.volume = 0.15;
      audioWind.loop = true;
      audioWind.play();

      audioMusic = this.game.add.audio("music");
      audioMusic.volume = 0.1;
      audioMusic.loop = true;
      audioMusic.play();

      // audio toggle
      this.game.mute = false;
      this.audioOn = this.game.add.sprite(11, this.game.scale.height - 26, 'audio-on');
      this.audioOn.fixedToCamera = true;
      this.audioOff = this.game.add.sprite(8, this.game.scale.height - 27, 'audio-off');
      this.audioOff.fixedToCamera = true;
      this.audioOff.visible = false;

      this.audioOn.inputEnabled = true;
      this.audioOff.inputEnabled = true;

      this.audioOn.events.onInputUp.add(function(){
        this.toggleAudio();
      }, this);

      this.audioOff.events.onInputUp.add(function(){
        this.toggleAudio();
      }, this);

    },
    /**
     * Main update loop
     */
    update: function() {

      let totalSeconds = parseInt( this.game.time.totalElapsedSeconds() );
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;
      if (this.keepTime) {
        this.timer.setText(Util.pad(minutes,2) + ":" + Util.pad(seconds,2));
      }

        //update game components
        for (var i = this.game.snakes.length - 1 ; i >= 0 ; i--) {
            this.game.snakes[i].update();
        }
        for (var i = this.foodGroup.children.length - 1 ; i >= 0 ; i--) {
            var f = this.foodGroup.children[i];
            f.food.update(this.score, this.lightCount, this.catCount, this.giftCount, this.eddieCount);
        }
        for (var i = this.obstacleGroup.children.length - 1 ; i >= 0 ; i--) {
            var g = this.obstacleGroup.children[i];
            g.obstacle.update();
        }

        // if the user has consumed most of the food, drop more
        if (this.foodGroup.children.length < 50) {
          // add more food
          for (var i = 0 ; i < 50 ; i++) {
              this.initFood(Util.randomInt(-this.game.w, this.game.w), Util.randomInt(-this.game.h, this.game.h));
          }
          for (var i = 0 ; i < 15 ; i++) {
            this.initFoodBonus(Util.randomInt(-this.game.w, this.game.w), Util.randomInt(-this.game.h, this.game.h));
          }
          for (var i = 0 ; i < 2 ; i++) {
            this.initFoodSpecial(Util.randomInt(-this.game.w, this.game.w), Util.randomInt(-this.game.h, this.game.h));
          }
        }

        // LEVEL UP
        if (parseInt(this.score._text) >= this.game.scoreThreshold) {
          this.levelUp();
        }

        // Audio
        if ( game.input.keyboard.justPressed(Phaser.Keyboard.A) ) {
          this.toggleAudio();
        }

    },
    /**
     * Create a piece of food at a point
     * @param  {number} x x-coordinate
     * @param  {number} y y-coordinate
     * @return {Food}   food object created
     */
    levelUp: function() {
      // set new threshold, increase level
      this.game.lastLevelScore = this.game.scoreThreshold;
      this.game.scoreThreshold = Math.floor((this.game.scoreThreshold * 1.25) + 1000);
      this.level++;
      this.currentLevel.setText(this.level);
      this.game.playerSpeed += 20;
      this.game.playerRotation += 2;

      // level-up sound
      if (!this.game.mute) { this.game.sound.play("level-up",0.05); }

      var headX = this.game.snakes[0].head.x;
      var headY = this.game.snakes[0].head.y;

      //add static obstacles randomly (but not immediately where the player is currently)
      for (var i = 0 ; i < 15 ; i++) {
        this.initObstacle(Util.randomIntExclusionRange(-this.game.w + 50, this.game.w - 50, headX - 200, headX + 200), Util.randomIntExclusionRange(-this.game.h, this.game.h, headY - 100, headY + 100), 'obstacle-c', false);
      }

      //add drifting obstacles randomly (but not immediately where the player is currently)
      for (var i = 0 ; i < 2 ; i++) {
        // drifting storm B
        this.initObstacle(Util.randomIntExclusionRange(-this.game.w + 50, this.game.w - 50, headX - 200, headX + 200), Util.randomIntExclusionRange(-this.game.h, this.game.h, headY - 100, headY + 100), 'obstacle-b', "left");
        // drifting storm A
        this.initObstacle(Util.randomIntExclusionRange(-this.game.w + 50, this.game.w - 50, headX - 200, headX + 200), Util.randomIntExclusionRange(-this.game.h, this.game.h, headY - 100, headY + 100), 'obstacle-a', "right");
      }

      // add more food
      for (var i = 0 ; i < 50 ; i++) {
          this.initFood(Util.randomInt(-this.game.w, this.game.w), Util.randomInt(-this.game.h, this.game.h));
      }
      for (var i = 0 ; i < 20; i++) {
        this.initFoodBonus(Util.randomInt(-this.game.w, this.game.w), Util.randomInt(-this.game.h, this.game.h));
      }
      for (var i = 0 ; i < 2; i++) {
        this.initFoodSpecial(Util.randomInt(-this.game.w, this.game.w), Util.randomInt(-this.game.h, this.game.h));
      }
    },
    initFood: function(x, y) {
        var foods = [
          'food-light-blue-1',
          'food-light-blue-2',
          'food-light-teal-1',
          'food-light-teal-2',
          'food-light-green-1',
          'food-light-green-2',
          'food-light-yellow-1',
          'food-light-yellow-2',
          'food-light-orange-1',
          'food-light-orange-2',
          'food-light-red-1',
          'food-light-red-2',
          'food-light-purple-1',
          'food-light-purple-2'];
        var random = Math.floor(Math.random() * (foods.length));
        var f = new Food(this.game, x, y, foods[random]);
        f.sprite.body.angle = Util.randomInt(0,360);
        f.sprite.body.setCollisionGroup(this.foodCollisionGroup);
        this.foodGroup.add(f.sprite);
        f.sprite.body.collides([this.snakeHeadCollisionGroup]);
        Util.dropBounce(f.sprite.body);
        return f;
    },
    initFoodBonus: function(x, y) {
        var foods = [
          'food-cat-1',
          'food-cat-2',
          'food-gift'];
        var random = Math.floor(Math.random() * (foods.length));
        var f = new Food(this.game, x, y, foods[random]);
        f.sprite.body.setCollisionGroup(this.foodCollisionGroup);
        this.foodGroup.add(f.sprite);
        f.sprite.body.collides([this.snakeHeadCollisionGroup]);
        Util.dropBounce(f.sprite.body);
        return f;
    },
    initFoodSpecial: function(x, y) {
        var f = new Food(this.game, x, y, 'food-cousin-eddie');
        f.sprite.body.setCollisionGroup(this.foodCollisionGroup);
        this.foodGroup.add(f.sprite);
        f.sprite.body.collides([this.snakeHeadCollisionGroup]);
        Util.dropBounce(f.sprite.body);
        return f;
    },/*
    /**
     * Create an obstacle at a point
     * @param  {number} x x-coordinate
     * @param  {number} y y-coordinate
     * @return {Obstacle} obstacle object created
     */
    initObstacle: function(x, y, obstacleSprite, drift) {
        var g = new Obstacle(this.game, x, y, obstacleSprite, drift);
        g.sprite.body.setCollisionGroup(this.obstacleCollisionGroup);
        this.obstacleGroup.add(g.sprite);
        g.sprite.body.collides([this.snakeHeadCollisionGroup]);
        return g;
    },
    toggleAudio: function() {
      this.game.sound.play("click",0.2);
      if (!this.game.mute) {
        this.audioOff.visible = true;
        this.audioOn.visible = false;
        this.game.mute = true;
        audioWind.pause();
        audioMusic.pause();
      } else {
        this.audioOff.visible = false;
        this.audioOn.visible = true;
        this.game.mute = false;
        audioWind.play();
        audioMusic.play();
      }
    },
    snakeDestroyed: function(snake) {
        //place food where snake was destroyed
        for (var i = 0 ; i < snake.headPath.length ;
        i += Math.round(snake.headPath.length / snake.snakeLength) * 2) {
            this.initFood(
                snake.headPath[i].x + Util.randomInt(-10,10),
                snake.headPath[i].y + Util.randomInt(-10,10)
            );
        }

        document.getElementById("finalTime").innerHTML = this.timer._text;
        document.getElementById("finalScore").innerHTML = parseInt(this.score._text);
        document.getElementById("finalLevel").innerHTML = parseInt(this.currentLevel._text);
        document.getElementById("finalLights").innerHTML = parseInt(this.lightCount._text);
        document.getElementById("finalCats").innerHTML = parseInt(this.catCount._text);
        document.getElementById("finalGifts").innerHTML = parseInt(this.giftCount._text);
        document.getElementById("finalEddies").innerHTML = parseInt(this.eddieCount._text);
        this.scoreLabel.destroy();
        this.score.destroy();
        this.progressOuter.destroy();
        this.game.progressInner.destroy();
        this.currentLevelLabel.destroy();
        this.currentLevel.destroy();
        this.audioOn.destroy();
        this.audioOff.destroy();

        this.counterImage1.destroy();
        this.counterImage2.destroy();
        this.counterImage3.destroy();
        this.counterImage4.destroy();
        this.counterBackground1.destroy();
        this.counterBackground2.destroy();
        this.counterBackground3.destroy();
        this.counterBackground4.destroy();
        this.lightCount.destroy();
        this.catCount.destroy();
        this.giftCount.destroy();
        this.eddieCount.destroy();

        this.timer.destroy();
        this.stopwatch.destroy();

        this.keepTime = false;

        var t = setTimeout(function(event){
          document.getElementById("gameOver").classList.add("fadeIn");
          audioWind.stop();
          audioMusic.stop();
          if (!this.game.mute) { this.game.sound.play("fin",0.2); }
        }, 2000);
    }
}


var game;
var skipToGame = false;

var starts = document.getElementsByClassName('start');
for(var i = 0; i < starts.length; i++) {
  var start = starts[i];
  start.onclick = function(event) {
    event.preventDefault();
    if (this.classList.contains("start-hc")) {
      highContrast = true;
    }
    if (this.classList.contains("start-lc")) {
      highContrast = false;
    }
    if (this.classList.contains("start-destroy")) {
      game.destroy();
    }
    document.getElementById("gameReady").classList.remove("fadeIn");
    document.getElementById("gameOver").classList.remove("fadeIn");
    document.getElementById("gameIntro").classList.add("fadeOut");
    document.getElementById("game").innerHTML = '';
    document.getElementById('gameReadyCountdown').innerHTML = 3;

    var config = {
      parent: "game",
      renderer: Phaser.CANVAS,
      width: "100%",
      height: "100%",
      resolution: 1,
      scale: 0.5  // 2 for me on a retina display
    };

    game = new Phaser.Game(config);
    game.state.add('Boot', Boot);
    game.state.add('Preload', Preload);
    game.state.add('Game', Game);

    if (this.classList.contains("start-destroy")) {
      skipToGame = true;
      game.state.start('Preload');
    } else {
      skipToGame = false;
      game.state.start('Boot');
    }
  }
}

var plays = document.getElementsByClassName("play-now");
for(var i = 0; i < plays.length; i++) {
  var play = plays[i];
  play.onclick = function(event) {
    event.preventDefault();

    document.getElementById("gameReady").classList.remove("fadeIn");

    game.state.start('Game');
  }
}

document.getElementById("reset").onclick = function(event){
  event.preventDefault();
  game.destroy();
  document.getElementById("gameOver").classList.remove("fadeIn");
  document.getElementById("gameIntro").classList.remove("fadeOut");
  document.getElementById("game").innerHTML = '';
};

document.getElementById("introHowToPlay").onclick = function(event){
  event.preventDefault();
  document.getElementById("gameHowToPlay").classList.remove("fadeOut");
};

document.getElementById("introBack").onclick = function(event){
  event.preventDefault();
  document.getElementById("gameHowToPlay").classList.add("fadeOut");
};
