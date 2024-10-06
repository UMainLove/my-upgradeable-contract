// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract VendingMachineV2 is Initializable {
    uint public numSodas;
    address public owner;
    uint public sodaPrice; // New state variable introduced in V2

    // Initializer function for V1
    function initialize(uint _numSodas) public initializer {
        numSodas = _numSodas;
        owner = msg.sender;
    }

    // Reinitializer function for V2
    function upgradeToV2(uint _sodaPrice) public reinitializer(2) {
        sodaPrice = _sodaPrice;
    }

    function purchaseSoda() public payable {
        require(msg.value >= sodaPrice, "Insufficient payment for a soda!");
        require(numSodas > 0, "No sodas left!");
        numSodas--;
    }

    function withdrawProfits() public onlyOwner {
        uint balance = address(this).balance;
        require(balance > 0, "No profits to withdraw!");
        (bool sent, ) = owner.call{value: balance}("");
        require(sent, "Failed to send ether");
    }

    function setNewOwner(address _newOwner) public onlyOwner {
        require(_newOwner != address(0), "New owner cannot be the zero address");
        owner = _newOwner;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }
}
