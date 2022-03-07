const {getAllData} = require("../alldata");

const getDevelopersAllData = async (req, res) => {
  try {
    const data = await getAllData();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getDevelopersAllData };
