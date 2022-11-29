const Voting = artifacts.require("Voting");

describe.only("Voting", ()=>{
    let deployed; // 배포 컨트랙트 객체
    let candidateList; // 후보자 리스트

    it("deployed", async()=>{
        deployed = await Voting.deployed();
    });

    it("candidateList" , async() =>{
 
        // 컨트랙트에서 배열을 전부 한번에 들고 올 수가없어서
        // 하나씩 호출 해주는 방식
        const req = [
        deployed.candidateList.call(0),
        deployed.candidateList.call(1),
        deployed.candidateList.call(2),
        deployed.candidateList.call(3),
        ]

        // 비동기로 부르는동안 처리해주기
        // Promise.all(req)   처리해주는 동안 기다려줌
        
        // 배열을 다 가져와서 담아준다
        candidateList = await Promise.all(req);
        console.log(candidateList);
    })

    it('voteForCandidate' , async() => {
        await deployed.voteForCandidate(candidateList[0]);
        await deployed.voteForCandidate(candidateList[0]);
        await deployed.voteForCandidate(candidateList[0]);
        await deployed.voteForCandidate(candidateList[0]);
        await deployed.voteForCandidate(candidateList[0]);
        for (const key of candidateList){
            let count = await deployed.totalVotesFor(key);
            console.log(`${key} : ${count}`);
        }
            
        
    }).timeout(10000);
})