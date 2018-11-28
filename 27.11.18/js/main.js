var icon = document.querySelector(".icons");
var home = document.querySelector(".Home");
var icon3 = document.querySelector(".icons2");
icon.addEventListener("click", function (e) {

    home.style.display = "block";
    this.style.opacity = "0";
});
icon3.addEventListener("click", function (e) {
    icon.style.opacity="1";
    home.style.display = "none";
    this.style.opacity = "1";
});

