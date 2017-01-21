/* Notes and Thoughts:
Use parseInt() to ensure that the height value is always an integer
Use height value -1 on each line to properly space the characters out, creating the tree shape, take advantage of the .repeat() method
The for loop needs to run as many iterations as is the height value

Use event listeners to track the 'Grow your Tree' button and the keypress of the enter key, if the cursor is in the input field
If either field is left blank, display alert prompting the user to provide input
*/

var character = document.getElementById("inputChar");
var height = document.getElementById("inputHeight");
var empty = " ";

var charObject = {};

	

function tree() {
	// for each (value in charObject) {
		
	// }
	console.log(charObject.)


	return
};

function captureCharacter() {
//grab the character that is used to build the tree
	charObject.character = character.value;
	return
};

function captureHeight() {
//take the height input and force it to be an integer
	charObject.height = parseInt(height.value);
	return
};

inputChar.addEventListener('change', captureCharacter);
inputHeight.addEventListener('change', captureHeight);

