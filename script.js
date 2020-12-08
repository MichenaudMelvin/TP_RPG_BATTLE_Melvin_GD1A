//all variables
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

//images des boss
var image_boss_un = document.getElementById("image_boss_un");
var image_boss_deux = document.getElementById("image_boss_deux");
var image_boss_trois = document.getElementById("image_boss_trois");

//autres variables
var choix = "";
let i ="";
var lose = false;
var win = false;
var bossChoisi = ["none", "none"]
//bossChoisi[0] = nom du boss, bossChoisi[1] = pv du boss

var tourJoueurListe = [perso_un, perso_deux, perso_trois, perso_quatre];
var tourJoueur = tourJoueurListe[0];4

//all functions
function aleatoire(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function attaque(bossChoisi){
	document.getElementById("attaque").innerHTML = ("> Attaque <");
	if (bossChoisi[0] == "none"){
		document.getElementById("message_box").innerHTML = ("Veuillez selectionner un boss");
	}
	else {
		var nombre_attaque = aleatoire(20,30);
		bossChoisiPV = bossChoisiPV - nombre_attaque;
		document.getElementById("message_box").innerHTML = ("Vous infligez " + nombre_attaque + " de degats à " + bossChoisi);
		setTimeout(() => {document.getElementById("attaque").innerHTML = ("Attaque");}, 250);
		testBossMort(pv_boss_un,pv_boss_deux,pv_boss_trois);
	}
	return choix;
}

function defense(bossChoisi){
	document.getElementById("defense").innerHTML = ("> Defense <");
	if (bossChoisi[0] == "none"){
		document.getElementById("message_box").innerHTML = ("Veuillez selectionner un boss");
	}
	else {
		setTimeout(() => {document.getElementById("defense").innerHTML = ("Defense");}, 250);
	}
	return defense;
}

function special(bossChoisi){
	document.getElementById("special").innerHTML = ("> Special <");
	if (bossChoisi[0] == "none"){
		document.getElementById("message_box").innerHTML = ("Veuillez selectionner un boss");
	}
	else {
		setTimeout(() => {document.getElementById("special").innerHTML = ("Special");}, 250);
	}
	return defense;
}


function bossUn(boss_un, pv_boss_un){
	var bossChoisi = [boss_un, pv_boss_un];
	console.log(bossChoisi);
	if (bossChoisi[1] > 0){
		document.getElementById("message_box").innerHTML = ("Vous avez selectionner " + bossChoisi[0] + ".");
	} else{
		document.getElementById("message_box").innerHTML = (bossChoisi[0] + " est mort, veuillez choisir un autre boss.");
	}
	return bossChoisi;
}

/*
function bossDeux(boss_deux, pv_boss_deux){
	var bossChoisi = boss_deux;
	var bossChoisiPV = pv_boss_deux;
	if (bossChoisiPV > 0){
		document.getElementById("message_box").innerHTML = ("Vous avez selectionner " + boss_deux + ".");
	} else{
		document.getElementById("message_box").innerHTML = (boss_deux + " est mort, veuillez choisir un autre boss.");
	}
	return bossChoisi;
}

function bossTrois(boss_trois, pv_boss_trois){
	var bossChoisi = boss_trois;
	var bossChoisiPV = pv_boss_trois;
	if (bossChoisiPV > 0){
		document.getElementById("message_box").innerHTML = ("Vous avez selectionner " + boss_trois + ".");
	} else{
		document.getElementById("message_box").innerHTML = (boss_trois + " est mort, veuillez choisir un autre boss.");
	}
	return bossChoisi;
}


	setTimeout(() => {document.getElementById("message_box").innerHTML = (perso_un + choix);}, 250);
	setTimeout(() => {document.getElementById("message_box").innerHTML = ("");}, 1500);
*/

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

function testLose(pv_perso_un, pv_perso_deux, pv_perso_trois, pv_perso_quatre){
	if (pv_perso_un == 0 && pv_perso_deux == 0 && pv_perso_trois == 0 && pv_perso_quatre == 0){
		var lose = true;
		document.getElementById("message_box").innerHTML = ("Vous avez perdu !");
		alert("Vous avez perdu !")
	} else{
		var lose = false;
	}
	return lose;
}

function testWin(pv_boss_un, pv_boss_deux, pv_boss_trois){
	if (pv_boss_un == 0 && pv_boss_deux == 0 && pv_boss_trois == 0){
		var win = true;
		document.getElementById("message_box").innerHTML = ("Vous avez gagne !");
		alert("Vous avez gagné !")
	} else{
		var win = false;
	}
	return win;
}

function testBossMort(pv_boss_un,pv_boss_deux,pv_boss_trois){
	if (pv_boss_un == 0){
		image_boss_un.setAttribute("src", "img/boss_un_mort.png");
	}

	if (pv_boss_deux == 0){
		image_boss_deux.setAttribute("src", "img/boss_deux_mort.png");
	}

	if (pv_boss_trois == 0){
		image_boss_trois.setAttribute("src", "img/boss_trois_mort.png");
	}
}

testBossMort(pv_boss_un,pv_boss_deux,pv_boss_trois);
/* changement entre poison et soin
if (tourJoueur == perso_deux || tourJoueur == perso_quatre){
	document.getElementById("special").innerHTML = ("Poison");
}

if (tourJoueur == perso_un || tourJoueur == perso_trois){
	document.getElementById("special").innerHTML = ("Soin");
}
*/


/*
Déroulé d'un tour :
perso 1 :
choisi une action
choisi un ennemi

à la fin de chaque boucle : un testLose() et un testWin()



while (win != true || lose != true){
	//tour du perso 1
	tourJoueurUn();
	if (choix == attaque){
		document.getElementById("message_box").innerHTML = ("Vous avez choisi attaque");

	}
}
*/