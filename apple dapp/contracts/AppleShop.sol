//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract AppleShop{
    // address 속성명 , uint 속성값 myApple 변수명의 객체
    mapping(address => uint) myApple;
    mapping(address => uint) myBanana;
    mapping(address => uint) myWatermelon;

    // payable 속성이 있을 때 CA는 ETH를 받을 수 있따.
    // 트.잭 객체에 value값을 ETH로 전달할 수 있다.

    function buyApple() public payable{
        myApple[msg.sender] +=1;
    }

    function sellApple(uint applePrice) public payable{
        uint256 refund = myApple[msg.sender] * applePrice;
        myApple[msg.sender] = 0;
        // payable 함수의 매개변수로 주소를 전달해준다
        // 전달한 주소의 계정에 돈을 보내줌
        // 보내주는 돈은 사과의 갯수

        payable(msg.sender).transfer(refund);
    }

    // 가지고있는 사과 확인 함수
    function getApple() view public returns (uint){
        return myApple[msg.sender];
    }
    function buyBanana() public payable{
        myBanana[msg.sender] +=1;
    }

    function sellBanana(uint bananaPrice) public payable{
        uint256 refund = myBanana[msg.sender] * bananaPrice;
        myBanana[msg.sender] = 0;
        // payable 함수의 매개변수로 주소를 전달해준다
        // 전달한 주소의 계정에 돈을 보내줌
        // 보내주는 돈은 사과의 갯수

        payable(msg.sender).transfer(refund);
    }

    // 가지고있는 사과 확인 함수
    function getBanana() view public returns (uint){
        return myBanana[msg.sender];
    }
    function buyWatermelon() public payable{
        myWatermelon[msg.sender] +=1;
    }

    function sellWatermelon(uint watermelonPrice) public payable{
        uint256 refund = myWatermelon[msg.sender] * watermelonPrice;
        myWatermelon[msg.sender] = 0;
        // payable 함수의 매개변수로 주소를 전달해준다
        // 전달한 주소의 계정에 돈을 보내줌
        // 보내주는 돈은 사과의 갯수

        payable(msg.sender).transfer(refund);
    }

    // 가지고있는 사과 확인 함수
    function getWatermelon() view public returns (uint){
        return myWatermelon[msg.sender];
    }
}