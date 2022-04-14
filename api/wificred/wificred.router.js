const {
  createWifiCred,
  getWifiCred,
  getWifiCredById,
  wificredDelete,
  wificredUpdate,
} = require("./wificred.controller");
const router = require("express").Router();

router.post("/create", createWifiCred);
router.get("/", getWifiCred);
router.get("/:id", getWifiCredById);
router.patch("/update", wificredUpdate);
router.delete("/delete/:id", wificredDelete);

module.exports = router;
