<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Страница с комментариями</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body class="container">
    <div id="menu-container"></div>
    <script type="text/javascript" charset="utf-8" src="menu.js"></script>

    <section id="content">
        <h2>Оставьте комментарий:</h2>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <p><label for="name">Ваше имя:</label></p>
            <p><input type="text" name="name" id="name" required></p>

            <p><label for="comment">Ваш комментарий:</label></p>
            <p><textarea name="comment" id="comment" rows="4" required></textarea></p>

            <button type="submit">Отправить</button>
        </form>

        <h2>Комментарии:</h2>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = $_POST["name"];
            $comment = $_POST["comment"];

            if (!empty($name) && !empty($comment)) {
                $commentText = "$name: $comment\n";

                // Открываем файл для записи комментария
                $file = fopen("comments.txt", "a");
                fwrite($file, $commentText);
                fclose($file);
            }
        }

        // Читаем содержимое файла с комментариями
        $comments = file_get_contents("comments.txt");

        // Разбиваем комментарии на массив по строкам
        $commentsArray = explode("\n", $comments);

        // Выводим комментарии
        foreach ($commentsArray as $comment) {
            if (!empty($comment)) {
                echo "<p>$comment</p>";
            }
        }
        ?>
    </section>

    <footer>
        <p>&copy; 2023 Pathfinder Adventure Справочник</p>
    </footer>
</body>
</html>
