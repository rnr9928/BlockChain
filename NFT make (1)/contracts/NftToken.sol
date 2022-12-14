//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

//상속만 받으면 배포 진행할때 owner 상태변수에 컨트랙트 배포자의 EOA계정이 담긴다
import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";

// uint를 형변환 할 때 바로 형변환이 되지 않아서
// uint를 바이트로 변환하고 문자열로 변환해주는 함수를 사용할 수 있다.
import "../node_modules/openzeppelin-solidity/contracts/utils/Strings.sol";


contract NftToken is ERC721Enumerable, Ownable{

    // NFT 발행량을 제한 할 상태 변수
    // 상수를 사용할 건데 솔리디티에서 상수는 constant를 타입에 붙여서 선언
    uint constant public MAX_TOKEN_COUNT = 1000;

    // mint_price 상태 변수는 FNT 민팅시 지불할 이더 민틩의 가격을 나타내주는 상태 변수
    uint public mint_price = 1 ether;
    

    string public metadataURI;
    constructor(string memory _name, string memory _symbol, string memory _metdataURI) ERC721 (_name, _symbol){
        metadataURI = _metdataURI;
    }

    // token 구조체 생성
    struct TokenData{
        uint Rank;
        uint Type;
    }

    // uint 키값은 토큰의 ID가 될 것
    mapping(uint => TokenData) public TokenDatas;

    uint [4][4] public tokenCount;

    function mintToken() public payable {
        // mintToken을 하면 이더를 지급하게 만들고 CA에게 이더를 보내서 NFT를 구매한다.

        // 본인의 잔액이 mint_price 보다클때
        require(msg.value > mint_price);
        // 총 발행량이 MAX_TOKEN_COUNT 보다 작을 때
        require(MAX_TOKEN_COUNT > ERC721Enumerable.totalSupply());

        // 총발행량에 1을 더해서 토큰 아이디 변수에 담아둠
        uint tokenId = ERC721Enumerable.totalSupply() + 1;

        // tokenId에 맞춰서 Rank랑 Type을 랜덤 생성하게 TokenData로 저장
         TokenData memory random = getRandomTokenData(msg.sender,tokenId); //랜던 함수 생성
            // 총 발행량의 +1 더해진 토큰 아이디
            TokenDatas[tokenId] = random;

        // 랜덤으로 생선한 Rank와 Type을 가진 Token의 갯수가 몇개인지 확인 하기위한 상태변수
        tokenCount[TokenDatas[tokenId].Rank-1][TokenDatas[tokenId].Type-1]  += 1;

        // CA => 컨트랙트 배포자 계정에 지급받은 이더를 전송 해준다.
        payable(Ownable.owner()).transfer(msg.value);

        // mintToken함수를 호출한 계정에 NFT 발행
        _mint(msg.sender, tokenId);
    }

    function getRandomTokenData(address _owner, uint _tokenId) private pure returns (TokenData memory){
        // 솔리디티에서는 랜덤함수가 없다
        // 특정한 값을 해싱해서 나머지 연산으로 랜덤으로 구해야한다.

        // abi.encodePacked(_owner, _tokenId);  //타입과 상관없이 합쳐주는 매소드
        uint randomNum = uint(keccak256(abi.encodePacked(_owner, _tokenId)))%100;
        // keccak256 함수가 32바이트로 변환 해준다.
        // 솔리디티에서 랜덤값을 구하는 방법

        // 토큰의 데이터를 저장할 변수
        TokenData memory data;

        if(randomNum < 5 ){
            if(randomNum == 1){
                data.Rank = 4;
                data.Type = 4;
            }
          else  if(randomNum == 2){
                data.Rank = 4;
                data.Type = 2;
            }
          else  if(randomNum == 3){
                data.Rank = 4;
                data.Type = 3;
            }
            else{
                data.Rank = 4;
                data.Type = 1;
            }
        } else if (randomNum < 13){
             if(randomNum == 7){
                data.Rank = 3;
                data.Type = 4;
            }
          else  if(randomNum == 9){
                data.Rank = 3;
                data.Type = 2;
            }
          else  if(randomNum == 11){
                data.Rank = 3;
                data.Type = 3;
            }
            else{
                data.Rank = 3;
                data.Type = 1;
            }
        }else if(randomNum < 37){
              if(randomNum < 19){
                data.Rank = 2;
                data.Type = 4;
            }
          else  if(randomNum < 26){
                data.Rank = 2;
                data.Type = 2;
            }
          else  if(randomNum < 31){
                data.Rank = 2;
                data.Type = 3;
            }
            else{
                data.Rank = 2;
                data.Type = 1;
            }
        }else {
            if(randomNum < 52){
                    if(randomNum < 19){
                data.Rank = 1;
                data.Type = 4;
            }
          else  if(randomNum < 68){
                data.Rank = 1;
                data.Type = 2;
            }
          else  if(randomNum < 84){
                data.Rank = 1;
                data.Type = 3;
            }
            else{
                data.Rank = 1;
                data.Type = 1;
            }
            }
        }
    return data;
    }

    function tokenURI (uint _tokenId) public override view returns (string memory) {
        //  Rank와 Type으로 json 파일의 경로를 만들자
        // metadateURI : nft의 토큰 값에 매칭되는 앞부분 URI를 나타내는 상태 변수
        //                baseURL이라고 생각하면 된다 . 앞부분에 붙는 주소
        // uint에서 바로 문자열로 형변환이 불가능하기 때문에
        // uint에서 bytes로 변환하고 문자열로 형변환 해준다.
        string memory Rank = Strings.toString(TokenDatas[_tokenId].Rank);
        string memory Type = Strings.toString(TokenDatas[_tokenId].Type);

        return string(abi.encodePacked(metadataURI, "/", Rank, "/" , Type, ".json"));

    }

    // metadataURI을 수정해야 할 때 사용할 함수
    // 컨트랙트 배포한 사람이 호출할 수있는 함수
    // onlyOwner : 컨트랙트 배포자만 호출할 수 있는 함수.
    function setMetadataURI(string memory _uri) public onlyOwner {
        metadataURI = _uri;
    }

    // TokenData의 Rank를 조회하는 함수
    function getTokenRank(uint _tokenId) public view returns (uint) {
        return TokenDatas[_tokenId].Rank;
    }
    function getTokenType(uint _tokenId) public view returns (uint) {
        return TokenDatas[_tokenId].Type;
    }
    // 배열 전체 내용을 조회 하는 함수
    // ㅅ솔리디티에서 배열을 getter로 전체 조회하는건 불가능한데
    // 배열 전체를 return해주는 view함수를 만들어주면 된다.
    function getTokenCount() public view returns(uint[4][4] memory){
        return tokenCount;
    }
}