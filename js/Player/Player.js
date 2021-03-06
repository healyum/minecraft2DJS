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
	posY: 54,
	isFalling: true,
	jumpAllowed: true,
	jumpHeight: 50,
	jumpCelerity: 2,
	posYBeforeJump: 54, // should be this.posY, but it is yet undefined at this point
	idleAnimation: IdleAnimation,
	walkAnimation: WalkAnimation,
	boredAnimation: BoredAnimation,
	rollAnimation: RollAnimation,
	playerSounds: PlayerSounds,
	jump: function() {
		if ((this.posY > (this.posYBeforeJump - this.jumpHeight))) {
			if (this.posY === this.posYBeforeJump) {
				this.playerSounds.playJump();
			}
			this.rollAnimation.render(Player.posX, Player.posY);
			this.posY -= this.jumpCelerity; // arbitrary jump height value
		}
		else {
			this.checkFalling();
		}
	},
	checkFalling: function () {
		this.isFalling = true;
		if (this.isFalling === true) {	// if Player isnt jumping anymore, we have to make him fall
			if (this.posY < this.posYBeforeJump) {
				this.posY += this.jumpCelerity;
				this.rollAnimation.render(Player.posX, Player.posY);
			} else { // replace by collide with something in position Y
				this.posYBeforeJump = this.posY;
				this.isFalling = false;
				(!keyState[UP_ARROW] || !keyState[UP_ARROW]) ? this.jumpAllowed = true : this.jumpAllowed = false;
			}
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
