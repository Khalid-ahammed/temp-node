//syncronas or asyncronas
const { readFileSync, writeFileSync } = require('fs')

console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

const err = writeFileSync(
  './content/result-sync.txt',
  `here is the result ${first}, ${second}`,
  { flag: 'a' } //flag helps not to overwrite
)
console.log('done with the task')
console.log('the nexr')
