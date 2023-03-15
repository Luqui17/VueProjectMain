const mongoose = require("mongoose")

async function main(){
    try {
        mongoose.set("strictQuery",true)
        await mongoose.connect("mongodb+srv://lucasGabriel:xkIt807aszQIibAh@cluster0.nzs7gez.mongodb.net/?retryWrites=true&w=majority")
        console.log("Conectado ao banco")
    } catch (error) {
    console.log(`Erro ${error}`)
    }
}

module.exports = main