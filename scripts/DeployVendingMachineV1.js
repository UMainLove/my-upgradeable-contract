const { ethers, upgrades } = require('hardhat');

async function main() {
  console.log('Deploying VendingMachineV1 proxy...');

  const VendingMachineV1 = await ethers.getContractFactory('VendingMachineV1');

  // Deploy the proxy
  const vendingMachine = await upgrades.deployProxy(VendingMachineV1, [100], {
    initializer: 'initialize',
  });

  // Wait for deployment to complete
  await vendingMachine.waitForDeployment();

  // Get the proxy contract address
  const vendingMachineAddress = await vendingMachine.getAddress();
  console.log('Proxy contract address:', vendingMachineAddress);

  // Interact with the contract
  const numSodas = await vendingMachine.numSodas();
  console.log('Number of sodas in the vending machine:', numSodas.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error deploying VendingMachineV1:', error);
    process.exit(1);
  });
