/**
	PLAYER CLASS
**/

var BoredAnimation = {
	posX: 44,
	posY: 50,
	sprite1: {
		x: 438,
		y: 66,
		width: 54,
		height: 54,
	},
	sprite2: {
		x: 505,
		y: 66,
		width: 54,
		height: 54,
	},
	sprite3: {
		x: 572,
		y: 66,
		width: 54,
		height: 54,
	},
	sprite4: {
		x: 639,
		y: 66,
		width: 54,
		height: 54,
	},

	frameIndex: 0,
	tickCount: 0,
	ticksPerFrame: 18, // de base 60 fps, si 4 alors vitesse / 4 soit 15 fps
	numberOfFrames: 4 || 1,

	render: function (posX = this.posX, posY = posY) {
		var spriteList = [this.sprite1, this.sprite2, this.sprite3, this.sprite4]; // TODO : voir pour passer liste dans objet plutôt qu'instancier tableau à chaque tick

		ctx.clearRect(posX, posY, 26, 26);
		// draw to the right only for now
		ctx.drawImage(sonicTilesheetImg,
		spriteList[this.frameIndex].x, spriteList[this.frameIndex].y, spriteList[this.frameIndex].width, spriteList[this.frameIndex].height,
		posX, posY, 26, 26);
	},

	update: function () {
        this.tickCount += 1;

        if (this.tickCount > this.ticksPerFrame) {
        	this.tickCount = 0;

	        // If the current frame index is in range
	        if (this.frameIndex < this.numberOfFrames - 1) {	
	            // Go to the next frame
	            this.frameIndex += 1;
			} else {
				this.frameIndex = 2; // permet de boucler sur les 2 dernières frames pour que sonic tapote du pied
			}
        }
    }
}

var WalkAnimation = {
	posX: 44,
	posY: 50,
	sprite1: {
		x: 362,
		y: 156,
		width: 54,
		height: 54,
	},
	sprite2: {
		x: 429,
		y: 156,
		width: 54,
		height: 54,
	},
	sprite3: {
		x: 496,
		y: 156,
		width: 54,
		height: 54,
	},
	sprite4: {
		x: 563,
		y: 156,
		width: 54,
		height: 54,
	},
	sprite5: {
		x: 630,
		y: 156,
		width: 54,
		height: 54,
	},
	sprite6: {
		x: 697,
		y: 156,
		width: 54,
		height: 54,
	},


	frameIndex: 0,
	tickCount: 0,
	ticksPerFrame: 8, // de base 60 fps, si 4 alors vitesse / 4 soit 15 fps
	numberOfFrames: 6 || 1,

	render: function (posX = 44, posY = 50, hFlip = false) {
		var spriteList = [this.sprite1, this.sprite2, this.sprite3, this.sprite4, this.sprite5, this.sprite6]; // TODO : voir pour passer liste dans objet plutôt qu'instancier tableau à chaque tick
		
		/* Tester zone effacement personnage (hitbox)
		ctx.beginPath();
		ctx.rect(this.x, this.y, spriteWidth, spriteHeight);
		ctx.stroke();
		*/
		ctx.clearRect(posX, posY, 26, 26);

   		ctx.save();

		if (hFlip) {
			ctx.translate(posX + 26/2, posY + 26/2);
			ctx.scale(-1, 1);
			ctx.translate(-(posX + 26/2), -(posY + 26/2));
		}

		ctx.drawImage(sonicTilesheetImg,
		spriteList[this.frameIndex].x, spriteList[this.frameIndex].y, spriteList[this.frameIndex].width, spriteList[this.frameIndex].height,
		posX, posY, 26, 26);

		ctx.restore();
	},

	update: function () {
        this.tickCount += 1;

        if (this.tickCount > this.ticksPerFrame) {
        	this.tickCount = 0;

	        // If the current frame index is in range
	        if (this.frameIndex < this.numberOfFrames - 1) {	
	            // Go to the next frame
	            this.frameIndex += 1;
			} else {
				this.frameIndex = 0;
			}
        }
    }
}

var IdleAnimation = {
	sprite1: {
		x: 362,
		y: 66,
		width: 54,
		height: 54,
	},
	render: function (posX, posY, hFlip = false) {
		ctx.clearRect(posX, posY, 26, 26);

		ctx.save();

		if (hFlip) {
			ctx.translate(posX + 26/2, posY + 26/2);
			ctx.scale(-1, 1);
			ctx.translate(-(posX + 26/2), -(posY + 26/2));
		}

		ctx.drawImage(sonicTilesheetImg,
		this.sprite1.x, this.sprite1.y, this.sprite1.width, this.sprite1.height,
		posX, posY, 26, 26);

		ctx.restore();
	},
}

/* Using when jumping or rolling on the floor */
var RollAnimation = {
	posX: 44,
	posY: 50,
	sprite1: {
		x: 26,
		y: 428,
		width: 66,
		height: 66,
	},
	sprite2: {
		x: 93,
		y: 428,
		width: 66,
		height: 66,
	},
	sprite3: {
		x: 160,
		y: 428,
		width: 66,
		height: 66,
	},
	sprite4: {
		x: 227,
		y: 428,
		width: 66,
		height: 66,
	},
	sprite5: {
		x: 294,
		y: 428,
		width: 66,
		height: 66,
	},

	frameIndex: 0,
	tickCount: 0,
	ticksPerFrame: 6,
	numberOfFrames: 5 || 1,

	render: function (posX = this.posX, posY = posY) {
		var spriteList = [this.sprite1, this.sprite2, this.sprite3, this.sprite4, this.sprite5]; 

		ctx.clearRect(posX, posY, 26, 26);

		ctx.drawImage(sonicTilesheetImg,
		spriteList[this.frameIndex].x, spriteList[this.frameIndex].y, spriteList[this.frameIndex].width, spriteList[this.frameIndex].height,
		posX, posY, 26, 26);
	},

	update: function () {
        this.tickCount += 1;

        if (this.tickCount > this.ticksPerFrame) {
        	this.tickCount = 0;

	        // If the current frame index is in range
	        if (this.frameIndex < this.numberOfFrames - 1) {	
	            // Go to the next frame
	            this.frameIndex += 1;
			} else {
				this.frameIndex = 0;
			}
        }
    }
}

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
		if (this.isFalling == false) {
				console.log(this.posY);
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
		console.log(this.posY)
		if (this.posY <= 50) {	// if player isnt jumping anymore, we have to make him fall
			console.log(this.posY)
			this.posY += 2;
			this.rollAnimation.render(Player.posX, Player.posY);
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