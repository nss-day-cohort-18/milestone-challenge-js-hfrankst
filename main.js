//Use parseInt() to ensure that the height value is always an integer
//Use height value -1 on each line to properly space the characters out, creating the tree shape, take advantage of the .repeat() method
//The for loop needs to run as many iterations as is the height value
//

//Use event listeners to track the 'Grow your Tree' button and the keypress of the enter key, if the cursor is in the input field
//If either field is left blank, display alert prompting the user to provide input


var character = document.getElementById("treeChar");
var height = document.getElementById("height");
// var empty = " ";

var charObject = {};
//take the height input and force it to be an integer
//height.addEventListener("keyup", tree).parseInt();

console.log(height);	
console.log(character);

function tree() {
	for (i = 0; i < charArray.length; i++) {
		
	}


	return
};

function captureCharacter() {
	charObject.character = character.value;
	return
};

function captureHeight() {
	charObject.height = height.value;
	return
};

inputChar.addEventListener('keyup', captureCharacter);
inputHeight.addEventListener('keyup', captureHeight);

