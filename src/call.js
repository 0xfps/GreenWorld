const Web3 = require("web3");
const abi = require("../build/contracts/GREENTEST.json");

const web3 = new Web3(
  new Web3.providers.WebsocketProvider(
    "https://data-seed-prebsc-1-s1.binance.org:8545/"
  )
);

const contract = new web3.eth.Contract(abi, "contract address");

setTradingIsEnabled;

const setTradingIsEnabled = async () => {
  await contract.methods.setTradingIsEnabled(true);
};
