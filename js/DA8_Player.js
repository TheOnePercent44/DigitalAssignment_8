function redBlock(game, xcoord, ycoord)
{
	this.game = game;
	this.sprite = this.game.add.sprite(xcoord, ycoord, 'redBlock');
	this.ryfear;
	this.rbfear;
	
	return this;
};