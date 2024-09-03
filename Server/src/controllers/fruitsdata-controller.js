const {FruitsDataService} = require('../services/index');

const fruitsDataService = new FruitsDataService();

const create = async(req,res)=>{
    try{
        const mdata = await fruitsDataService.create(req.body);
        return res.status(201).json({
            data:mdata,
            success:true,
            message:'Successfully inserted fruit data',
            err:{}
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able insert fruit data',
            err:error
        })
    }
}

const getDatedData=async (req,res)=>{
    try{
        const response = await fruitsDataService.getDatedData(req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully fetchd fruit price',
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
        const response = await fruitsDataService.get();
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully fetchd fruits data',
            err:{}
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get fruits data",
            err:error
        })
    }
}

const destroy=async (req,res)=>{
    try{
        const response = await fruitsDataService.destroy(req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully deleted fruit data',
            err:{}
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete fruit data",
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