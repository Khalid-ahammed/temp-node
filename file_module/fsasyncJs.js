const fs = require('fs')
const { readFile } = require('fs/promises')

//read and write file async
fs.readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log(result)
    const first = result
    fs.readFile('./content/second.txt', 'utf8', (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log(result)
        const second = result
        fs.writeFile(
          './content/result-async-txt',
          `here is the result ${first} ${second}`,
          (err, result) => {
            if (err) console.log(err)
            else {
              console.log(result)
            }
          }
        )
      }
    })
  }
})
