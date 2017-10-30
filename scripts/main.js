let myHeading = document.querySelector('h1');
function setUserName(){
	localStorage.setItem('name',prompt('please enter your name.'));
}
if(!localStorage.getItem('name'))
	setUserName();
myHeading.innerHTML = "Mozilla is cool, " + localStorage.getItem('name');

let myButton = document.querySelector('button');
myButton.onclick = setUserName;
