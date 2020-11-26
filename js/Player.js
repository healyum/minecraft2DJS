var Player = {
	x: 0,
	y: 0,			
	initRow: 9,
	initCol: 4,
	sourceX: 0,
	sourceY: 0,
	width: 32, // TODO : faire correspondre dimensions images réelles pour éviter calculs inutiles
	height: 35,
	image: new Image(),
	imageLoaded: function() {
		sonicImg = this.image;
		sonicImg.src = this.src;

	    return new Promise(function(resolve, reject) {
			sonicImg.onload = resolve;
		});
	},
	src: "assets/images/littlesonic.png",
	isFalling: true,
	clearMe: function() {
		/* Tester zone effacement personnage (hitbox)
		ctx.beginPath();
		ctx.rect(this.x, this.y, spriteWidth, spriteHeight);
		ctx.stroke();
		*/

		/*sonicImg = this.image;
		sonicImg.src = this.src;
		sonicImg.onload = function() {
			//ctx.clearRect(this.x, this.y, spriteWidth, spriteHeight);
		}.bind(this);*/
	},
	draw: function(posX = this.initRow * spriteWidth, posY = this.initCol * spriteHeight) {
		// effacer joueur
		//ctx.clearRect(this.x, this.y, spriteWidth, spriteHeight);
		//TODO : Ne pas checker promise avant chaque dessin, trop lourd
		this.imageLoaded().then(function() {
			// dessiner avec nouvelle position
            ctx.drawImage(sonicImg,
            this.sourceX, this.sourceY, this.width, this.height, // origine image, jusqu'à taille et hauteur
            posX, posY, spriteWidth, spriteHeight); // position sur le canvas, TODO : mettre width et height image, pas de la taille des tuiles
		}.bind(this));

		// Update position of the player after erase, so we erase old position of the player
		this.x = posX;
		this.y = posY;
	}
};

function drawPlayer() {
	player.draw();
	// TODO : gérer collision
}

// TODO : agréger en methode de Player ou créer classe à part en prévision gestion IA NPC (PNJ) ou d'ennemis
function handleKeyPress(e) {
    var code = e.keyCode;
    switch (code) {
        case 37: 
        	console.log("Left"); 
    	     player.draw(player.x - 16); 
    		 newSonic.render(newSonic.posX-=1.5)
    	     break; //Left key
        case 38: 
    		console.log("Up");
    		break; //Up key
        case 39: 
    		console.log("Right"); 
    		player.draw(player.x + 16); 
    		newSonic.render(newSonic.posX+=1.5)
    		break; //Right key
        case 40: 
        	console.log("Down"); 
        	break; //Down key
        default: ""; //Everything else
    }
}

var IdleSprite = {
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

		ctx.drawImage(newSonicImg,
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


var WalkSprite = {
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

	render: function (posX = 44, posY = 50) {
		var spriteList = [this.sprite1, this.sprite2, this.sprite3, this.sprite4, this.sprite5, this.sprite6]; // TODO : voir pour passer liste dans objet plutôt qu'instancier tableau à chaque tick
		
		ctx.clearRect(posX, posY, 26, 26);

		ctx.drawImage(newSonicImg,
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
