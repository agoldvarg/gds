// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");
var Strings = artifacts.require("./Strings.sol");
var Skywalker = artifacts.require("./Skywalker.sol");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(Strings);
  // deployer.link(Strings, Skywalker);
  deployer.deploy(Skywalker);
};
