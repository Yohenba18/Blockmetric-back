//change to suit ethereum

const speeds = [];

const getEthTransactionspeed = async (web3, data, name) => {
  try {
    const currentNumber = await web3.eth.getBlockNumber();
    const { blocktime, avgtransactionsize, avgblocksize } = await getBlockdata(
      web3,
      currentNumber
    );
    const transactionperblock = avgblocksize / avgtransactionsize;
    const throughput = transactionperblock / blocktime;
    console.log(Math.round(throughput / 2));

    if (name) {
      const newdata = {};
      newdata.name = name;
      newdata.value = Number(parseFloat(throughput / 2).toFixed(2));
      data.push(newdata);
    } else {
      data.transaction = parseFloat(throughput / 2).toFixed(2);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getBlockdata = async (web3, currentNumber) => {
  const span = 50;
  const times = [],
    transactioncounts = [],
    blocksize = [];
  const firstBlock = await web3.eth.getBlock(currentNumber - span);
  let prevTimestamp = firstBlock.timestamp;

  for (let i = currentNumber - span + 1; i <= currentNumber; i++) {
    const block = await web3.eth.getBlock(i);
    blocksize.push(block.size);
    transactioncounts.push(block.transactions.length);

    let time = block.timestamp - prevTimestamp;
    prevTimestamp = block.timestamp;
    times.push(time);
  }
  const avgblocksize = Math.round(
    blocksize.reduce((a, b) => a + b) / blocksize.length
  );
  const avgtransactionsize = Math.round(
    transactioncounts.reduce((a, b) => a + b) / transactioncounts.length
  );
  const blocktime = Math.round(times.reduce((a, b) => a + b) / times.length);
  console.log(blocktime, avgtransactionsize, avgblocksize);
  return { blocktime, avgtransactionsize, avgblocksize };
};

module.exports = { getEthTransactionspeed };
