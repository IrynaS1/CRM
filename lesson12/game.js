'use strict';
(() => {
	//const FIGURES_ENG = ['rock', 'scissors', 'paper'];
	//const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

	/* const getFigure = lang => {
 
	 }; */

	const game = (language) => {
		// алгоритм получения ответа компьтера
		const getComputerChoice = () => {
			let computerChoice = '';
			const getRandom = Math.random();
			console.log(getRandom);
			if (getRandom < 0.34) {
				return computerChoice = 'камень';
			} else if (getRandom < 0.64) {
				return computerChoice = 'ножницы';
			} else {
				return computerChoice = 'бумага';
			}
		};

		// алгоритм получения ответа игрока
		const getUserChoice = () => {
			let enterChoice = prompt('Введите один из вариантов: камень, ножницы или бумага', '');
			if (enterChoice !== null || enterChoice !== '') {
				enterChoice = enterChoice.toLocaleLowerCase();
			}
			let userChoice = '';
			if (enterChoice[0] === 'к') {
				return userChoice = 'камень';
			} else if (enterChoice[0] === 'н') {
				return userChoice = 'ножницы';
			} else if (enterChoice[0] === 'б') {
				return userChoice = 'бумага';
			} else {
				return userChoice;
			}
		};

		const comparison = (moveComputer, moveUser) => {
			const totalResults = (countPlayer, countComputer) => {
				console.log('countPlayer на входе функции', countPlayer);
				console.log('countComputer на входе функции', countComputer);

				const result = {
					player: 0,
					computer: 0,
				};

				result.player += countPlayer;
				result.computer += countComputer;

				console.log('player счет в итоге', result.player);
				console.log('computer счет в итоге', result.computer);

				console.log('result в итоге весь объект', result);
				return result.player, result.computer;
			};

			// если ничья
			if (moveComputer === moveUser) {
				alert('Ничья!');
				game();
			}

			let countPlayer = 0;
			let countComputer = 0;

			// победа игрока
			if ((moveComputer === 'ножницы' && moveUser === 'камень') ||
				(moveComputer === 'бумага' && moveUser === 'ножницы') ||
				(moveComputer === 'камень' && moveUser === 'бумага')) {
				console.log(`Ход компьтера: ${moveComputer}, ход игрока: ${moveUser}`);
				alert('Победа игрока!');
				countPlayer = 1;
				countComputer = 0;
				console.log('countPlayer', countPlayer);
				totalResults(countPlayer, countComputer);
				game();
			}

			// победа компьютера
			if ((moveComputer === 'бумага' && moveUser === 'камень') ||
				(moveComputer === 'камень' && moveUser === 'ножницы') ||
				(moveComputer === 'ножницы' && moveUser === 'бумага')) {
				console.log(`Ход компьтера: ${moveComputer}, ход игрока: ${moveUser}`);
				alert('Победа компьютера!');
				countComputer = 1;
				countPlayer = 0;
				console.log('countComputer', countComputer);
				totalResults(countPlayer, countComputer);
				game();
			}

			// игрок нажал отмену, окончание игры
			if (moveUser === '') {
				const answerUser = prompt('Игра будет окончена. Вы уверены, что хотите закончить игру? Введите да или нет', '');

				if (answerUser === 'да' || (answerUser === null || answerUser === '')) {
					let winner = '';
					if (result.computer > result.player) {
						winner = 'компьтер';
					} else if (result.computer < result.player) {
						winner = 'игрок';
					} else {
						winner = 'ничья';
					}
					alert(`Игра окончена! Счет: компьтер - ${result.computer}, игрок - ${result.player}. Поздравляем, ${winner}!`);
				} else {
					alert('Продолжаем!');
					game();
				}
			}
		};
		const moveComputer = getComputerChoice();

		const moveUser = getUserChoice();
		console.log('moveUser перед сравнением', moveUser);

		comparison(moveComputer, moveUser);


		/* const lang = language === 'EN' || language === 'ENG' ?
			  FIGURES_ENG : FIGURES_RUS; */

		/* 		return function start() {
  
				  }; */
	};

	window.RPS = game;
})();
