 //  Создание массива городов
 const cities = ['Москва', 'Нью-Йорк', 'Пекин', 'Лондон'];

 //Создание массива для температур
 const temperatures = [];

 // Ввод температур от пользователя
 for (let i = 0; i < cities.length; i++) {
   let temperatureInput = prompt(`Введите температуру в городе ${cities[i]}`);
   let temperature = parseFloat(temperatureInput);

   if (!isNaN(temperature)) {
     temperatures.push(temperature);
   } else {
     alert('Введите корректное число!');
     i--; 
   }
 }

 //  Создание списка с информацией о погоде
 const weatherList = document.createElement('ul');

 for (let i = 0; i < cities.length; i++) {
   const listItem = document.createElement('li');
   listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`;
   weatherList.appendChild(listItem);
 }

 //Нахождение максимальной и минимальной температуры
 let maxTemperature = -Infinity;
 let minTemperature = Infinity;

 for (let temperature of temperatures) {
   if (temperature > maxTemperature) {
     maxTemperature = temperature;
   }

   if (temperature < minTemperature) {
     minTemperature = temperature;
   }
 }

 //  Вывод информации на страницу
 document.body.appendChild(weatherList);

 const maxMinInfo = document.createElement('p');
 maxMinInfo.textContent = `Максимальная температура: ${maxTemperature}°C, Минимальная температура: ${minTemperature}°C`;
 document.body.appendChild(maxMinInfo);