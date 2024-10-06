// scripts/upgradeProxy.js

const { ethers, upgrades } = require('hardhat');

async function main() {
  // Replace with the proxy address obtained after deploying VendingMachineV1
  const proxyAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

  console.log('Upgrading VendingMachineV1 to VendingMachineV2...');

  // Get the contract factory for VendingMachineV2
  const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');

  // Perform the upgrade
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

  console.log('Upgrade successful.');

  // Get the implementation address
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);

  // Get the current owner
  const owner = await upgraded.owner();
  console.log('The current contract owner is:', owner);

  console.log('Implementation contract address:', implementationAddress);

  // Initialize new variables if needed
  const tx = await upgraded.upgradeToV2(1000); // Initialize sodaPrice to 1000 wei
  await tx.wait();

  console.log('VendingMachineV2 initialized with sodaPrice = 1000 wei.');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error upgrading to VendingMachineV2:', error);
    process.exit(1);
  });
