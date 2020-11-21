function drawTree(ctx, spriteSheetImg, posX, posY) {
	var draw = false;

	for (var i = 0; i < 3; i++) {
		for (var j = 4; j >= 0; j--) {
			draw = false;

			// Feuille du dessus
	    	if (i == 1 && j == 4) {
	            var sourceX = Leaf.posX * spriteWidth;
	            var sourceY = Leaf.posY * spriteHeight;
	            draw = true;
	    	}
			// Feuilles
	       	if ((i == 0 || i == 1 || i == 2) && (j == 2 || j == 3)) {
	            var sourceX = Leaf.posX * spriteWidth;
	            var sourceY = Leaf.posY * spriteHeight;
	            draw = true;
	    	}

	    	// Tronc
	    	if (i == 1 && (j == 0 || j == 1)) {
	    		var sourceX = Wood.posX * spriteWidth;
	            var sourceY = Wood.posY * spriteHeight;
	            draw = true;
	    	}

	        canvasX = (posX + i) * spriteWidth;
	        canvasY = (posY - j) * spriteHeight;

	        if (draw == true) {
				ctx.drawImage(spriteSheetImg,
				sourceX, sourceY, spriteWidth, spriteHeight,
				canvasX, canvasY, spriteWidth, spriteHeight);
	        }
		}
	}
}

function generateCoal(ctx, spriteSheetImg, posX, posY) {
	var frequency = getRandomNumber(30);

	if (frequency == 7) {
		for (var i = 0; i < 2; i++) {
			for (var j = 2; j >= 0; j--) {
				var sourceX = Coal.posX * spriteWidth;
				var sourceY = Coal.posY * spriteHeight;

				// TODO : ajouter une classe MineralPattern et dessiner aléatoirement la liste de pattern qui sera passée
				canvasX = (posX + i) * spriteWidth;
				canvasY = (posY - j) * spriteHeight;

				ctx.drawImage(spriteSheetImg,
				sourceX, sourceY, spriteWidth, spriteHeight,
				canvasX, canvasY, spriteWidth, spriteHeight);
			}
		}
	}
	return false;
}

function generateDiamond(ctx, spriteSheetImg, posX, posY) {
	var frequency = getRandomNumber(70);

	if (frequency == 7) {
		for (var i = 0; i < 2; i++) {
			for (var j = 2; j >= 0; j--) {
				var sourceX = Diamond.posX * spriteWidth;
				var sourceY = Diamond.posY * spriteHeight;

				// TODO : ajouter une classe MineralPattern et dessiner aléatoirement la liste de pattern qui sera passée
				canvasX = (posX + i) * spriteWidth;
				canvasY = (posY - j) * spriteHeight;

				ctx.drawImage(spriteSheetImg,
				sourceX, sourceY, spriteWidth, spriteHeight,
				canvasX, canvasY, spriteWidth, spriteHeight);
			}
		}
	}
	return false;
}