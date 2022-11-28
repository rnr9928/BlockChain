
import './App.css';
import useWeb3 from './hooks/useWeb3';
import Counter from './components/Counter';

function App() {
  const [web3, account] = useWeb3();

  if(!account) return <h1> 메타마스큰 연결하셈</h1>
  return (
    <div className="App">
      <h2>계정 : {account}</h2>
      <Counter web3={web3} account={account}/>
    </div>
  );
}

export default App;

// 프론트는 리엑트로 메타마스크 연결은 가나쉬네트워크에 연결
// 스.컨 배포는 트러플로 구성할 예정

// 리액트에서 프론트로 스.컨으로 동작을 시켜서 카운터를 제작
// 더하고 뺴고 카운트를 만들고 클라이언트에서 메타마스크로 연결된 계정을
// 통해 트.잭을 보내고 스마트 컨트랙트 코드를 실행해서 상태 변수가 바뀌는걸
// 프론트에서 확인

// contracts폴더에 Counter.sol파일 만들어서 내용추가
// truffle-config.js  내용 수정 가나쉬 네트워크 속성 추가
// npx truffle compile 컨트렉트 코드 컴파일

// 배포를 하기위해 migrations 폴더에 [번호][내용][이름].js 파일을 만들어서
// 배포에 대한 코드 작성

// 배포 명령어 사용해서 가나쉬 네트워크에 컨트랙트 배포
// npx truffle migration

// 배포 잘 됬는지 확인
// npx truffle console

// Counter.deployed().then(instance => it = instance)

// it.address 콘솔확인

// it.current.call()를 작성하면 BN  big Number의 약자
// 자바스크립트에 큰 숫자를 표현할때 사용되는 객체 컨트랙트에서 
// 사용하는 int는 기본적으로 그 값이 큰 경우가 많아서 1ETH라하면
// 10^18 wei를 의미하기때문에 BN으로 가져오는 경우가 많다

// it.increment() 함수를 사용해서 즉시 상태가 변한 값을 확인
// 이유는 가나쉬로 실행한 로컬의 이더리움 네트워크는 트.잭이 발생하면
// 자동으로 블록 마이닝을 시도해주기 때문


// 스.컨 메타마스크와 연결해서 배포 및 실행
// 스.컨 이벤트를 등록하고 백엔드에서 트.잭 실행

// 프론트에서 상태변수를 업데이트 해줬고
// 트.잭 결과는 eth.TransactionReceipt() 여기 저장 일종의 log로 저장됨
// 로그기록을 조회하면 스.컨 실행됬는지 찾을 수 있다.

// 로그 데이터를 프론트엔드에 전송하고 프론트 엔드에서 이벤트를 listen 하게 해서
// 이더리움 네트워크에 배포된 스.컨과 실시간으로 통신 가능
