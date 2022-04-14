const {  getroomtype,createroomtype,updateroomtype,deleteroomtype,getroomtypebyid } = require("./roomtype.service");

module.exports = {
  

    getroomtype:(req,res)=>{
        getroomtype((err,results)=>{
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
    createroomtype:(req,res)=>{
        const body=req.body;
        createroomtype(body,(error,results)=>{
            if(error){
                return res.status(500).json({
                    "success":0,
                    "message":"Database connection error"
                })
            }
            return res.status(200).json({
                "success":1,
                "data":{'RoomType':results.insertId}
            })
        })
    },
    updateroomtype:(req,res)=>{
        const body=req.body;
        updateroomtype(body,(error,results)=>{
            if(error){
                return res.json({
                    "success":0,
                    "message":"Error"
                })
            }
            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:results.affectedRows+" "+'Room Type Updated Successfully!'
                })
            }

            return res.status(404).json({
                "success":1,
                "message":"Record Doesn't Exist!!"
            })
        })
    },

    deleteroomtype:(req,res)=>{
        const roomtypeid=req.params.roomtypeid;
        deleteroomtype(roomtypeid,(error,results)=>{
            if(error){
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:results.affectedRows+" "+'Room Type Deleted Successfully!'
                })
            }
            return res.status(404).json({
                "success":0,
                "message":"Record Doesn't Exist!!"
            })
        })
    },
    getroomtypebyid:(req,res)=>{
        const roomtypeid=req.params.roomtypeid;
        getroomtypebyid(roomtypeid,(error,results)=>{
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