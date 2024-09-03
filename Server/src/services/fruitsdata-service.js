const {FruitsDataRepsitory} = require('../repository/index');


class FruitsDataService{
    constructor(){
        this.fruitsDataRepsitory = new FruitsDataRepsitory();
    }

    async create(data){
        try{
            const fdata = await this.fruitsDataRepsitory.insertData(data);
            return fdata;
        }catch(error){
            console.log('Error in Service layer');
        }
    }

    async getDatedData(data){
        try{
            const response = await this.fruitsDataRepsitory.getDatedData(data);
            return response;
        }catch(error){
            console.log("Error in service layer");
        }
    }

    async get(){
        try{
            const response = await this.fruitsDataRepsitory.getData();
            return response;
        }catch(error){
            console.log("Error in service layer");
            console.log(error) 
        }
    }

    async destroy(data){
        try{
            const response = await this.fruitsDataRepsitory.destroy(data);
            return response;
        }catch(error){
            console.log("Error in service layer");
        }
    }
}

module.exports=FruitsDataService;