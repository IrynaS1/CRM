'use strict';
(() => {
	const FIGURES_ENG = ['rock', 'scissors', 'paper'];
	const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

	/* const getFigure = lang => {

	}; */

	const game = (language) => {
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

		const getUserChoice = () => {
			let enterChoice = prompt('Введите один из вариантов: \n1. камень \n2. ножницы\n3. бумага', '');
			enterChoice = enterChoice.toLowerCase();
			let userChoice = '';
			if (enterChoice[0] === 'к') {
				return userChoice = 'камень';
			} else if (enterChoice[0] === 'н') {
				return userChoice = 'ножницы';
			} else if (enterChoice[0] === 'б') {
				return userChoice = 'бумага';
			}
		};

		const comparison = (moveComputer, moveUser) => {
			const totalResults = () => {
				const result = {
					player: 0,
					computer: 0,

				};
			};

			let countComputer = 0;
			let countPlayer = 0;

			if (moveComputer === moveUser) {
				alert('Ничья!');
				game();
			};
			if ((moveComputer === 'ножницы' && moveUser === 'камень') &&
				(moveComputer === 'бумага' && moveUser === 'ножницы') ||
				(moveComputer === 'камень' && moveUser === 'бумага')) {
				console.log(`Ход компьтера: ${moveComputer}, ход игрока: ${moveUser}`);
				alert('Победа игрока!');
				countPlayer = countPlayer + 1;
				game();
			};
			if ((moveComputer === 'бумага' && moveUser === 'камень') &&
				(moveComputer === 'камень' && moveUser === 'ножницы') ||
				(moveComputer === 'ножницы' && moveUser === 'бумага')) {
				console.log(`Ход компьтера: ${moveComputer}, ход игрока: ${moveUser}`);
				alert('Победа компьютера!');
				countComputer = countComputer + 1;
				game();
			};
			if (moveUser === null || moveUser === '') {
				const answerUser = prompt('Игра будет окончена. Вы уверены, что хотите закончить игру? Введите да или нет', '');

				if (answerUser === 'да' || (moveUser === null || moveUser === '')) {
					let winner = '';
					if (result.computer > result.player) {
						winner = 'компьтер';
					} else if (result.computer < result.player) {
						winner = 'игрок';
					} else {
						winner = 'ничья';
					}
					alert('Игра окончена! Счет: компьтер - `${result.computer}`, игрок - `${result.player}`. Поздравляем, `${winner}`!');
				} else {
					alert('Продолжаем!');
					game();
				}
			};
		};
		const moveComputer = getComputerChoice();
		//console.log('ход компьютера', moveComputer);

		const moveUser = getUserChoice();
		//console.log('ход игрока', moveUser);

		comparison(moveComputer, moveUser);


		/* const lang = language === 'EN' || language === 'ENG' ?
			FIGURES_ENG : FIGURES_RUS; */

		/* 		return function start() {
		
				}; */
	};

	window.RPS = game;
})();