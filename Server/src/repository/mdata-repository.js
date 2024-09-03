const {vegetableData} = require('../models/index')

class MdataRepsitory {
    async insertData(data){
        try {
            const marketdata = await vegetableData.create(data);
            return marketdata;
        }
        catch(error){
            console.log("Error in Repository Layer")
            console.log(error)
            throw error;
        }
    }

    async getDatedData({vname,dated,city}){
        try{
            const reponse = await vegetableData.findOne({where:{vname,dated,city}});
            return reponse.price
        }
        catch(error){
            console.log("Error in repository layer")
            throw error;
        }
    }

    async getData(){
        try{
            const reponse = await vegetableData.findAll();
            return reponse
        }
        catch(error){
            console.log("Error in repository layer")
            throw error;
        }
    }

    async destroy({vname,dated}){
        try{
            const reponse = await vegetableData.destroy({where:{vname,dated}});
            return reponse;
        }catch(error){
            console.log('Error in repository layer')
            throw error;
        }
    }
}

module.exports = MdataRepsitory;