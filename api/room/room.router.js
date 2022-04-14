const {  getroom,createroom,updateroom,deleteroom,getroombyid } = require("./room.controller");
const router = require("express").Router();

router.get("/",getroom);
router.post("/create",createroom);
router.patch("/update",updateroom);
router.delete("/delete/:roomid",deleteroom);
router.get("/:roomid",getroombyid);

module.exports = router;