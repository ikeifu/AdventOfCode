const fs = require('node:fs')

fs.readFile('./data.txt', 'utf8', (_, data) => {
  const lines = data.split('\n')
  const colors = {
    red: 12,
    green: 13,
    blue: 14
  }
  let total = 0
  let possible = true
	lines.forEach((line) => {
		const [numberOfGame, game] = line.split(': ')
    const [_, gameId] = numberOfGame.split(' ')
    const id = Number(gameId)
		const rounds = game.trim().split(';')
    
    rounds.forEach(round => {
      const turns = round.split(',')
      turns.forEach(turn => {
        const [num, color] = turn.trim().split(' ')
        if(num > colors[color]) {
          console.log(num)
          possible=false
        }
      })
    })
    if(possible) total+=id
    possible = true
	})

  console.log(total)
})
