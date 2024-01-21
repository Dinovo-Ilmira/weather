// Создание пустого массива
const numbers = [];

// Заполнение массива целыми числами от -10 до 10
for (let i = -10; i <= 10; i++) {
  numbers.push(i);
}

//  Операции над массивом
// Удаление отрицательных чисел
for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] < 0) {
    numbers.splice(i, 1);
  }
}

// Возведение каждого числа в квадрат
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] ** 2;
}

// Сортировка чисел в порядке убывания
numbers.sort((a, b) => b - a);

//Вывод массива в консоль
console.log(numbers);
