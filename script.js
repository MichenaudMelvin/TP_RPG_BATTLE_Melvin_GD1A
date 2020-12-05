/*pv des perso*/
var Number(pv_perso_un) = document.getElementById("pv_perso_un");
var Number(pv_perso_deux) = document.getElementById("pv_perso_deux");
var Number(pv_perso_quatre) = document.getElementById("pv_perso_trois");
var Number(pv_perso_quatre) = document.getElementById("pv_perso_quatre");

/*mana des perso*/
var Number(mana_perso_un) = document.getElementById("mana_perso_un");
var Number(mana_perso_deux) = document.getElementById("mana_perso_deux");
var Number(mana_perso_trois) = document.getElementById("mana_perso_trois");
var Number(mana_perso_quatre) = document.getElementById("mana_perso_quatre");

/*pv des boss*/
var Number(pv_boss_un) = document.getElementById("pv_boss_un")
var Number(pv_boss_deux) = document.getElementById("pv_boss_deux")
var Number(pv_boss_trois) = document.getElementById("pv_boss_trois")



function attaque() {
  document.getElementById("attaque").innerHTML = "> attaque <";
}

function defense() {
  document.getElementById("defense").innerHTML = "> defense <";
}

function special() {
  document.getElementById("special").innerHTML = "> special <";
}

function testPerdu(pv_boss_un, pv_boss_deux, pv_boss_trois, pv_perso_quatre){
	if (pv_perso_un && pv_boss_deux && pv_boss_trois && pv_perso_quatre == 0){
		var lose = true;
	return lose;
	}
}

function attaque(pv_perso_un, pv_boss_deux, pv_boss_trois) {
	document.getElementById("attaque").innerHTML = "> attaque <";

}