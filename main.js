/* Notes and Thoughts:
Use parseInt() to ensure that the height value is always an integer
Use height value -1 on each line to properly space the characters out, creating the tree shape, take advantage of the .repeat() method
The for loop needs to run as many iterations as is the height value

Use event listeners to track the 'Grow your Tree' button and the keypress of the enter key, if the cursor is in the input field
If either field is left blank, display alert prompting the user to provide input
*/

var charObject = {};
var character = document.getElementById("inputChar");
var height = document.getElementById("inputHeight");


	

function tree() {
	var space;
	var leaf;
	var treeBranch;
	//establishes a variables to hold the number of characters to include on the tree 'branches'
	var leafCount = 1;
	var spaceCount = charObject.height;

	if (!charObject.height || !charObject.character) {
		alert("Please fill in both fields!");
	} else {
		//adding the spaces before the character
		for (var i = 0; i < charObject.height; i++) {
			//storing the spaces in a variable to use in a bit
			space = " ".repeat(spaceCount);
			//storing the character in a variable to be used in a bit
			leaf = charObject.character.repeat(leafCount);
			//add the two together to make a line of the tree
			treeBranch = space + leaf;
			//builds the tree in the console
			console.log(treeBranch); 
			//next two lines change the number of spaces and characters for the next iteration
			leafCount = leafCount + 2;
			spaceCount = spaceCount - 1;
		}
	}

	// console.log(charObject.height);
	// console.log(charObject.character);

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

//Event Listeners.....
inputChar.addEventListener('change', captureCharacter);
inputHeight.addEventListener('change', captureHeight);

//the following two fire off the tree function when the 'enter' is pressed 
character.addEventListener('keyup', function(hold){
	if (hold.which === 13) {
		tree();
	}
});
height.addEventListener('keyup', function(hold){
	if (hold.which === 13) {
		tree();
	}
});
