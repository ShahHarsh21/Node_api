const { createApt , getApt , getAptId , updateApt , deleteApt } = require("./apartment.service");

module.exports={
     createApt:(req,res)=>{
         const body=req.body;
         createApt(body,(err,result)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:err
                })
            }

            return res.status(200).json({
                success:1,
                data:{ApartmentId:result.insertId}
            })
         })
     },

     getApt:(req,res)=>{
         getApt((err,result)=>{
             if(err){
                 return res.status(500).json({
                     success:0,
                     message:err
                 })
             }
             if(result.length == 0){
                return res.status(404).json({
                    success:0,
                    message:"Record Doesn't Exist!!"
                })    
             }
             return res.status(200).json({
                 success:1,
                 data:{result}
             })
         })
     },

     updateApt:(req,res)=>{
        const body=req.body;
        updateApt(body,(err,result)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:err
                })
            }

            if(result.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:result.affectedRows+" "+'Apartment Updated Successfully!'
                })
            }

            return res.status(404).json({
                success:1,
                message:'Something Wrong Please try again!!'
            })
        })
     },

     getAptId:(req,res)=>{
         const id=req.params.id;
        getAptId(id,(err,result)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:err
                })
            }

            if(result.length == 0){
                return res.status(404).json({
                    success:0,
                    message:"Record Doesn't Exist!!"
                })
            }

            return res.status(200).json({
                success:1,
                data:{result}
            })
        })
    },

    deleteApt:(req,res)=>{
        const id=req.params.id;
        deleteApt(id,(err,result)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:err
                })
            }

            if(result.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:result.affectedRows+" "+'Apartment Deleted Successfully!'
                })
            }

            return res.status(404).json({
                success:1,
                message:'Something Wrong Please try again!!'
            })
        })
    }
}