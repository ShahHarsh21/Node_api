const {createApt,getApt,getAptId,updateApt,deleteApt}= require("./apartment.controller");
const router = require("express").Router();

router.post("/create",createApt);
router.get("/",getApt);
router.get("/:id",getAptId);
router.patch("/update",updateApt);
router.delete("/delete/:id",deleteApt);

module.exports = router;