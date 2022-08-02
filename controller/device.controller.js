const Device = require("../model/device.models");
const Sensor = require("../model/sensor.models");

const getOne = async (req, res, next) => {
  const { id } = req.params;

  const data = await Device.findOne({ id });
  const sensor = await Sensor.find({ sapi: id });

  res.json({ data, sensor });
  next();
};

const getAll = async (req, res, next) => {
  const data = await Device.find();

  res.json({ data });
  next();
};

const add = async (req, res, next) => {
  const { nama } = req.body;
  const id = (Math.random() * 10000).toFixed();
  const data = await Device.insertMany({ nama, id });

  res.json({ data });
  next();
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { nama } = req.body;
  const data = await Device.findOne({ id });

  if (nama) data.updateOne({ nama });

  res.json({ data });
  next();
};

const Delete = async (req, res, next) => {
  const { id } = req.params;
  await Device.deleteOne({ id });
  await Sensor.deleteMany({ sapi: id });

  res.json({ message: "berhasil dihapus" });
  next();
};

const addSensor = async (req, res, next) => {
  const { id } = req.params;
  const { heart_rate } = req.body;
  const time = Date.now();

  const data = await Sensor.insertMany({ sapi: id, heart_rate: heart_rate, time });
  await Device.updateOne({ id }, { heart_rate: heart_rate });
  res.json({ data });
  next();
};

module.exports = { add, getOne, getAll, update, Delete, addSensor };
