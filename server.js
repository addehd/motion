const motion = require('./motion.js')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/', function(request, response){
	let commands = request.body.commands
	let results = motion.simulate(commands)
  response.send(results)
})

app.listen(3000)