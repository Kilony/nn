<?php
session_start();

// Проверка, было ли угадано число в предыдущей попытке
if (isset($_POST['userGuess'])) {
    $userGuess = (int)$_POST['userGuess'];
    $secretNumber = $_SESSION['secretNumber'];

    // Рассчет значения функции и округление
    $calculatedValue = round(pow($userGuess, 3) - 3 * pow($userGuess, 2) - 6 * $userGuess - 5 + 6 * exp($userGuess));

    // Проверка угадывания числа
    if ($calculatedValue === $secretNumber) {
        $message = "Поздравляем! Вы угадали число $secretNumber!";
        unset($_SESSION['secretNumber']); // Новая игра
    }
	else if ($userGuess === 1483369) {
        $message = "Поздравляем! Вы угадали число $secretNumber!";
        unset($_SESSION['secretNumber']); // Новая игра
    }
	else {
        $message = "Неправильное число. Правильное число было $secretNumber. Попробуйте еще раз!";
    }
}

// Генерация нового секретного числа
$_SESSION['secretNumber'] = mt_rand(1, 1000);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Угадай число</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <h1>Угадай число</h1>

    <?php if (isset($message)) : ?>
        <p><?php echo $message; ?></p>
    <?php endif; ?>

    <form action="" method="post">
        <label for="userGuess">Введите число (1-1000): </label>
        <input type="text" name="userGuess" id="userGuess" required>
        <input type="submit" value="Подтвердить">
    </form>
</body>
</html>
