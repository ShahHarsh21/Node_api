const {  getdevice,createdevice,updatedevice,deletedevice,getdevicebyid } = require("./device.service");

module.exports = {
  

    getdevice:(req,res)=>{
        getdevice((err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                })
            }
            if(results.length == 0){
                return res.status(404).json({
                    success:0,
                    message:"Record Doesn't Exist!!"
                })
            }
            return res.status(200).json({
                success:1,
                data:{results}
            })
        })
    },
    createdevice:(req,res)=>{
        const body=req.body;
        createdevice(body,(error,results)=>{
            if(error){
                return res.status(500).json({
                    "success":0,
                    "message":"Database connection error"
                })
            }
            return res.status(200).json({
                "success":1,
                "data":{'Device':results.insertId}
            })
        })
    },
    updatedevice:(req,res)=>{
        const body=req.body;
        updatedevice(body,(error,results)=>{
            if(error){
                return res.json({
                    "success":0,
                    "message":"Error"
                })
            }
            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:results.affectedRows+" "+'Device Updated Successfully!'
                })
            }

            return res.status(404).json({
                "success":1,
                "message":"Record Doesn't Exist!!"
            })
        })
    },

    deletedevice:(req,res)=>{
        const devid=req.params.devid;
        deletedevice(devid,(error,results)=>{
            if(error){
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:results.affectedRows+" "+'Device Deleted Successfully!'
                })
            }
            return res.status(404).json({
                "success":0,
                "message":"Record Doesn't Exist!!"
            })
        })
    },
    getdevicebyid:(req,res)=>{
        const devid=req.params.devid;
        getdevicebyid(devid,(error,results)=>{
            console.log(error);
            if(error){
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            if(results.length == 0){
                return res.status(404).json({
                    "success":0,
                    "message":"Record Doesn't Exist!!"
                })
            }
            return res.json({
                "success":1,
                "data":{results}
            })
        })
    },
 
 
}