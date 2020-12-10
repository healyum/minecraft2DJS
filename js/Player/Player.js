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
	idleAnimation: IdleAnimation,
	walkAnimation: WalkAnimation,
	boredAnimation: BoredAnimation,
	rollAnimation: RollAnimation,
	jump: function() {
		console.log('up'+keyState[UP_ARROW]);
		if ((this.posY > 5 && this.isFalling === false) && keyState[UP_ARROW]) {
			this.rollAnimation.render(Player.posX, Player.posY);
			this.posY -= 2; // arbitrary jump height value
		}
		else {
			this.isFalling = true;
			this.checkFalling();
		}
	},
	checkFalling: function () {
		this.isFalling = true;
		if (this.isFalling === true) {	// if player isnt jumping anymore, we have to make him fall
			if (this.posY > 0 && this.posY <= 50) {
				this.posY += 2;
				this.rollAnimation.render(Player.posX, Player.posY);
			}
			if (this.posY > 50) {
				this.isFalling = false;
			}
		} else {
			this.isFalling = false;
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
