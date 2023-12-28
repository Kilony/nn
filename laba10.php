<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $product = $_POST["product"];
    $quantity = $_POST["quantity"];
    $name = $_POST["name"];
    $email = $_POST["email"];

    // Дополнительная логика для расчета суммы заказа и других действий

    // Вывод информации о заказе
    echo "<h2>Ваш заказ:</h2>";
    echo "<p>Игра: $product</p>";
    echo "<p>Количество: $quantity</p>";
    echo "<p>Имя: $name</p>";
    echo "<p>Email: $email</p>";
    // Дополнительная информация о заказе


} else {
    // Если форма не отправлена, перенаправим пользователя на главную страницу
    header("Location: index.html");
    exit();
}
?>
