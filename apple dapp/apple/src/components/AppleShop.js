import React, { useEffect, useState } from 'react'
import AppleShopContract from "../contracts/AppleShop.json"

// props로 web3, accout 받는 컴포넌트
const AppleShop = ({web3, account}) => {
    const [apple, setApple] = useState();
    const [banana, setBanana] =useState();
    const [watermelon,setWatermelon] = useState();

    const [deployed, setDeployed] = useState();
    const [CA, setCA] = useState();

    // 사과 구매하기 버튼 함수 
    const buy = async() =>{
        await deployed.methods.buyApple().send({
            from : account,
            to: CA,
            value : web3.utils.toWei("1", "ether")
        })
        const currentApple = await deployed.methods.getApple().call();
        setApple(currentApple);
    }
    // 사과 판매하기 버튼 함수
    const sell =  async() =>{
        const eth = web3.utils.toWei("1" , "ether")
        await deployed.methods.sellApple(eth).send({
            from : account,
            to : CA,
        })
        const currentApple = await deployed.methods.getApple().call();
        setApple(currentApple);
    }

    // 바나나 구매하기 버튼 함수 
    const bbuy = async() =>{
        await deployed.methods.buyBanana().send({
            from : account,
            to: CA,
            value : web3.utils.toWei("2", "ether")
        })
        const currentBanana = await deployed.methods.getBanana().call();
        setBanana(currentBanana);
    }
    // 바나나 판매하기 버튼 함수
    const bsell =  async() =>{
        const eth = web3.utils.toWei("2" , "ether")
        await deployed.methods.sellBanana(eth).send({
            from : account,
            to : CA,
        })
        const currentBanana = await deployed.methods.getBanana().call();
        setBanana(currentBanana);
    }
    // 수박 구매하기 버튼 함수 
    const wbuy = async() =>{
        await deployed.methods.buyWatermelon().send({
            from : account,
            to: CA,
            value : web3.utils.toWei("3", "ether")
        })
        const currentWatermelon = await deployed.methods.getWatermelon().call();
        setWatermelon(currentWatermelon);
    }
    // 수박 판매하기 버튼 함수
    const wsell =  async() =>{
        const eth = web3.utils.toWei("3" , "ether")
        await deployed.methods.sellWatermelon(eth).send({
            from : account,
            to : CA,
        })
        const currentWatermelon = await deployed.methods.getWatermelon().call();
        setWatermelon(currentWatermelon);
    }

    useEffect(() =>{
        (async()=>{
            if(!web3) return;
             // 네트워크 아이디
            const networkId = await web3.eth.net.getId();
            // 컨트랙트 조회 인스턴스 객체
            const instance = await new web3.eth.Contract(
                AppleShopContract.abi,
                // CA값
                AppleShopContract.networks[networkId].address
            );

            // 인스턴스 객체 사과 갯수 가져오는 함수 호출
            const currentApple = await instance.methods.getApple().call();
            const currentBanana = await instance.methods.getBanana().call();
            const currentWatermelon = await instance.methods.getWatermelon().call();

            setApple(currentApple);
            setBanana(currentBanana);
            setWatermelon(currentWatermelon);
            setDeployed(instance);
            setCA(AppleShopContract.networks[networkId].address);
        })();
    },[])


  return (
    <div>
        <div>사과 한개 가격: 1 ETH</div>
        <div>내가 가지고 있는 사과 : {apple} 개 </div>
        <button onClick={buy}>구매하기</button>

        <div>솨과 판매 간격: {apple}ETH</div>
        <button onClick={sell}>솨과 전체 판매하기</button>
        <br/>
        <br/>
        <div>바나나 한개 가격: 1 ETH</div>
        <div>내가 가지고 있는 바나나 : {banana} 개 </div>
        <button onClick={bbuy}>구매하기</button>

        <div>바나나 판매 간격: {banana}ETH</div>
        <button onClick={bsell}>바나나 전체 판매하기</button>
        <br/> 
        <br/>
        <div>수박 한개 가격: 1 ETH</div>
        <div>내가 가지고 있는 수박 : {watermelon} 개 </div>
        <button onClick={wbuy}>구매하기</button>

        <div>수박 판매 간격: {watermelon}ETH</div>
        <button onClick={wsell}>수박 전체 판매하기</button>
    </div>
  )
}

export default AppleShop