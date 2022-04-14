const {  getapartmenttype,createapartmenttype,updateapartmenttype,deleteapartmenttype,getapartmenttypebyid } = require("./apartmenttype.service");

module.exports = {
  

    getapartmenttype:(req,res)=>{
        getapartmenttype((err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                })
            }
            if(results.length == 0){
                return res.status(404).json({
                    success:1,
                    message:"Record Doesn't Exist!!"
                })                
            }
            return res.status(200).json({
                success:1,
                data:{results}
            })
        })
    },
    createapartmenttype:(req,res)=>{
        const body=req.body;
        createapartmenttype(body,(error,results)=>{
            if(error){
                return res.status(500).json({
                    "success":0,
                    "message":"Database connection error"
                })
            }
            return res.status(200).json({
                "success":1,
                "data":{'ApartmentType':results.insertId}
            })
        })
    },

    updateapartmenttype:(req,res)=>{
        const body=req.body;
        updateapartmenttype(body,(error,results)=>{
            if(error){
                return res.json({
                    "success":0,
                    "message":"Error"
                })
            }
            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:results.affectedRows+" "+'Apartment Type Updated Successfully!'
                })
            }

            return res.status(404).json({
                "success":1,
                "message":"Record Doesn't Exist!!"
            })
        })
    },

    deleteapartmenttype:(req,res)=>{
        const apttypeid=req.params.apttypeid;
        deleteapartmenttype(apttypeid,(error,results)=>{
            if(error){
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:results.affectedRows+" "+'Apartment Type Deleted Successfully!'
                })
            }
            return res.status(404).json({
                "success":0,
                "message":"Record Doesn't Exist!!"
            })
        })
    },
    getapartmenttypebyid:(req,res)=>{
        const apttypeid=req.params.apttypeid;
        getapartmenttypebyid(apttypeid,(error,results)=>{
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