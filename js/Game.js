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

function isPlayerAway(isAway) {
	var now2 = performance.now();
	const timeAway = 10000;
	isAway ? now2 = performance.now() : timeSinceMovement = now2;
	/*if (isAway) {
		now2 = performance.now();
	} else {
		timeSinceMovement = now2;
	}*/
	if (now2 > timeSinceMovement + timeAway) {
		return true;
	}
	return false;
}