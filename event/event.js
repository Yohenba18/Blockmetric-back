const schedule = require("node-schedule");
const { getAllData } = require("../controllers/alldata");
const { getAllDevelopers } = require("../controllers/alldevelopers");
const { getAllPrice } = require("../controllers/allprices");
const { getAllTransactions } = require("../controllers/alltransactions");
const AllData = require("../models/alldata");
const AllDevelopers = require("../models/alldevelopers");
const AllPrices = require("../models/allprices");
const AllTransactions = require("../models/alltransactions");

// var rule = new schedule.RecurrenceRule()
// rule.minute = 2

const eventFunction = () => {
  // console.log("here");
  schedule.scheduleJob("*/20 * * * *", async () => {
    try {
      await AddAllData();
      await AddTransactionsData();
      await AddDevelopersData();
      await AddPricesData();
    } catch (error) {
      console.log("Event file: ", error);
    }
  });
};

const AddAllData = async () => {
  const data = await getAllData();
  await AllData.deleteMany();
  await AllData.create(data);
};

const AddDevelopersData = async () => {
  const data = await getAllDevelopers();
  await AllDevelopers.deleteMany();
  await AllDevelopers.create(data);
};
const AddPricesData = async () => {
  const data = await getAllPrice();
  await AllPrices.deleteMany();
  await AllPrices.create(data);
};
const AddTransactionsData = async () => {
  const data = await getAllTransactions();
  await AllTransactions.deleteMany();
  await AllTransactions.create(data);
};

module.exports = { eventFunction };
