// JavaScript Document

var navChild = document.getElementById("nav");

console.log("Number of nav links: " + navChild.childElementCount);

var menuItems = document.getElementsByTagName("dd");

console.log("Number of items on menu: " + menuItems.length);



var myMenu = document.getElementById("menuTitle");

myMenu.setAttribute("style", "text-align: center");

var myBlog = document.getElementById("blog");

myBlog.setAttribute("style", "text-align: center; font-weight: bold;");



var newItem = document.createElement("dd");

var newText = document.createTextNode("- Cuban Espresso");

document.getElementById("coffee").appendChild(newItem);

newItem.appendChild(newText);




function mySurvey() {
	var txt;
	var drink = prompt("What type of drinks do you enjoy?", "Coffee");
			
	if (drink == null || drink == "") {
		txt = "User cancelled the survey.";
	} else {
		txt = "Thanks for taking our survey! Check back later to learn of great " + drink + " recipes and ideas!";
	}
	document.getElementById("prompto").innerHTML = txt;
}