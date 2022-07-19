const { model, Schema } = require("mongoose");

const Sensor = model(
  "sensor",
  new Schema({
    sapi: Number,
    heart_rate: { type: Number },
    time: Number,
  })
);

module.exports = Sensor;
