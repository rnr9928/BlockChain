// ERC-20 스.컨 토큰 발행

// ERC-20은 이더리움 네트워크에서 표준 토큰
// 정해진 규격대로 만들어 줘야한다
// 그래야 토큰을 생성
// 변수명도 정해진대로 만들어줘야한다

// 토큰의 이름 name
// 토큰의 단위 symbol이라는 변수에 담긴 내용은 토큰의 단위 ETH
// balances 잔액의 내용이 들어있다 UTXO 같은느낌

/*

token {
    name : String;
    symbol : String;
    balances: balance[];
}

balances = [
    {
        address : "주소",
        amount : "잔액"
    },

{
    address : String;
    amount : Number;
}
]
*/

// 솔리디티의 address 라는 데이터 타입
// 20byte 짜리 데이터 타입이고 계정이나 주소가 40글자로 만들어진
// 20byte 짜리 문자열 address는 string타입이고 20byte 저장공간을 가지고 있다.

// mapping(string => uint256)
// mapping 데이터 타입은 우리가 JS에서 사용한 객체라고 보면 된다
// string이 속성명 uint256속성값이 된다.


// 컨트랙트에서 인스턴스 생성할때 constructor() 함수에 매개변수를 추가해서
// 인스턴스 생성을 할 수 있다. 우리가 생성하는건 배포하기 전에 매개변수를 전달해줘야 한다.

// web3.eth.getTransaction("0x40059fc720ba80f08b3575468a28f4368de30f54756ad894c888fadd2696fbdb") //배포후 해쉬값







// Test2.deployed().then(its => it = its);
// it.owner() 조회하면 배포한 사람의 주소가 뜬다.

// 응용을 해서 토큰을 만들어보자 토큰 발행
// Token.sol 파일 만들고 2_deploy_Test 파일 수정 Test2를 Token으로 바꾸고
// deploy의 매개변수 두번째 매개변수 지우고 50지우고

// 배포진행
// Token.deployed().then(its => it = its);
// 인스턴스 조회

// it.balanceOf("코인베이스 계정")  //총 발행량 확인 가능
// it.transfer("0x4ff0d86e3d0a6D3b50C1B40a084d8C00327B588B",100)  // 두번째 계정에 100 토큰 보내면
//  it.balanceOf("두번째 계정") // 받은 토큰 확인 가능


// Available Accounts
// ==================
// (0) 0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1 (100 ETH)
// (1) 0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0 (100 ETH)
// (2) 0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b (100 ETH)
// (3) 0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d (100 ETH)
// (4) 0xd03ea8624C8C5987235048901fB614fDcA89b117 (100 ETH)
// (5) 0x95cED938F7991cd0dFcb48F0a06a40FA1aF46EBC (100 ETH)
// (6) 0x3E5e9111Ae8eB78Fe1CC3bb8915d5D461F3Ef9A9 (100 ETH)
// (7) 0x28a8746e75304c0780E011BEd21C72cD78cd535E (100 ETH)
// (8) 0xACa94ef8bD5ffEE41947b4585a84BdA5a3d3DA6E (100 ETH)
// (9) 0x1dF62f291b2E969fB0849d99D9Ce41e2F137006e (100 ETH)

// Private Keys
// ==================
// (0) 0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d
// (1) 0x6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1
// (2) 0x6370fd033278c143179d81c5526140625662b8daa446c22ee2d73db3707e620c
// (3) 0x646f1ce2fdad0e6deeeb5c7e8e5543bdde65e86029e2fd9fc169899c440a7913
// (4) 0xadd53f9a7e588d003326d1cbf9e4a43c061aadd9bc938c843a79e7b4fd2ad743
// (5) 0x395df67f0c2d2d9fe1ad08d1bc8b6627011959b79c53d7dd6a3536a33ab8a4fd
// (6) 0xe485d098507f54e7733a205420dfddbe58db035fa577fc294ebd14db90767a52
// (7) 0xa453611d9419d0e56f499079478fd72c37b251a94bfde4d19872c44cf65386e3
// (8) 0x829e924fdf021ba3dbbc4225edfece9aca04b929d6e75613329ca6f1d31c0bb4
// (9) 0xb0057716d5917badaf911b193b12b910811c1497b5bada8d7711f758981c3773