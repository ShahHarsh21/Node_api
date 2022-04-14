const {  getuser,createuser,updateuser,deleteuser,getuserbyid } = require("./user.service");

module.exports = {
  

    getuser:(req,res)=>{
        getuser((err,results)=>{
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
    createuser:(req,res)=>{
        const body=req.body;
        createuser(body,(error,results)=>{
            if(error){
                return res.status(500).json({
                    "success":0,
                    "message":"Database connection error"
                })
            }
            return res.status(200).json({
                "success":1,
                "data":{'User':results.insertId}
            })
        })
    },
    updateuser:(req,res)=>{
        const body=req.body;
        updateuser(body,(error,results)=>{
            if(error){
                return res.json({
                    "success":0,
                    "message":"Error"
                })
            }
            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:results.affectedRows+" "+'User Updated Successfully!'
                })
            }

            return res.status(404).json({
                "success":1,
                "message":"Record Doesn't Exist!!"
            })
        })
    },

    deleteuser:(req,res)=>{
        const user_id=req.params.user_id;
        deleteuser(user_id,(error,results)=>{
            if(error){
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:results.affectedRows+" "+'User Deleted Successfully!'
                })
            }
            return res.status(404).json({
                "success":0,
                "message":"Record Doesn't Exist!!"
            })
        })
    },
    getuserbyid:(req,res)=>{
        const user_id=req.params.user_id;
        getuserbyid(user_id,(error,results)=>{
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