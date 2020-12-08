/**
	PLAYER CLASS
**/

/*
	x: 0,
	y: 0,			
	initRow: 9,
	initCol: 4,
	sourceX: 0,
	sourceY: 0,
	width: 32,
	height: 35,
	initRow: 9,
	initCol: 4,
	isFalling: true,
	*/
var Player = {
	posX: 44,
	posY: 50,
	isFalling: true,
	isJumping: false,
	idleAnimation: IdleAnimation,
	walkAnimation: WalkAnimation,
	boredAnimation: BoredAnimation,
	rollAnimation: RollAnimation,
	jump: function() {
		if (this.isJumping === false) {
			//this.rollAnimation.update();
			this.rollAnimation.render(Player.posX, Player.posY);
			this.posY -= 2; // arbitrary jump height value
			if (this.posY < 10) {
				this.isFalling = true;
				this.rollAnimation.render(Player.posX, Player.posY);
			}
		
		}
	},
	checkFalling: function () {
		if (this.posY <= 50 && this.isFalling === true) {	// if player isnt jumping anymore, we have to make him fall
			this.posY += 2;
			this.rollAnimation.render(Player.posX, Player.posY);
		} else {
			this.isFalling = true;
		}
	},
	update: function () {
		/* TODO : appeler methodes de deplacement*/
		this.walkAnimation.update();
		this.boredAnimation.update();
		this.rollAnimation.update();
    },
	render: function () {
		//ultimatePlayer.idleAnimation.render(ultimatePlayer.posX, ultimatePlayer.posY);
	},
}
