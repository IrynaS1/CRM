'use strict';
(() => {
  const game = () => {
    const balls = {
      player: 5,
      computer: 5,
    };

    return function start() {
      if (balls.player === 0 || balls.computer === 0) {
        if (balls.computer === 0) {
          return alert(`Игра окончена, компьтер проиграл.`);
        } else {
          return alert(`Игра окончена, игрок проиграл.`);
        }
      }

      const getUserChoice = () => {
        const ballanceBalls = balls.player;
        const enter =
              prompt(`Введите число от 1 до ${ballanceBalls}`, '');

        const enterNumber = parseInt(enter);
        return enterNumber;
      };

      const getComputerChoice = () => {
        const getRandom = Math.random();
        console.log(getRandom);
        let computerChoice;
        if (getRandom < 0.5) {
          alert('Четное!');
          return computerChoice = 0;
        } else {
          alert('Нечетное!');
          return computerChoice = 1;
        }
      };

      const comparison = (moveComputer, moveUser) => {
        if (moveComputer === moveUser % 2) {
          console.log(`Компьтер: ${moveComputer}, игрок: ${moveUser}`);
          alert('Компьтер угадал!');
          balls.computer += moveUser;
          balls.player -= moveUser;
          start();
        } else {
          console.log(`Компьтер: ${moveComputer}, игрок: ${moveUser}`);
          alert('Компьтер не угадал!');
          balls.computer -= moveUser;
          balls.player += moveUser;
          start();
        }
      };

      const moveUser = getUserChoice();

      const moveComputer = getComputerChoice();

      comparison(moveComputer, moveUser);

      start();
    };
  };

  window.RPS = game();
})();
