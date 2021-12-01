const web3 = require("@solana/web3.js");

const connection = new web3.Connection(
  web3.clusterApiUrl("mainnet-beta"),
  "confirmed"
);
// mainnet-beta

const getSolanaData = async (req, res) => {
  try {
    // var wallet = web3.Keypair.generate();
    // var airdropSignature = await connection.requestAirdrop(
    //   wallet.publicKey,
    //   web3.LAMPORTS_PER_SOL
    // );
    // console.log(wallet);
    // await connection.confirmTransaction(airdropSignature);
    // let account = await connection.getAccountInfo(wallet.publicKey);
    // console.log(account);
    let slot = await connection.getSlot();
    console.log(slot);
    // 93186439

    let blockTime = await connection.getBlockTime(slot);
    console.log(blockTime);
    // // 1630747045
    console.log(tx.serializeMessage().toString("base64"));

    // let block = await connection.getBlock(slot);
    // console.log(block);

    res.status(200).json("working!!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSolanaData };
