// Question:
// Jaden Smith, the son of Will Smith, is the star of films such as
// The Karate Kid (2010) and After Earth (2013). Jaden is also known
// for some of his philosophy that he delivers via Twitter. When writing
// on Twitter, he is known for almost always capitalizing every word.
// For simplicity, you'll have to capitalize each word, check out how
// contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by
// Jaden Smith. The strings are actual quotes from Jaden Smith, but
// they are not capitalized in the same way he originally typed them.

//Solution:
String.prototype.toJadenCase = function() {
	var str = this;
	let splitString = str.split(' ');
	let newArray = [];
	for (i = 0; i < splitString.length; i++) {
		let letter = splitString[i].charAt(0);
		let capitalLetter = splitString[i].charAt(0).toUpperCase();
		let captalizedFirstLetter = splitString[i].replace(letter, capitalLetter);
		newArray.push(captalizedFirstLetter);
	}
	return newArray.toString().replace(/,/g, ' ');
};

var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase();
