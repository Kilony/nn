<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $comment = $_POST['comment'];
    
    // Добавляем комментарий в файл
    file_put_contents('comments.txt', $comment . PHP_EOL, FILE_APPEND);
}

// Перенаправляем обратно на страницу с отзывами
header("Location: index.html");
exit();
?>
