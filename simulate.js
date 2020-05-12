const motion = require('./motion.js')
const fs = require('fs')
const fileWithCommands = process.argv.pop()

fs.readFile(fileWithCommands, 'utf8', function (err,data) {
  if (err) {
    return console.log(err) }

  let commands = data
  let results = motion.simulate(commands)
  console.log(results)
})