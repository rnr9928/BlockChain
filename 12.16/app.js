// geth --datadir node --http --http.addr "127.0.0.1" --http.port 9000 --http.corsdomain "*"  --http.api "admin,eth,debug,miner,net,txpool,personal,web3" --syncmode full --networkid 7722 --port 30300 --ws --ws.addr "127.0.0.1" --ws.port 9005 --ws.origins "*"  --ws.api "admin,eth,debug,miner,net,txpool,personal,web3"  --allow-insecure-unlock --unlock "0,1" --password "./node/password.txt"

/* curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","id" : 1 , "method" : "miner_start", "params" : [1]}' localhost:9000

// curl -X POST -H "Content-Type: application/json" --data '{ "jsonrpc":"2.0","id" : 1, "method" : "miner_stop", "params" : []}' localhost:9000*/


// geth attach http://127.0.0.1:9000

// miner.setEtherbase 채굴자 세팅
// miner_setEtherbase 채굴자 설정


// 요청할 때
/* 
    id : 요청 아이디를 지정하고 서버에서 응답받을 때 구별하려고 사용
    params : 서버에 전달 객체
*/ 

// 요청받을 때
/*
    id : 요청할 때 전달한 id가 들어온다
    result: 응답 데이터의 배열
*/