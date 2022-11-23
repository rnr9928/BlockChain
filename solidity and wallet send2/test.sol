/*솔리디티 버전*/
pragma solidity ^0.8.15;

// HelloWorld 컨트랙트
contract HelloWorld{
    string text;
    constructor(){
        text = "Ma Ban Gab Da";
    }

    function getText() public view returns(string memory){
        return text;
    }
    function setText(string memory value) public{
        text = value;
    }
}

// npm i solc

// 컴파일 명령어
//  npx solc --bin --abi [파일 경로]

// abi 파일은 스마트 컨트렉트 안에 매개변수나 함수들을 json형식으로 나타낸 리스트
// 함수를 호출하거나 데이터를 호출해서 받을 수 있다.
// 실제로 스마트 컨트랙트 안에서 바이트 코드로 변환되서 담겨 있다.

// bin : 컴파일된 바이트 코드내용 이더리움 네트워크 상에 배포

// EOA , CA 
// EOA 개인키를 가지고 트.잭을 생성하고 서명하는것
// CA는 개인키가 없고 트.잭 응답으로만 트.잭을 실행할 수 있다.

// CA안에 스마트 컨트렉트 내용이 담겨짐
// CA에 있는 코드 해시값을 통해서 스.컨 코드에 접근 가능
// CA는 스.컨 배포됬을때 생김
// 스.컨을 배포해서 생긴 CA를 조회해서 contractAddress를 사요옹
// CA에 있는 정보를 가지고 조회가 가능

// contractAddress는 스.컨안에 작성된 함수나 변수를 호출해서 값을 가져올때
// 사용하고 스.컨에 접근하기 위해서는 CA값이 있어야함

// contract= eth.contract(abi) 
// contract.at() at함수를 사용해서 스.컨 코드에 접근이 가능
// instance  = contract.at("0x68b6f763e4802944a6b5dadf22c6e7b8c0518857")

// contractAddress = eth.getTransactionReceipt('트.잭 해쉬')

// 상태변수를 가져오는 것과 변경하는것은 차이가 있는데
// 상태변수의 값을 바꾼다는건 저장 공간에 값이 달라진다는것이기 때문
// 네트워크에서 저장공간은 한계가 있어서 저장 용량을 바꾸기 위해 추가적으로 비용지불
// EVM을 실행시키기 위한 비용 지불
// 상태변수의 값을 바꾸려면 트.잭을 발생시켜 수수료를 지불 해야한다

// call함수는 데이터를 블러오는 함수
// 값을 전달해서 상태변수를 바꾸는건 send
// 트.잭을 보내서 배포하고 마이닝해서 트.잭 처리하고 setText 함수 실행