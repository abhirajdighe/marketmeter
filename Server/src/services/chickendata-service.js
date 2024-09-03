const {ChickenDataRepsitory} = require('../repository/index');

class ChickenDataService{
    constructor(){
        this.chickenDataRepsitory = new ChickenDataRepsitory();
    }

    async create(data){
        try{
            const fdata = await this.chickenDataRepsitory.insertData(data);
            return fdata;
        }catch(error){
            console.log('Error in Service layer');
        }
    }

    async getDatedData(data){
        try{
            const response = await this.chickenDataRepsitory.getDatedData(data);
            return response;
        }catch(error){
            console.log("Error in service layer");
        }
    }

    async get(){
        try{
            const response = await this.chickenDataRepsitory.getData();
            return response;
        }catch(error){
            console.log("Error in service layer");
            console.log(error) 
        }
    }

    async destroy(data){
        try{
            const response = await this.chickenDataRepsitory.destroy(data);
            return response;
        }catch(error){
            console.log("Error in service layer");
        }
    }
}

module.exports=ChickenDataService;