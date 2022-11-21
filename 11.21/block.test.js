

const Web3 = require('web3');

describe("블록 테스트",()=>{
    let web3;

    it('web3 연결',async()=>{
        web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8000"))
        const block_number = await web3.eth.getBlockNumber();
        console.log(block_number);
    })
})

// npx jest