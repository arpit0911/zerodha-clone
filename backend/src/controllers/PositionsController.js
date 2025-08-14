const { PositionsModel } = require("../model/PositionsModel");

module.exports.getPositions = async (req, res) => {
  let allPositions = await PositionsModel.find({});

  res.json(allPositions);
};
