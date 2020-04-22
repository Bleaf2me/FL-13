let word = prompt('Enter the word',''),
    middle;

if (word !== null && word.trim() !== '' && word.length % 2 === 0) {

    alert(word.slice(word.length/2 - 1, word.length/2 + 1));

} else if (word !== null && word.trim() !== '') { 

    middle = word[word.length/2 - 0.5];
    alert(middle); 

} else {
    alert('Invalid value'); 
}