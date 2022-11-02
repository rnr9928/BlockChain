import { SHA256 } from "crypto-js";
import merkle from "merkle";
import { BlockHeader } from "./blockHeader";
import { GENESIS } from "@core/config";

export class Block extends BlockHeader implements IBlock{
    public hash: string;
    public merkleRoot: string;
    public nonce: number;
    public difficulty: number;
    public data: string[];
    constructor(_previousBlock: Block, _data: string[]){
        super(_previousBlock)  //부모 클래스 속성 가져와야하나까 super
        this.merkleRoot=Block.getMerkleRoot(_data);
        this.hash=Block.createBlockHash(this);
        this.nonce=0
        this.difficulty=0
        this.data=_data
    }

    // 최초 블록 가져오는 함수
    public static getGENESIS() : Block {
        return GENESIS
    }

    // 블록 추가
    public static generateBlock(_previousBlock: Block, _data:string[]) : Block {
        const generateBlock = new Block(_previousBlock, _data);
        return generateBlock
    }

    // 머클루트 반환 함수
    public static getMerkleRoot<T>(_data:T[]) : string {
    const merkleTree = merkle('sha256').sync(_data);
    return merkleTree.root();
}

// 블록 해시 생성함수
public static createBlockHash(_block : Block) : string {
    const { version, timestamp, height, merkleRoot,previousHash} = _block;
    const values: string = `${version}${timestamp}${height}${merkleRoot}${previousHash}`
    return SHA256(values).toString();
}

// 블록유효검사함수
public static isValidNewBlock(_newBlock: Block, _previousBlock:Block): Faillable<Block,string>{
    // 블록의 높이가 이전 블록 보다 1인 증가된 상태인지 체크하는 식
    if(_previousBlock.height + 1 !== _newBlock.height)
        return {isError:true, value:"블록 높이 오류"}
        // 블록의 이전 블록해시값이 새로운 블록의 이전 블록해시값과 같은지
        if(_previousBlock.hash !== _newBlock.previousHash)
        return {isError : true, value:"이전 해시 오류"}
        // 생성된 블록의 정보를 가지고 다시 해싱해서 생성된 블록의 해시값과 같은지 비교
        if(Block.createBlockHash(_newBlock)!== _newBlock.hash)
        return {isError:true, value:"블록해시오류"};
        
        return {isError:false,value:_newBlock}
}

}

