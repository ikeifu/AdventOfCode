const fs = require('node:fs')

fs.readFile('./data.txt', 'utf8', (_, data) => {
  const lines = data.split('\n')
  let total = 0
  let possibilities = 1
	lines.forEach((line) => {
	const [numberOfGame, game] = line.split(': ')
  const [_, gameId] = numberOfGame.split(' ')
  const id = Number(gameId)
	const rounds = game.trim().split(';')
    
	const colors = {
		red: 1,
		green: 1,
		blue: 1
	}
    rounds.forEach(round => {
	
      const turns = round.split(',')
      turns.forEach(turn => {
        const [num, color] = turn.trim().split(' ')
        if(Number(colors[color]) < Number(num)) {
					// console.log(colors[color], num, id)
          colors[color] = Number(num)
        }
      })
			console.log(`current round ${id}`, colors)
    })
		for (const color in colors){
			possibilities = possibilities * colors[color]
			colors[color] = 0
		}
		total+=possibilities
		possibilities = 1
	})

  console.log(total)
})
