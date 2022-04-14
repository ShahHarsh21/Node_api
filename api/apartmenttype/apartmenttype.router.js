const { getapartmenttype,createapartmenttype,updateapartmenttype,deleteapartmenttype,getapartmenttypebyid } = require("./apartmenttype.controller");
const router = require("express").Router();

router.get("/",getapartmenttype);
router.post("/create",createapartmenttype);
router.patch("/update",updateapartmenttype);
router.delete("/delete/:apttypeid",deleteapartmenttype);
router.get("/:apttypeid",getapartmenttypebyid);

module.exports = router;