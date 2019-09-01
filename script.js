// JavaScript Document

function myFunction() {
	var txt;
	var birth = prompt("Please enter the year you were born:", "YYYY");
	var age = 2019 - birth;
	var person = prompt("Please enter your name:", "Harry Potter");
			
	if (person == null || person == "") {
		txt = "User cancelled the prompt.";
	} else {
		txt = "Hello " + person + "! You are " + age + ".";
	}
	document.getElementById("prompto").innerHTML = txt;
}