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