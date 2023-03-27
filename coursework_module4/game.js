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
          alert(`Игра окончена, компьтер проиграл.`);
          return game();
        } else {
          alert(`Игра окончена, игрок проиграл.`);
          return game();
        }
      }

      const getUserChoice = () => {
        const ballanceBalls = balls.player;

        const enter =
               prompt(`Введите число от 1 до ${ballanceBalls}`, '');

        if (enter === null || enter === '') {
          const askOnce =
                  prompt('Хотите закончить игру? Введите да или нет', '');

          if (askOnce === 'да' ||
                  (askOnce === null || askOnce === '')) {
            if (balls.computer === 0) {
              return alert(`Игра окончена, компьтер проиграл.`);
            } else if (balls.player === 0) {
              return alert(`Игра окончена, игрок проиграл.`);
            } else {
              return alert(`Игра так и не началась!`);
            }
          } else {
            alert('Продолжаем!');
            return start();
          }
        } else if (enter > ballanceBalls || enter < 1) {
          alert(`Число должно быть от 1 до ${ballanceBalls}`);
          return start();
        } else if (!/^[0-9]+$/.test(parseInt(enter))) {
          alert(`Введен неверный формат данных!`);
          start();
        } else {
          return parseInt(enter);
        }
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
          console.log(`Компьтер: четное, игрок: ${moveUser}`);
          alert('Компьтер угадал!');
          balls.computer += moveUser;
          balls.player -= moveUser;
          start();
        } else {
          console.log(`Компьтер: нечетное, игрок: ${moveUser}`);
          alert('Компьтер не угадал!');
          balls.computer -= moveUser;
          balls.player += moveUser;
          start();
        }
      };

      const moveUser = getUserChoice();

      const moveComputer = getComputerChoice();

      comparison(moveComputer, moveUser);
    };
  };

  window.RPS = game();
})();
