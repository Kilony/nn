// menu.js

document.addEventListener('DOMContentLoaded', function () {
    var head = document.head;

    // Добавление метатегов в <head>
    var metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    head.appendChild(metaCharset);

    var metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    head.appendChild(metaViewport);

    // Добавление иконки
    var linkFavicon = document.createElement('link');
    linkFavicon.setAttribute('rel', 'shortcut icon');
    linkFavicon.setAttribute('href', 'internet.jpg');
    linkFavicon.setAttribute('type', 'image/png');
    head.appendChild(linkFavicon);

    // Добавление заголовка страницы
    var title = document.createElement('title');
    title.textContent = 'Pathfinder Adventure Справочник';
    head.appendChild(title);

    // Добавление стилей
    var linkStylesheet = document.createElement('link');
    linkStylesheet.setAttribute('rel', 'stylesheet');
    linkStylesheet.setAttribute('href', 'styles.css');
    head.appendChild(linkStylesheet);

    // Добавление меню
    var menuContainer = document.getElementById('menu-container');

    var menuHTML = `
        <header>
            <img src="logo.png" alt="Логотип Pathfinder Adventure Справочник" style="max-width: 40%; height: auto; display: block; margin: 0 auto;">
            <h1 align='center'>Справочник</h1>
            <p align='center'>Добро пожаловать в мир приключений!</p>
        </header>
        
        <section align = center><nav id="main-menu">
            <a href="index.html">Главная</a>
            <div class="dropdown">
                <button class="dropbtn">Правила</button>
                <div class="dropdown-content">
                    <a href="rules1.html">Основные понятия</a>
                    <a href="rules2.html">Создание персонажа</a>
                    <a href="rules4.html">Система боя</a>
                    <a href="rules5.html">Действия в бою</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Создание персонажа</button>
                <div class="dropdown-content">
					<a href="character-sheet.html">Генератор персонажа</a>
                    <a href="race1.html">Народы</a>
                    <a href="classes.html">Классы</a>
                    <a href="rules3.html">Характеристики</a>
                    <a href="skills.html">Навыки</a>
					<a href="черты.html">Черты</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Магия</button>
                <div class="dropdown-content">
                    <a href="Школа магии.html">Школы магии волшебника</a>
                    <a href="Сферы жреца.html">Сферы жреца</a>
                    <a href="Заклинания.html">Заклинания</a>
                    
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Снаряжение</button>
                <div class="dropdown-content">
                    <a href="Оружие.html">Оружие</a>
                    <a href="Доспехи.html">Доспехи и щиты</a>
                </div>
            </div>
			<a href="otziv.php">Отзыв</a>
			<a href="onas.html">О нас</a>
        </nav></section>
    `;
	// Установка HTML-содержимого контейнера меню
    menuContainer.innerHTML = menuHTML;

    // Добавление обработчиков событий для ссылок в меню
    var menuLinks = document.querySelectorAll('#main-menu a');
    menuLinks.forEach(function (link) {
		// Предотвращение стандартного поведения ссылки и переход на выбранную страницу
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetPage = link.getAttribute('href');
            // Переход на выбранную страницу
            window.location.href = targetPage;
        });
    });
});
