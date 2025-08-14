const { HoldingsModel } = require("../model/HoldingsModel");


module.exports.getHoldings = async (req, res) => {
  let allHoldings = await HoldingsModel.find({});

  res.json(allHoldings);
};
