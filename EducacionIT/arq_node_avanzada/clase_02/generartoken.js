const uuid =require('uuid')
const redis = require('redis')

const client = redis.createClient({
    host:'138.',
    port:'6389'
})

const client.on('error', (error)=>{console.log(error);})

const NOMBRE_USUARIO = '123456789'

const dataUsu = {
    token: '12345678984515',
    usuario: NOMBRE_USUARIO
}

client.set( NOMBRE_USUARIO, JSON.stringify(dataUsu),()=>{
    console.log('key seteada exitosamente');
    console.log(JSON.stringify(datausu));
    client.expire(NOMBRE_USUARIO, 60, (err)=>{
        if(err){
            console.log(err);
            return
        }
        else{
            client.quit(()=>{

            })
        }
    })
})