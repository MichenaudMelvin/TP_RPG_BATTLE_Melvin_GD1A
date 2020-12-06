//all functions

function aleatoire(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function choix(){
  var choixJoueur = document.getElementById("").innerHTML
  if (choixJoueur == "Attaque");
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
	return bossChoisi
}

function tourJoueurUn(){
	document.getElementById("perso_un").style.color = "red";
	document.getElementById("perso_un").style.textDecoration = "underline red";
	document.getElementById("message_box").innerHTML = ("Tour de perso_un");
}

function tourBoss(pv_perso_un,pv_boss_deux,pv_boss_trois,pv_perso_quatre){
	//attaque de boss_un
	
}

//main program
var perso_un = document.getElementById("perso_un").innerHTML;
var perso_deux = document.getElementById("perso_deux").innerHTML;
var perso_trois = document.getElementById("perso_trois").innerHTML;
var perso_quatre = document.getElementById("perso_quatre").innerHTML;

//pv des perso
var pv_perso_un = Number(document.getElementById("pv_perso_un").innerHTML);
var pv_perso_deux = Number(document.getElementById("pv_perso_deux").innerHTML);
var pv_perso_trois = Number(document.getElementById("pv_perso_trois").innerHTML);
var pv_perso_quatre = Number(document.getElementById("pv_perso_quatre").innerHTML);

//mana des perso
var mana_perso_un = Number(document.getElementById("mana_perso_un").innerHTML);
var mana_perso_deux = Number(document.getElementById("mana_perso_deux").innerHTML);
var mana_perso_trois = Number(document.getElementById("mana_perso_trois").innerHTML);
var mana_perso_quatre = Number(document.getElementById("mana_perso_quatre").innerHTML);

//pv des boss
var pv_boss_un = Number(document.getElementById("pv_boss_un").innerHTML);
var pv_boss_deux = Number(document.getElementById("pv_boss_deux").innerHTML);
var pv_boss_trois = Number(document.getElementById("pv_boss_trois").innerHTML);


var win = false;
var lose = false;

tourJoueurUn();

/*
Déroulé d'un tour :
perso 1 :
choisi un ennemi
choisi une action
perso n+1

while (win != true || lose != true){
	
}
*/