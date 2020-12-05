//all functions

function attaque(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function defense(){
  document.getElementById("defense").innerHTML = "> Defense <";
}

function special(){
  document.getElementById("special").innerHTML = "> Special <";
}

function testPerdu(pv_boss_un, pv_boss_deux, pv_boss_trois, pv_perso_quatre){
	if (pv_perso_un && pv_boss_deux && pv_boss_trois && pv_perso_quatre == 0){
		var lose = true;
	return lose;
	}
}

function attaquePerso(bossChoisi){
	document.getElementById("attaque").innerHTML = "> Attaque <";
	var nombre_attaque = attaque(20,30);
	bossChoisi = bossChoisi - nombre_attaque;
	document.getElementById("message_box").innerHTML = ("Vous infligez nombre_attaque de degats au monstre.");
	document.getElementById("perso_un").style.underline = "red";
	return bossChoisi
}

//main program
var perso_un = document.getElementById("pv_perso_un");
var perso_deux = document.getElementById("pv_perso_deux");
var perso_quatre = document.getElementById("pv_perso_trois");
var perso_quatre = document.getElementById("pv_perso_quatre");

//pv des perso
var pv_perso_un = Number(document.getElementById("pv_perso_un"));
var pv_perso_deux = Number(document.getElementById("pv_perso_deux"));
var pv_perso_quatre = Number(document.getElementById("pv_perso_trois"));
var pv_perso_quatre = Number(document.getElementById("pv_perso_quatre"));

//mana des perso
var mana_perso_un = Number(document.getElementById("mana_perso_un"));
var mana_perso_deux = Number(document.getElementById("mana_perso_deux"));
var mana_perso_trois = Number(document.getElementById("mana_perso_trois"));
var mana_perso_quatre = Number(document.getElementById("mana_perso_quatre"));

//pv des boss
var pv_boss_un = Number(document.getElementById("pv_boss_un"));
var pv_boss_deux = Number(document.getElementById("pv_boss_deux"));
var pv_boss_trois = Number(document.getElementById("pv_boss_trois"));

var win = false;
var lose = false;

/*
Déroulé d'un tour :
perso 1 :
choisi un ennemi
choisi une action
perso n+1
*/

while (win != true || lose != true){
	document.getElementById("perso_un").style.color = "red";
	document.getElementById("message_box").innerHTML = ("Tour de");
	document.getElementById("perso_un").style.color = "red";
}
