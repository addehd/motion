let matrix = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
]

function simulateMovement(commandsArray) {
	let commands = commandsArray.split(",").map(Number)
	
	let cellSize = commands.slice(0,2)
	let position = commands.slice(2,4)
	
	commands.splice(0,4)
		
	let cell = new Cell(position[0],position[1])
	
	for (let command of commands) {
	  tryCommand(command)

	  if(command === 0) {
	  	return cell.cellPositionInMatrix() }
		
	  if(cell.cellPositionInMatrix() === null ){
	  	return [-1,-1] }
	}

	function tryCommand(str) {
		switch(str) {
		  case 1:
		    cell.moveForward(cell.angle)
		    break;
		  case 2:
		  	cell.moveBackwards(cell.angle)
		    break;
		  case 3:
		  	cell.changeAngle("clockWise")
		    break;
		  case 4:
		    cell.changeAngle("counterClock")
		    break;
		  default:    
		}
	}

	function Cell(x,y) {
		this.x = x
		this.y = y
		this.angle = 360
		this.changeAngle = function(direction){
			if(direction == "clockWise" ) {
				cell.angle = cell.angle + 90
				if(cell.angle > 360) {
					cell.angle = 90 } }

			if(direction == "counterClock") {
				cell.angle = cell.angle - 90
				if(cell.angle < 90) {
					cell.angle = 360 } }
		}
		this.moveForward = function(rotationGrade){
			if(rotationGrade === 360) {
				cell.y-- }
			if(rotationGrade === 90) {
				cell.x++ }
			if(rotationGrade === 180) {
				cell.y++ }
			if(rotationGrade === 270) {
				cell.x-- }
		}
		this.moveBackwards = function(rotationGrade){
			if(rotationGrade === 360) {
				cell.y++ }
			if(rotationGrade === 90) {
				cell.x-- }
			if(rotationGrade === 180) {
				cell.y-- }
			if(rotationGrade === 270) {
				cell.x++ }
		}
		this.cellPositionInMatrix = function (x,y) {
			if(cell.x > matrix.length || cell.x<0 || cell.y > matrix.length || cell.y<0 ) {
				return null 
			} else {
				return [cell.x, cell.y]
			}		
		}
	}
}

module.exports.simulate = simulateMovement