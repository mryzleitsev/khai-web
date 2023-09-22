
document.addEventListener("DOMContentLoaded", function() {
    var cat = document.getElementById("cat");
    var wrapper = document.querySelector(".wrapper");

    var positionX = (wrapper.offsetWidth - cat.width) / 2;
    var direction = 1; // Начальное направление движения (1 - вправо, -1 - влево)

    function moveCat() {
        if (positionX >= (wrapper.offsetWidth - cat.width)) {
            direction = -1;
            cat.style.transform = "scaleX(" + direction + ")";
        }
        else if (positionX <= 0) {
            direction = 1;
            cat.style.transform = "scaleX(" + direction + ")";
        }

        positionX += 2 * direction; // Измените значение 2 на скорость, которую вы хотите

        cat.style.left = positionX + "px";

        requestAnimationFrame(moveCat);
    }

    moveCat();
});
document.addEventListener("DOMContentLoaded", function() {
    var myBtn = document.getElementById("myBtn");
    var loginInput = document.getElementById("login");
    var password1Input = document.getElementById("password1");
    var password2Input = document.getElementById("password2");
    var errorMessage = document.getElementById("error-message"); // Получаем элемент для вывода ошибок

    myBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Отменяем стандартное действие отправки формы

        // Проверка логина на длину и на наличие нескольких слов
        var loginValue = loginInput.value.trim();
        if (loginValue.length < 4 || loginValue.split(" ").length > 1) {
            errorMessage.innerText = "Ошибка в поле 'Логин'";
            return; // Прерываем выполнение функции, если есть ошибка
        }

        // Проверка паролей на совпадение
        var password1Value = password1Input.value;
        var password2Value = password2Input.value;
        if (password1Value !== password2Value) {
            errorMessage.innerText = "Пароли не совпадают";
            return;
        }

        // Проверка длины паролей
        if (password1Value.length < 4 || password2Value.length < 4) {
            errorMessage.innerText = "Пароль слишком короткий";
            return;
        }

        // Если все проверки пройдены, перенаправляем пользователя
        setTimeout(function () {
            window.location.href = "redirect.html";
        }, 3000);
    });
});
