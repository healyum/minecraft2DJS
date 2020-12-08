/**
 BORED ANIMATION
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

    render: function (posX = this.posX, posY = this.posY) {
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
