const getSolHashRate = async (connection, data) => {
  
  let samplesize = 1000;

  let slot = await connection.getSlot();
  
  let blockTime1 = await connection.getBlockTime(slot);
  let blockTime2 = await connection.getBlockTime(slot-samplesize);

  return data;
};

module.exports = { getSolHashRate };
