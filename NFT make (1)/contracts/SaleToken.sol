//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./NftToken.sol";

contract SaleToken {
    // 상태 변수인데 NftToken과 상호작용을 하기 위해서 만든 상태 변수
    NftToken public Token;


// 배포 단계에 상호작용을 하기위해 배포한 NftToken의 CA를 매개변수로 받아서 전달해준다.
    constructor(address _tokenAddress) {
        Token = NftToken(_tokenAddress);
    }
    // Token.getTokenRank(1) 이런식으로 상호작용 하면된다.

    // Token info 구조체
    struct Tokeninfo {
        uint tokenId;
        uint Rank;
        uint Type;
        uint price;
    }
    // token의 아이디 => price(토큰의 가격);
    mapping (uint => uint) public tokenPrices;

    // 판매중인 NFT의 토큰아이디 값을 담아놓은 상태변수.
    uint[] public SaleTokenList;
}