Indirect.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)
	
    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};
var layer, map;
var red, blue, yellow;
var ryfear, rbfear, brfear, byfear, yrfear, ybfear;
var raggro, baggro, yaggro;
var ryfearB, rbfearB, brfearB, byfearB, yrfearB, ybfearB;
var raggroB, baggroB, yaggroB;
Indirect.Game.prototype = {
    create: function () {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		map = this.game.add.tilemap('map');
		map.addTilesetImage('greenBlock_32x32', 'greenBlock');
		layer = map.createLayer('Background');
		layer.resizeWorld();
		map.setCollision(1, true, 'Background', true);
	/////////////////////////////////////////////////////////////////////////////////
		red = this.game.add.sprite(384, 120, 'redBlock');
		blue = this.game.add.sprite(160, 640, 'blueBlock');
		yellow = this.game.add.sprite(608, 640, 'yellowBlock');
		this.game.physics.enable(red, Phaser.ARCADE);
		this.game.physics.enable(blue, Phase.ARCADE);
		this.game.physics.enable(yellow, Phase.ARCADE);
	/////////////////////////////////////////////////////////////////////////////////
		ryfearB = this.game.add.sprite(160, 820, 'textfield', [0]);
		rbfearB = this.game.add.sprite(160, 852, 'textfield', [0]);
		brfearB = this.game.add.sprite(160, 884, 'textfield', [0]);
		byfearB = this.game.add.sprite(400, 820, 'textfield', [0]);
		yrfearB = this.game.add.sprite(400, 852, 'textfield', [0]);
		ybfearB = this.game.add.sprite(400, 884, 'textfield', [0]);
		raggroB = this.game.add.sprite(600, 820, 'textfield', [0]);
		baggroB = this.game.add.sprite(600, 852, 'textfield', [0]);
		yaggroB = this.game.add.sprite(600, 884, 'textfield', [0]);
    },

    update: function () {
    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');
    }

};