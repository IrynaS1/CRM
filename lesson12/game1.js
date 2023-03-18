'use strict';
(() => {
	const game = (language) => {

		const result = {
			player: 0,
			computer: 0,
		};

		function start() {
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
						start();
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

			const comparison = (computerChoice, userChoice) => {

				// если ничья
				if (computerChoice === userChoice) {
					alert('Ничья!');
					start();
				}

				// победа игрока
				if ((computerChoice === 'ножницы' && userChoice === 'камень') ||
					(computerChoice === 'бумага' && userChoice === 'ножницы') ||
					(computerChoice === 'камень' && userChoice === 'бумага')) {
					console.log(`Ход компьтера: ${computerChoice}, ход игрока: ${userChoice}`);
					alert('Победа игрока!');
					result.player++;
				}

				// победа компьютера
				if ((computerChoice === 'бумага' && userChoice === 'камень') ||
					(computerChoice === 'камень' && userChoice === 'ножницы') ||
					(computerChoice === 'ножницы' && userChoice === 'бумага')) {
					console.log(`Ход компьтера: ${computerChoice}, ход игрока: ${userChoice}`);
					alert('Победа компьютера!');
					result.computer++;
				}

				if (computerChoice === null || userChoice === '') {
					return start();
				}
			}

			comparison(computerChoice, userChoice);

			start();
		}
	};
	window.RPS = game();
})();