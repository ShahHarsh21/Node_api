const { createDevType , getDevType, getDeveTypeById,  updateDevType, deleteDevType} = require("./devicetype.service");

module.exports = {
  createDevType: (req, res) => {
    const body = req.body;
    createDevType(body, (error, result) => {
      if(error){
        return res.status(500).json({
            "success":0,
            "message":"Database connection error"
        })
    }
    return res.status(200).json({
        "success":1,
        "data":{'Devicetype':result.insertId}
    })
})
  },
  getDevType: (req, res) => {
    getDevType((err, result) => {
      if(err){
        return res.status(500).json({
            success:0,
            message:"Database connection error"
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
  getDeveTypeById: (req, res) => {
    const devtypeid = req.params.devtypeid;
    getDeveTypeById(devtypeid, (err, result) => {
      if(err){
        return res.json({
            "success":0,
            "message":"error"
        })
    }
    if(result.length == 0){
        return res.status(404).json({
            "success":0,
            "message":"Record Doesn't Exist!!"
        })
    }
    return res.json({
        "success":1,
        "data":{result}
    })
})
  },
  updateDevType: (req, res) => {
    const body = req.body;
    updateDevType(body, (err, result) => {
      if(err){
        return res.json({
            "success":0,
            "message":"Error"
        })
    }
    if(result.affectedRows != 0){
        return res.status(200).json({
            success:1,
            message:result.affectedRows+" "+'Device Type Updated Successfully!'
        })
    }

    return res.status(404).json({
        "success":1,
        "message":"Record Doesn't Exist!!"
    })
})
  },
  deleteDevType: (req, res) => {
    const devtypeid = req.params.devtypeid;
    deleteDevType(devtypeid, (error, result) => {
      if(error){
        return res.json({
            "success":0,
            "message":"error"
        })
    }
    if(result.affectedRows != 0){
        return res.status(200).json({
            success:1,
            message:result.affectedRows+" "+'Device Type Deleted Successfully!'
        })
    }
    return res.status(404).json({
        "success":0,
        "message":"Record Doesn't Exist!!"
    })
})
  },
};
