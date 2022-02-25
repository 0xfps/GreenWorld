const GreenWorld = artifacts.require("GreenWorld");
const IterableMapping = artifacts.require("IterableMapping");

module.exports = function (deployer) {
  deployer.deploy(IterableMapping);
  deployer.link(IterableMapping, GreenWorld);
  deployer.deploy(GreenWorld);
};
