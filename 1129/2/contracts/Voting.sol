// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Voting{
    string[] public candidateList;
    mapping(string => uint8) public votesReceived;

    // {
    //     "후보 이름" : 0,
    //     "후보 이름" : 2,
    // }

    constructor(string[] memory candidateNames){
        // 후보자들 초기화 배열 전달
        candidateList = candidateNames;
    }

    // 후보자 표 갯수 확인
    function totalVotesFor(string memory candidate) public view returns(uint8){
        require(validCandidate(candidate));
        return votesReceived[candidate];  //검증을 마친 후보자의 표 갯수 반환
    }

// 후보자 투표 해주는 함수
    function voteForCandidate(string memory candidate) public {
        // 있는 후보자인지 확인
          require(validCandidate(candidate));
          votesReceived[candidate] +=1;
    }

    // 후보자 확인 검증
    function validCandidate(string memory candidate) private view returns (bool){
        // candidateList 후보자 리스트를 돌면서 일치하는 후보자가 있는 확인 해주는 함수
        for(uint i=0; i< candidateList.length; i++){
            // keccak256() 이 함수로 string값을 해싱해서 16진수로 바꾼다음
            // 해시값 비교
            // 스.컨에서 문자열을 비교할 수가 없어서 keccak256함수로 값을 해싱해서 비교한다
            if(keccak256(abi.encodePacked(candidateList[i])) ==keccak256(abi.encodePacked(candidate)))
            {
                return true;
            }
        }
        return false;
        
    }

}