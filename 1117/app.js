// 22.11.16 수

// Go 설치

// Geth (go-ethereum) 빌드 시 필요한 언어
// Go 언어로 만든 이더리움 클라이언트 소프트웨어

// 우분투 접속
// cmd - wsl

// 우분투 접속 종료
// exit

// 권한이 필요한 명령어 sudo

// sudo apt update
// sudo apt install golang
// sudo apt install -y libgmp3-dev tree make build-essential

// go 버전 업데이트 명령어
// git clone https://github.com/udhos/update-golang
// cd update-golang
// sudo ./update-golang.sh\

// go version
// 1.6 버전 이상이어야 함
// https://github.com/golang/go/wiki/Ubuntu
// sudo add-apt-repository ppa:longsleep/golang-backports
// sudo apt update
// sudo apt install golang-go

// 해당 경로의 파일 확인
// ls -a

// 최상위 경로로 이동
// cd ~

// 폴더 생성
// mkdir Ethereum

// cd  Ethereum
// git clone https://github.com/ethereum/go-ethereum
// cd go-ethereum
// make geth

// 빌드 오류 시 해당 폴더 삭제
// sudo rm -r go-ethereum

// 빌드된 경로로 이동
// cd ./build/bin

// ./geth version

// geth 실행
// ./geth

// 환경 변수 설정

// 현재 폴더의 절대 경로
// pwd

// vi ~/.bash_profile
// 수정 (i) - 작성 - esc - :wq!
// export PATH=$PATH: /home/rnr9928/Ethereum/go-ethereum/build/bin

// source ~/.bash_profile
// 이제 어느 경로든 geth 실행 가능


// 일반 터미널에서
// 가나쉬 설치 명령어
// 가나쉬 로컬에서 이더리움 블록체인 가상 네트워크를 생성할 수 있게 해준다
//  테스트를 할 수 있도록
// 가나쉬로 생성된 네트워크에서는
// 채굴 기능x P2P기능도 x 
// 블록 / 체인 / Tx와 관련된 기능만 있다
// 1tx에 1개의 블록 생성
// 가나쉬로 트랜잭션을 발생시키면 실시간 확인이 가능해서 테스트에 용이하다



// npm i -g ganache-cli

// npx  ganache-cli

// 비트 코인과 이더리움 차이
// 이더리움 가장 큰 특징 스마트 컨트랙트를 구현할 수 있다.
// 비트코인은 트.잭을 만들면 계정의 소유자가 다른 계정의 소유자가 다른 계정의 소유자에게 10 코인을 전송
// 같은 거래를 주로 했는데

// 이더리움은 스마트 컨트랙트를 사용해서 기능 구현이 가능하다
// 스마트 컨트랙트는 거래에 대한 조건에 충족한 계약 형태의 거래를 가능하게 해준다
// 코인을 받고 물건을 전달하는 거래 뿐만 아니라 조건에 따라 특정한 코드가 실행되서
// 거래를 할 수 있게끔 추가 조건들을 기능으로 구현할 수 있다.
// 스마트 컨트랙트를 작성할 때 솔리디티를 사용해서 스마트 컨트랙트를 작성할 수 있다.

// 스마트 컨트랙트를 구현할 때 이더리움 EVM이라는걸 사용하고 , 
// Account , Transaction의 내용도 좀 다르다.

// EVM
// 이더리움 가상 머신의 약자 자바를 알면 JVM 이런 개념과 비슷한 기능
// 스마트 컨트랙트를 실행할 때 분산 네트워크 환경에서 모든 노드들이 스마트 컨트랙트에 의해
// 특정한 결과를 얻어야할때 솔리디티 언어로 작성한 코드를 EVM을 통해 실행 시키게 한다..

// 1. 솔리디티로 컨트랙트 코드작성
// 2. 바이트 코드로 컴파일
// 3. EVM에서 컴파일된 바이트 코드 실행
// 이더리움 스마트 컨트랙트라는 프로그램을 실행할 수 있는 플랫폼으로 기능할 수 있는
// 핵심은 EVM이라는 가상 컴퓨터가 있기 때문이다.
// 우리가 만든 규칙에 따라 스마트 컨트랙트 코드를 실행하고
//  그 결과를 업데이트 해준다.

// Account 
// 이더리움 네트워크에는 EOA, CA라는 두 종류의 계정이 존재하고
// EOA는 외부 소유 계정 (Externally Owned Account)
// 개인키로 제어되는 계정으로 코드를 저장하지 않는다.
// 스마트 컨트랙트에 대한 접근을 제어 한다.

// EOA로 트.잭을 시작할 수 있다.
// EOA는 다른 EOA또는 CA에 메시지를 보낼 수 있으며 이 동작은 개인키를 사용해서 트.잭을 만들고
// 서명하고 두개의 EOA사이에서 발생하는 메시지는 단순히 ETH만을 전송
// EOA에서 CA에 보내는 메시지는 CA에 저장된 코드를 활성화 시킨다,.
// 명령 EOA가 전송한 트.잭 부터 시작된다고 보면 된다.

// CA 계약 계정
// 스마트 컨트랙트의 로직에서 제어를 하고 스마트 컨트랙트 코드를 저장할 수 있다.
// 개인키가 없고 스스로 트.잭을 시작할 수 가 없다.
// 외부에서 트.잭에 대한 응답을 통해 트.잭을 실행 할 수 있다.
// CA는 EOA와 다르게 개인키를 가지고 있지 않고 스스로 트.잭을 생성할 수 도 없다.
// CA는 다른 CA or EOA로 부터 받은 트.잭에 대한 응답으로만 트.잭을 실행할 수 있다.

// Transaction
// 이더리움 네트워크에서 트.잭은 EOA에의해 서명 되고
// 속성들은 
// from: 보내는 계정
// to: 받는 계정
// nonce: 보내는 계정이 발생시킨 총 트.잭 횟수
// value: 보내는 금액
// gasLimit : 트.잭이 사용할 수 있는 가스의 최대치
// gasPrice : 보내는 사람이 지불할 가스 가격
// data : 트.잭에 담을 데이터
// 비트코인 네트워크와 다른 점이 이더리움 네트워크는 가스비(gas fee) 라는 개념이 있다.
// 가스는 이더리움 네트워크에서 트.잭을 생성할때 보내는 사람이 부담하는 수수료의 개념

// Web3 라이브러리를 사용하면 노드간의 통신을 할 때
// RPC라는 개념
// RPC라는 개념이 나온 이유
// 분산 네트워크를 프로그래밍으로 쉽게 어떻게 해야할까

// 일반적으로 통신 패턴은
// 서버를 켜고
// 클라이언트에서 서버에 데이터나 행동을 요청 
// 서버는 그 데이터를 받고 요청받은 응답을 반환해주고
// 클라이언트 서버로 부터 응답 값을 받아서 본인의 요청을 결과로 받을 수 있다.

// RPC는 원격 프로시저 호출 별도의 원격 제어를 위한 코딩없이 다른 주소 공간에서
// 함수나 프로시저를 실행할 수 있게하는 프로세스 간 통신 기술
// 원격 프로시저를 호출하면 프로그래머가 함수를 실행 프로그램에 로컬 위치에
// 원격 위치에 있든 동일한 코드를 이용 할 수 있다.

// 함수는 input에 대한 output의 발생을 목적으로 하고
// 프로시저는 결과보다는 명령 단위가 수행하는 절차를 목적으로 한다.

// 가나쉬에서 curl을 사용해서 요청을 보내고 확인 하는 법

// curl은 client URL
// 클라이언트에서 소스코드를 손쉽게 웹 즈라우저 처럼 활용 할 수 있게 해주는 기술
// 서버 통신 할 수 있는 커맨드 명령어 툴 웹 개발에서 많이 사용 되는 기술
// 장점은 다양한 프로토콜을 지원한다는 장점이 있다

// DICT , FILE , FTP , FTPS, Gopher , HTTP , HTTPS , IMAP , IMAPS, LDAP , LDAPS , SSL등등

// url을 가지고 할 수  있는 건 왠만하면 다 할 수 있다.
// HTTP 프로토콜을 사용해사 페이지의 데이터를 가져온다거나 파일을 다운 받을 수 도 있따.
// curl [-option] 페이지 주소 쓰면 페이지의 소스가 화면에 출력된다 

// npx ganache-cli로 가나쉬 실행 시켜놓고
// curl -X post -H "content-type:application/json" --data "{id : soon}" http://localhost:3000

//  -X 요청 메소드
// -H 요청 헤더 내용
// -data, -d 요청 바디 내용 작성

// 가나쉬로 생성한 이더리움 클라이언트에
// curl을 사용해사 RPC 요청을 보내보자
// {
// "id" : 1215    체인의 아이디 , 필수x
// "jsonrpc" : "2.0"  json으로 인코딩한 프로시저 호출  필수
// "method" : "eth_accounts" ,  이더리움 클라이언트에 구성되어 있는 메소드 명 , 필수
// "params" :  []   메소드의 인자값
// }

// 계정을 가져오기
// curl -X POST -H "content-type : application/json" --data "{\"jsonrpc\" : \"2.0\",\"method\" : \"eth_accounts\"}" http://localhost:8545
// curl -X POST -H "Content-type: application/json" --data '{ "jsonrpc": "2.0", "method": "eth_accounts", "params": [] }' http://localhost:8545


// wsl에 node 설치 가나쉬 설치

// sudo apt update
// sudo apt install nodejs
// nodejs -v
// sudo apt install npm

// npm install -g ganache-cli
// npx ganache-cli

// 잔액 조회하기
// "eth_getBalance" 함수는 params로 매개변수 2개 전달
// 첫번째에는 계정의 주소
// 두 번째는 몇번째 블록을 조회할 것인지

// curl -X POST -H "Content-type:application/json" --data '{"jsonrpc" : "2.0", "method" : "eth_getBalance", "params" : ["0xac5a07b800e7550c74d03c23038463dda2bd2865","latest"]}' http://localhost:8545

// 이더리움 클라이언트에게 RPC를 요청 보내는 방법이다

// Web3 라이브러리
// Web3.js 라이브러리를 제공받아서 이더리움 네트워크와 상호작용을 할 수 있는 다양한 함수를 제공받아 사용할 수 있다.
// 위에서 해본 RPC요청을 쉽게 보낼 수 있게 해주는 라이브러리

// npm init -y
// npm i -D jest
// npm i web3

// package.json
// "test" : "jest"
// jest.config.js 파일 생성


// npm i ethereumjs-tx