const {  getroomtype,createroomtype,updateroomtype,deleteroomtype,getroomtypebyid } = require("./roomtype.controller");
const router = require("express").Router();

router.get("/",getroomtype);
router.post("/create",createroomtype);
router.patch("/update",updateroomtype);
router.delete("/delete/:roomtypeid",deleteroomtype);
router.get("/:roomtypeid",getroomtypebyid);

module.exports = router;