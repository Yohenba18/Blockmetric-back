const schedule = require("node-schedule");
const AllData = require("../models/alldata");
const { getAllData } = require("../controllers/alldata");

schedule.scheduleJob("* * * * *", async function () {
  try {
    const data = await getAllData();
    await AllData.deleteMany();
    await AllData.create(data);
    console.log(data);
    // var time = new Date().getMinutes();
    // console.log("working!!!!!!!" + time);
  } catch (error) {
    console.log(error);
  }
});
