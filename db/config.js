const mongoose = require('mongoose');

const dbConnection = async() =>{

    try{

        await mongoose.connect( process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true da error ¿?
        });

        console.log("BD inicializada");

    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar BD');
    }
}

module.exports = {
    dbConnection
}