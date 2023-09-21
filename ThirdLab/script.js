document.addEventListener("DOMContentLoaded", function() {
    var myBtn = document.getElementById("myBtn");
    myBtn.addEventListener("click", function () {
        setTimeout(function () {
            window.location.href = "redirect.html";
        }, 3000);
    });
});
