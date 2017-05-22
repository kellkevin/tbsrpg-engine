/*
	Turn Based Strategy RPG
	Dollar Yen
	04/12/17
*/
var com = {};
com.tbsrpg = {
	playerName: "joey",

	createNewGame: function (newGameName) {
	com.tbsrpg[newGameName] = {};
	com.tbsrpg.currentGame = newGameName;
	
	com.tbsrpg.battleCount = 0;
	com.tbsrpg.teams = {};
	com.tbsrpg.teams[com.tbsrpg.playerName] = new Team(com.tbsrpg.playerName);
	com.tbsrpg.teams["enemy"] = new Team("enemy");
	console.log("current game:",com.tbsrpg);
	},
	createNewCharacter: function (name,characterType) {

	}
};
















com.tbsrpg.createNewGame("gameOne");





