(() => {
    let OpenMenuBtn = document.getElementById("open-menu-btn");
    let menuModal = document.getElementById("menu-modal");
    let closeMenuBtn = document.getElementById("menu-burger-btn");


    OpenMenuBtn.addEventListener("click", toggleMenu);
    closeMenuBtn.addEventListener("click", toggleMenu);
    
    function toggleMenu () {
        menuModal.classList.toggle("popUp-hidden");
    }

})();
