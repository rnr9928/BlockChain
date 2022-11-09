// 지갑 서버

import  express  from "express";
import nunjucks from "nunjucks"
import { Wallet } from "./wallet";
import axios from "axios";
import path from "path";


const app = express();

// npm i @types/axios
// npm i axios
// npm i @types/nunjucks
// npm i nunjucks


nunjucks.configure("view",{
    express : app,  //express속성에 우리가 만든 express 연결햐준것
    watch : true // watch 옵션은 true면 html파일이 변경되면 템플릿 엔진
})
app.set("view engine", "html")

// axios 사용할때 디폴트값 세팅
const baseURL = "http://localhost:3000";
const baseAuth = Buffer.from('soon'+":" + "1234").toString('base64')
const request = axios.create({
    baseURL,
    headers : {
        // api 서버에서 데이터를 요청 응답할 때 http Authorization 헤더에
        // 유저의 아이디와 비번을 base64형태로 인코딩한 문자열을 추가해서
        // 인증하는 방식 base64로 인코딩 되어 전송되기 때문에
        // 중간에 공격 은 취약하다
        Authorization : "Basic " + baseAuth,
        "Content-type" : "application/json"
    }

})

app.use(express.json());

app.get('/',(req,res)=>{
    res.render("index");
})

app.post('/newWallet',(req,res)=>{
    res.json(new Wallet())
})


app.post("/walletList",(req,res)=>{
    const list = Wallet.getWalletList();
    res.json(list)
})



app.post('/sendTransaction',async(req,res)=>{
    const {
        sender: {publicKey,account},
        received,
        amount,
    } = req.body
    console.log(req.body)

    const signature = Wallet.createSign(req.body)

    const txObject = {
        sender : publicKey,
        received,
        amount,
        signature,
    }
    const response = await request.post('/sendTransaction',txObject);
    console.log(response.data)
    res.json({});
})

app.get("/wallet/:account",(req,res)=>{
    const {account} = req.params
    const privateKey = Wallet.getWalletPrivateKey(account)
    res.json(new Wallet(privateKey))
})

app.listen(4000,()=>{
    console.log('서버 4000번 OPEN')
})