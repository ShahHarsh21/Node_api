const {  getdevice,createdevice,updatedevice,deletedevice,getdevicebyid } = require("./device.controller");
const router = require("express").Router();

router.get("/",getdevice);
router.post("/create",createdevice);
router.patch("/update",updatedevice);
router.delete("/delete/:devid",deletedevice);
router.get("/:devid",getdevicebyid);

module.exports = router;