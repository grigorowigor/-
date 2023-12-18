// document.addEventListener('DOMContentLoaded', function () {
//     const table = document.getElementById('gameTable');
//     const timerDisplay = document.getElementById('timer');
//     const cellsToGuess = getRandomCells(10);
//     let remainingTime = 60; 

//     function getRandomCells(count) {
//         const cells = [];
//         while (cells.length < count) {
//             const cell = {
//                 row: Math.floor(Math.random() * 10),
//                 col: Math.floor(Math.random() * 10)
//             };
//             if (!cells.some(c => c.row === cell.row && c.col === cell.col)) {
//                 cells.push(cell);
//             }
//         }
//         return cells;
//     }

//     function startTimer() {
//         const timerInterval = setInterval(function () {
//             remainingTime--;
//             timerDisplay.textContent = `Time: ${remainingTime}s`;

//             if (remainingTime <= 0) {
//                 clearInterval(timerInterval);
//                 endGame(false); 
//             }
//         }, 1000);
//     }

//     function cellClickHandler(event) {
//         const clickedRow = event.target.parentNode.rowIndex;
//         const clickedCol = event.target.cellIndex;
//         const clickedCell = { row: clickedRow, col: clickedCol };

//         const isCorrectGuess = cellsToGuess.some(cell =>
//             cell.row === clickedRow && cell.col === clickedCol
//         );

//         if (isCorrectGuess) {
//             event.target.style.backgroundColor = 'green';
//             cellsToGuess.splice(cellsToGuess.findIndex(cell =>
//                 cell.row === clickedRow && cell.col === clickedCol
//             ), 1);

//             if (cellsToGuess.length === 0) {
//                 clearInterval(timerInterval);
//                 endGame(true); 
//             }
//         } else {
//             event.target.style.backgroundColor = 'red';
//         }
//     }

//     function endGame(isWinner) {
//         if (isWinner) {
//             alert('Поздравляем! Вы угадали все ячейки.');
//         } else {
//             alert('Время вышло! Вы проиграли.');
//         }
//     }

//     for (let i = 0; i < 10; i++) {
//         const row = table.insertRow();
//         for (let j = 0; j < 10; j++) {
//             const cell = row.insertCell();
//             cell.addEventListener('click', cellClickHandler);
//         }
//     }

//     startTimer();
// });
 

// 2----------

// document.addEventListener('DOMContentLoaded', function () {
//     const inputField = document.getElementById('inputField');
//     const keyboard = document.getElementById('keyboard');
//     let capsLockEnabled = false;
  
//     const keys = [
//       '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
//       'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
//       'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
//       'z', 'x', 'c', 'v', 'b', 'n', 'm'
//     ];
  
//     keys.forEach(key => {
//       const button = document.createElement('div');
//       button.classList.add('key');
//       button.textContent = key;
//       button.addEventListener('click', () => {
//         inputField.value += capsLockEnabled ? key.toUpperCase() : key.toLowerCase();
//       });
//       keyboard.appendChild(button);
//     });
  
//     // Add Caps Lock button
//     const capsLockButton = document.createElement('div');
//     capsLockButton.classList.add('key', 'caps-lock');
//     capsLockButton.textContent = 'Caps Lock';
//     capsLockButton.addEventListener('click', () => {
//       capsLockEnabled = !capsLockEnabled;
//       capsLockButton.style.backgroundColor = capsLockEnabled ? '#9acd32' : '#eee';
//     });
//     keyboard.appendChild(capsLockButton);
//   });

  
//   3--------------
  
// document.addEventListener("DOMContentLoaded", function() {
//     const currentDate = new Date();
//     let currentMonth = currentDate.getMonth() + 1; 
//     let currentYear = currentDate.getFullYear();

//     const monthYearElement = document.getElementById('month-year');
//     const ul = document.querySelector('.horizontal-list');
//     const prevMonthLink = document.getElementById('prev-month');
//     const nextMonthLink = document.getElementById('next-month');

//     updateCalendar();


//     prevMonthLink.addEventListener('click', function(e) {
//         e.preventDefault();
//         changeMonth(-1);
//     });

//     nextMonthLink.addEventListener('click', function(e) {
//         e.preventDefault();
//         changeMonth(1);
//     });

//     function updateCalendar() {
//         const monthNames = [
//             'Январь', 'Февраль', 'Март', 'Апрель',
//             'Май', 'Июнь', 'Июль', 'Август',
//             'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
//         ];
//         const currentMonthName = monthNames[currentMonth - 1];

//         monthYearElement.textContent = `${currentMonthName} ${currentYear}`;

//         ul.innerHTML = '';
//         for (let i = 1; i <= daysInMonth(currentMonth, currentYear); i++) {
//             const li = document.createElement('li');
//             li.textContent = i;

//             if (i === currentDate.getDate() && currentMonth === currentDate.getMonth() + 1) {
//                 li.classList.add('current-day');
//             }

//             ul.appendChild(li);
//         }
//     }

//     function changeMonth(change) {
//         currentMonth += change;

//         if (currentMonth === 13) {
//             currentMonth = 1;
//             currentYear += 1;
//         } else if (currentMonth === 0) {
//             currentMonth = 12;
//             currentYear -= 1;
//         }

//         updateCalendar();
//     }

//     function daysInMonth(month, year) {
//         return new Date(year, month, 0).getDate();
//     }
// });


// 4-----------------

// const tagDescriptions = {
//     "a": "Определяет гиперссылку",
//     "p": "Определяет абзац текста",
//     "h1": "Определяет заголовок первого уровня",
//   };
  
//   function checkEnter(event) {
//     if (event.key === "Enter") {
//       showTagDescription();
//     }
//   }
  
//   function showTagDescription() {
//     const tagInput = document.getElementById("tagInput");
//     const tagDescriptionDiv = document.getElementById("tagDescription");
//     const tagName = tagInput.value.toLowerCase();
  
//     if (tagDescriptions[tagName]) {
//       tagDescriptionDiv.textContent = `Описание тега <${tagName}>: ${tagDescriptions[tagName]}`;
//     } else {
//       tagDescriptionDiv.textContent = `Тег <${tagName}> не найден.`;
//     }
  

//     tagInput.value = "";
//   }
  
// 5----------------

// const historicalEvents = {
//     2000: [
//       {
//         date: "01-01",
//         title: "Начало нового тысячелетия",
//         description: "Начало третьего тысячелетия по григорианскому календарю.",
//       },
//     ],
//     2001: [
//       {
//         date: "09-11",
//         title: "Теракты 11 сентября",
//         description: "Террористические атаки на Всемирный торговый центр в Нью-Йорке и Пентагон в Вашингтоне.",
//       },
//     ],
//     2002: [
//       {
//         date: "01-01",
//         title: "Введение евро",
//         description: "В 12 странах Европейского союза введена европейская валюта евро.",
//       },

//     ],

//   };
  
//   const inputElement = document.getElementById("input");
//   const tableElement = document.getElementById("table");
  
//   inputElement.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//       const year = inputElement.value.trim();
  
//       if (historicalEvents.hasOwnProperty(year)) {
//         displayEvents(historicalEvents[year]);
//       } else {
//         clearTable();
//         alert("Нет информации о событиях для указанного года.");
//       }
//     }
//   });
  
//   function displayEvents(events) {
//     clearTable();
  
//     events.forEach((event, index) => {
//       const row = tableElement.insertRow(index);
//       const dateCell = row.insertCell(0);
//       const titleCell = row.insertCell(1);
//       const descriptionCell = row.insertCell(2);
  
//       dateCell.textContent = event.date;
//       titleCell.textContent = event.title;
//       descriptionCell.textContent = event.description;
//     });
//   }
  
//   function clearTable() {
//     tableElement.innerHTML = "";
//   }
 
// 6-----------------

// const horoscopes = {
//     "Овен": {
//       today: "Гороскоп для Овна на сегодня...",
//       tomorrow: "Гороскоп для Овна на завтра...",
//       afterTomorrow: "Гороскоп для Овна на послезавтра...",
//     },
//     "Телец": {
//       today: "Гороскоп для Тельца на сегодня...",
//       tomorrow: "Гороскоп для Тельца на завтра...",
//       afterTomorrow: "Гороскоп для Тельца на послезавтра...",
//     },
//   };
  
//   document.getElementById("showHoroscope").addEventListener("click", function () {
//     const birthdate = document.getElementById("birthdate").value;
//     const zodiacSign = getZodiacSign(birthdate);
//     const selectedDay = getSelectedDay();
  
//     if (horoscopes.hasOwnProperty(zodiacSign)) {
//       const horoscope = horoscopes[zodiacSign][selectedDay];
//       displayHoroscope(horoscope);
//     } else {
//       displayHoroscope("Извините, гороскоп для вашего знака Зодиака не найден.");
//     }
//   });
  
//   function getZodiacSign(birthdate) {

//   }
  
//   function getSelectedDay() {
//     if (document.getElementById("today").checked) {
//       return "today";
//     } else if (document.getElementById("tomorrow").checked) {
//       return "tomorrow";
//     } else if (document.getElementById("afterTomorrow").checked) {
//       return "afterTomorrow";
//     }
//   }
  
//   function displayHoroscope(horoscope) {
//     document.getElementById("output").textContent = horoscope;
//   }
  
// 7---------------

// document.addEventListener("DOMContentLoaded", function () {
//     const predictions = [
//         { text: "Хорошее предсказание 1", type: "good" },
//         { text: "Хорошее предсказание 2", type: "good" },
//         { text: "Плохое предсказание 1", type: "bad" },
//         { text: "Плохое предсказание 2", type: "bad" },
//         // Добавьте свои предсказания
//     ];

//     let timerInterval;
//     let predictionIndex;

//     const timerElement = document.getElementById("timer");
//     const textElement = document.getElementById("text");
//     const startButton = document.getElementById("start");
//     const stopButton = document.getElementById("stop");

//     startButton.addEventListener("click", function () {
//         startButton.classList.remove("active");
//         stopButton.classList.add("active");
//         timerInterval = setInterval(function () {
//             const randomNumber = Math.floor(Math.random() * predictions.length);
//             timerElement.textContent = randomNumber + 1;
//         }, 100);
//     });

//     stopButton.addEventListener("click", function () {
//         clearInterval(timerInterval);
//         predictionIndex = parseInt(timerElement.textContent, 10) - 1;

//         const selectedPrediction = predictions[predictionIndex];
//         textElement.textContent = selectedPrediction.text;
//         textElement.className = selectedPrediction.type;

//         startButton.style.display = "none";
//         stopButton.style.display = "none";
//     });
// });

// 2.2-------

// let cities = [];

// function makeMove(city) {
//   // Проверка на пустой массив или первый ход
//   if (cities.length === 0) {
//     cities.push(city);
//     return "Ход успешно сделан. Город добавлен в список.";
//   }

//   const lastCity = cities[cities.length - 1];
//   if (city.charAt(0).toLowerCase() === lastCity.slice(-1).toLowerCase()) {
//     // Проверка на уникальность города
//     if (!cities.includes(city)) {
//       cities.push(city);
//       return "Ход успешно сделан. Город добавлен в список.";
//     } else {
//       return "Этот город уже был в игре. Пожалуйста, введите другой город.";
//     }
//   } else {
//     return "Неверный ход. Первая буква города не совпадает с последней буквой предыдущего города.";
//   }
// }

// console.log(makeMove("Москва")); // Ход успешно сделан. Город добавлен в список.
// console.log(makeMove("Астана")); // Ход успешно сделан. Город добавлен в список.
// console.log(makeMove("Алматы")); // Неверный ход. Первая буква города не совпадает с последней буквой предыдущего города.
// console.log(makeMove("Астана")); // Этот город уже был в игре. Пожалуйста, введите другой город.


// 2.3--------------

// let allCities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань", "Нижний Новгород", "Челябинск", "Самара", "Омск", "Ростов-на-Дону"];
// let usedCities = [];
// let currentPlayer = "player";

// function playerTurn() {
//     let inputElement = document.getElementById("cityInput");
//     let cityName = inputElement.value.trim();

//     if (isValidMove(cityName)) {
//         usedCities.push(cityName);
//         currentPlayer = "robot";
//         robotTurn();
//         updateOutput(`Вы ввели: ${cityName}`);
//     } else {
//         updateOutput("Некорректный ход. Попробуйте еще раз.");
//     }

//     inputElement.value = "";
// }

// function robotTurn() {
//     let lastCity = usedCities[usedCities.length - 1].toLowerCase();
//     let validCities = allCities.filter(city => !usedCities.includes(city) && city.toLowerCase().startsWith(lastCity.charAt(lastCity.length - 1)));

//     if (validCities.length > 0) {
//         let randomIndex = Math.floor(Math.random() * validCities.length);
//         let robotCity = validCities[randomIndex];
//         usedCities.push(robotCity);
//         currentPlayer = "player";
//         updateOutput(`Робот ввел: ${robotCity}`);
//     } else {
//         updateOutput("Робот не смог найти подходящий город и проиграл!");
//     }
// }

// function isValidMove(cityName) {
//     let lastCity = usedCities.length > 0 ? usedCities[usedCities.length - 1] : "";

//     return (
//         cityName &&
//         !usedCities.includes(cityName) &&
//         cityName.toLowerCase().startsWith(lastCity.toLowerCase().charAt(lastCity.length - 1)) &&
//         allCities.includes(cityName)
//     );
// }

// function updateOutput(message) {
//     let outputElement = document.getElementById("output");
//     outputElement.textContent = message;
// }

// 3.1-----------------------

// document.addEventListener('DOMContentLoaded', function () {
//   let input = document.querySelector('#input');
//   let list = document.querySelector('#list');

//   input.addEventListener('keydown', function (event) {
//       if (event.key === 'Enter' && input.value.trim() !== '') {
//           addTask(input.value);
//           input.value = '';
//           event.preventDefault(); 
//       }
//   });

//   function addTask(text) {
//       let task = document.createElement('li');
//       task.className = 'task';

//       let taskText = document.createElement('div');
//       taskText.className = 'task-text';
//       taskText.textContent = text;
//       taskText.addEventListener('dblclick', function () {
//           editTask(taskText);
//       });

//       let taskActions = document.createElement('div');
//       taskActions.className = 'task-actions';

//       let deleteButton = document.createElement('span');
//       deleteButton.textContent = '❌';
//       deleteButton.addEventListener('click', function () {
//           deleteTask(task);
//       });

//       let doneButton = document.createElement('span');
//       doneButton.textContent = '✓';
//       doneButton.addEventListener('click', function () {
//           markAsDone(taskText);
//       });

//       taskActions.appendChild(deleteButton);
//       taskActions.appendChild(doneButton);

//       task.appendChild(taskText);
//       task.appendChild(taskActions);

//       list.appendChild(task);
//   }

//   function deleteTask(task) {
//       list.removeChild(task);
//   }

//   function editTask(taskText) {
//       let newText = prompt('Введите новый текст:', taskText.textContent);
//       if (newText !== null) {
//           taskText.textContent = newText;
//       }
//   }

//   function markAsDone(taskText) {
//       taskText.style.textDecoration = 'line-through';
//       taskText.style.color = '#888';
//   }
// });

// 3.3------------------

// let remove = document.createElement('span');
// remove.classList.add('remove');
// remove.textContent = 'удалить';
// remove.addEventListener('click', function() {
//     // получаем родительский элемент (ul) и удаляем текущий элемент (li)
//     this.parentNode.remove();
// });

// li.appendChild(remove);


// 3.4----------

// let mark = document.createElement('span');
// mark.classList.add('mark');
// mark.textContent = 'сделано';
// mark.addEventListener('click', function() {
//     // Добавляем класс "done" к родительскому элементу li
//     this.parentNode.classList.add('done');
// });
// li.appendChild(mark);

// 3.5---------------------

// let task = document.createElement('span');
// task.classList.add('task');
// task.textContent = this.value;
// task.addEventListener('dblclick', function() {
//     // Создаем инпут
//     let input = document.createElement('input');
//     input.type = 'text';
//     input.value = task.textContent;

//     // Заменяем текстовый контент нашего span на инпут
//     task.replaceWith(input);

//     // Фокусируемся на инпуте
//     input.focus();

//     // Обработчик события нажатия Enter
//     input.addEventListener('keyup', function(event) {
//         if (event.key === 'Enter') {
//             // При нажатии Enter сохраняем значение инпута в span
//             task.textContent = input.value;

//             // Заменяем инпут обратно на span
//             input.replaceWith(task);
//         }
//     });

//     
//     input.addEventListener('blur', function() {
//         task.textContent = input.value;

//         input.replaceWith(task);
//     });
// });

// li.appendChild(task);

// 4.2-----------------------------

// document.addEventListener('DOMContentLoaded', function() {
//   const nameInput = document.getElementById('name');
//   const priceInput = document.getElementById('price');
//   const amountInput = document.getElementById('amount');
//   const addBtn = document.getElementById('add');
//   const table = document.getElementById('table');
//   const totalSpan = document.getElementById('total');

//   function createCell(value, className) {
//       let td = document.createElement('td');
//       td.textContent = value;
//       td.classList.add(className);
//       return td;
//   }

//   addBtn.addEventListener('click', function() {
//       let tr = document.createElement('tr');
      
//       tr.appendChild(createCell(nameInput.value, 'name'));
//       tr.appendChild(createCell(priceInput.value, 'price'));
//       tr.appendChild(createCell(amountInput.value, 'amount'));
//       tr.appendChild(createCell(priceInput.value * amountInput.value, 'cost'));

//       let removeCell = createCell('удалить', 'remove');
//       removeCell.addEventListener('click', function() {
//           tr.remove();
//           updateTotal();
//       });

//       tr.appendChild(removeCell);
      
//       table.appendChild(tr);


//       updateTotal();


//       nameInput.value = '';
//       priceInput.value = '';
//       amountInput.value = '';
//   });

//   function updateTotal() {
//       let total = 0;
//       const costCells = document.querySelectorAll('.cost');
//       costCells.forEach(cell => {
//           total += parseFloat(cell.textContent);
//       });
//       totalSpan.textContent = total.toFixed(2);
//   }
// });

// 4.3---------------------------------

// function recountTotal() {
//   let costs = table.querySelectorAll('.cost');
//   let total = 0;

//   if (costs.length > 0) {
//     costs.forEach(function(costElement) {
//       total += parseFloat(costElement.textContent);
//     });
//   }


//   total = total.toFixed(2);


//   document.getElementById('total').textContent = total;
// }

// 4.4--------------------------------

// createCell(tr, 'удалить', 'remove').addEventListener('click', function() {

//   let row = this.closest('tr');


//   if (row) {
//       row.remove();
      

//       recountTotal();
//   }
// });

// 4.5----------------------------

// function createCell(tr, text, id) {
//   let td = document.createElement('td');
//   td.textContent = text;
//   td.id = id;
//   tr.appendChild(td);
//   return td;
// }

// function allowEdit(td) {
//   td.addEventListener('dblclick', function() {
//     let input = document.createElement('input');
//     input.type = 'text';
//     input.value = td.textContent;
//     td.textContent = '';
//     td.appendChild(input);

//     input.addEventListener('keyup', function(event) {
//       if (event.key === 'Enter') {
//         td.textContent = input.value;
//       }
//     });

//     input.focus();
//   });
// }

// let table = document.getElementById('myTable');
// let tr = table.getElementsByTagName('tr')[0];

// allowEdit(createCell(tr, 'Name', 'nameCell'));
// allowEdit(createCell(tr, 'Price', 'priceCell'));
// allowEdit(createCell(tr, 'Amount', 'amountCell'));


// 4.6----------------------------

// function allowEdit(td) {
// 	td.addEventListener('dblclick', function() {
// 		let text = td.textContent
// 		td.textContent = '';
		
// 		let input = document.createElement('input');
// 		input.value = text;
// 		input.focus();
// 		td.appendChild(input);
		
// 		input.addEventListener('keydown', function(event) {
// 			if (event.key == 'Enter') {
// 				td.textContent = this.value;
				
// 				if (td.classList.contains('price') || td.classList.contains('amount')) {
// 					// Выполним перерасчет
// 					recalculate();
// 				}
// 			}
// 		});
// 	});
// }


// function recalculate() {
// 	// Получаем ячейки с ценой, количеством и стоимостью
// 	let priceCell = document.querySelector('.price');
// 	let amountCell = document.querySelector('.amount');
// 	let costCell = document.querySelector('.cost');
// 	let totalCell = document.querySelector('.total');
	

// 	let price = parseFloat(priceCell.textContent);
// 	let amount = parseFloat(amountCell.textContent);
	

// 	let cost = price * amount;
// 	let total = calculateTotal();
	

// 	costCell.textContent = cost.toFixed(2);
// 	totalCell.textContent = total.toFixed(2);
// }


// function calculateTotal() {

// 	let costCells = document.querySelectorAll('.cost');
	

// 	let total = 0;
	

// 	costCells.forEach(function(cell) {
// 		total += parseFloat(cell.textContent);
// 	});
	
// 	return total;
// }

// 5.1---------------

// document.addEventListener('DOMContentLoaded', function() {
//   const inputs = document.querySelectorAll('#test input');
//   const checkAnswersBtn = document.getElementById('checkAnswersBtn');

//   checkAnswersBtn.addEventListener('click', function() {
//       inputs.forEach(input => {
//           checkAnswer(input);
//       });
//   });

//   function checkAnswer(input) {
//       const userAnswer = input.value.trim();
//       const correctAnswer = input.dataset.right.trim();

//       if (userAnswer === correctAnswer) {
//           input.classList.remove('wrong');
//           input.classList.add('right');
//       } else {
//           input.classList.remove('right');
//           input.classList.add('wrong');
//       }
//   }
// });

// 5.2---------------

// document.getElementById('button').addEventListener('click', function () {

//   let inputs = document.querySelectorAll('#test input');
  

//   let userAnswers = [];
  

//   inputs.forEach(function (input) {
//       userAnswers.push(input.value);
//   });
  

//   let answers = [
//       'ответ 1',
//       'ответ 2',
//       'ответ 3',
//   ];

//   let isCorrect = true;
//   for (let i = 0; i < answers.length; i++) {
//       if (userAnswers[i] !== answers[i]) {
//           isCorrect = false;
//           break;
//       }
//   }
  

//   if (isCorrect) {
//       alert('Верно!');
//   } else {
//       alert('Неверно. Попробуйте еще раз.');
//   }
// });


// 6.1-----------------------------------

// let cells = document.querySelectorAll('#field td');
// let currentPlayer = 'X';
// let gameOver = false;

// function checkWinner() {

// }

// function handleClick() {
//   if (gameOver) return;

//   if (this.textContent === '') {
//     this.textContent = currentPlayer;

//     if (checkWinner()) {
//       alert(`Player ${currentPlayer} wins!`);
//       gameOver = true;
//     } else {
//       currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//     }
//   } else {
//     alert('This cell is already taken. Choose another one.');
//   }
// }

// function resetGame() {
//   cells.forEach(cell => {
//     cell.textContent = '';
//   });

//   currentPlayer = 'X';
//   gameOver = false;
// }

// cells.forEach(cell => {
//   cell.addEventListener('click', handleClick);
// });

// 6.2-----------------------------------

// function start(cells) {
//     cells.forEach(cell => {
//         cell.addEventListener('click', function () {
//             this.innerHTML = '✖'; 
//         });
//     });
// }

// let cells = document.querySelectorAll('#field td');
// start(cells);

// 6.3-----------------------------------

// document.addEventListener("DOMContentLoaded", function() {
//     let cells = document.querySelectorAll('#field td');
//     start(cells);

//     function start(cells) {
//         let i = 0; 

//         for (let cell of cells) {
//             cell.addEventListener('click', function() {
//                 if (i % 2 === 0) {
//                     this.textContent = 'X';
//                 } else {
//                     this.textContent = 'O';
//                 }

//                 i++; 
//             });
//         }
//     }
// });

// 6.4-----------------------------------

// function start(cells) {
//     let i = 0;
  
//     for (let cell of cells) {
//       cell.addEventListener('click', function() {
//         if (!this.textContent) { 
//           this.textContent = ['X', 'O'][i % 2];
//           i++;
//         }
//       });
//     }
//   }
//   6.5---------------------------

// function start(cells) {
//     let i = 0;
//     let moves = 0; 
//     let victoryDeclared = false;

//     for (let cell of cells) {
//         cell.addEventListener('click', function step() {
//             if (victoryDeclared) {
//                 return;
//             }

//             this.textContent = ['X', 'O'][i % 2];
//             this.removeEventListener('click', step);

//             moves++; 

//             if (isVictory(cells)) {
//                 alert(this.textContent);
//                 victoryDeclared = true;
//             } else if (moves === cells.length) {
//                 alert('Ничья!'); 
//             }

//             i++;
//         });
//     }
// }

// function isVictory(cells) {
//     let combs = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];

//     for (let comb of combs) {
//         if (
//             cells[comb[0]].textContent == cells[comb[1]].textContent &&
//             cells[comb[1]].textContent == cells[comb[2]].textContent &&
//             cells[comb[0]].textContent != ''
//         ) {
//             return true;
//         }
//     }

//     return false;
// }


//   6.6---------------------------

// function start(cells) {
//     let i = 0;
//     let moves = 0; 
//     let victoryDeclared = false;

//     for (let cell of cells) {
//         cell.addEventListener('click', function step() {
//             if (victoryDeclared) {
//                 return;
//             }

//             this.textContent = ['X', 'O'][i % 2];
//             this.removeEventListener('click', step);

//             moves++; 

//             if (isVictory(cells)) {
//                 alert(this.textContent);
//                 victoryDeclared = true;
//             } else if (moves === cells.length) {
//                 alert('Ничья!'); 
//             }

//             i++;
//         });
//     }
// }

// function isVictory(cells) {
//     let combs = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];

//     for (let comb of combs) {
//         if (
//             cells[comb[0]].textContent == cells[comb[1]].textContent &&
//             cells[comb[1]].textContent == cells[comb[2]].textContent &&
//             cells[comb[0]].textContent != ''
//         ) {
//             return true;
//         }
//     }

//     return false;
// }

// --------------------Игра сменов цветов---------------------

// let rows = 3;
// let cols = 3;

// function createGameField(rows, cols) {
//   let field = document.getElementById('field');

//   for (let i = 0; i < rows; i++) {
//     let row = field.insertRow(i);

//     for (let j = 0; j < cols; j++) {
//       let cell = row.insertCell(j);
//       cell.style.backgroundColor = getRandomColor();
//       cell.addEventListener('click', () => changeCellColor(cell));
//     }
//   }
// }

// function getRandomColor() {
//   const colors = ['red', 'green', 'blue']; 
//   return colors[Math.floor(Math.random() * colors.length)];
// }

// function changeCellColor(cell) {
//   const colors = ['red', 'green', 'blue']; 
//   let currentColor = cell.style.backgroundColor;

//   let currentIndex = colors.indexOf(currentColor);
//   let nextIndex = (currentIndex + 1) % colors.length;

//   cell.style.backgroundColor = colors[nextIndex];
// }

// createGameField(rows, cols);
// function getRandomElement(array) {
//     const randomIndex = Math.floor(Math.random() * array.length);
//     return array[randomIndex];
//   }
  
//   document.addEventListener('DOMContentLoaded', function () {
//     let colors = ['red', 'green', 'blue'];
//     let table = document.getElementById('colorTable');
  

//     for (let i = 0; i < 5; i++) {
//       let row = table.insertRow();
  
//       for (let j = 0; j < 5; j++) {
//         let cell = row.insertCell();
//         let randomColor = getRandomElement(colors);
//         cell.classList.add(randomColor);
//       }
//     }
//   });
// document.addEventListener("DOMContentLoaded", function() {
//     let colors = ['red', 'green', 'blue'];
  
//     function getNextColor(currentColor) {
//       const currentIndex = colors.indexOf(currentColor);
//       const nextIndex = (currentIndex + 1) % colors.length;
//       return colors[nextIndex];
//     }
  
//     const table = document.getElementById("colorTable");
//     for (let i = 0; i < 3; i++) {
//       const row = table.insertRow();
//       for (let j = 0; j < 3; j++) {
//         const cell = row.insertCell();
//         cell.style.backgroundColor = colors[0];
  
//         cell.addEventListener("click", function() {
//           const currentColor = this.style.backgroundColor;
//           const nextColor = getNextColor(currentColor);
//           this.style.backgroundColor = nextColor;
//         });
//       }
//     }
//   });
// document.addEventListener("DOMContentLoaded", function() {
//     let colors = ['red', 'green', 'blue'];
  
//     function getNextColor(currentColor) {
//       const currentIndex = colors.indexOf(currentColor);
//       const nextIndex = (currentIndex + 1) % colors.length;
//       return colors[nextIndex];
//     }
  
//     function checkForWin() {
//       const firstCellColor = document.getElementById("colorTable").rows[0].cells[0].style.backgroundColor;
  
//       for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//           const currentCell = document.getElementById("colorTable").rows[i].cells[j];
//           if (currentCell.style.backgroundColor !== firstCellColor) {
//             return false;
//           }
//         }
//       }
//       return true;
//     }
  
//     const table = document.getElementById("colorTable");
//     for (let i = 0; i < 3; i++) {
//       const row = table.insertRow();
//       for (let j = 0; j < 3; j++) {
//         const cell = row.insertCell();
//         cell.style.backgroundColor = colors[0];
  
//         cell.addEventListener("click", function() {
//           const currentColor = this.style.backgroundColor;
//           const nextColor = getNextColor(currentColor);
//           this.style.backgroundColor = nextColor;
  
//           if (checkForWin()) {
//             alert("Поздравляем! Вы победили!");
//           }
  
//           updateClickCounter();
//         });
//       }
//     }
  

// --------------------Календарь---------------------

//     function updateClickCounter() {
//       const clickCounterElement = document.getElementById("clickCounter");
//       const currentClicks = parseInt(clickCounterElement.textContent.split(":")[1].trim(), 10);
//       clickCounterElement.textContent = `Количество кликов: ${currentClicks + 1}`;
//     }
//   });
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');

// function generateCalendar(year, month) {
//   body.innerHTML = '';

//   let firstDay = new Date(year, month, 1);
//   let lastDay = new Date(year, month + 1, 0);
  
//   let daysInMonth = lastDay.getDate();
  
//   let firstDayOfWeek = firstDay.getDay();

//   let row = document.createElement('tr');

//   for (let i = 0; i < firstDayOfWeek; i++) {
//     let cell = document.createElement('td');
//     row.appendChild(cell);
//   }

//   for (let day = 1; day <= daysInMonth; day++) {
//     let cell = document.createElement('td');
//     cell.textContent = day;
//     row.appendChild(cell);

//     if ((firstDayOfWeek + day - 1) % 7 === 0) {
//       body.appendChild(row);
//       row = document.createElement('tr');
//     }
//   }

//   for (let i = (firstDayOfWeek + daysInMonth) % 7; i < 6; i++) {
//     let cell = document.createElement('td');
//     row.appendChild(cell);
//   }

//   body.appendChild(row);
// }

// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();

// generateCalendar(year, month);
// function range(count) {
//     return Array.from({ length: count }, (_, i) => i + 1);
// }

// function getLastDay(year, month) {
//     return new Date(year, month + 1, 0).getDate();
// }

// const currentDate = new Date();
// const currentYear = currentDate.getFullYear();
// const currentMonth = currentDate.getMonth();

// const lastDayOfMonth = getLastDay(currentYear, currentMonth);

// const daysArray = range(lastDayOfMonth);

// console.log(daysArray);

// const calendarTable = document.createElement('table');
// const headerRow = calendarTable.insertRow();
// const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

// daysOfWeek.forEach(day => {
//     const th = document.createElement('th');
//     th.textContent = day;
//     headerRow.appendChild(th);
// });

// let currentDay = 1;
// for (let i = 0; i < 6; i++) {
//     const row = calendarTable.insertRow();
//     for (let j = 0; j < 7; j++) {
//         const cell = row.insertCell();
//         if (i === 0 && j < new Date(currentYear, currentMonth, 1).getDay()) {

//             continue;
//         }
//         if (currentDay > lastDayOfMonth) {
//             break;
//         }
//         cell.textContent = currentDay;
//         currentDay++;
//     }
// }

// document.body.appendChild(calendarTable);
// function range(count) {
//     return Array.from({ length: count }, (_, i) => i + 1);
// }

// function getLastDay(year, month) {
//     return new Date(year, month + 1, 0).getDate();
// }

// function getFirstWeekDay(year, month) {
//     return new Date(year, month, 1).getDay();
// }

// function getLastWeekDay(year, month) {
//     const lastDay = new Date(year, month + 1, 0);
//     return lastDay.getDay();
// }

// const currentDate = new Date();
// const currentYear = currentDate.getFullYear();
// const currentMonth = currentDate.getMonth();

// const lastDayOfMonth = getLastDay(currentYear, currentMonth);

// const firstWeekDay = getFirstWeekDay(currentYear, currentMonth);
// const lastWeekDay = getLastWeekDay(currentYear, currentMonth);

// const daysArray = range(lastDayOfMonth);

// console.log("Массив чисел от 1 до последнего дня месяца:", daysArray);
// console.log("Номер первого дня недели:", firstWeekDay);
// console.log("Номер последнего дня недели:", lastWeekDay);

// const calendarTable = document.createElement('table');
// const headerRow = calendarTable.insertRow();
// const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

// daysOfWeek.forEach(day => {
//     const th = document.createElement('th');
//     th.textContent = day;
//     headerRow.appendChild(th);
// });

// let currentDay = 1;
// for (let i = 0; i < 6; i++) {
//     const row = calendarTable.insertRow();
//     for (let j = 0; j < 7; j++) {
//         const cell = row.insertCell();
//         if (i === 0 && j < firstWeekDay) {
        
//             continue;
//         }
//         if (currentDay > lastDayOfMonth || (i === 0 && j < firstWeekDay)) {

//             break;
//         }
//         cell.textContent = currentDay;
//         currentDay++;
//     }
// }

// document.body.appendChild(calendarTable);
// function range(n) {
//     return Array.from({length: n}, (_, i) => i + 1);
//   }
  
//   function getLastDay(year, month) {
//     return new Date(year, month + 1, 0).getDate();
//   }
  
//   function getFirstWeekDay(year, month) {
//     return new Date(year, month, 1).getDay();
//   }
  
//   function getLastWeekDay(year, month) {
//     const lastDay = getLastDay(year, month);
//     return new Date(year, month, lastDay).getDay();
//   }
  
//   function normalize(arr, left, right) {
//     const leftPadding = Array(left).fill('');
//     const rightPadding = Array(right).fill('');
//     return [...leftPadding, ...arr, ...rightPadding];
//   }
  
//   function createCalendar(year, month) {
//     const arr = range(getLastDay(year, month));
//     const firstWeekDay = getFirstWeekDay(year, month);
//     const lastWeekDay = getLastWeekDay(year, month);
//     const normalizedArray = normalize(arr, firstWeekDay, 6 - lastWeekDay);
  
//     console.log(normalizedArray);
//   }
  
//   createCalendar(2023, 1);
//   function range(n) {
//     return Array.from({length: n}, (_, i) => i + 1);
//   }
  
//   function getLastDay(year, month) {
//     return new Date(year, month + 1, 0).getDate();
//   }
  
//   function getFirstWeekDay(year, month) {
//     return new Date(year, month, 1).getDay();
//   }
  
//   function getLastWeekDay(year, month) {
//     const lastDay = getLastDay(year, month);
//     return new Date(year, month, lastDay).getDay();
//   }
  
//   function normalize(arr, left, right) {
//     const leftPadding = Array(left).fill('');
//     const rightPadding = Array(right).fill('');
//     return [...leftPadding, ...arr, ...rightPadding];
//   }
  
//   function createCalendar(year, month) {
//     const arr = range(getLastDay(year, month));
//     const firstWeekDay = getFirstWeekDay(year, month);
//     const lastWeekDay = getLastWeekDay(year, month);
//     const normalizedArray = normalize(arr, firstWeekDay, 6 - lastWeekDay);
  
//     console.log(normalizedArray);
//   }
  
//   createCalendar(2023, 1);

// function range(end) {
//     return Array.from({ length: end }, (_, i) => i + 1);
// }

// function getFirstWeekDay(year, month) {
// }

// function getLastWeekDay(year, month) {
// }

// function getLastDay(year, month) {
// }

// function normalize(arr, start, end) {
// }

// function chunk(arr, size) {
// }

// function createTable(parent, arr) {
//     let table = document.createElement('table');

//     for (let i = 0; i < arr.length; i++) {
//         let week = arr[i];
//         let row = document.createElement('tr');

//         for (let j = 0; j < week.length; j++) {
//             let day = week[j];
//             let cell = document.createElement('td');
//             cell.textContent = day;

//             if (day === getCurrentDay()) {
//                 cell.classList.add('current-day');
//             }

//             row.appendChild(cell);
//         }

//         table.appendChild(row);
//     }

//     parent.appendChild(table);
// }

// function getCurrentDay() {
//     return new Date().getDate();
// }

// let year = 2023;
// let month = 1;
// let body = document.getElementById('calendar-tbody');

// let arr = range(getLastDay(year, month));
// let firstWeekDay = getFirstWeekDay(year, month);
// let lastWeekDay = getLastWeekDay(year, month);
// let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);

// createTable(body, nums);

// function range(end) {
//     return Array.from({ length: end }, (_, i) => i + 1);
// }

// function getFirstWeekDay(year, month) {
// }

// function getLastWeekDay(year, month) {
// }

// function getLastDay(year, month) {
// }

// function normalize(arr, start, end) {
// }

// function chunk(arr, size) {
// }

// function createTable(parent, arr) {
//     let table = document.createElement('table');

//     for (let i = 0; i < arr.length; i++) {
//         let week = arr[i];
//         let row = document.createElement('tr');

//         for (let j = 0; j < week.length; j++) {
//             let day = week[j];
//             let cell = document.createElement('td');
//             cell.textContent = day;

//             if (day === getCurrentDay()) {
//                 cell.classList.add('current-day');
//             }

//             row.appendChild(cell);
//         }

//         table.appendChild(row);
//     }

//     parent.appendChild(table);
// }

// function getCurrentDay() {
//     return new Date().getDate();
// }

// let currentDate = new Date();
// let year = currentDate.getFullYear();
// let month = currentDate.getMonth() + 1;
// let body = document.getElementById('calendar-tbody');

// let arr = range(getLastDay(year, month));
// let firstWeekDay = getFirstWeekDay(year, month);
// let lastWeekDay = getLastWeekDay(year, month);
// let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);

// createTable(body, nums);
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();

// drawCalendar(document.getElementById('calendar-body'), year, month);
// function fillCalendar() {
//   }
//   function updateMonthYear() {
//     let currentDate = new Date();
//     let options = { month: 'short', year: 'numeric' };
//     let monthYearString = currentDate.toLocaleDateString('ru-RU', options);
//     document.getElementById('monthYear').textContent = monthYearString;
//   }
//   updateMonthYear();
//   fillCalendar();
// let calendar = document.getElementById('calendar');
// let body = calendar.querySelector('.body');
// let info = calendar.querySelector('.info');
// let prev = calendar.querySelector('.prev');
// let next = calendar.querySelector('.next');

// let year = 2020;
// let month = 0;

// function draw(container, year, month) {
//     container.innerHTML = '';

//     info.textContent = getMonthName(month) + ' ' + year;
// }

// function getMonthName(month) {

//     return 'Месяц';
// }

// function getNextYear(currentYear, currentMonth) {
//     return currentMonth === 11 ? currentYear + 1 : currentYear;
// }

// function getNextMonth(currentMonth) {
//     return currentMonth === 11 ? 0 : currentMonth + 1;
// }

// function getPrevYear(currentYear, currentMonth) {
//     return currentMonth === 0 ? currentYear - 1 : currentYear;
// }

// function getPrevMonth(currentMonth) {
//     return currentMonth === 0 ? 11 : currentMonth - 1;
// }

// draw(body, year, month);

// next.addEventListener('click', function() {
//     year = getNextYear(year, month);
//     month = getNextMonth(month);
//     draw(body, year, month);
// });

// prev.addEventListener('click', function() {
//     year = getPrevYear(year, month);
//     month = getPrevMonth(month);
//     draw(body, year, month);
// });