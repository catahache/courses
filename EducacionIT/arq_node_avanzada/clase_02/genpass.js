const {SHA256, SHA384} = require('sha2')

const pass = 'pepaPig'
const salt = '9a0d5c32-a133-41c9-9873-1ab0a08e5116'

const guardar = SHA256(pass+salt)
const hexadata = Buffer.from(guardar, 'ascii').toString('hex')

console.log(hexadata);

