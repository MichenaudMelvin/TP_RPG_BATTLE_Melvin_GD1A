/*pv des perso*/
var pv_perso_un = Number(document.getElementById("pv_perso_un"));
var pv_perso_deux = Number(document.getElementById("pv_perso_deux"));
var pv_perso_quatre = Number(document.getElementById("pv_perso_trois"));
var pv_perso_quatre = Number(document.getElementById("pv_perso_quatre"));



/*mana des perso*/
var mana_perso_un = Number(document.getElementById("mana_perso_un"));
var mana_perso_deux = Number(document.getElementById("mana_perso_deux"));
var mana_perso_trois = Number(document.getElementById("mana_perso_trois"));
var mana_perso_quatre = Number(document.getElementById("mana_perso_quatre"));

console.log(typeof pv_perso_un);


/*pv des boss*/
var pv_boss_un = Number(document.getElementById("pv_boss_un"));
var pv_boss_deux = Number(document.getElementById("pv_boss_deux"));
var pv_boss_trois = Number(document.getElementById("pv_boss_trois"));

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