// typeScript로 블록 생성 만들기
// 환경 설정 
// ts-node설치
// npm i -D typescript ts-node @types/node

// tsconfig.json 만들기
// tsc --init

// npm i -D tsconfig-paths

// 필요한 모듈 설치
// 머클루트와 해시값이 필요
// crypto-js , merkle 설치

//  npm i crypto-js merkle

// typeScript는 외부 모듈을 사용할 경우에 타입 정의 파일 필요
// crypto-js, merkle 모듈 타입을 가져올 수 있는 모듈 설치

// npm i --save-dev @types/crypto-js
// npm i --save-dev @types/merkle

// 제네시스 블록 만들기

// TS로 블록체인을 만들어봤는데 객체 지향적인 방법으로 코드를 작성하고
//  OOP(객체 지향 프로그래밍)
// OOP는 프로그램의 설계방법 개념중 하나

// OOP는 프로그램을 단순히 실행 데이터 처리 방법만이 아니라
// 수많은 객체라는 단위를 만들어서 이 객체를 가지고 동작하는 상호작용을 서술한 방식
// OOP에서 객체는 하나의 역할을 수행하는 함수와 변수들의 묶음 데이터로 보면된다

// 이런 객체지향 프로그래밍은 프로그램을 만들때 제일 작은 단위부터 만들어가는 방식을 선호함
// 테스트가 어렵기 때문에 라이브러리를 이용해서 테스트

// 테스트 코드를 작성하면서 개발해나가는게 TDD기법
// npm i  -D ts-jest @types/jest babel-core
// npm i -D @babel/preset-typescript @babel/preset-env


// 체인 만들기

// block 클래스로 만든 블록들을 체인으로 연결시켜줄 chain을 클래스를 만들어보자
// chain 클래스에는 생성한 블록을 배열로 담아서 블록체인을 만들 예정
// 이전 블록 해시 값을 속성으로 가지고 있기 때문에 특정 블록기준으로 이전 블록 해시 값이 달라지면
// 현재 블록의 이전 해시값과 불일치가 발생해서 연결 고리가 끈긴다.
// chain클래스를 따로 만들어서 생성된 블록을 하나의 배열안에 담아주는 역할을 할 예정
// 마이닝 할때 난이도 계산을 하기 위해서

// 작업증명
// 영국 암호학자인 애덤백의 해시캐시 오늘날은 사토시라는 사람의 비트코인에 적용됨

// 해시캐시는 대량으로 스펨매일을 방지하고자 고안
// 이메일을 보내기 위해선 작업증명 알고리즘을 이용해 해시값을 찾고
//  그 보상으로 발행하는 토큰을 받음

// 작업증명 방식을 거래가 발생하면 해당 거래가 유용한지에 대한 합의 검증 방식
// 대표적인 합의 알고리즘 POW , POS , DPOS , POA 

// "작업 증명 방식"은 POW는 목표값 이하의 해시 값을 찾는 과정을 무수히 반복해서
// 해당작업에 참여했음을 증명하는 방식의 알고리즘

// 작업증명을 통과해야만 새로운 블록을 추가 생성 할 수 있게 된다는 점

// 작업증명 알고리즘은 Difficulty 조절 알고리즘을 이용해서 약 10분당 1개의 블록이 생성되는 것을 보장하게 된다



// 난이도 조정 블록 범위 => 10
// 블록의 생성 시간 (단위:분) =>10
// 생성 시간 단위 (단위 : 초) => 60

// Difficulty 조절 알고리즘은 다음 과 같이 설계 하자
// 블록한계가 생성되는 예상 시간을 10분으로 설정하고  10개의 블록을 한 묶음으로 해서 블록 한 묶음이 생성되는
// 예상시간을 6000초라는 값을 할당해주고 이후 10개의 블록이 생성되는데 걸리는 시간 timeExpected /2
// 보다 작을 경우 난이도 조절을 1증가 시키고 timeExpected*2 보다 클 경우에는 난이도를 1 감소 시키자 


// P2P 네트워크
// block 클래스랑 chain을 가지고
// p2p네트워크 http/ws 환경구성

// p2p네트워크를 만드는데 http와 ws 웹소캣을 사용해서
// api들을 구성하고 블록을 가져올 express모듈로 서버 동작을하고 P2P 네트워크를 웹소켓으로 구성

// 설치할 모듈

// npm i express
// npm i --save-dev @types/express

// npm i ws
// npm i --save-dev @types/ws