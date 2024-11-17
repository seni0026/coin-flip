// load the tally from local storage and set a default value
let tally = JSON.parse(localStorage.getItem('tally')) || {
    wins: 0,
    loses: 0,
};

function coinFlip(guess) {
    const random = Math.random();
    const result = random < 0.5 ? 'Heads' : 'Tails';

    // update the tally based on the result
    if (guess === result) {
        tally.win ++;
    } else {
        tally.lose ++;
    }
    
    // store the tally in local storage
    localStorage.setItem('tally', JSON.stringify(tally));

    alert(`Coin Flipped: ${result}, ${guess === result ? 'You win!' : 'You lose!'} \n Wins: ${tally.win}, Loses: ${tally.lose}`);
}