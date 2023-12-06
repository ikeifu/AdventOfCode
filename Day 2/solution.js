const fs = require('node:fs')

fs.readFile('./data.txt', 'utf8', (_, data) => {
    const lines = data.split('\n')
    lines.forEach(line => {
      console.log(line)
    })
  })
console.log('pie')