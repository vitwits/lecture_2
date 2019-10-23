var context;
var dx = 4;
var dy = 4;
var y = 150;
var x = 45;

function draw() {
	context = field.getContext('2d');
	context.clearRect(0, 0, 300, 300);
	context.beginPath();
	context.fillStyle = "rgb(65, 61, 61)";
	context.arc(x, y, 40, 0, Math.PI * 2, true);
	context.closePath();
	context.fill();
	if (x < 40 || x > 260)
		dx = -dx;
	if (y < 40 || y > 260)
		dy = -dy;
	x += dx;
	y += dy;
}
setInterval(draw, 18);