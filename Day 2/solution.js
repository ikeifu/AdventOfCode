const fs = require('node:fs')

// const findMax = (data,r,g,b) => {
// 	let gameText = ''
// 	let i = 0
// 	while(gameText !== ':'){
// 		gameText = data[i]
// 		i++ 
// 	}
// 	const slicedData = data.slice(i+1)
// 	const checkIfFalse = (item, index, arr) => {
// 		if(!isNaN(item))
// 	}
// 	slicedData.split(' ').forEach(checkIfFalse)
//   return false
// }
fs.readFile('./data.txt', 'utf8', (_, data) => {
    const lines = data.split('\n')

    let total = 0
    // for(let i=0; i < lines.length; i++){
    //   if(!findMax(lines[i],12,13,14)) total += i
    // }
	lines.forEach((line, i) => {
		const [_, game] = line.split(': ')
		const rounds = game.trim().split(';')
    rounds.forEach(round => {
      const turns = round.split(',')
      turns.forEach(turn => {
        const [num, color] = turn.trim().split(' ')
        // console.log(num, color)
        switch(color){
          case 'red':
            if(num > 12) {
              total+=i
              return
            }
          case 'blue':
            if(num > 14) {
              total+=i
              return
          }
          case 'green':
            if(num> 13) {
              total+=i
              return
            }
        }
      })
    })
	})
  console.log(total)
})
