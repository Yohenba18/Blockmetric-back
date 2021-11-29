const solanaWeb3 = require("@solana/web3.js");

const connection = new solanaWeb3.Connection(
  solanaWeb3.clusterApiUrl("mainnet-beta"),
  "confirmed"
);

const getSolanaData = async (req, res) => {
  try {
    await console.log(connection.getBlockTime(1000));
    res.status(200).json("working!!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSolanaData };
