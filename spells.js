var spells = [

    { name: '<strong>Всплеск кислоты</strong>', classes: ['wizard', 'sorcerer'], level: 0, description: 'Создает шарик, наносящий 1d3 урона кислотой.' },
    { name: '<strong>Вспышка</strong>', classes: ['bard', 'wizard', 'druid', 'sorcerer'], level: 0, description: 'Приводит существо в растерянность (-1 к атакам).' },
    { name: '<strong>Ледяной луч</strong>', classes: ['wizard', 'sorcerer'], level: 0, description: 'Испускает луч, наносящий 1d3 урона холодом.' },
    { name: '<strong>Магическая рука</strong>', classes: ['bard', 'wizard', 'sorcerer'], level: 0, description: 'Телекинез (5 фунтов).' },
    { name: '<strong>Мелкие фокусы</strong>', classes: ['bard', 'wizard', 'sorcerer'], level: 0, description: 'Производит разные мелкие фокусы.' },
    { name: '<strong>Мистическая метка</strong>', classes: ['wizard', 'sorcerer'], level: 0, description: 'Ставит на существо или предмет личную метку (видимую или невидимую).' },
    { name: '<strong>Обнаружение магии</strong>', classes: ['bard', 'wizard', 'druid', 'sorcerer', 'cleric'], level: 0, description: 'Позволяет обнаружить заклинания и волшебные вещи в пределах 60 футов.' },
    { name: '<strong>Обнаружение ядов</strong>', classes: ['cleric', 'druid','wizard', 'sorcerer'], level: 0, description: 'Позволяет обнаружить яд в одном существе или предмете.' },
    { name: '<strong>Открывание/закрывание</strong>', classes: ['bard', 'wizard', 'sorcerer'], level: 0, description: 'Открывает и закрывает дверцы и крышки.' },
    { name: '<strong>Пляшущие огоньки</strong>', classes: ['bard', 'wizard', 'sorcerer'], level: 0, description: 'Создает подсветку в виде факелов или иной формы.' },
    { name: '<strong>Починка</strong>', classes: ['cleric', 'druid','wizard', 'sorcerer'], level: 0, description: 'Устраняет мелкие поломки.' },


    { name: '<strong>Связь разумов</strong>', classes: ['cleric', 'druid','wizard', 'sorcerer'], level: 1, description: 'Мгновенно передавайте большой объем информации.' },
    { name: '<strong>Сеять мысль</strong>', classes: ['bard', 'wizard', 'sorcerer'], level: 1, description: 'Внушите субъекту идею.' },
    { name: '<strong>Сигнал тревоги</strong>', classes: ['bard', 'wizard', 'sorcerer'], level: 1, description: 'Сигнализация на 2 часа/УЗ.' },
    { name: '<strong>Сигнал тревоги невидимости</strong>', classes: ['cleric', 'druid','wizard', 'sorcerer'], level: 1, description: 'Сигнализация на 2 часа/УЗ, реагирующая только на невидимых существ.' },
    { name: '<strong>Сильные крылья</strong>', classes: ['druid'], level: 1, description: 'Скорость полета увеличивается на +10 футов, а маневренность - на одну категорию.' },
    { name: '<strong>Скакун</strong>', classes: ['druid'], level: 1, description: 'Позволяет призвать верховую лошадь на 2 часа/УЗ.' },
    { name: '<strong>Сломать</strong>', classes: ['bard', 'wizard', 'sorcerer'], level: 1, description: 'Придает объекту сломанное состояние.' },
    { name: '<strong>Смешение</strong>', classes: ['bard', 'wizard', 'druid', 'sorcerer'], level: 1, description: 'Измените окраску себя и своего снаряжения, чтобы она соответствовала цвету вашего окружения.' },
    { name: '<strong>Сон</strong>', classes: ['bard', 'wizard', 'sorcerer'], level: 1, description: 'Усыпляет 4 КЗ существ.' },
    { name: '<strong>Верный удар</strong>', classes: ['bard', 'wizard', 'sorcerer'], level: 1, description: '+20 к вашей следующей атаке.' },
    { name: '<strong>Ветренный побег</strong>', classes: ['druid'], level: 1, description: 'Вы на короткое время становитесь парообразным и иллюзорным, позволяя атаке безвредно пройти через вас.' },
    { name: '<strong>Ветхая маскировка</strong>', classes: ['druid'], level: 1, description: 'Сделайте объект кажущимся бесполезным.' },
    { name: '<strong>Видеть Мировоззрение</strong>', classes: ['cleric'], level: 1, description: 'Выберите мировоззрение и на ваших глазах существа и предметы с таким мировоззрением испускают призрачное сияние.' },
    { name: '<strong>Воздушный Пузырь</strong>', classes: ['wizard', 'sorcerer'], level: 1, description: 'Создает Небольшой карман воздуха вокруг вашей головы или объекта.' },
    { name: '<strong>Вокальное Изменение</strong>', classes: ['bard'], level: 1, description: 'Маскировка голоса цели.' },
    { name: '<strong>Волновой щит</strong>', classes: ['wizard', 'sorcerer'], level: 1, description: 'Вода притупляет одну входящую атаку или эффект огня.' },
    { name: '<strong>Волшебная стрела</strong>', classes: ['wizard', 'sorcerer'], level: 1, description: '1d4+1 урона; +1 стрела/2 УЗ выше 1 (до 5).' },


    { name: '<strong>Бычья сила</strong>', classes: ['wizard', 'sorcerer'], level: 2, description: '+4 к Сил на 1 мин./У3' },
    { name: '<strong>Звериный транс</strong>', classes: ['wizard', 'sorcerer'], level: 2, description: 'Завораживает 2d6 КЗ животных.' },
    { name: '<strong>Зеркальное отражение</strong>', classes: ['wizard', 'sorcerer'], level: 2, description: 'Создает ваших иллюзорных двойников (1d4 +1/З УЗ, макс. 8).' },
    { name: '<strong>Исцеление серьезных ранений</strong>', classes: ['cleric'], level: 2, description: 'Восстанавливает 2d8 ПЗ + 1/УЗ (макс. +10).' },
    { name: '<strong>Кошачья грация</strong>', classes: ['wizard', 'sorcerer'], level: 2, description: '+4 к Лвк на 1 мин./УЗ.' },
    { name: '<strong>Медвежья стойкость</strong>', classes: ['cleric','wizard', 'sorcerer'], level: 2, description: '+4 Вын на 1 мин./УЗ.' },
    { name: '<strong>Невидимость</strong>', classes: ['wizard', 'sorcerer'], level: 2, description: 'Существо становится невидимо на 1 мин./УЗ или пока не атакует.' },
    { name: '<strong>Опаляющий луч</strong>', classes: ['wizard', 'sorcerer'], level: 2, description: 'Дистанционная атака касанием, наносящая 4d6 урона огнем; + 1 луч/4 УЗ выше 3 (макс. 3).' },
    { name: '<strong>Паутина</strong>', classes: ['cleric', 'wizard', 'sorcerer'], level: 2, description: 'Создает в области радиусом 20 футов липкую паутину, мешающую двигаться.' },
    { name: '<strong>Помощь</strong>', classes: ['cleric'], level: 2, description: '+1 к атакам и испытаниям ужасом, 1d8 временных ПЗ +1/У3 (макс. +10).' },
    { name: '<strong>Приостановка действия яда</strong>', classes: ['cleric'], level: 2, description: 'Приостанавливает действие яда на 1 час/У3.' },
	{ name: '<strong>Ветренный побег</strong>', classes: ['bard'], level: 2, description: 'Вы на короткое время становитесь парообразным и иллюзорным, позволяя атаке безвредно пройти через вас.' },
    { name: '<strong>Ветхая маскировка</strong>', classes: ['bard'], level: 2, description: 'Сделайте объект кажущимся бесполезным.' },
    { name: '<strong>Видеть Мировоззрение</strong>', classes: ['bard'], level: 2, description: 'Выберите мировоззрение и на ваших глазах существа и предметы с таким мировоззрением испускают призрачное сияние.' },
];


// Функция для фильтрации и отображения заклинаний
function filterSpells() {
    // Получаем выбранные значения фильтров
    var selectedClass = document.getElementById('classFilter').value;
    var selectedLevel = document.getElementById('levelFilter').value;
    
    // Получаем контейнер для заклинаний
    var spellContainer = document.getElementById('spellContainer');

    // Очищаем предыдущие заклинания
    spellContainer.innerHTML = "";

    // Фильтрация заклинаний
    var filteredSpells = spells.filter(spell =>
        (selectedClass === 'all' || spell.classes.includes(selectedClass)) &&
        (selectedLevel === 'all' || spell.level.toString() === selectedLevel)
    );

    // Группировка заклинаний по уровню (кругу)
    var groupedSpells = {};
    filteredSpells.forEach(spell => {
        if (!groupedSpells[spell.level]) {
            groupedSpells[spell.level] = [];
        }
        groupedSpells[spell.level].push(spell);
    });

    // Отображение заклинаний по уровню
    for (var level in groupedSpells) {
        var levelDiv = document.createElement('div');
        levelDiv.classList.add('spell-level');
        levelDiv.innerHTML = '<h3>Круг ' + level + '</h3>';

        groupedSpells[level].forEach(spell => {
            var spellDiv = document.createElement('div');
            spellDiv.classList.add('spell');
            spellDiv.innerHTML = '<p>' + spell.name + '</p><p>' + spell.description + '</p>';
            levelDiv.appendChild(spellDiv);
        });

        spellContainer.appendChild(levelDiv);
    }
}

// Инициализация отображения при загрузке страницы
filterSpells();