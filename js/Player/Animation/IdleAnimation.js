/**
 IDLE ANIMATION
 **/
var IdleAnimation = {
    sprite1: {
        x: 362,
        y: 66,
        width: 54,
        height: 54,
    },
    render: function (posX, posY, hFlip = false) {
        ctx.clearRect(posX, posY, 26, 26);

        ctx.save();

        if (hFlip) {
            ctx.translate(posX + 26 / 2, posY + 26 / 2);
            ctx.scale(-1, 1);
            ctx.translate(-(posX + 26 / 2), -(posY + 26 / 2));
        }

        ctx.drawImage(sonicTilesheetImg,
            this.sprite1.x, this.sprite1.y, this.sprite1.width, this.sprite1.height,
            posX, posY, 26, 26);

        ctx.restore();
    },
}
