var Lottery = {};

Lottery.Boot = function (game) {

};

Lottery.Boot.prototype = {

    init: function () {

        //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop)
        {
            //  If you have any desktop specific settings, they can go in here
            this.scale.pageAlignHorizontally = true;
        }
        else
        {
            //  Same goes for mobile settings.
            //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1024, 1024);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }

    },

    preload: function () {

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        //this.load.image('preloaderBarBackground', 'assets/enemy_health_bar_background_000.png');
        //this.load.image('preloaderBar', 'assets/enemy_mana_bar_000.png');
		//this.load.image('preloaderBarForeground', 'assets/enemy_health_bar_foreground_002.png');

    },

    create: function () {

        //  By this point the preloader assets have loaded to the cache, we've set the game settings
        //  So now let's start the real preloader going
        this.state.start('Preloader');

    }

};

window.onload = function() {
	//	Create your Phaser game and inject it into the gameContainer div.
	//	We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
	var game = new Phaser.Game(704, 704, Phaser.AUTO, 'game');
	//	Add the States your game has.
	//	You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
	game.state.add('Boot', Lottery.Boot);
	game.state.add('Preloader', Lottery.Preloader);
	game.state.add('MainMenu', Lottery.MainMenu);
	game.state.add('Game', Lottery.Game);
	game.state.add('WinScreen', Lottery.WinScreen);
	game.state.add('LoseScreen', Lottery.LoseScreen);
	//	Now start the Boot state.
	game.state.start('Boot');
};