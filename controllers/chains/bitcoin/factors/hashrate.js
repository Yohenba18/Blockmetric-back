const getBitHashRate = async (web3, data) => {

  const sampleSize = 200;
  const blocknum = await web3.eth.getBlock("latest");
  const hash1 = await web3.eth.getBlock(blocknum.number);
  const hash2 = await web3.eth.getBlock(blocknum.number - sampleSize);
  const blocktime = (hash1.timestamp - hash2.timestamp) / sampleSize;
  const difficulty = hash1.difficulty;
  data.hash = Math.floor((difficulty / blocktime)/10**12);
  return data;
};

module.exports = { getBitHashRate };
