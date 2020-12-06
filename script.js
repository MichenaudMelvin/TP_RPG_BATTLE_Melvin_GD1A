//all functions
function aleatoire(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function attaque(choix){
	document.getElementById("attaque").innerHTML = ("> Attaque <");
	choix = "attaque"
	console.log(choix)
	setTimeout(() => {document.getElementById("attaque").innerHTML = ("Attaque");}, 250);
		document.getElementById("message_box").innerHTML = ("sauce");
	return(choix)
}

function defense(choix){
	document.getElementById("defense").innerHTML = ("> Defense <");
	choix = "defense"
	console.log(choix)
	setTimeout(() => {document.getElementById("defense").innerHTML = ("Defense");}, 250);
	return(choix)
}

function special(choix){
	document.getElementById("special").innerHTML = ("> Special <");
	choix = "special"
	console.log(choix)
	setTimeout(() => {document.getElementById("special").innerHTML = ("Special");}, 250);
	return(choix)
}

function boss_un(boss_un){
	document.getElementById("message_box").innerHTML = ("Vous avez sélectionner" + boss_un + ".");
}

/*
function boss_deux(boss_deux){
	document.getElementById("message_box").innerHTML = ("Vous avez sélectionner" + boss_deux + ".");
}

function boss_trois(boss_trois){
	document.getElementById("message_box").innerHTML = ("Vous avez sélectionner" + boss_trois + ".");
}
*/

function testPerdu(pv_perso_un,pv_perso_deux,pv_perso_trois,pv_perso_quatre){
	if (pv_perso_un && pv_boss_deux && pv_boss_trois && pv_perso_quatre == 0){
		var lose = true;
	return lose;
	}
}

function attaquePerso(bossChoisi){
	document.getElementById("attaque").innerHTML = ("> Attaque <");
	var nombre_attaque = aleatoire(20,30);
	bossChoisi = bossChoisi - nombre_attaque;
	document.getElementById("message_box").innerHTML = ("Vous infligez " + nombre_attaque + " de degats au monstre.");
	return bossChoisi
}

function tourJoueurUn(){
	document.getElementById("perso_un").style.color = "red";
	document.getElementById("perso_un").style.textDecoration = "underline red";
	document.getElementById("message_box").innerHTML = ("Tour de " + perso_un + ".");

}

function tourBoss(pv_perso_un,pv_perso_deux,pv_perso_trois,pv_perso_quatre, boss_un, boss_deux,boss_trois){
	//attaque de boss_un
	//choix aléatoire du personnage attaqué
	document.getElementById("attaque").innerHTML = ("> Attaque <");
	var listePerso = [pv_perso_un,pv_perso_deux,pv_perso_trois,pv_perso_quatre];
	var listeBoss = [boss_un,boss_deux,boss_trois];
	console.log(listeBoss);
	for (let i = 0; i < 3; i++)
		var pv_perso = listePerso[aleatoire(0,3)];
		console.log(pv_perso)

		var degatsBoss = aleatoire(20,30);
		console.log(degatsBoss)

		pv_perso = pv_perso - degatsBoss;
		document.getElementById("message_box").innerHTML = (listeBoss[i] + " vous inflige" + pv_perso + "de degats.");
	return pv_perso
	
}

//main program
//nom des perso
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

//nom des boss
var boss_un = document.getElementById("boss_un").innerHTML;
var boss_deux = document.getElementById("boss_deux").innerHTML;
var boss_trois = document.getElementById("boss_trois").innerHTML;

//pv des boss
var pv_boss_un = Number(document.getElementById("pv_boss_un").innerHTML);
var pv_boss_deux = Number(document.getElementById("pv_boss_deux").innerHTML);
var pv_boss_trois = Number(document.getElementById("pv_boss_trois").innerHTML);


var win = false;
var lose = false;

tourJoueurUn();
var choix = ""
let i =""

if (choix == attaque){

}
/*
Déroulé d'un tour :
perso 1 :
choisi un ennemi
choisi une action
perso n+1

while (win != true || lose != true){
	//tour du perso 1
}
*/