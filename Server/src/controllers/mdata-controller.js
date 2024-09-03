const {MdataService} = require('../services/index');

const mdataService = new MdataService();

const create = async(req,res)=>{
    try{
        const mdata = await mdataService.create(req.body);
        return res.status(201).json({
            data:mdata,
            success:true,
            message:'Successfully inserted data',
            err:{}
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able insert data',
            err:error
        })
    }
}

const getDatedData=async (req,res)=>{
    try{
        const response = await mdataService.getDatedData(req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully fetchd price',
            err:{}
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get price",
            err:error
        })
    }
}

const get=async (req,res)=>{
    try{
        const response = await mdataService.get();
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully fetchd data',
            err:{}
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get data",
            err:error
        })
    }
}

const destroy=async (req,res)=>{
    try{
        const response = await mdataService.destroy(req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully deleted data',
            err:{}
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete data",
            err:error
        })
    }
}


module.exports={
    create,
    getDatedData,
    get,
    destroy,
}