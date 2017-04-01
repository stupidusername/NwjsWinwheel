process.on('uncaughtException', (err) => {
	process.stdout.write(err + '\n')
	process.exit()
})

var dimensions = null
var position = null
if (nw.App.argv.length >= 3) {
	dimensions = JSON.parse(nw.App.argv[2])
	if (!Array.isArray(dimensions) || dimensions.length != 2 || !Number.isInteger(dimensions[0]) || !Number.isInteger(dimensions[1])) {
		throw '3rd parameter must be an array of the form [width, height].'
	}
}
if (nw.App.argv.length >= 4) {
	position = JSON.parse(nw.App.argv[3])
	if (!Array.isArray(position) || position.length != 2 || !Number.isInteger(position[0]) || !Number.isInteger(position[1])) {
		throw '4th parameter must be an array of the form [x, y].'
	}
}

var options = {
	fullscreen: true
}
if (dimensions) {
	options = {
		width: dimensions[0],
		height: dimensions[1],
		frame: false,
		always_on_top: true
	}
}

nw.Window.open('index.html', options, (win) => {
	if (position) {
		win.moveTo(position[0], position[1])
	}
})
