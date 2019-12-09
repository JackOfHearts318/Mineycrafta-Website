//when the button that corresponds with this code is clicked, everything affected will change to "Nether"
function changeNether() {
   document.getElementById("title").style.backgroundColor = "#B22222";
   document.getElementById("containa").style.backgroundColor = "#800000";
   document.getElementById("baybee").style.backgroundColor = "#783c00";
   document.getElementById("containa2").style.backgroundColor = "#800000";
   document.getElementById("baybee2").style.backgroundColor = "#783c00";
   document.getElementById("iMage1").src = "images/netherportal.jpg";
   document.getElementById("iMage2").src = "images/nether1.jpg";
   document.getElementById("iMage3").src = "images/netherfortress.jpg";
   document.getElementById("iMage4").src = "images/netherfortress2.jpg";
   document.getElementById("iMage5").src = "images/netherwart.jpg";
   document.getElementById("iMage6").src = "images/nethermobs.jpg";
   document.getElementById("iMage7").src = "images/netherghast.jpg";
   document.getElementById("iMage8").src = "images/netherupdate.jpg";
   document.getElementById('click').play();
}

//when the button that corresponds with this code is clicked, everything affected will change to "Overworld"
function changeOverworld() {
	document.getElementById("title").style.backgroundColor = "green";
	document.getElementById("containa").style.backgroundColor = "#655421";
	document.getElementById("baybee").style.backgroundColor = "#755553";
	document.getElementById("containa2").style.backgroundColor = "#655421";
	document.getElementById("baybee2").style.backgroundColor = "#755553";
	document.getElementById("iMage1").src = "images/overworld1copy.jpg";
	document.getElementById("iMage2").src = "images/village.jpg";
	document.getElementById("iMage3").src = "images/swamp.jpg";
	document.getElementById("iMage4").src = "images/mobs.jpg";
	document.getElementById("iMage5").src = "images/desertsavannah.jpg";
	document.getElementById("iMage6").src = "images/desertvillagemesa.jpg";
	document.getElementById("iMage7").src = "images/mountains.jpg";
	document.getElementById("iMage8").src = "images/cave.jpg";
	document.getElementById('click').play();
}

//when the button that corresponds with this code is clicked, everything affected will change to "End"
function changeEnd() {
	document.getElementById("title").style.backgroundColor = "black";
	document.getElementById("containa").style.backgroundColor = "#4d004d";
	document.getElementById("baybee").style.backgroundColor = "#FEFCD7";
	document.getElementById("containa2").style.backgroundColor = "#4d004d";
	document.getElementById("baybee2").style.backgroundColor = "#FEFCD7";
	document.getElementById("iMage1").src = "images/endportal.jpg";
	document.getElementById("iMage2").src = "images/endcity.jpg";
	document.getElementById("iMage3").src = "images/otherendportal.jpg";
	document.getElementById("iMage4").src = "images/finalboss.jpg";
	document.getElementById("iMage5").src = "images/endcity2.jpg";
	document.getElementById("iMage6").src = "images/endislands.jpg";
	document.getElementById("iMage7").src = "images/enderdragonegg.jpg";
	document.getElementById("iMage8").src = "images/dragonheaddragonbreath.jpg";
	document.getElementById('click').play();
}