(() => {
    let menuButton = document.getElementById("menu-button");
    let menuList = document.getElementById("menu-list");

    menuButton.addEventListener("click", function () {
        menuList.classList.toggle("nav-main");
    });
})();