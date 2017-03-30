process.on('uncaughtException', (err) => {
	process.stdout.write(err + '\n')
	process.exit(1)
})

nw.Window.open('index.html', {fullscreen: true})
