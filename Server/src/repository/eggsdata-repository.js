const {eggsData} = require('../models/index')

class EggsDataRepsitory {
    async insertData(data){
        try {
            const marketdata = await eggsData.create(data);
            return marketdata;
        }
        catch(error){
            console.log("Error in Repository Layer")
            console.log(error)
            throw error;
        }
    }

    async getDatedData({dated,city}){
        try{
            const reponse = await eggsData.findOne({where:{dated,city}});
            return reponse.price
        }
        catch(error){
            console.log("Error in repository layer")
            throw error;
        }
    }

    async getData(){
        try{
            const reponse = await eggsData.findAll();
            return reponse
        }
        catch(error){
            console.log("Error in repository layer")
            throw error;
        }
    }

    async destroy({dated}){
        try{
            const reponse = await eggsData.destroy({where:{dated}});
            return reponse;
        }catch(error){
            console.log('Error in repository layer')
            throw error;
        }
    }
}

module.exports = EggsDataRepsitory;