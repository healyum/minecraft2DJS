var Player = {
	x: 0,
	y: 0,			
	initRow: 9,
	initCol: 4,
	sourceX: 0,
	sourceY: 0,
	width: 32,
	height: 35,
	src: "assets/images/littlesonic.png",
	isFalling: true,
	clear: function() {
		ctx.clearRect(this.x, this.y, this.width, this.height);
	},
	draw: function(canvasX = this.initRow * spriteWidth, canvasY = this.initCol * spriteHeight) {
		//var player = new Player();
		sonicImg = new Image();
		sonicImg.src = this.src;
		sonicImg.onload = function() {
            ctx.drawImage(sonicImg,
            this.sourceX, this.sourceY, this.width, this.height, // origine image, jusqu'à taille et hauteur
            canvasX, canvasY, spriteWidth, spriteHeight); // position sur le canvas
		}.bind(this);
		//this.x = canvasX;
		//this.y = canvasY;
	}
};

function drawPlayer() {
	// TODO : effacer joueur
	Player.draw();
	// TODO : changer coordonnées du joueur pour le faire bouger, et gérer collision
}