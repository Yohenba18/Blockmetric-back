
const data = [];

const getAllDevelopers = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error)
    }
    console.log(data);
    res
      .status(200)
      .json(data)
}

module.exports = { getAllDevelopers };