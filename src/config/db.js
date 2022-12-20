require('dotenv').config();
const mongosse = require('mongoose');
mongosse.set('strictQuery', false)
const dbConnection = async() =>{
    try{
        await mongosse.connect(process.env.MONGODB_URI);
        console.log(`\x1b[34m ***************************************** \x1b[0m`);  
        console.log(`\x1b[34m ** Conexión exitosa a la BD! ** \x1b[0m`);  
        console.log(`\x1b[34m ***************************************** \x1b[0m`);  

    }catch(e){
        console.log(`\x1b[31m ************************** \x1b[0m`);  
        console.log(`\x1b[31m ** Error en la conexión **\x1b[0m`);  
        console.log(`\x1b[31m ************************** \x1b[0m`);  
    }
}
module.exports = { dbConnection }