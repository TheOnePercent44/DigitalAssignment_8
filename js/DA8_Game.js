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
var SPEED = 600, MINDIST = 200;
var layer, map;
var red, blue, yellow;
var ryfear, rbfear, brfear, byfear, yrfear, ybfear;
var raggro, baggro, yaggro;
var ryfearB, rbfearB, brfearB, byfearB, yrfearB, ybfearB;
var raggroB, baggroB, yaggroB;
var ryfearL, rbfearL, brfearL, byfearL, yrfearL, ybfearL;
var raggroL, baggroL, yaggroL;
var pauseFlag;//maybe while button is active?
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
		/*ryfearL = this.game.add.text(192, 820, '0', 0);
		rbfearL = this.game.add.text(192, 872, '0', 0);
		brfearL = this.game.add.text(192, 924, '0', 0);
		byfearL = this.game.add.text(384, 820, '0', 0);
		yrfearL = this.game.add.text(384, 872, '0', 0);
		ybfearL = this.game.add.text(384, 924, '0', 0);
		raggroL = this.game.add.text(576, 820, '0', 0);
		baggroL = this.game.add.text(576, 872, '0', 0);
		yaggroL = this.game.add.text(576, 924, '0', 0);*/
		ryfearL = this.game.add.text(192, 820, this.game.rnd.integerInRange(0, 9), 0);
		rbfearL = this.game.add.text(192, 872, this.game.rnd.integerInRange(0, 9), 0);
		brfearL = this.game.add.text(192, 924, this.game.rnd.integerInRange(0, 9), 0);
		byfearL = this.game.add.text(384, 820, this.game.rnd.integerInRange(0, 9), 0);
		yrfearL = this.game.add.text(384, 872, this.game.rnd.integerInRange(0, 9), 0);
		ybfearL = this.game.add.text(384, 924, this.game.rnd.integerInRange(0, 9), 0);
		raggroL = this.game.add.text(576, 820, this.game.rnd.integerInRange(0, 9), 0);
		baggroL = this.game.add.text(576, 872, this.game.rnd.integerInRange(0, 9), 0);
		yaggroL = this.game.add.text(576, 924, this.game.rnd.integerInRange(0, 9), 0);
		
		setNums();
		
		this.game.add.text(100, 820, 'Red fears\nYellow', {font: "15px Arial", fill: "#ffffff", align: "left"});
		this.game.add.text(100, 872, 'Red fears\nBlue', {font: "15px Arial", fill: "#ffffff", align: "left"});
		this.game.add.text(100, 924, 'Red\nAggression', {font: "15px Arial", fill: "#ffffff", align: "left"});
		this.game.add.text(292, 820, 'Blue fears\nRed', {font: "15px Arial", fill: "#ffffff", align: "left"});
		this.game.add.text(292, 872, 'Blue fears\nYellow', {font: "15px Arial", fill: "#ffffff", align: "left"});
		this.game.add.text(292, 924, 'Blue\nAggression', {font: "15px Arial", fill: "#ffffff", align: "left"});
		this.game.add.text(484, 820, 'Yellow fears\nRed', {font: "15px Arial", fill: "#ffffff", align: "left"});
		this.game.add.text(484, 872, 'Yellow fears\nBlue', {font: "15px Arial", fill: "#ffffff", align: "left"});
		this.game.add.text(484, 924, 'Yellow\nAggression', {font: "15px Arial", fill: "#ffffff", align: "left"});
	/////////////////////////////////////////////////////////////////////////////////
		this.game.input.keyboard.onUpCallback = keyReleased;
	/////////////////////////////////////////////////////////////////////////////////
		var rotation = this.game.math.angleBetween(red.x, red.y, this.game.world.centerX, this.game.world.centerY);
		red.body.velocity.x = Math.cos(rotation)*(SPEED*((raggro+1)/10));
		red.body.velocity.y = Math.sin(rotation)*(SPEED*((raggro+1)/10));
		
		rotation = this.game.math.angleBetween(blue.x, blue.y, this.game.world.centerX, this.game.world.centerY);
		blue.body.velocity.x = Math.cos(rotation)*(SPEED*((baggro+1)/10));
		blue.body.velocity.y = Math.sin(rotation)*(SPEED*((baggro+1)/10));
		
		rotation = this.game.math.angleBetween(blue.x, blue.y, this.game.world.centerX, this.game.world.centerY);
		yellow.body.velocity.x = Math.cos(rotation)*(SPEED*((yaggro+1)/10));
		yellow.body.velocity.y = Math.sin(rotation)*(SPEED*((yaggro+1)/10));
    },

    update: function () {
		this.game.physics.arcade.collide(red, layer);
		this.game.physics.arcade.collide(blue, layer);
		this.game.physics.arcade.collide(yellow, layer);
		if(!pauseFlag)
		{
			//do normal stuff
			moveRed(this.game);
			moveBlue(this.game);
			moveYellow(this.game);
		}
		else
		{
			//do pause stuff
			//nothing needed, handled by button handlers
			red.body.velocity.x = 0;
			red.body.velocity.y = 0;
			blue.body.velocity.x = 0;
			blue.body.velocity.y = 0;
			yellow.body.velocity.x = 0;
			yellow.body.velocity.y = 0;
		}
    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');
    }

};

avoidWall = function(block, game)//repulse blocks from walls
{
	if(block.x < MINDIST)
	{
		block.body.velocity.x = block.body.velocity.x+SPEED;
	}
	else if(game.world.getBounds().x-block.x < MINDIST)
	{
		block.body.velocity.x = block.body.velocity.x-SPEED;
	}
	
	if(block.y < MINDIST)
	{
		block.body.velocity.y = block.body.velocity.y+SPEED;
	}
	else if(game.world.getBounds.y-block.y < MINDIST)
	{
		block.body.velocity.y = block.body.velocity.y-SPEED;
	}
}

moveRed = function(game)
{
	var bluediff = raggro-rbfear;
	var yelldiff = raggro-ryfear;
	var bluedist = game.math.distance(red.x, red.y, blue.x, blue.y);//game.physics.arcade.distanceBetween(red,blue);
	var yelldist = game.math.distance(red.x, red.y, yellow.x, yellow.y);//game.physics.arcade.distanceBetween(red, yellow);
	
	if(yelldist > bluedist)//blue is closest
	{
		var rotation = game.math.angleBetween(red.x, red.y, blue.x, blue.y);
		if(bluediff > 0)//chase blue
		{
			red.body.velocity.x = Math.cos(rotation)*(SPEED*((raggro+1)/10));
			red.body.velocity.y = Math.sin(rotation)*(SPEED*((raggro+1)/10));
			return;
		}
		else if(bluediff < 0)//flee blue
		{
			red.body.velocity.x = -(Math.cos(rotation)*(SPEED*((10-(raggro+1))/10)));
			red.body.velocity.y = -(Math.sin(rotation)*(SPEED*((10-(raggro+1))/10)));
			return;
		}
		else//we don't care about blue, our closes neighbor
		{
			/*if(baggro-brfear > 0)//if blue is chasing red, and we don't care, flee
			{
				red.body.velocity.x = -(Math.cos(rotation)*(SPEED*((raggro+1)/10)));
				red.body.velocity.y = -(Math.sin(rotation)*(SPEED*((raggro+1)/10)));
			}
			else//else if blue is fleeing red... ???
			{
				
			}*/
		}
	}
	else if(bluedist > yelldist)//yellow is closest
	{
		var rotation = game.math.angleBetween(red.x, red.y, yellow.x, yellow.y);
		if(yelldiff > 0)//chase yellow
		{
			red.body.velocity.x = Math.cos(rotation)*(SPEED*((raggro+1)/10));
			red.body.velocity.y = Math.sin(rotation)*(SPEED*((raggro+1)/10));
			return;
		}
		else if(yelldiff < 0)//flee yellow
		{
			red.body.velocity.x = -(Math.cos(rotation)*(SPEED*((10-(raggro+1))/10)));
			red.body.velocity.y = -(Math.sin(rotation)*(SPEED*((10-(raggro+1))/10)));
			return;
		}
		else//????
		{
			
		}
	}
	else//blue and yellow are equidistant
	{
		if(bluediff > 0 && bluediff > yelldiff)//we have more aggression towards blue than yellow and less fear
		{
			var rotation = game.math.angleBetween(red.x, red.y, blue.x, blue.y);//chase blue
			red.body.velocity.x = Math.cos(rotation)*(SPEED*((raggro+1)/10));
			red.body.velocity.y = Math.sin(rotation)*(SPEED*((raggro+1)/10));
			return;
		}
		else if(bluediff <= 0 && bluediff > yelldiff)//we fear yellow more than blue with no aggression
		{
			var rotation = game.math.angleBetween(red.x, red.y, yellow.x, yellow.y);//flee yellow
			red.body.velocity.x = -(Math.cos(rotation)*(SPEED*((10-(raggro+1))/10)));
			red.body.velocity.y = -(Math.sin(rotation)*(SPEED*((10-(raggro+1))/10)));
		}
		else if(yelldiff > 0 && yelldiff > bluediff)//we have more aggression towards yellow than blue and less fear
		{
			var rotation = game.math.angleBetween(red.x, red.y, yellow.x, yellow.y);//chase yellow
			red.body.velocity.x = Math.cos(rotation)*(SPEED*((raggro+1)/10));
			red.body.velocity.y = Math.sin(rotation)*(SPEED*((raggro+1)/10));
		}
		else if(yelldiff <= 0 && yelldiff > bluediff)//we fear blue more than yellow with no aggression
		{
			var rotation = game.math.angleBetween(red.x, red.y, blue.x, blue.y);//flee blue
			red.body.velocity.x = -(Math.cos(rotation)*(SPEED*((10-(raggro+1))/10)));
			red.body.velocity.y = -(Math.sin(rotation)*(SPEED*((10-(raggro+1))/10)));
		}
		else{}//????
	}
	
	avoidWall(red, game);
};

moveBlue = function(game)
{
	var reddiff = baggro-brfear;
	var yelldiff = baggro-byfear;
	var reddist = game.math.distance(blue.x, blue.y, red.x, red.y);//game.physics.arcade.distanceBetween(red,blue);
	var yelldist = game.math.distance(blue.x, blue.y, yellow.x, yellow.y);//game.physics.arcade.distanceBetween(red, yellow);
	
	if(yelldist > reddist)//red is closest
	{
		var rotation = game.math.angleBetween(blue.x, blue.y, red.x, red.y);
		if(reddiff > 0)//chase red
		{
			blue.body.velocity.x = Math.cos(rotation)*(SPEED*((baggro+1)/10));
			blue.body.velocity.y = Math.sin(rotation)*(SPEED*((baggro+1)/10));
		}
		else if(reddiff < 0)//flee red
		{
			blue.body.velocity.x = -(Math.cos(rotation)*(SPEED*((10-(baggro+1))/10)));
			blue.body.velocity.y = -(Math.sin(rotation)*(SPEED*((10-(baggro+1))/10)));
		}
		else//????
		{
			
		}
	}
	else if(reddist > yelldist)//yellow is closest
	{
		var rotation = game.math.angleBetween(blue.x, blue.y, yellow.x, yellow.y);
		if(yelldiff > 0)//chase yellow
		{
			blue.body.velocity.x = Math.cos(rotation)*(SPEED*((baggro+1)/10));
			blue.body.velocity.y = Math.sin(rotation)*(SPEED*((baggro+1)/10));
		}
		else if(yelldiff < 0)//flee yellow
		{
			blue.body.velocity.x = -(Math.cos(rotation)*(SPEED*((10-(baggro+1))/10)));
			blue.body.velocity.y = -(Math.sin(rotation)*(SPEED*((10-(baggro+1))/10)));
		}
		else//????
		{
			
		}
	}
	else//????
	{
		if(reddiff > 0 && reddiff > yelldiff)//we have more aggression towards blue than yellow and less fear
		{
			var rotation = game.math.angleBetween(blue.x, blue.y, red.x, red.y);//chase blue
			blue.body.velocity.x = Math.cos(rotation)*(SPEED*((baggro+1)/10));
			blue.body.velocity.y = Math.sin(rotation)*(SPEED*((baggro+1)/10));
			return;
		}
		else if(reddiff <= 0 && reddiff > yelldiff)//we fear yellow more than blue with no aggression
		{
			var rotation = game.math.angleBetween(red.x, red.y, yellow.x, yellow.y);//flee yellow
			blue.body.velocity.x = -(Math.cos(rotation)*(SPEED*((10-(baggro+1))/10)));
			blue.body.velocity.y = -(Math.sin(rotation)*(SPEED*((10-(baggro+1))/10)));
		}
		else if(yelldiff > 0 && yelldiff > reddiff)//we have more aggression towards yellow than blue and less fear
		{
			var rotation = game.math.angleBetween(red.x, red.y, yellow.x, yellow.y);//flee yellow
			blue.body.velocity.x = Math.cos(rotation)*(SPEED*((baggro+1)/10));
			blue.body.velocity.y = Math.sin(rotation)*(SPEED*((baggro+1)/10));
		}
		else if(yelldiff <= 0 && yelldiff > reddiff)//we fear red more than yellow with no aggression
		{
			var rotation = game.math.angleBetween(blue.x, blue.y, red.x, red.y);//flee red
			blue.body.velocity.x = -(Math.cos(rotation)*(SPEED*((10-(baggro+1))/10)));
			blue.body.velocity.y = -(Math.sin(rotation)*(SPEED*((10-(baggro+1))/10)));
		}
		else{}//????
	}
	
	avoidWall(blue, game);
};

moveYellow = function(game)
{
	var reddiff = yaggro-yrfear;
	var bluediff = yaggro-ybfear;
	var reddist = game.math.distance(yellow.x, yellow.y, red.x, red.y);//game.physics.arcade.distanceBetween(red,blue);
	var bluedist = game.math.distance(yellow.x, yellow.y, blue.x, blue.y);//game.physics.arcade.distanceBetween(red, yellow);
	
	if(reddist > bluedist)//blue is closest
	{
		var rotation = game.math.angleBetween(yellow.x, yellow.y, blue.x, blue.y);
		if(reddiff > 0)//chase blue
		{
			yellow.body.velocity.x = Math.cos(rotation)*(SPEED*((yaggro+1)/10));
			yellow.body.velocity.y = Math.sin(rotation)*(SPEED*((yaggro+1)/10));
		}
		else if(reddiff < 0)//flee blue
		{
			yellow.body.velocity.x = -(Math.cos(rotation)*(SPEED*((yaggro+1)/10)));
			yellow.body.velocity.y = -(Math.sin(rotation)*(SPEED*((yaggro+1)/10)));
		}
		else//????
		{
			
		}
	}
	else if(bluedist > reddist)//blue is closest
	{
		var rotation = game.math.angleBetween(yellow.x, yellow.y, red.x, red.y);
		if(bluediff > 0)//chase yellow
		{
			yellow.body.velocity.x = Math.cos(rotation)*(SPEED*((yaggro+1)/10));
			yellow.body.velocity.y = Math.sin(rotation)*(SPEED*((yaggro+1)/10));
		}
		else if(bluediff < 0)//flee yellow
		{
			yellow.body.velocity.x = -(Math.cos(rotation)*(SPEED*((yaggro+1)/10)));
			yellow.body.velocity.y = -(Math.sin(rotation)*(SPEED*((yaggro+1)/10)));
		}
		else//????
		{
			
		}
	}
	else//????
	{
		if(bluediff > 0 && bluediff > reddiff)//we have more aggression towards blue than red and less fear
		{
			var rotation = game.math.angleBetween(yellow.x, yellow.y, blue.x, blue.y);//chase blue
			blue.body.velocity.x = Math.cos(rotation)*(SPEED*((yaggro+1)/10));
			blue.body.velocity.y = Math.sin(rotation)*(SPEED*((yaggro+1)/10));
			return;
		}
		else if(bluediff <= 0 && bluediff > yelldiff)//we fear red more than blue with no aggression
		{
			var rotation = game.math.angleBetween(yellow.x, yellow.y, red.x, red.y);//flee red
			blue.body.velocity.x = -(Math.cos(rotation)*(SPEED*((10-(yaggro+1))/10)));
			blue.body.velocity.y = -(Math.sin(rotation)*(SPEED*((10-(yaggro+1))/10)));
		}
		else if(reddiff > 0 && reddiff > bluediff)//we have more aggression towards red than blue and less fear
		{
			var rotation = game.math.angleBetween(yellow.x, yellow.y, red.x, red.y);//chase red
			blue.body.velocity.x = Math.cos(rotation)*(SPEED*((yaggro+1)/10));
			blue.body.velocity.y = Math.sin(rotation)*(SPEED*((yaggro+1)/10));
		}
		else if(reddiff <= 0 && reddiff > bluediff)//we fear blue more than red with no aggression
		{
			var rotation = game.math.angleBetween(yellow.x, yellow.y, blue.x, blue.y);//flee blue
			blue.body.velocity.x = -(Math.cos(rotation)*(SPEED*((10-(yaggro+1))/10)));
			blue.body.velocity.y = -(Math.sin(rotation)*(SPEED*((10-(yaggro+1))/10)));
		}
		else{}//????
	}
	
	avoidWall(yellow, game);
};

keyReleased = function(k)
{
	if(pauseFlag)
	{
		var templabel;
		templabel = getActiveLabel();
		if(k.keyCode == Phaser.Keyboard.ZERO)
			templabel.text = '0';
		else if(k.keyCode == Phaser.Keyboard.ONE)
			templabel.text = '1';
		else if(k.keyCode == Phaser.Keyboard.TWO)
			templabel.text = '2';
		else if(k.keyCode == Phaser.Keyboard.THREE)
			templabel.text = '3';
		else if(k.keyCode == Phaser.Keyboard.FOUR)
			templabel.text = '4';
		else if(k.keyCode == Phaser.Keyboard.FIVE)
			templabel.text = '5';
		else if(k.keyCode == Phaser.Keyboard.SIX)
			templabel.text = '6';
		else if(k.keyCode == Phaser.Keyboard.SEVEN)
			templabel.text = '7';
		else if(k.keyCode == Phaser.Keyboard.EIGHT)
			templabel.text = '8';
		else if(k.keyCode == Phaser.Keyboard.NINE)
			templabel.text = '9';
	}
	else{}//do nothing
};

getActiveLabel = function()
{
	if(ryfearB.on)
		return ryfearL;
	else if(rbfearB.on)
		return rbfearL;
	else if(brfearB.on)
		return brfearL;
	else if(byfearB.on)
		return byfearL;
	else if(yrfearB.on)
		return yrfearL;
	else if(ybfearB.on)
		return ybfearL;
	else if(raggroB.on)
		return raggroL;
	else if(baggroB.on)
		return baggroL;
	else if(yaggroB.on)
		return yaggroL;
}

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
	
	console.log("ryfear = "+ryfear);
	console.log("rbfear = "+rbfear);
	console.log("brfear = "+brfear);
	console.log("byfear = "+byfear);
	console.log("yrfear = "+yrfear);
	console.log("ybfear = "+ybfear);
	console.log("raggro = "+raggro);
	console.log("baggro = "+baggro);
	console.log("yaggro = "+yaggro);
}