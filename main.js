process.on('uncaughtException', (err) => {
	process.stdout.write(err + '\n')
	process.exit()
})

nw.Window.open('index.html', {fullscreen: true})
