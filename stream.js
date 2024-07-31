const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog.txt', {encoding: 'utf-8'})
const writeStream = fs.createWriteStream('./docs/nblog4.txt')

// readStream.on('data', (chunk)=>{
//     console.log('----New Chunk----');
//     console.log(chunk);
//     writeStream.write('\nNew Chunk\n')
//     writeStream.write(chunk)
// })

//pipe
readStream.pipe(writeStream)

