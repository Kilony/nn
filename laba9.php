<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Справочник городов</title>
</head>
<body>
    <h1>Справочник городов Италии</h1>
    <form action="" method="post">
        <label for="cityInput">Введите первую букву города: </label>
        <input type="text" id="cityInput" name="cityInput" maxlength="1" required>
        <button type="submit">Найти</button>
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $letter = $_POST['cityInput'];
        $cities = [
			"Рим" => "Столица Италии. Исторический центр Рима включен в список Всемирного наследия ЮНЕСКО.",
			"Милан" => "Один из крупнейших городов Италии и мировой центр моды и дизайна.",
			"Неаполь" => "Третий по величине город Италии. Известен своей архитектурой и культурой.",
			"Турин" => "Город в Северной Италии, известный своей историей и архитектурой.",
			"Палермо" => "Столица Сицилии. Имеет множество исторических памятников и культурных достопримечательностей.",
			"Флоренция" => "Одно из важнейших искусственных и культурных центров мира.",
			"Неаполь" => "Третий по величине город Италии. Известен своей архитектурой и культурой.",
			"Генуя" => "Крупнейший исторический центр на севере Италии.",
			"Болонья" => "Столица Эмилии-Романьи, известная своей архитектурой и кулинарными традициями.",
			"Пиза" => "Известна своей наклонной башней, частью Пизанской кампании.",
			"Венеция" => "Известна своими каналами, гондолами и уникальной архитектурой.",
			"Бари" => "Столица Апулии, расположена на побережье Адриатического моря.",
			"Катания" => "Крупнейший город на восточном побережье Сицилии.",
			"Падуя" => "Город, богатый историей и культурными достопримечательностями.",
			"Сиена" => "Известна своим ежегодным конном гонкам Пальио.",
			"Триест" => "Портовый город на северо-востоке Италии, близко к границе с Словенией.",
			"Равенна" => "Имеет множество древних христианских базилик и мавританскую архитектуру.",
			"Мессина" => "Главный порт на северо-востоке Сицилии.",
			"Феррара" => "Город в Эмилии-Романьи с характерной средневековой архитектурой.",
			"Бергамо" => "Город в регионе Ломбардия с богатым историческим наследием.",
			"Брешиа" => "Один из древнейших городов Северной Италии.",
			"Анкона" => "Портовый город на восточном побережье Италии.",
			"Перуджа" => "Столица региона Умбрия, известна своими историческими памятниками.",
			"Таранто" => "Город на побережье Ионического моря с древней историей.",
			"Каглиари" => "Столица Сардинии, расположена на южном побережье острова.",
			"Модена" => "Город в регионе Эмилия-Романьи, известный своей кулинарной традицией.",
			"Виченца" => "Известен своей архитектурой Виченца Палладио.",
			"Пескара" => "Город на Адриатическом побережье, популярный курорт.",
			"Лечче" => "Региональный центр в регионе Апулия.",
			"Песаро" => "Город на побережье Адриатики, родина Россини.",
			"Кротоне" => "Город на Йоническом побережье Калабрии.",
			"Кунео" => "Город в регионе Пьемонт, известный своей историей и культурой.",
			"Барлетта" => "Город в регионе Апулия, известный своими средневековыми стенами.",
			"Терни" => "Город на восточном побережье Италии.",
			"Салерно" => "Город на Амальфитанском побережье, известный своими пляжами и историей.",
			"Верона" => "Известна своим амфитеатром Арена ди Верона и связана с романом Ромео и Джульетта.",
			"Римини" => "Город на Адриатическом побережье, популярный курорт.",
			"Бриндизи" => "Портовый город в регионе Апулия.",
			"Тревизо" => "Город в регионе Венето, известный своими каналами и архитектурой.",
			"Комо" => "Город на берегу одноименного озера, известный своими виллами.",
			"Бари" => "Столица Апулии, расположена на побережье Адриатического моря.",
			"Болонья" => "Столица Эмилии-Романьи, известная своей архитектурой и кулинарными традициями.",
			"Равенна" => "Имеет множество древних христианских базилик и мавританскую архитектуру.",
			"Палермо" => "Столица Сицилии. Имеет множество исторических памятников и культурных достопримечательностей.",
			"Катания" => "Крупнейший город на восточном побережье Сицилии.",
			"Бари" => "Столица Апулии, расположена на побережье Адриатического моря.",
			"Генуя" => "Крупнейший исторический центр на севере Италии.",
			"Палермо" => "Столица Сицилии. Имеет множество исторических памятников и культурных достопримечательностей.",
			"Флоренция" => "Одно из важнейших искусственных и культурных центров мира.",
		];


        $foundCities = [];

        foreach ($cities as $city => $description) {
            if (mb_stripos($city, $letter, 0, 'UTF-8') === 0) {
                $foundCities[$city] = $description;
            }
        }

        if (empty($foundCities)) {
            echo "Города с такой первой буквой не найдены.";
        } else {
            echo "<h2>Найденные города:</h2>";
            foreach ($foundCities as $city => $description) {
                echo "<p><strong>$city</strong>: $description</p>";

                
            }
        }
    }
    ?>
</body>
</html>
