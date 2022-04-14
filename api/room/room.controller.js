const {  getroom,createroom,updateroom,deleteroom,getroombyid } = require("./room.service");

module.exports = {
  

    getroom:(req,res)=>{
        getroom((err,results)=>{
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
    createroom:(req,res)=>{
        const body=req.body;
        createroom(body,(error,results)=>{
            if(error){
                return res.status(500).json({
                    "success":0,
                    "message":"Database connection error"
                })
            }
            return res.status(200).json({
                "success":1,
                "data":{'Room':results.insertId}
            })
        })
    },
    updateroom:(req,res)=>{
        const body=req.body;
        updateroom(body,(error,results)=>{
            if(error){
                return res.json({
                    "success":0,
                    "message":"Error"
                })
            }
            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:results.affectedRows+" "+'Room Updated Successfully!'
                })
            }

            return res.status(404).json({
                "success":1,
                "message":"Record Doesn't Exist!!"
            })
        })
    },

    deleteroom:(req,res)=>{
        const roomid=req.params.roomid;
        deleteroom(roomid,(error,results)=>{
            if(error){
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:results.affectedRows+" "+'Room Deleted Successfully!'
                })
            }
            return res.status(404).json({
                "success":0,
                "message":"Record Doesn't Exist!!"
            })
        })
    },
    getroombyid:(req,res)=>{
        const roomid=req.params.roomid;
        getroombyid(roomid,(error,results)=>{
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