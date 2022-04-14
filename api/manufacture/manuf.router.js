const {
  createManuf,
  getManuf,
  getMenufById,
  updateMenuf,
  deleteMenuf,
} = require("../manufacture/manuf.controller");
const router = require("express").Router();

router.post("/create", createManuf);
router.get("/", getManuf);
router.get("/:manfdevid", getMenufById);
router.patch("/update", updateMenuf);
router.delete("/delete/:manfdevid", deleteMenuf);

module.exports = router;
