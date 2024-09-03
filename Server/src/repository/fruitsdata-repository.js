const {fruitsData} = require('../models/index')

class FruitsDataRepsitory {
    async insertData(data){
        try {
            const marketdata = await fruitsData.create(data);
            return marketdata;
        }
        catch(error){
            console.log("Error in Repository Layer")
            console.log(error)
            throw error;
        }
    }

    async getDatedData({fname,dated,city}){
        try{
            const reponse = await fruitsData.findOne({where:{fname,dated,city}});
            return reponse.price
        }
        catch(error){
            console.log("Error in repository layer")
            throw error;
        }
    }

    async getData(){
        try{
            const reponse = await fruitsData.findAll();
            return reponse
        }
        catch(error){
            console.log("Error in repository layer")
            throw error;
        }
    }

    async destroy({fname,dated}){
        try{
            const reponse = await fruitsData.destroy({where:{fname,dated}});
            return reponse;
        }catch(error){
            console.log('Error in repository layer')
            throw error;
        }
    }
}

module.exports = FruitsDataRepsitory;