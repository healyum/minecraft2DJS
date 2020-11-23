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
		ctx.clearRect(this.x, this.y, spriteWidth, spriteHeight);
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
