// 최초 블록 만들기 (제네시스 블록)
const merkle = require('merkle');
const SHA256 = require('crypto-js/sha256');

// 블록 헤더를 만들 클래스

class Header {
    constructor(_height,_previousHash){
        this.version = Header.getVersion();
        this.height = _height;
        this.timestamp = Header.getTimestamp();
        this.previousHash = _previousHash || "0".repeat(64);
    }

    static getVersion() {
        return '1.0.0'
    }
    static getTimestamp(){
        return new Date().getTime()
    }
}

// 블록 class

class Block {
    constructor(_header,_data){
        this.version = _header.version;
        this.height = _header.height;
        this.timestamp = _header.timestamp;
        this.previousHash = _header.previousHash;
        this.data = _data;
        this.merkleRoot = Block.getMerkleRoot(_data);
        this.hash = Block.createBlockHash(_header,Block.getMerkleRoot(_data));
    }
    static getMerkleRoot(_data){
        const merkleTree = merkle('sha256').sync(_data);
        return merkleTree.root();
    }

    static createBlockHash(_header,_merkleRoot)
    {
        const values = Object.values(_header)
        const data = values.join('') + _merkleRoot;
        return SHA256(data).toString();
    }
}

const data = ['The Times 03/Jan/2009 Chancellor on brink of second bailout for banks']

// 헤더 만들기
const header = new Header(0);
const block = new Block(header,data);

console.log(block);

const header2 = new Header(1,block.hash);
const block2 = new Block(header2,['두번째 블록']);

console.log(block2);