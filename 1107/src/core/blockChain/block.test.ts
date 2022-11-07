// 작성한 코드들을 테스트해보자ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
import { Block } from "@core/blockChain/block";

import { GENESIS } from "@core/config";

describe("Block 검증",()=>{
    let newBlock : Block;

    // it() : 테스트할 코드의 최소 단위 공간
    it("블록 추가",()=>{
        const data = ["Block 2"];
        newBlock = Block.generateBlock(GENESIS,data)
        console.log(newBlock)

    })
it('블록검증',()=>{
    const isValidBlock = Block.isValidNewBlock(newBlock,GENESIS)
    if(isValidBlock.isError){
        console.error(isValidBlock.isError)
        return expect(true).toBe(false)
    }
    expect(isValidBlock.isError).toBe(false)
})
})



// describe 함수를 사용해서 테스트하고 함수들이 많이 작성할 경우
// 연관 테스트 함수끼리 그룹핑 시켜주는 역할