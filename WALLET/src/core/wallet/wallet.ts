// 지갑클래스

import { randomBytes } from "crypto";
import elliptic from "elliptic";
import { SHA256 } from "crypto-js";
import fs from "fs";
import path from "path";

const dir =  path.join(__dirname,"../data");

// elliptic 인스턴스 생성
const ec = new elliptic.ec("secp256k1")

export class Wallet {
    public account : string
    public privateKey : string
    public publicKey : string
    public balance : number

    constructor(privateKey:string = ""){
        this.privateKey = privateKey || this.getPrivateKey()
        this.publicKey =this.getPublicKey();
        this.account = this.getAccount()
        this.balance = 0
        // fs 모듈을 사용해사 프로그램을 통해 지갑을 만들때 개인키를 안전하게 저장하는게
        // 중요한 이유고 그래서 루트 폴더에 data폴더를 만들어 준후
        // createWallet 함수를 사용할 때 마다 data폴더에
        // 계정명과 파일명을 가지고 privateKey 값의 내용을 파일로 생성해줬다.
        Wallet.createWallet(this);
    }

    static createWallet(myWallet : Wallet){
        // fs 모듈을 이용해서 개인키를 저장할 파일 만들기
        // writeFileSync함수의 매개변수 첫번째 파일 이름, 파일 내용
        const filename = path.join(dir,myWallet.account);
        const filecontent = myWallet.privateKey
        fs.writeFileSync(filename,filecontent);
    }

    public getPrivateKey(): string{
        return randomBytes(32).toString("hex");
    }

    public getPublicKey() : string {
        // 개인키를 공개키로
        // 현재 개인키의 type은 문자열이고
        // elliptic로 해석을 가능하게 변환작업

        const keyPair = ec.keyFromPrivate(this.privateKey);
        return keyPair.getPublic().encode("hex",true)
    }

    public getAccount() : string{
        return Buffer.from(this.publicKey).slice(26).toString();
    }
}