const {Service: ServiceModel, Service} = require("../models/Nfe");

const serviceController = {

    create: async(req,resp)=>{
        try {
            
            const service = {
                CnpjEmitente: req.body.CnpjEmitente,
                RzSocialEmitente:req.body.RzSocialEmitente,
                CnpjDestinatario: req.body.CnpjDestinatario,
                RzSocialDestinatario:req.body.RzSocialDestinatario,
                XmlKey:req.body.XmlKey,
                Value:req.body.Value,
                xmlNumber:req.body.xmlNumber
            };
            const response = await ServiceModel.create(service);

            resp.status(201).json({response,msg: "Serviço criado com sucesso! "});

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async(req,res) =>{
        try{
            const services = await ServiceModel.find();
            res.json(services);
        }catch{
            console.log(error)
        }
    },
    get: async(req,res) =>{
        try {
            const id = req.params.id
            const service = await ServiceModel.findById(id);
            res.json(service);
        } catch (error) {
            console.log(error)
        }
    },
    delete: async(req, res) =>{
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);
            if (!service) {
                res.status(404).json({msg: "Serviço não encontrado"});
                return;
            }
            const deleteService = await ServiceModel.findByIdAndDelete(id);
            res.status(200).json({deletedService, msg: "Serviço excluído com sucesso !"});
        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = serviceController;

