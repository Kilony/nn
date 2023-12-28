// Генерация случайной строки для капчи
function generateRandomString(length) {
    // Строка с символами, которые могут быть использованы в капче
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    // Генерация случайной строки заданной длины
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Генерация капчи
function generateCaptcha() {
    // Получение контейнера для капчи из DOM
    const captchaContainer = document.getElementById('captchaContainer');
    // Генерация случайной строки для капчи длиной 5 символов
    const captchaText = generateRandomString(5); // 5 символов в капче
    // Вставка сгенерированной капчи в контейнер
    captchaContainer.textContent = captchaText;
}

// Обработка ввода и проверка капчи
function checkCaptcha() {
    // Получение элементов из DOM
    const captchaInput = document.getElementById('captchaInput');
    const captchaText = document.getElementById('captchaContainer').textContent;

    // Проверка введенного текста капчи
    if (captchaInput.value.toLowerCase() === captchaText.toLowerCase()) {
        // Вывод сообщения об успешной проверке капчи и переход на другую страницу
        alert('Капча пройдена успешно! Переход на сайт...');
        // Переход на страницу index.html
        window.location.href = "index.html";
    } else {
        // Вывод сообщения об ошибке при неверном вводе капчи
        alert('Капча введена неверно. Пожалуйста, попробуйте ещё раз.');
        // Здесь можно добавить логику для обработки неверного ввода
    }

    // Очистка поля ввода
    captchaInput.value = '';

    // Генерация новой капчи
    generateCaptcha();
}

// Генерация капчи при загрузке страницы
window.onload = generateCaptcha;
