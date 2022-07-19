var express = require("express");
const {
  getAll,
  getOne,
  update,
  Delete,
  add,
  addSensor,
} = require("../controller/device.controller");
var router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", add);
router.patch("/:id", update);
router.delete("/:id", Delete);

router.post("/:id/sensor", addSensor);

module.exports = router;
