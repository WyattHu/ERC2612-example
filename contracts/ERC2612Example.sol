// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract ERC2612Example is ERC20Permit {
    constructor(
        uint initialSupply
    ) ERC20("TestToken", "TTK") ERC20Permit("TestToken") {
        _mint(msg.sender, initialSupply);
    }
}
