import React, { useEffect, useState } from 'react'
import CounterContract from "../contracts/Counter.json"
import axios from "axios"

const Counter = ({web3,account}) => {
    const [count , setCount] = useState(0);
    const [deployed , setDeployed] = useState(null);

    const increment = async () =>{
        // 매개변수로 트랜잭션 계정 필요
        // 트랜잭션 발생시키
        // 상태변수를 변경 send() 함수로
        // 상태 변수를 변경하고
        // const result = await deployed.methods.increment().send({from : account});
        // if(!result) return;
        // // 상태변수를 가져와서 state값을 변경
        // const current = await deployed.methods.current().call();
        // setCount(current);

        // 요청을 보내는데 계정을 보내고 응답을 받아서
        const res = await axios.post('http://localhost:4000/api/increment',{
            from : account,
        });

        // 넘어온 트랜잭션 객체로 트랜잭션 발생
        await web3.eth.sendTransaction(res.data);
    }

    const decrement = async () =>{
        const result = await deployed.methods.decrement().send({from : account});
        if(!result) return;
        // 상태변수를 가져와서 state값을 변경
        const current = await deployed.methods.current().call();
        setCount(current);
    }

    useEffect(()=>{
        (async() =>{
            if(deployed) return;
            // abi와 CA가 필요한데
            // Counter.json 안에 abi가 있고
            // it.address
            // CA : '0xb0c751F73A28c694E6d16D2844E34B774B32ab0E'

            // 네트워크 아이디 가져오기
            const networkId = await web3.eth.net.getId();
            console.log(networkId)
            const CA = CounterContract.networks[networkId].address;

            const {abi} = CounterContract;

            // 컨트렉트 호출 abi랑 CA를 사용해서
            const Deployed = new web3.eth.Contract(abi,CA)

            const count = await Deployed.methods.current().call();

            // 이벤트 연결
            // eth.subscribe() 매개변수 2개
            // 첫번째 "logs" 이벤트 연결
            // 두번째 어느 컨트랙트 안에있는 로그를 호출 할 것인가
            // subscribe 이벤트를 연결 시켜주는 함수
            // logs이벤트가 실행될 때 마다  on 함수로 이벤트를 받는다
            // logs이벤트가 실행될때 컨트렉트 주소는 {address:CA} 전달
            // 해당 컨트랙트 안에 있는 로그가 실행될때마다
            web3.eth.subscribe("logs", {address:CA}).on("data",(log)=>{
                // params어떤 형태로 파싱 할 것인지
                // type은 솔리디티쪽에 선언한 타입으로 작성
                // name은  받을 이름
                    const params = [{type : "uint256" , name : "count"}];
                    // decodeLog 함수로 변환을 해서 value에 담고
                    const value = web3.eth.abi.decodeLog(params, log.data);  //object를 변환
                    // emit 한 데이터가 여러개면 반환 값의 형태는 object이고
                    // 여러개의 데이터가 있을 경우 인덱스가 지정한 name으로 구분 하면된다.
                    setCount(value.count);
            })


            setCount(count);
            setDeployed(Deployed);
        })()
    },[])
  return (
    <div>
    <h1>개수: {count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter