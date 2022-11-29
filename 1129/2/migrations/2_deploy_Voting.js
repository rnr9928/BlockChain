const Voting = artifacts.require('Voting')

module.exports = function(deployed){

    deployed.deploy(Voting,['A',"B","C","D"]);
}