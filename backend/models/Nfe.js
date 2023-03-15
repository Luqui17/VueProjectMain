const mongoose = require("mongoose");

const {Schema} = mongoose;

const  serviceSchema = new Schema({
        CnpjEmitente: String,
        RzSocialEmitente:String,
        CnpjDestinatario: String,
        RzSocialDestinatario:String,
        XmlKey:String,
        Value:Number,
        xmlNumber:Number
},
{timestamps:true}
);

const Service = mongoose.model("Nfe",serviceSchema);

module.exports = {
    Service,
    serviceSchema,
};