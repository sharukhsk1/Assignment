function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');

    // Reverse each word
    let reversedWords = words.map(word => reverseWord(word));

    // Join the reversed words back into a sentence
    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    // Convert the word to an array of characters, reverse it, and join it back into a word
    return word.split('').reverse().join('');
}

// Example usage
const inputSentence = "Hello world";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); // Output: "olleH dlrow"
