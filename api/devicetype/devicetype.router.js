const {
  createDevType,
  getDevType,
  getDeveTypeById,
  updateDevType,
  deleteDevType,
} = require("./devicetype.controller");
const router = require("express").Router();

router.post("/create", createDevType);
router.get("/", getDevType);
router.get("/:devtypeid", getDeveTypeById);
router.patch("/update", updateDevType);
router.delete("/delete/:devtypeid", deleteDevType);
module.exports = router;
