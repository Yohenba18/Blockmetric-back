const getEthHashRate = async (web3, data) => {
  await web3.eth.getHashrate((error, result) => {
    if (!error) {
      data.hashrate = Number(result);
      return data;
    } else {
      console.log(error);
    }
  });
  // web3.eth.getHashrate().then(console.log);
  // res.status(200).json("working!!");
};

module.exports = { getEthHashRate };
