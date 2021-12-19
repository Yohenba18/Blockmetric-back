const {
  getEthTransactionspeed,
} = require("./chains/ethereum/factors/transaction");
const {
  getSolTransactionspeed,
} = require("./chains/solana/factors/transaction");

var Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_ID));

const solanaweb3 = require("@solana/web3.js");

const connection = new solanaweb3.Connection(
  solanaweb3.clusterApiUrl("mainnet-beta"),
  "confirmed"
);

const data = [];

const getAllTransactions = async (req, res) => {
  try {
    await getEthTransactionspeed(web3, data, "Ethereum");
    await getSolTransactionspeed(connection, data, "Solana");
  } catch (error) {
    console.error(error);
  }
  res.status(200).json({
    title: "Transaction speed",
    column: "Transaction(/sec)",
    data: data,
  });
};

module.exports = { getAllTransactions };