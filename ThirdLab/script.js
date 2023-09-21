document.addEventListener("DOMContentLoaded", function() {
    var myBtn = document.getElementById("myBtn");
    myBtn.addEventListener("click", function () {
        setTimeout(function () {
            window.location.href = "redirect.html";
        }, 3000);
    });
});

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
