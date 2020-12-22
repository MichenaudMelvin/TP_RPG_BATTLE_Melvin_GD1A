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

//images des boss
var image_boss_un = document.getElementById("image_boss_un");
var image_boss_deux = document.getElementById("image_boss_deux");
var image_boss_trois = document.getElementById("image_boss_trois");

//Status des boss
var boss_un_mort = false;
var boss_deux_mort = false;
var boss_trois_mort = false;

//autres variables
var choix = "";
let i = "";
var lose = false;
var win = false;
var tourJoueur = 1;
var bossChoisi = ["none", "none"];
//bossChoisi[0] = nom du boss, bossChoisi[1] = pv du boss

var defense_perso = [false, false, false, false];
var listeDef = [1, false, false];
listeDef = tourJoueurAffichage(tourJoueur, perso_un, perso_deux, perso_trois, perso_quatre, pv_perso_un, pv_perso_deux, pv_perso_trois, pv_perso_quatre, mana_perso_un, mana_perso_deux, mana_perso_trois, mana_perso_quatre, listeDef);


//all functions
function aleatoire(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function tri(x, y) {
    return x - y;
}

function attaque(bossChoisi, tourJoueur, perso_un, perso_deux, perso_trois, perso_quatre, pv_boss_un, pv_boss_deux, pv_boss_trois, listeDef){
	tourJoueur = listeDef[0];
	document.getElementById("attaque").innerHTML = ("> Attaque <");
	setTimeout(() => {document.getElementById("attaque").innerHTML = ("Attaque");}, 250);
	if (bossChoisi[0] == "none"){
		document.getElementById("message_box").innerHTML = ("Veuillez selectionner un boss.");
	}
	else {
		var nombre_attaque = aleatoire(20,30);
		bossChoisi[1] = bossChoisi[1] - nombre_attaque;
		document.getElementById("message_box").innerHTML = ("Vous infligez " + nombre_attaque + " de degats a " + bossChoisi[0] + ".");
		if (bossChoisi[0] == boss_un){
			document.getElementById("pv_boss_un").innerHTML = (bossChoisi[1]);
			pv_boss_un = bossChoisi[1];
		} if (bossChoisi[0] == boss_deux){
			document.getElementById("pv_boss_deux").innerHTML = (bossChoisi[1]);
			pv_boss_deux = bossChoisi[1];
		} if (bossChoisi[0] == boss_trois){
			document.getElementById("pv_boss_trois").innerHTML = (bossChoisi[1]);
			pv_boss_trois = bossChoisi[1];
		}
		testBossMort(pv_boss_un, pv_boss_deux, pv_boss_trois, boss_un_mort, boss_deux_mort, boss_trois_mort);
		listeDef[0] = tourJoueur + 1;

		setTimeout(() => {listeDef = tourJoueurAffichage(tourJoueur, perso_un, perso_deux, perso_trois, perso_quatre, pv_perso_un, pv_perso_deux, pv_perso_trois, pv_perso_quatre, mana_perso_un, mana_perso_deux, mana_perso_trois, mana_perso_quatre, listeDef);}, 2500);
	}
	return (listeDef)
}

function defense(bossChoisi, tourJoueur, perso_un, perso_deux, perso_trois, perso_quatre, defense_perso, listeDef){
	tourJoueur = listeDef[0];
	document.getElementById("defense").innerHTML = ("> Defense <");
	setTimeout(() => {document.getElementById("defense").innerHTML = ("Defense");}, 250);
	//defense_perso à réinitialiser à chaque tour
	if (bossChoisi[0] == "none"){
		document.getElementById("message_box").innerHTML = ("Veuillez selectionner un boss.");
		defense_perso = [false, false, false, false];
	} else {
		if (tourJoueur == 1){
			document.getElementById("message_box").innerHTML = (perso_un + " se defend.");
			defense_perso[0] = true;
		} if (tourJoueur == 2){
			document.getElementById("message_box").innerHTML = (perso_deux + " se defend.");
			defense_perso[1] = true;
		} if (tourJoueur == 3){
			document.getElementById("message_box").innerHTML = (perso_trois + " se defend.");
			defense_perso[2] = true;
		} if (tourJoueur == 4){
			document.getElementById("message_box").innerHTML = (perso_quatre + " se defend.");
			defense_perso[3] = true;
		}
		tourJoueur = tourJoueur + 1;
		listeDef = [tourJoueur, defense_perso, false];
		setTimeout(() => {listeDef = tourJoueurAffichage(tourJoueur, perso_un, perso_deux, perso_trois, perso_quatre, pv_perso_un, pv_perso_deux, pv_perso_trois, pv_perso_quatre, mana_perso_un, mana_perso_deux, mana_perso_trois, mana_perso_quatre, listeDef);}, 2500);
	}
	return (listeDef);
}

function special(bossChoisi, tourJoueur, mana_perso_un, mana_perso_deux, mana_perso_trois, mana_perso_quatre, pv_perso_un, pv_perso_deux, pv_perso_trois, pv_perso_quatre, listeDef, perso_un, perso_deux, perso_trois, perso_quatre, pv_boss_un, pv_boss_deux, pv_perso_trois){
	tourJoueur = listeDef[0];
	manaListe = [mana_perso_un, mana_perso_deux, mana_perso_trois, mana_perso_quatre];
	document.getElementById("special").innerHTML = ("> Special <");
	setTimeout(() => {document.getElementById("special").innerHTML = ("Special");}, 250);
	if (bossChoisi[0] == "none"){
		document.getElementById("message_box").innerHTML = ("Veuillez selectionner un boss.");
	}
	else {
		if (tourJoueur == 1 || tourJoueur == 3){
			document.getElementById("special").innerHTML = ("> Soin <");
			setTimeout(() => {document.getElementById("special").innerHTML = ("Soin");}, 250);
			if (tourJoueur == 1){
				if (manaListe[0] <= 0){
					document.getElementById("message_box").innerHTML = ("Vous n'avez pas assez de mana");
				} else {
					var listePlusFaiblePV = [pv_perso_un, pv_perso_deux, pv_perso_trois, pv_perso_quatre];
					//sort de soin : soigne de 15PV le perso ayant les plus faibles PV, 20 mana consommé par sort
					//si tous les perso on le meme nombre de PV --> tous les perso sont soignés, également beaucoup plus de mana consommé
					listePlusFaiblePV.sort(tri);
					var perso_a_soigner = listePlusFaiblePV[0];
					if (perso_a_soigner == pv_perso_un){
						pv_perso_un = pv_perso_un + 15;
						manaListe[0] = manaListe[0] - 20;
						mana_perso_un = manaListe[0];
						document.getElementById("pv_perso_un").innerHTML = pv_perso_un;
						document.getElementById("mana_perso_un").innerHTML = mana_perso_un;
						document.getElementById("message_box").innerHTML = (perso_un + " soigne " + perso_un);
						listeDef[0] = tourJoueur + 1;
					} if (perso_a_soigner == pv_perso_deux){
						pv_perso_deux = pv_perso_deux + 15;
						manaListe[0] = manaListe[0] - 20;
						mana_perso_un = manaListe[0];
						document.getElementById("pv_perso_deux").innerHTML = pv_perso_deux;
						document.getElementById("mana_perso_un").innerHTML = mana_perso_un;
						document.getElementById("message_box").innerHTML = (perso_un + " soigne " + perso_deux);
						listeDef[0] = tourJoueur + 1;
					} if (perso_a_soigner == pv_perso_trois){
						pv_perso_trois = pv_perso_trois + 15;
						manaListe[0] = manaListe[0] - 20;
						mana_perso_un = manaListe[0];
						document.getElementById("pv_perso_trois").innerHTML = pv_perso_trois;
						document.getElementById("mana_perso_un").innerHTML = mana_perso_un;
						document.getElementById("message_box").innerHTML = (perso_un + " soigne " + perso_trois);
						listeDef[0] = tourJoueur + 1;
					} if (perso_a_soigner == pv_perso_quatre){
						pv_perso_quatre = pv_perso_quatre + 15;
						manaListe[0] = manaListe[0] - 20;
						mana_perso_un = manaListe[0];
						document.getElementById("pv_perso_quatre").innerHTML = pv_perso_quatre;
						document.getElementById("mana_perso_un").innerHTML = mana_perso_un;
						document.getElementById("message_box").innerHTML = (perso_un + " soigne " + perso_quatre);
						listeDef[0] = tourJoueur + 1;
					}

				}
			}
			if (tourJoueur == 3){
				if (manaListe[2] <= 0){
					document.getElementById("message_box").innerHTML = ("Vous n'avez pas assez de mana");
				} else {
					var listePlusFaiblePV = [pv_perso_un, pv_perso_deux, pv_perso_trois, pv_perso_quatre];
					listePlusFaiblePV.sort(tri);
					var perso_a_soigner = listePlusFaiblePV[0];
					if (perso_a_soigner == pv_perso_un){
						pv_perso_un = pv_perso_un + 15;
						manaListe[2] = manaListe[2] - 20;
						mana_perso_un = manaListe[2];
						document.getElementById("pv_perso_un").innerHTML = pv_perso_un;
						document.getElementById("mana_perso_trois").innerHTML = mana_perso_trois;
						document.getElementById("message_box").innerHTML = (perso_trois + " soigne " + perso_un);
						listeDef[0] = tourJoueur + 1;
					} if (perso_a_soigner == pv_perso_deux){
						pv_perso_deux = pv_perso_deux + 15;
						manaListe[2] = manaListe[2] - 20;
						mana_perso_un = manaListe[2];
						document.getElementById("pv_perso_deux").innerHTML = pv_perso_deux;
						document.getElementById("mana_perso_trois").innerHTML = mana_perso_trois;
						document.getElementById("message_box").innerHTML = (perso_trois + " soigne " + perso_deux);
						listeDef[0] = tourJoueur + 1;
					} if (perso_a_soigner == pv_perso_trois){
						pv_perso_trois = pv_perso_trois + 15;
						manaListe[2] = manaListe[2] - 20;
						mana_perso_un = manaListe[2];
						document.getElementById("pv_perso_trois").innerHTML = pv_perso_trois;
						document.getElementById("mana_perso_trois").innerHTML = mana_perso_trois;
						document.getElementById("message_box").innerHTML = (perso_trois + " soigne " + perso_trois);
						listeDef[0] = tourJoueur + 1;
					} if (perso_a_soigner == pv_perso_quatre){
						pv_perso_quatre = pv_perso_quatre + 15;
						manaListe[2] = manaListe[2] - 20;
						mana_perso_un = manaListe[2];
						document.getElementById("pv_perso_quatre").innerHTML = pv_perso_quatre;
						document.getElementById("mana_perso_trois").innerHTML = mana_perso_trois;
						document.getElementById("message_box").innerHTML = (perso_trois + " soigne " + perso_quatre);
						listeDef[0] = tourJoueur + 1;
					}

				}
			} 	
		} if (tourJoueur == 2 || tourJoueur == 4){
			//draine un nombre de pv aléatoire entre 5 et 25PV du boss sélectionné.
			document.getElementById("special").innerHTML = ("> Drainage <");
			setTimeout(() => {document.getElementById("special").innerHTML = ("Drainage");}, 250);
			var drainage = aleatoire(5,25);
			if (tourJoueur == 2){
				if (manaListe[1] <= 0){
					document.getElementById("message_box").innerHTML = ("Vous n'avez pas assez de mana");
				} else {
					if (bossChoisi[0] == boss_un){
						bossChoisi[1] = bossChoisi[1] - drainage;
						pv_boss_un = bossChoisi[1];
						pv_perso_deux = pv_perso_deux + drainage;
						manaListe[1] = manaListe[1] - 20;
						mana_perso_un = manaListe[1];
						document.getElementById("pv_perso_deux").innerHTML = pv_perso_deux;
						document.getElementById("mana_perso_deux").innerHTML = mana_perso_deux;
						document.getElementById("pv_boss_un").innerHTML = pv_boss_un;
						document.getElementById("message_box").innerHTML = (perso_deux + " drainage " + drainage + "PV a " + bossChoisi[0]);
						listeDef[0] = tourJoueur + 1;
					} if (bossChoisi[0] == boss_deux){
						bossChoisi[1] = bossChoisi[1] - drainage;
						pv_boss_deux = bossChoisi[1];
						pv_perso_deux = pv_perso_deux + drainage;
						manaListe[1] = manaListe[1] - 20;
						mana_perso_un = manaListe[1];
						document.getElementById("pv_perso_deux").innerHTML = pv_perso_deux;
						document.getElementById("mana_perso_deux").innerHTML = mana_perso_deux;
						document.getElementById("pv_boss_deux").innerHTML = pv_boss_deux;
						document.getElementById("message_box").innerHTML = (perso_deux + " drainage " + drainage + "PV a " + bossChoisi[0]);
						listeDef[0] = tourJoueur + 1;
					} if (bossChoisi[0] == boss_trois){
						bossChoisi[1] = bossChoisi[1] - drainage;
						pv_boss_trois = bossChoisi[1];
						pv_perso_deux = pv_perso_deux + drainage;
						manaListe[1] = manaListe[1] - 20;
						mana_perso_un = manaListe[1];
						document.getElementById("pv_perso_deux").innerHTML = pv_perso_deux;
						document.getElementById("mana_perso_deux").innerHTML = mana_perso_deux;
						document.getElementById("pv_boss_trois").innerHTML = pv_boss_trois;
						document.getElementById("message_box").innerHTML = (perso_deux + " drainage " + drainage + "PV a " + bossChoisi[0]);
						listeDef[0] = tourJoueur + 1;
					}
				}
			} if (tourJoueur == 4){
				if (manaListe[3] <= 0){
					document.getElementById("message_box").innerHTML = ("Vous n'avez pas assez de mana");
				} else {
					if (bossChoisi[0] == boss_un){
						bossChoisi[1] = bossChoisi[1] - drainage;
						pv_boss_un = bossChoisi[1];
						pv_perso_quatre = pv_perso_quatre + drainage;
						manaListe[3] = manaListe[3] - 20;
						mana_perso_un = manaListe[3];
						document.getElementById("pv_perso_quatre").innerHTML = pv_perso_quatre;
						document.getElementById("mana_perso_quatre").innerHTML = mana_perso_quatre;
						document.getElementById("pv_boss_un").innerHTML = pv_boss_un;
						document.getElementById("message_box").innerHTML = (perso_quatre + " drainage " + drainage + "PV a " + bossChoisi[0]);
						listeDef[0] = tourJoueur + 1;
					} if (bossChoisi[0] == boss_deux){
						bossChoisi[1] = bossChoisi[1] - drainage;
						pv_boss_deux = bossChoisi[1];
						pv_perso_quatre = pv_perso_quatre + drainage;
						manaListe[3] = manaListe[3] - 20;
						mana_perso_un = manaListe[3];
						document.getElementById("pv_perso_quatre").innerHTML = pv_perso_quatre;
						document.getElementById("mana_perso_quatre").innerHTML = mana_perso_quatre;
						document.getElementById("pv_boss_deux").innerHTML = pv_boss_deux;
						document.getElementById("message_box").innerHTML = (perso_quatre + " drainage " + drainage + "PV a " + bossChoisi[0]);
						listeDef[0] = tourJoueur + 1;
					} if (bossChoisi[0] == boss_trois){
						bossChoisi[1] = bossChoisi[1] - drainage;
						pv_boss_trois = bossChoisi[1];
						pv_perso_quatre = pv_perso_quatre + drainage;
						manaListe[3] = manaListe[3] - 20;
						mana_perso_un = manaListe[3];
						document.getElementById("pv_perso_quatre").innerHTML = pv_perso_quatre;
						document.getElementById("mana_perso_quatre").innerHTML = mana_perso_quatre;
						document.getElementById("pv_boss_trois").innerHTML = pv_boss_trois;
						document.getElementById("message_box").innerHTML = (perso_quatre + " drainage " + drainage + "PV a " + bossChoisi[0]);
						listeDef[0] = tourJoueur + 1;
					}
				}
			}
		}
		setTimeout(() => {listeDef = tourJoueurAffichage(tourJoueur, perso_un, perso_deux, perso_trois, perso_quatre, pv_perso_un, pv_perso_deux, pv_perso_trois, pv_perso_quatre, mana_perso_un, mana_perso_deux, mana_perso_trois, mana_perso_quatre, listeDef);}, 2500);	
	}
	return (listeDef);
}

function bossUn(boss_un){
	var pv_boss_un = Number(document.getElementById("pv_boss_un").innerHTML);
	var bossChoisi = [boss_un, pv_boss_un];
	if (bossChoisi[1] > 0){
		document.getElementById("message_box").innerHTML = ("Vous avez selectionne " + bossChoisi[0] + ".");
	} else{
		document.getElementById("message_box").innerHTML = (bossChoisi[0] + " est mort, veuillez choisir un autre boss.");
		bossChoisi[0] = "none";
	}
	return bossChoisi;
}

function bossDeux(boss_deux){
	var pv_boss_deux = Number(document.getElementById("pv_boss_deux").innerHTML);
	var bossChoisi = [boss_deux, pv_boss_deux];
	if (bossChoisi[1] > 0){
		document.getElementById("message_box").innerHTML = ("Vous avez selectionne " + bossChoisi[0] + ".");
	} else{
		document.getElementById("message_box").innerHTML = (bossChoisi[0] + " est mort, veuillez choisir un autre boss.");
		bossChoisi[0] = "none";
	}
	return bossChoisi;
}

function bossTrois(boss_trois){
	var pv_boss_trois = Number(document.getElementById("pv_boss_trois").innerHTML);
	var bossChoisi = [boss_trois, pv_boss_trois];
	if (bossChoisi[1] > 0){
		document.getElementById("message_box").innerHTML = ("Vous avez selectionne " + bossChoisi[0] + ".");
	} else{
		document.getElementById("message_box").innerHTML = (bossChoisi[0] + " est mort, veuillez choisir un autre boss.");
		bossChoisi[0] = "none";
	}
	return bossChoisi;
}
	
function tourJoueurAffichage(tourJoueur, perso_un, perso_deux, perso_trois, perso_quatre, pv_perso_un, pv_perso_deux, pv_perso_trois, pv_perso_quatre, mana_perso_un, mana_perso_deux, mana_perso_trois, mana_perso_quatre, listeDef){
	tourJoueur = listeDef[0];
	if (listeDef[2] == false){
		//Tour du joueur 1
		if (tourJoueur == 1){
			if (pv_perso_un <= 0) {
				tourJoueur = tourJoueur + 1
			} else {
				//réinitialisation couleur
				document.getElementById("perso_deux").style.color = "white";
				document.getElementById("perso_deux").style.textDecoration = "underline white";
				document.getElementById("perso_trois").style.color = "white";
				document.getElementById("perso_trois").style.textDecoration = "underline white";
				document.getElementById("perso_quatre").style.color = "white";
				document.getElementById("perso_quatre").style.textDecoration = "underline white";
				//changement de joueur
				document.getElementById("perso_un").style.color = "red";
				document.getElementById("perso_un").style.textDecoration = "underline red";
				document.getElementById("message_box").innerHTML = ("Tour de " + perso_un + ".");
				document.getElementById("special").innerHTML = ("Soin");
			}
		//Tour du joueur 2
		} if (tourJoueur == 2){
			if (pv_perso_deux <= 0) {
				tourJoueur = tourJoueur + 1
			} else {
				//réinitialisation couleur 
				document.getElementById("perso_un").style.color = "white";
				document.getElementById("perso_un").style.textDecoration = "underline white";
				document.getElementById("perso_trois").style.color = "white";
				document.getElementById("perso_trois").style.textDecoration = "underline white";
				document.getElementById("perso_quatre").style.color = "white";
				document.getElementById("perso_quatre").style.textDecoration = "underline white";
				//changement de joueur
				document.getElementById("perso_deux").style.color = "red";
				document.getElementById("perso_deux").style.textDecoration = "underline red";
				document.getElementById("message_box").innerHTML = ("Tour de " + perso_deux + ".");
				document.getElementById("special").innerHTML = ("Drainage");
			}
		//Tour du joueur 3
		} if (tourJoueur == 3){
			if (pv_perso_trois <= 0) {
				tourJoueur = tourJoueur + 1
			} else {
				//réinitialisation couleur 
				document.getElementById("perso_un").style.color = "white";
				document.getElementById("perso_un").style.textDecoration = "underline white";
				document.getElementById("perso_deux").style.color = "white";
				document.getElementById("perso_deux").style.textDecoration = "underline white";
				document.getElementById("perso_quatre").style.color = "white";
				document.getElementById("perso_quatre").style.textDecoration = "underline white";
				//changement de joueur
				document.getElementById("perso_trois").style.color = "red";
				document.getElementById("perso_trois").style.textDecoration = "underline red";
				document.getElementById("message_box").innerHTML = ("Tour de " + perso_trois + ".");
				document.getElementById("special").innerHTML = ("Soin");
			}
		//Tour du joueur 4
		} if (tourJoueur == 4){
			if (pv_perso_quatre <= 0) {
				tourJoueur = tourJoueur + 1
			} else {
				//réinitialisation couleur 
				document.getElementById("perso_un").style.color = "white";
				document.getElementById("perso_un").style.textDecoration = "underline white";
				document.getElementById("perso_deux").style.color = "white";
				document.getElementById("perso_deux").style.textDecoration = "underline white";
				document.getElementById("perso_trois").style.color = "white";
				document.getElementById("perso_trois").style.textDecoration = "underline white";
				//changement de joueur
				document.getElementById("perso_quatre").style.color = "red";
				document.getElementById("perso_quatre").style.textDecoration = "underline red";
				document.getElementById("message_box").innerHTML = ("Tour de " + perso_quatre + ".");
				document.getElementById("special").innerHTML = ("Drainage");
			}
		//Tour des boss
		} if (tourJoueur == 5){
			document.getElementById("perso_un").style.color = "grey";
			document.getElementById("perso_un").style.textDecoration = "underline grey";
			document.getElementById("perso_deux").style.color = "grey";
			document.getElementById("perso_deux").style.textDecoration = "underline grey";
			document.getElementById("perso_trois").style.color = "grey";
			document.getElementById("perso_trois").style.textDecoration = "underline grey";
			document.getElementById("perso_quatre").style.color = "grey";
			document.getElementById("perso_quatre").style.textDecoration = "underline grey";
			listeDef[2] = true;
			listeDef = tourBoss(perso_un, perso_deux, perso_trois, perso_quatre, pv_perso_un, pv_perso_deux, pv_perso_trois, pv_perso_quatre, boss_un, boss_deux, boss_trois, listeDef, tourJoueur);
		}
	} else {
		listeDef[0] = 1;
		listeDef[2] = false
		listeDef = tourJoueurAffichage(tourJoueur, perso_un, perso_deux, perso_trois, perso_quatre, pv_perso_un, pv_perso_deux, pv_perso_trois, pv_perso_quatre, mana_perso_un, mana_perso_deux, mana_perso_trois, mana_perso_quatre, listeDef);
	}
	return(listeDef)
}

function tourBoss(perso_un, perso_deux, perso_trois, perso_quatre, pv_perso_un, pv_perso_deux, pv_perso_trois, pv_perso_quatre, boss_un, boss_deux, boss_trois, listeDef, tourJoueur){
	defense_perso = listeDef[1];
	//degats des boss
	var degats_boss_perso_un = aleatoire(20,30);
	var degats_boss_perso_deux = aleatoire(20,30);
	var degats_boss_perso_trois = aleatoire(20,30);
	//perso choisi par les boss
	var listePerso = [perso_un, perso_deux, perso_trois, perso_quatre];
	var perso_choisi_un = listePerso[aleatoire(0,3)]
	var perso_choisi_deux = listePerso[aleatoire(0,3)]
	var perso_choisi_trois = listePerso[aleatoire(0,3)]

	while (perso_choisi_un == 0){
		perso_choisi_un = listePerso[aleatoire(0,3)]
	} while (perso_choisi_deux == 0){
		perso_choisi_deux = listePerso[aleatoire(0,3)]
	} while (perso_choisi_trois == 0){
		perso_choisi_trois = listePerso[aleatoire(0,3)]
	}

	if (perso_choisi_un == perso_un){
		if (defense_perso[0] == true){
			pv_perso_un = pv_perso_un - Math.round((degats_boss_perso_un * 1/2));
		} else {
			pv_perso_un = pv_perso_un - degats_boss_perso_un;
		} if (pv_perso_un < 0){
			pv_perso_un = 0;
		}
	} if (perso_choisi_un == perso_deux){
		if (defense_perso[1] == true){
			pv_perso_deux = pv_perso_deux - Math.round((degats_boss_perso_un * 1/2));
		} else {
			pv_perso_deux = pv_perso_deux - degats_boss_perso_un;
		} if (pv_perso_deux < 0){
			pv_perso_deux = 0;
		}
	} if (perso_choisi_un == perso_trois){
		if (defense_perso[2] == true){
			pv_perso_trois = pv_perso_trois - Math.round((degats_boss_perso_un * 1/2));
		} else {
			pv_perso_trois = pv_perso_trois - degats_boss_perso_un;
		} if (pv_perso_trois < 0){
			pv_perso_trois = 0;
		}
	} if (perso_choisi_un == perso_quatre){
		if (defense_perso[3] == true){
			pv_perso_quatre = pv_perso_quatre - Math.round((degats_boss_perso_un * 1/2));
		} else {
			pv_perso_quatre = pv_perso_quatre - degats_boss_perso_un;
		} if (pv_perso_quatre < 0){
			pv_perso_quatre = 0;
		}
	} if (perso_choisi_deux == perso_un){
		if (defense_perso[0] == true){
			pv_perso_un = pv_perso_un - Math.round((degats_boss_perso_deux * 1/2));
		} else {
			pv_perso_un = pv_perso_un - degats_boss_perso_deux;
		} if (pv_perso_un < 0){
			pv_perso_un = 0;
		}
	} if (perso_choisi_deux == perso_deux){
		if (defense_perso[1] == true){
			pv_perso_deux = pv_perso_deux - Math.round((degats_boss_perso_deux * 1/2));
		} else {
			pv_perso_deux = pv_perso_deux - degats_boss_perso_deux;
		} if (pv_perso_deux < 0){
			pv_perso_deux = 0;
		}
	} if (perso_choisi_deux == perso_trois){
		if (defense_perso[2] == true){
			pv_perso_trois = pv_perso_trois - Math.round((degats_boss_perso_deux * 1/2));
		} else {
			pv_perso_trois = pv_perso_trois - degats_boss_perso_deux;
		} if (pv_perso_trois < 0){
			pv_perso_trois = 0;
		}
	} if (perso_choisi_deux == perso_quatre){
		if (defense_perso[3] == true){
			pv_perso_quatre = pv_perso_quatre - Math.round((degats_boss_perso_deux * 1/2));
		} else {
			pv_perso_quatre = pv_perso_quatre - degats_boss_perso_deux;
		} if (pv_perso_quatre < 0){
			pv_perso_quatre = 0;
		}
	} if (perso_choisi_trois == perso_un){
		if (defense_perso[0] == true){
			pv_perso_un = pv_perso_un - Math.round((degats_boss_perso_trois * 1/2));
		} else {
			pv_perso_un = pv_perso_un - degats_boss_perso_trois;
		} if (pv_perso_un < 0){
			pv_perso_un = 0;
		}
	} if (perso_choisi_trois == perso_deux){
		if (defense_perso[1] == true){
			pv_perso_deux = pv_perso_deux - Math.round((degats_boss_perso_trois * 1/2));
		} else {
			pv_perso_deux = pv_perso_deux - degats_boss_perso_trois;
		} if (pv_perso_deux < 0){
			pv_perso_deux = 0;
		}
	} if (perso_choisi_trois == perso_trois){
		if (defense_perso[2] == true){
			pv_perso_trois = pv_perso_trois - Math.round((degats_boss_perso_trois * 1/2));
		} else {
			pv_perso_trois = pv_perso_trois - degats_boss_perso_trois;
		} if (pv_perso_trois < 0){
			pv_perso_trois = 0;
		}
	} if (perso_choisi_trois == perso_quatre){
		if (defense_perso[3] == true){
			pv_perso_quatre = pv_perso_quatre - Math.round((degats_boss_perso_trois * 1/2));
		} else {
			pv_perso_quatre = pv_perso_quatre - degats_boss_perso_trois;
		} if (pv_perso_quatre < 0){
			pv_perso_quatre = 0;
		}
	}

	document.getElementById("pv_perso_un").innerHTML = pv_perso_un;
	document.getElementById("pv_perso_deux").innerHTML = pv_perso_deux;
	document.getElementById("pv_perso_trois").innerHTML = pv_perso_trois;
	document.getElementById("pv_perso_quatre").innerHTML = pv_perso_quatre;

	setTimeout(() => {document.getElementById("message_box").innerHTML = (boss_un + " inflige " + degats_boss_perso_un + " de degats a " + perso_choisi_un + ".");}, 1);
	setTimeout(() => {document.getElementById("message_box").innerHTML = (boss_deux + " inflige " + degats_boss_perso_deux + " de degats a " + perso_choisi_deux + ".");}, 2000);
	setTimeout(() => {document.getElementById("message_box").innerHTML = (boss_trois + " inflige " + degats_boss_perso_trois + " de degats a " + perso_choisi_trois + ".");}, 4000);
	testLose();
	setTimeout(() => {listeDef = tourJoueurAffichage(tourJoueur, perso_un, perso_deux, perso_trois, perso_quatre, pv_perso_un, pv_perso_deux, pv_perso_trois, pv_perso_quatre, mana_perso_un, mana_perso_deux, mana_perso_trois, mana_perso_quatre, listeDef);}, 6000);
}

function testLose(){
	if (document.getElementById("pv_perso_un").innerHTML == (0) && document.getElementById("pv_perso_deux").innerHTML == (0) && document.getElementById("pv_perso_trois").innerHTML == (0) && document.getElementById("pv_perso_quatre").innerHTML == (0)){
		document.getElementById("message_box").innerHTML = ("Vous avez perdu !");
		alert("Vous avez perdu !")
	}
}

function testBossMort(pv_boss_un, pv_boss_deux, pv_boss_trois, boss_un_mort, boss_deux_mort, boss_trois_mort){
	if (pv_boss_un <= 0){
		document.getElementById("pv_boss_un").innerHTML = (0);
		image_boss_un.setAttribute("src", "img/boss_un_mort.png");
	} if (pv_boss_deux <= 0){
		document.getElementById("pv_boss_deux").innerHTML = (0);
		image_boss_deux.setAttribute("src", "img/boss_deux_mort.png");
	} if (pv_boss_trois <= 0){
		document.getElementById("pv_boss_trois").innerHTML = (0);
		image_boss_trois.setAttribute("src", "img/boss_trois_mort.png");
	} if (document.getElementById("pv_boss_un").innerHTML == (0) && document.getElementById("pv_boss_deux").innerHTML == (0) && document.getElementById("pv_boss_trois").innerHTML == (0)){
		document.getElementById("message_box").innerHTML = ("Vous avez gagne !");
		alert("Vous avez gagné !")
	}
}

/*
Problèmes du programme :
le mana de diminue pas
les pv des perso ne diminue pas
la selection n'est pas reset, donc si un boss selectionné est mort il est toujours possible de l'attaquer (ne fait rien, mais saute juste un tour)
*/