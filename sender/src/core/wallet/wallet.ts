
import elliptic from "elliptic";
import { SHA256 } from "crypto-js";

// elliptic 인스턴스 생성
const ec = new elliptic.ec("secp256k1")

export interface ReceivedTx{
    sender: string;
    received : string;
    amount : number;
    signature : elliptic.ec.Signature
}

export class Wallet {
    public account : string
    public publicKey : string
    public balance : number
    public signature : elliptic.ec.Signature

    constructor(sender:string, signature : elliptic.ec.Signature){
        this.publicKey =sender;
        this.account = this.getAccount()
        this.signature = signature;
        this.balance = 0
    }

static sendTransaction(receivedTx : ReceivedTx){
    // 서명 검증
    // 공개키 , 보내는 사람 공개키, 받는 사람 : 계정, 보낼 금액
    const verify = Wallet.getVerify(receivedTx)
    if(verify.isError) throw new Error(verify.value);

    // 보내는 사람의 지갑 정보를 최신화
    // 현재 가지고 있는 정보 공개키 , 실제 트.젝에 넣을 정보는 account 정보
    
    const myWallet = new this(receivedTx.sender,receivedTx.signature)
}

static getVerify(receivedTx:ReceivedTx) : Faillable<undefined, string>{
    const {sender , received , amount , signature} =receivedTx
    const data : [string, string, number] = [sender,received , amount]
    const hash : string = SHA256(data.join("")).toString()

    // 공개키로 서명 검증
    const keyPair = ec.keyFromPublic(sender, "hex");
    const isVerify = keyPair.verify(hash, signature)
    if(!isVerify) return{isError : true , value : "서명 검증이 안됨"}

    return {isError : false , value : undefined}
}

    public getAccount() : string{
        return Buffer.from(this.publicKey).slice(26).toString();
    }
}