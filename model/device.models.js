const { model, Schema } = require("mongoose");

const Device = model(
  "device",
  new Schema({
    nama: { type: String, required: true },
    id: { type: Number, unique: true },
    heart_rate: Number,
  })
);

module.exports = Device;
