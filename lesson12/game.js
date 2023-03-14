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

			if (enterChoice === null) {
				const clarification =
					prompt('Игра будет окончена. Вы уверены, что хотите закончить игру? Введите да или нет', '');

				if (clarification === 'да' || (clarification === null || clarification === '')) {
					return alert(`Игра окончена!`);
				} else {
					alert('Продолжаем!');
					game();
				}
			};

			let userChoice = '';

			if (enterChoice[0] === 'к' || enterChoice[0] === 'К') {
				return userChoice = 'камень';
			} else if (enterChoice[0] === 'н' || enterChoice[0] === 'Н') {
				return userChoice = 'ножницы';
			} else if (enterChoice[0] === 'б' || enterChoice[0] === 'Б') {
				return userChoice = 'бумага';
			} else {
				return userChoice;
			}
		};

		const totalResults = (countPlayer, countComputer) => {
			console.log('countPlayer на входе функции', countPlayer);
			console.log('countComputer на входе функции', countComputer);

			const result = {
				player: 0,
				computer: 0,
			};

			if (countPlayer = 1) {
				result.player = result.player++;
			} else {
				endGame();
			};

			if (countComputer = 1) {
				result.computer = result.computer++;
			} else {
				endGame();
			};

			console.log('player счет в итоге', result.player);
			console.log('computer счет в итоге', result.computer);

			console.log('result в итоге весь объект', result);
			//return alert(`Игра окончена! Счет: компьтер - ${result.computer}, игрок - ${result.player}.`);

		};

		const endGame = () => {
			if (moveUser === null || moveUser === '') {
				const answerUser = prompt('Игра будет окончена. Вы уверены, что хотите закончить игру? Введите да или нет', '');

				if (answerUser === 'да' || (answerUser === null || answerUser === '')) {
					console.log('result.computer перед определением результата', result.computer);
					console.log('result.player перед определением результата', result.player);
					return alert(`Игра окончена! Счет: компьтер - ${result.computer}, игрок - ${result.player}.`);
				} else {
					alert('Продолжаем!');
					game();
				}
			}
		};

		const comparison = (moveComputer, moveUser) => {
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
				totalResults(countPlayer, countComputer);
			}

			// победа компьютера
			if ((moveComputer === 'бумага' && moveUser === 'камень') ||
				(moveComputer === 'камень' && moveUser === 'ножницы') ||
				(moveComputer === 'ножницы' && moveUser === 'бумага')) {
				console.log(`Ход компьтера: ${moveComputer}, ход игрока: ${moveUser}`);
				alert('Победа компьютера!');
				countComputer = 1;
				countPlayer = 0;
				totalResults(countPlayer, countComputer);
			}

			if (moveUser === null || moveUser === '') {
				endGame();
			};
		};
		const moveComputer = getComputerChoice();

		const moveUser = getUserChoice();

		comparison(moveComputer, moveUser);

		if (moveUser === null || moveUser === '') {
			endGame();
		} else {
			game();
		};

		/* const lang = language === 'EN' || language === 'ENG' ?
			  FIGURES_ENG : FIGURES_RUS; */

		/* 		return function start() {
	 
				  }; */
	};

	window.RPS = game;
})();
