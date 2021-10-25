const CATO = artifacts.require("CATO");

async function deployTestnet(deployer) {
  const CATOTokenDeploy = await deployer.deploy(CATO);
  console.log(`Deploy: CATO Token Address = ${CATOTokenDeploy.address}`);
}

module.exports = function (deployer) {
  deployer.then(async () => {
    console.log(deployer.network);
    switch (deployer.network) {
      case "bsctestnet":
        await deployTestnet(deployer);
        break;
      case "bscmainnet":
        await deployTestnet(deployer);
        break;
      case "rinkeby":
        await deployTestnet(deployer);
        break;
      default:
        throw "Unsupported network";
    }
  });
};
