function Battle() {
	var currentGame = com.tbsrpg[com.tbsrpg.currentGame];
	currentGame.battles["battle" + currentBattle.battleNumber] = { battleName: ["battle" + currentBattle.battleNumber]     };
	return currentGame.battles["battle" + currentBattle.battleNumber];
}