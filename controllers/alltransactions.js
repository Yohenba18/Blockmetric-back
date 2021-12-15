
const data = [];

const getAllTransactions = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error)
    }
    console.log(data);
    res
      .status(200)
      .json(data)
}

module.exports = { getAllTransactions };