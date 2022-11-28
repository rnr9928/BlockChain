// npm init -y

// 필요한 모듈
// express ,web3

const express = require("express");
const app = express();
const cors = require('cors');
const Web3 = require('web3');
// HttpProvider함수 사용해서 web3 객체 생성
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))
const CounterContract = require('./Counter.json')

app.use(
cors({
    origin:true,
    credentials:true,
})
);

app.use(express.json());

app.post('/api/increment' , async(req,res) =>{
    // 요청에 계정을 받고
    const { from } = req.body;
    // 계정으로 getTransactionCount함수로 nonce변수에 할당
    const nonce = await web3.eth.getTransactionCount(from);

    // 연결된 web3 네트워크 아이디 할당
    const networkId = await web3.eth.net.getId();

    // 네트워크 아이디로 컨트랙트 주소할당
    const CA = CounterContract.networks[networkId].address;

    // Counter.json에 abi 할당
    const abi = CounterContract.abi;

    // 컨트랙트 조회
    const deployed = new web3.eth.Contract(abi, CA);
    // increment().encodeABI() 함수로 원본 데이터로 변환
    // 바이트 코드로 변환
    const data = await deployed.methods.increment().encodeABI();


    // 트랜잭션 객체 만들어서
    // nonce 트.잭이 
    let txObject = {
        nonce,
        from,
        to : CA,
        data
    }
    console.log(txObject)
    // json 객체로 변환
    res.json(txObject);
})

app.listen(4000,()=>{
    console.log('ㅅㅂㅇㄹ');
})