const {EggsDataRepsitory} = require('../repository/index');

class EggsDataService{
    constructor(){
        this.eggsDataRepsitory = new EggsDataRepsitory();
    }

    async create(data){
        try{
            const fdata = await this.eggsDataRepsitory.insertData(data);
            return fdata;
        }catch(error){
            console.log('Error in Service layer');
        }
    }

    async getDatedData(data){
        try{
            const response = await this.eggsDataRepsitory.getDatedData(data);
            return response;
        }catch(error){
            console.log("Error in service layer");
        }
    }

    async get(){
        try{
            const response = await this.eggsDataRepsitory.getData();
            return response;
        }catch(error){
            console.log("Error in service layer");
            console.log(error) 
        }
    }

    async destroy(data){
        try{
            const response = await this.eggsDataRepsitory.destroy(data);
            return response;
        }catch(error){
            console.log("Error in service layer");
        }
    }
}

module.exports=EggsDataService;