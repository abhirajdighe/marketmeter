const {MdataRepsitory} = require('../repository/index');


class MdataService{
    constructor(){
        this.mdataRepsitory = new MdataRepsitory();
    }

    async create(data){
        try{
            const mdata = await this.mdataRepsitory.insertData(data);
            return mdata;
        }catch(error){
            console.log('Error in Service layer');
        }
    }

    async getDatedData(data){
        try{
            const response = await this.mdataRepsitory.getDatedData(data);
            return response;
        }catch(error){
            console.log("Error in service layer");
        }
    }

    async get(){
        try{
            const response = await this.mdataRepsitory.getData();
            return response;
        }catch(error){
            console.log("Error in service layer");
            console.log(error) 
        }
    }

    async destroy(data){
        try{
            const response = await this.mdataRepsitory.destroy(data);
            return response;
        }catch(error){
            console.log("Error in service layer");
        }
    }
}

module.exports=MdataService;