function showFps() {
	const now = performance.now();
	while (times.length > 0 && times[0] <= now - 1000) {
		times.shift();
	}
	times.push(now);
	fps = times.length;
	fpsId = document.getElementById('fps');
	fpsId.innerHTML = "FPS: " + Math.round(fps); //Frames/sec
}