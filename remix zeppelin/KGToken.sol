// //SPDX-License-Identifier: MIT
// pragma solidity ^0.8.17;


// // import를 하는데 nodemodules/openzeppelin/contracts/token/ERC20 가져오기

// import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

// contract KGToken is ERC20{
//     string public _name = "KGToken";
//     string public _symbol = "KTK";
//     uint public _totalSupply = 10000 * (10 ** decimals());
//     constructor() ERC20(_name, _symbol){
//         // 배포한 사람에게 총 발행량 주기
//         _mint(msg.sender,_totalSupply);
//     }
// }