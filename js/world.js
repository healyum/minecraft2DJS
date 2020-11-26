function drawWorld() {
	var canvasY = 0 - spriteHeight;
	var canvasX = 0 - spriteWidth;

	for (var col = 0; col < worldCols; col++) {
	    for (var row = 0; row < worldRows; row++) {

	    	if (col < SKY_LAYER) {
	            var sourceX = Sky.posX * spriteWidth;
	            var sourceY = Sky.posY * spriteHeight;
	    	}

	    	if (col >= SKY_LAYER && col < GRASS_LAYER) {
	            var sourceX = Grass.posX * spriteWidth;
	            var sourceY = Grass.posY * spriteHeight;
	    	}

	    	if (col >= GRASS_LAYER && col < DIRT_LAYER) {
	            var sourceX = Dirt.posX * spriteWidth;
	            var sourceY = Dirt.posY * spriteHeight;
	    	}

	    	if (col >= DIRT_LAYER && col < STONE_OR_DIRT_LAYER) {
	    		var randomStoneOrDirt = randomNumberFromList([Stone, Dirt])
	            var sourceX = randomStoneOrDirt.posX * spriteWidth;
	            var sourceY = randomStoneOrDirt.posY * spriteHeight;
	    	}

	    	if (col >= STONE_OR_DIRT_LAYER && col < STONE_LAYER) {
	            var sourceX = Stone.posX * spriteWidth;
	            var sourceY = Stone.posY * spriteHeight;
	            generateCoal(ctx, textureTilesheetImg, row, col);
	    	}

	    	if (col >= STONE_LAYER && col < DIAMOND_LAYER) {
	            var sourceX = Stone.posX * spriteWidth;
	            var sourceY = Stone.posY * spriteHeight;
	            generateDiamond(ctx, textureTilesheetImg, row, col);
	    	}

	    	if (col >= DIAMOND_LAYER && col < STONE_OR_BEDROCK_LAYER) {
	    		var randomStoneOrBedrock = randomNumberFromList([Stone, Bedrock])
	            var sourceX = randomStoneOrBedrock.posX * spriteWidth;
	            var sourceY = randomStoneOrBedrock.posY * spriteHeight;
	    	}

	    	if (col >= STONE_OR_BEDROCK_LAYER && col < BEDROCK_LAYER) {
	            var sourceX = Bedrock.posX * spriteWidth;
	            var sourceY = Bedrock.posY * spriteHeight;
	    	}

	        canvasX = row * spriteWidth;
	        canvasY = col * spriteHeight;

	        ctx.drawImage(textureTilesheetImg,
	        sourceX, sourceY, spriteWidth, spriteHeight,
	        canvasX, canvasY, spriteWidth, spriteHeight);
	    }
	}
	// TODO :  Instancier arbres sur blocs d'herbes et non position fixe
	drawTree(ctx, textureTilesheetImg, 7,4);
	drawTree(ctx, textureTilesheetImg, 12,4);
}