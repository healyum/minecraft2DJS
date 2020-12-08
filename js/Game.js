function showFps() {
    const now = performance.now(); // return time in ms since the page loaded
    while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
    }
    times.push(now);

    fps = times.length;
    fpsId = document.getElementById('fps');
    fpsId.innerHTML = "FPS: " + Math.round(fps); //Frames/sec
}

/* Return true if player is away since more than 10s */

/* TODO: bug, trouver un moyen de retourner vrai/faux dans le else gauche/droite du gameloop */
function isPlayerAway() {
    const now = performance.now();
    const timeBeforeBoredAnimation = 10000;

    if (!isNotMoving) {
        timeOfLastMove = now;
    }

    startBoredAnimation = now > timeOfLastMove + timeBeforeBoredAnimation;
    return startBoredAnimation;
}

/* Refresh the status of moving player. We need to do it outside of if-else statement otherwise information is lost */
function refreshIsPlayerAway() {
    isNotMoving = (!keyState[RIGHT_ARROW_KEY] && !keyState[RIGHT_D_ARROW_KEY] && !keyState[LEFT_ARROW_KEY] && !keyState[LEFT_Q_KEY] && !keyState[UP_ARROW] && !keyState[UP_SPACEBAR]);
}