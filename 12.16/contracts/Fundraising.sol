//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Fundraising {
    // 목표금액 상태변수 
    uint256 public targetAmount;

    // 컨트랙트의 소유자 펀딩의 주최자를 담을 상태 변수
    address public owner;

    // 펀딩에 참여한 사람들의 기부 금액
    // 참여한 사람의 주소가 key 금액이 value
    mapping(address => uint256) public donations;

    // 누적 총액을 담을 상태변수
    uint256 public reisedAmount =0;

    // 데드라인을 담을 상태변수
    // block은 컨트랙트가 배포될 때 이더리움 가상 머신에서 정의되는 객체
    // 컨트랙트를 업로드하는 블록의 정보를 가지고 있다.
    // weeks 단위도 이더리움 가상 머신에서 제공하는 단위
    uint256 public finishTime = block.timestamp + 2 weeks;

    constructor(uint _targetAmount) {
        // 목표 금액
        targetAmount = _targetAmount;

        // 컨트랙트 배포자 == 펀딩 주최자
        owner = msg.sender;
    }

    // 이더리움을 전송 받았을 때
    receive() external payable{
        // 데드라인 보다 시간이 남았을 떼
        require(block.timestamp < finishTime);

        // 누가 얼마를 후원했는지 맵핑 객체에 value를 넣고
        donations[msg.sender] += msg.value;
        // 총 누적 금액 value를 더해준다.
        reisedAmount += msg.value;
    }

// 펀딩 마감시 모인 금액 풀어주는 함수
    function withdrawDonations() external {
        // 배포자인지 확인
        require(msg.sender == owner);

        // 총액이 목표 금액과 크거나 같은지 확인
        require(reisedAmount >= targetAmount);

        // 데드라인 시간이 남ㄴ았는지 확인
        require(block.timestamp > finishTime);

        // 펀딩이 기간이 마감됬을 때 주최자한테 모금된 금액을 풀어주는 기능
        payable(owner).transfer(reisedAmount);
    }

    // 펀딩 마감되고 목표액에 도달 못했을때 환불 해주는 함수
    function refund() external{

        // 펀딩 시간이 종료된 이후에 환불
        require(block.timestamp > finishTime);

        // 목표 금액에 충족하지 못했을 때
        require(reisedAmount < targetAmount);

        // 환불 받을 금액이 있을 때
        require(donations[msg.sender] > 0);

        // 환불 받을 금액을 담고
        uint256 toRefund = donations[msg.sender];
        donations[msg.sender] = 0;

        // 참여자에게 기부액 환불
        payable(msg.sender).transfer(toRefund);
    }
 }