export default {
	loadWords,
	findWords
};

var dict = []

// ****************************

function loadWords(wordList) {
	// implement a data structure for the array
	// `wordList` parameter; return the number
	// of entries inserted into the data structure
	dict = [ ...wordList]

	return dict.length
}

function findWords(input) {
	// implement unscrambling/searching logic
	// for a string of uppercase letters in the
	// `input` parameter; return the array of
	// matching words
	var words = []

	for (let word of dict) {
		if (input.length >= word.length && checkWords(word, input)){
			words.push(word)
		}
	}

	return words
}

function checkWords(word, input) {
	return permute('', input)

	/********* */
	function permute(prefix, remainings) {
		for(let i = 0; i < remainings.length; i++) {
			let current = prefix + remainings[i]

			if(current == word) {
				return true
			} else if (remainings.length > 1 && current.length < word.length) {
				if (permute(current, remainings.slice(0,i) + remainings.slice(i+1))){
					return true
				}
			}
		}
		return false
	}
}
