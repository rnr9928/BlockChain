const NftToken = artifacts.require("NftToken");
const SaleToken = artifacts.require("SaleToken");

module.exports = async function (deployer){
    // 세번째 매개변수가 metadata json파일 있는 url
    await deployer.deploy(NftToken, "MyNFT", "MFI" , "/")
    // NftToken 배포를 진행 하고
    const token = await NftToken.deployed();
    // 배포 완료된 인스턴스 가져오기
    await deployer.deploy(SaleToken, token.address); // 배포 진행
    const saleToken = await SaleToken.deployed();
}