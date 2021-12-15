// const axios = require("axios");
const { RpcClient } = require("@taquito/rpc");
const client = new RpcClient("https://mainnet.smartpy.io");

const speeds = [];

const getTezTransactionspeed = async (data) => {
  try {
    const block1 = await client.getBlock()
    const block2 = await client.getBlock()
    // console.log(block1);
    // console.log(block2);

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getBlockdata = async (currentNumber) => {
  const span = 50;
  const times = [];
  const transactioncounts = [];
  const blocksize = [];
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

module.exports = { getTezTransactionspeed };
