// console.log(global)

// global.setTimeout(() => {
//     console.log('timeout with global')
// }, 3000)

// setTimeout(() => {
//     console.log('timeout without global')
// }, 3000)

// console.log(__dirname); // directorio
// console.log(__filename); // archivo

const {users, nums} = require('./users')
const fs = require('fs') // filesystem modules

//read file
// fs.readFile('./catitalandia/note.txt', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data.toString()) // toString, sino devuelve buffer
//     }
// })

// write file
// fs.writeFile('./catitalandia/note.txt', 'A new message', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('New message created') 
//     }
// })

// append file
// fs.appendFile('./catitalandia/note.txt', ' A new message appended\r\n', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('New message appended') 
//     }
// })

// create folder
// if(!fs.existsSync('newfolder')){
//     fs.mkdir('newfolder', (err, data) => {
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log('New folder created') 
//         }
//     })
// } else {
//     console.log('The folder already exists')
// }

// delete folder
// if(fs.existsSync('newfolder')){
//     fs.rmdir('newfolder', (err, data) => {
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log('The folder deleted') 
//         }
//     })
// } else {
//     console.log('The folder doesnt exists')
// }

// delete file
// if(fs.existsSync('./catitalandia/note.txt')){
//     fs.unlink('./catitalandia/note.txt', (err, data) => {
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log('The file deleted') 
//         }
//     })
// } else {
//     console.log('The file doesnt exists')
// }

// console.log(users, nums)

const readStream = fs.createReadStream('largetext.txt', {encoding:'utf-8'})
const writeStream = fs.createWriteStream('writeStream.txt')
// readStream.on('data', chunk=>{
//     // everytime we recieve a chunk of data we will fire this callback
//     console.log('#### new chunk of data ####')
//     console.log(chunk)

//     writeStream.write('\n ####new chunk####\n')
//     writeStream.write(chunk)
// })

// this is the same as just doing stream.pipe(), wich uses readable streams and connect them to writable streams
readStream.pipe(writeStream)