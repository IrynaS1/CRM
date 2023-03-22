'use strict';
(() => {
	const game = (language) => {
		const result = {
			player: 0,
			computer: 0,
		};

		return function start() {
			const choice = ['камень', 'ножницы', 'бумага'];

			// алгоритм получения ответа компьтера
			const getComputerChoice = () => {
				let computerChoice;
				const getRandom = Math.random();
				console.log(getRandom);
				if (getRandom < 0.34) {
					return computerChoice = choice[0];
				} else if (getRandom < 0.64) {
					return computerChoice = choice[1];
				} else {
					return computerChoice = choice[2];
				}
			};

			// алгоритм получения ответа игрока
			const getUserChoice = () => {
				let enterChoice =
					prompt('Введите один из вариантов: камень, ножницы или бумага', '');

				if (enterChoice === null || enterChoice === '') {
					const clarification =
						prompt('Хотите закончить игру? Введите да или нет', '');

					if (clarification === 'да' ||
						(clarification === null || clarification === '')) {
						alert(`Игра окончена!`);
						return alert(`Счет: компьтер ${result.computer}, игрок ${result.player}`);
					} else {
						alert('Продолжаем!');
						start();
					}
				} else {
					enterChoice = enterChoice.toLowerCase();
				};

				let check = choice.filter(elem => elem.indexOf(enterChoice) === 0);

				if (check !== []) {
					return check.join();
				} else {
					return getUserChoice();
				}
			};

			const comparison = (moveComputer, moveUser) => {
				// если ничья
				if (moveComputer === moveUser) {
					alert('Ничья!');
					start();
				}

				if ((moveComputer === 'ножницы' && moveUser === 'камень') ||
					(moveComputer === 'бумага' && moveUser === 'ножницы') ||
					(moveComputer === 'камень' && moveUser === 'бумага')) {
					console.log(`Компьтер: ${moveComputer}, игрок: ${moveUser}`);
					alert('Победа игрока!');
					result.player++;
					start();
				} else {
					console.log(`Компьтер: ${moveComputer}, игрок: ${moveUser}`);
					alert('Победа компьютера!');
					result.computer++;
					start();
				}
			};

			const moveComputer = getComputerChoice();

			const moveUser = getUserChoice();

			comparison(moveComputer, moveUser);

			start();
		};
	};

	window.RPS = game();
})();
