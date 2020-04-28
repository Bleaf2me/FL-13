let game = confirm('Do you want to play a game?', ''),
    startingMax = 5,
    startingPrise = 100,
    promtMessage = '',
    startingAttempts = 3,
    totalPrise = 0,
    startingCurrentPrise = 100,
    number,
    userNumber,
    multiplier = 2,
    mult = 0,
    maxAttempts = 3,
    lastAttempt = 2,
    resetCycle = -1;

if (game === true) {
  let currentPrise = startingPrise,
      attempts = startingAttempts,
      max = startingMax;
      number = Math.round(Math.random() * max);
  for (let i = 0; i < maxAttempts; i++) {
    userNumber = +prompt(`Choose a roulette pocket number from 0 to ${max}
Attempts left: ${attempts}
Total prise: ${totalPrise}$
Possible prise on current attemt: ${currentPrise}$`);

    if (userNumber === number) {
      totalPrise += currentPrise;
      mult = ++mult;
      let won = confirm(`Congratulation, you won! Your prize is: ${currentPrise}$. Do you want to continue?`);
      currentPrise = startingPrise * Math.pow(multiplier, mult);

      if (won === true) {
        max += startingMax;
        number = Math.round(Math.random() * max);
        attempts = startingAttempts;
        i = resetCycle;
      } else {
        alert(`Thank you for your participation. Your prize is: ${totalPrise}$`);
        let cont = confirm('Do you want to play again?');

        if (cont === true) {
          currentPrise = startingPrise;
          attempts = startingAttempts;
          totalPrise = 0;
          max = startingMax;
          mult = 0;
          i = resetCycle;
          number = Math.round(Math.random() * max);
        } else {
          break;
        }

      }
    } else {
      attempts--;
      currentPrise = currentPrise / multiplier;

      if (i === lastAttempt) {
        alert(`Thank you for your participation. Your prize is: ${totalPrise}$`);
        let cont2 = confirm('Do you want to play again?');

        if (cont2 === true) {
          currentPrise = startingPrise;
          attempts = startingAttempts;
          totalPrise = 0;
          max = startingMax;
          mult = 0;
          i = resetCycle;
          number = Math.round(Math.random() * max);
        }

      }

    }
  }
} else {
  alert('You did not become a billionaire, but can.');
}
