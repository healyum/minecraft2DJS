/**
 ROLL ANIMATION
 **/

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
    numberOfFrames: 5,

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
