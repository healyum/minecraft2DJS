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
		this.x = posX;
		this.y = posY;

		this.imageLoaded().then(function() {
			// effacer joueur
			ctx.clearRect(this.x, this.y, spriteWidth, spriteHeight);

			// dessiner avec nouvelle position
            ctx.drawImage(sonicImg,
            this.sourceX, this.sourceY, this.width, this.height, // origine image, jusqu'à taille et hauteur
            this.x, this.y, spriteWidth, spriteHeight); // position sur le canvas, TODO : mettre width et height image, pas de la taille des tuiles
		}.bind(this));
	}
};

function drawPlayer() {
	// TODO : effacer joueur
	let player = Object.create(Player);
	player.draw();
	player.clearMe();
	// TODO : changer coordonnées du joueur pour le faire bouger, et gérer collision
}