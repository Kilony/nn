// Генерирует случайное целое число в заданном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Массивы рас и классов персонажей
const races = ['Человек', 'Эльф', 'Дварф', 'Гном', 'Полурослик'];
const classes = ['Воин', 'Маг', 'Лучник', 'Вор', 'Жрец'];

// Объект для соответствия расы английскому названию
const arr = {
    'Человек': 'human',
    'Эльф': 'elf',
    'Дварф': 'dwarf',
    'Гном': 'gnome',
    'Полурослик': 'halfling',
};

// Получение ссылок на HTML-элементы
const raceSelect = document.getElementById('race');
const classSelect = document.getElementById('class');
const classImage = document.getElementById('class-image');

// Заполнение выпадающего списка рас
races.forEach(race => {
    const option = document.createElement('option');
    option.text = race;
    raceSelect.add(option);
});

// Заполнение выпадающего списка классов
classes.forEach(className => {
    const option = document.createElement('option');
    option.text = className;
    classSelect.add(option);
});

// Функция для рандомизации характеристик и отображения изображения класса
function randomizeCharacteristics() {
    // Получение выбранных расы и класса
    const selectedRace = raceSelect.options[raceSelect.selectedIndex].text;
    const selectedClass = classSelect.options[classSelect.selectedIndex].text;

    // Рандомизация характеристик
    document.getElementById('race').selectedIndex = getRandomInt(0, races.length - 1);
    document.getElementById('class').selectedIndex = getRandomInt(0, classes.length - 1);
    document.getElementById('strength').textContent = getRandomInt(7, 18);
    document.getElementById('dexterity').textContent = getRandomInt(7, 18);
    document.getElementById('constitution').textContent = getRandomInt(7, 18);
    document.getElementById('intelligence').textContent = getRandomInt(7, 18);
    document.getElementById('wisdom').textContent = getRandomInt(7, 18);
    document.getElementById('charisma').textContent = getRandomInt(7, 18);

    // Загрузка изображения в зависимости от выбранного класса и расы
    const imagePath = `images/${arr[raceSelect.options[raceSelect.selectedIndex].text]}_image.jpg`;
    classImage.src = imagePath;
}

// Вызов функции для инициализации случайных характеристик при загрузке страницы
randomizeCharacteristics();
