const AllData = require("../models/alldata");
const AllDevelopers = require("../models/alldevelopers");
const AllPrices = require("../models/allprices");
const AllTransactions = require("../models/alltransactions");

const DbAllData = async (req, res) => {
  try {
    const alldata = await AllData.find({});
    res.status(200).json(alldata);
  } catch (error) {
    console.log(error);
  }
};
const DbAllDeveloperslData = async (req, res) => {
  try {
    const alldevelopers = await AllDevelopers.findOne({});
    console.log(alldevelopers);
    res.status(200).json(alldevelopers);
  } catch (error) {
    console.log(error);
  }
};
const DbAllPricesData = async (req, res) => {
  try {
    const allprices = await AllPrices.findOne({});
    res.status(200).json(allprices);
  } catch (error) {
    console.log(error);
  }
};
const DbAllTransactionsData = async (req, res) => {
  try {
    const alltransactions = await AllTransactions.findOne({});
    res.status(200).json(alltransactions);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  DbAllData,
  DbAllPricesData,
  DbAllDeveloperslData,
  DbAllTransactionsData,
};
