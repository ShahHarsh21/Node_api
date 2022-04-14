const {  getuser,createuser,updateuser,deleteuser,getuserbyid } = require("./user.controller");
const router = require("express").Router();

router.get("/",getuser);
router.post("/create",createuser);
router.patch("/update",updateuser);
router.delete("/delete/:user_id",deleteuser);
router.get("/:user_id",getuserbyid);

module.exports = router;