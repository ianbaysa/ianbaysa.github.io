function runGame() {

    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    numTries = 0;

    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;
    // const target = Math.floor(Math.random() * 100) + 1;

    do {
        guessString = prompt('I am thinking of a number in the range 1 to 100. \n\nWhat is the number?');
        guessNumber = +guessString;
        correct = checkGuess(guessNumber, target);
    } while(!correct);

    alert('You got it! The number was' + target + '.\n\nIt took you' + numTries + ' tries to guess correctly.');
}

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert('YOO HAVE NOT ENTERED A NUMBER.\n\nPLEASE ENTER A NUMBER IN THE 1-100 RANGE');
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert('PLEASE ENTER AN INTEGER IN THE 1-100 RANGE.');
    } else if (guessNumber > target) {
        alert('YOUR NUMBER IS TOO LARGE');
    } else if (guessNumber < target) {
        alert('YOUR NUMBER IS TOO SMALL');
    } else  {
        correct = correct;
    }
    return correct;

}