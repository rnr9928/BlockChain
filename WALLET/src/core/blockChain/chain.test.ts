import { Chain } from "@core/blockChain/chain";

describe("Chain 테스트",()=>{
    let node : Chain = new Chain()

    it("체인 가져오기 함수 테스트", ()=>{
        console.log(node.getChain())
    })
    it("체인 길이 가져오기 함수 테스트", ()=>{
        console.log(node.getLength())
    })
    it("체인 마지막 블록 가져오기 함수 테스트", ()=>{
        console.log(node.getLatestBlock())
    })
    it("체인 블록 추가 함수 테스트", ()=>{
        for (let i=0; i<200; i++){
            node.addBlock([`블록${i}번째`])
            console.log(node.getChain().at(-1));
        }
        console.log(node.getChain())
    })
}) //npx jest ./src/core/blockChain/chain.test.ts 테스트확인