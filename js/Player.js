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
        case 37: console.log("Left"); player.draw(player.x - 16); break; //Left key
        case 38: console.log("Up"); break; //Up key
        case 39: console.log("Right"); player.draw(player.x + 16); break; //Right key
        case 40: console.log("Down"); break; //Down key
        default: ""; //Everything else
    }
}

var IdleSprite = {
	height: 39,
	sprite1: {
		x: 44-1, // -1 pixel because of spritesheet overflow and size must be the same. Have to probably switch to another tilesheet...
		y: 25,
		width: 29, // must be the same
		height: 39,
	},
	sprite2: {
		x: 74-1,
		y: 25, // same
		width: 29,
		height: 39, // same
	},
	sprite3: {
		x: 102-1,
		y: 25, // same
		width: 29,
		height: 39, // same
	},
	sprite4: {
		x: 132-1,
		y: 25, // same
		width: 29,
		height: 39, // same
	},
	sprite5: {
		x: 163-1,
		y: 25, // same
		width: 29,
		height: 39, // same
	},
	sprite6: {
		x: 197-1,
		y: 25, // same
		width: 29,
		height: 39, // same
	},

	frameIndex: 0,
	tickCount: 0,
	ticksPerFrame: 18, // de base 60 fps, si 4 alors vitesse / 4 soit 15 fps
	numberOfFrames: 5 || 1,

	render: function () {
		var spriteList = [this.sprite1, this.sprite2, this.sprite3, this.sprite4, this.sprite5]; // TODO : voir pour passer liste dans objet plutôt qu'instancier tableau à chaque tick

		ctx.clearRect(44,50, 16, 20);

		ctx.drawImage(newSonicImg,
		spriteList[this.frameIndex].x, spriteList[this.frameIndex].y, spriteList[this.frameIndex].width, spriteList[this.frameIndex].height,
		44, 50, 16, 20);
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
				this.frameIndex = 3; // permet de boucler sur les 2 dernières frames pour que sonic tapote du pied
			}
        }
    }
}
