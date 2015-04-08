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
var ryfearL, rbfearL, brfearL, byfearL, yrfearL, ybfearL;
var raggroL, baggroL, yaggroL;
var pauseFlag;//maybe while button is active?
var key0, key1, key2, key3, key4, key5, key6, key7, key8, key9;
Indirect.Game.prototype = {
    create: function () {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		map = this.game.add.tilemap('map');
		map.addTilesetImage('greenBlock_32x32', 'greenBlock');
		layer = map.createLayer('Background');
		layer.resizeWorld();
		map.setCollision(1, true, 'Background', true);
	/////////////////////////////////////////////////////////////////////////////////
		red = this.game.add.sprite(384, 192, 'redBlock');
		blue = this.game.add.sprite(192, 576, 'blueBlock');
		yellow = this.game.add.sprite(576, 576, 'yellowBlock');
		this.game.physics.enable(red, Phaser.ARCADE);
		this.game.physics.enable(blue, Phaser.ARCADE);
		this.game.physics.enable(yellow, Phaser.ARCADE);
	/////////////////////////////////////////////////////////////////////////////////
		ryfearB = this.game.add.sprite(192, 820, 'textfield', 0);
		rbfearB = this.game.add.sprite(192, 872, 'textfield', 0);
		brfearB = this.game.add.sprite(192, 924, 'textfield', 0);
		byfearB = this.game.add.sprite(384, 820, 'textfield', 0);
		yrfearB = this.game.add.sprite(384, 872, 'textfield', 0);
		ybfearB = this.game.add.sprite(384, 924, 'textfield', 0);
		raggroB = this.game.add.sprite(576, 820, 'textfield', 0);
		baggroB = this.game.add.sprite(576, 872, 'textfield', 0);
		yaggroB = this.game.add.sprite(576, 924, 'textfield', 0);
		
		ryfearB.on = false;
		rbfearB.on = false;
		brfearB.on = false;
		byfearB.on = false;
		yrfearB.on = false;
		ybfearB.on = false;
		raggroB.on = false;
		baggroB.on = false;
		yaggroB.on = false;
		
		ryfearB.inputEnabled = true;
		rbfearB.inputEnabled = true;
		brfearB.inputEnabled = true;
		byfearB.inputEnabled = true;
		yrfearB.inputEnabled = true;
		ybfearB.inputEnabled = true;
		raggroB.inputEnabled = true;
		baggroB.inputEnabled = true;
		yaggroB.inputEnabled = true;
		
		ryfearB.events.onInputDown.add(onDown, ryfearB);
		rbfearB.events.onInputDown.add(onDown, rbfearB);
		brfearB.events.onInputDown.add(onDown, brfearB);
		byfearB.events.onInputDown.add(onDown, byfearB);
		yrfearB.events.onInputDown.add(onDown, yrfearB);
		ybfearB.events.onInputDown.add(onDown, ybfearB);
		raggroB.events.onInputDown.add(onDown, raggroB);
		baggroB.events.onInputDown.add(onDown, baggroB);
		yaggroB.events.onInputDown.add(onDown, yaggroB);
	/////////////////////////////////////////////////////////////////////////////////
		ryfearL = this.game.add.text(192, 820, '0', 0);
		rbfearL = this.game.add.text(192, 872, '0', 0);
		brfearL = this.game.add.text(192, 924, '0', 0);
		byfearL = this.game.add.text(384, 820, '0', 0);
		yrfearL = this.game.add.text(384, 872, '0', 0);
		ybfearL = this.game.add.text(384, 924, '0', 0);
		raggroL = this.game.add.text(576, 820, '0', 0);
		baggroL = this.game.add.text(576, 872, '0', 0);
		yaggroL = this.game.add.text(576, 924, '0', 0);
		
		setNums();
	/////////////////////////////////////////////////////////////////////////////////
		key0 = this.game.input.keyboard.addKey(Phaser.Keyboard.0);
		/*key1 = 
		key2 = 
		key3 = 
		key4 = 
		key5 = 
		key6 = 
		key7 = 
		key8 = 
		key9 = */
    },

    update: function () {
		if(!pauseFlag)
		{
			//do normal stuff
		}
		else
		{
			//do pause stuff
			
		}
    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');
    }

};

onDown = function(button)
{
	var changeFlag = false;
	if(!pauseFlag)
	{
		button.on = !button.on;
		changeFlag = true;
	}
	else
	{
		if(button.on)
		{
			button.on = !button.on;
			changeFlag = true;
		}
	}
	if(changeFlag)
	{
		if(button.on)
		{
			button.frame = 1;
			pauseFlag = true;
		}
		else
		{
			button.frame = 0;
			pauseFlag = false;
			setNums();
		}
	}
};

setNums = function()
{
	ryfear = parseInt(ryfearL.text);
	rbfear = parseInt(rbfearL.text);
	brfear = parseInt(brfearL.text);
	byfear = parseInt(byfearL.text);
	yrfear = parseInt(yrfearL.text);
	ybfear = parseInt(ybfearL.text);
	raggro = parseInt(raggroL.text);
	baggro = parseInt(baggroL.text);
	yaggro = parseInt(yaggroL.text);
}