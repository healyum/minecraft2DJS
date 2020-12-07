/**
	WALK ANIMATION
**/
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
