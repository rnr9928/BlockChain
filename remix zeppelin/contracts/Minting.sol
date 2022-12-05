//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract Minting is ERC721 {
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol){

    }

    function _minting(uint _tokenId) public {
        _mint(msg.sender, _tokenId);
        // _tokenId 키값 조회하면 누가 토큰의 소유자 인지 확인가능
        // _tokenId : 토큰의 고유값 , msg.sender 토큰을 받는 계정
    }
    function tokenURI(uint) public override pure returns (string memory){
        return "https://gateway.pinata.cloud/ipfs/QmfU42Aj76Fbee1eLFcLkmWk5uMGLs1B4dHsUkhyBWER4H";
        //반환값은 우리가 만들어서 넣어줄 json객체
        // pure는 state값을 변경할 수 없다.
        // 이 함수 밖에 있는 값을 읽어올수 도 없고 변경도 불가능
    }
}